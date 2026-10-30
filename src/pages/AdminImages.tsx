import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import AdminGuard from "@/components/AdminGuard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { siteImages, type SiteImageSlot } from "@/lib/siteImages";
import { siteImageOverridesKey, useSiteImageOverrides } from "@/hooks/useSiteImages";

const MAX_BYTES = 5 * 1024 * 1024;
const slots = Object.keys(siteImages) as SiteImageSlot[];

const SlotRow = ({ slot }: { slot: SiteImageSlot }) => {
  const queryClient = useQueryClient();
  const { data } = useSiteImageOverrides();
  const override = data?.find(item => item.slot === slot);
  const fallback = siteImages[slot];
  const [alt, setAlt] = useState(override?.alt_text ?? "");
  const [busy, setBusy] = useState(false);
  useEffect(() => { setAlt(override?.alt_text ?? ""); }, [override?.alt_text]);
  const refresh = () => queryClient.invalidateQueries({ queryKey: siteImageOverridesKey });

  const upload = async (file: File) => {
    if (!file.type.startsWith("image/")) return toast.error("Please choose an image file.");
    if (file.size > MAX_BYTES) return toast.error("Please choose an image under 5 MB.");
    setBusy(true);
    const path = `site-images/${slot}-${Date.now()}-${file.name.replace(/[^a-z0-9.\-_]/gi, "_")}`;
    const { error } = await supabase.storage.from("media-features").upload(path, file);
    if (error) { setBusy(false); return toast.error(error.message); }
    const { data: pub } = supabase.storage.from("media-features").getPublicUrl(path);
    const { error: saveError } = await supabase.from("site_images").upsert({ slot, image_url: pub.publicUrl, alt_text: alt.trim() || null, updated_at: new Date().toISOString() });
    setBusy(false);
    if (saveError) return toast.error(saveError.message);
    toast.success("Image replaced");
    refresh();
  };

  const saveAlt = async () => {
    if (!override) return;
    const { error } = await supabase.from("site_images").update({ alt_text: alt.trim() || null, updated_at: new Date().toISOString() }).eq("slot", slot);
    if (error) return toast.error(error.message);
    toast.success("Description saved");
    refresh();
  };

  const reset = async () => {
    const { error } = await supabase.from("site_images").delete().eq("slot", slot);
    if (error) return toast.error(error.message);
    setAlt("");
    toast.success("Original image restored");
    refresh();
  };

  return <li className="grid gap-4 rounded-md border border-border bg-card p-4 sm:grid-cols-[160px_1fr]">
    <img src={override?.image_url ?? fallback.src} alt="" className="aspect-[4/3] w-full rounded-md object-cover" />
    <div className="min-w-0 space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <p className="font-semibold">{fallback.label}</p>
        <span className={`rounded-md px-2 py-0.5 text-xs ${override ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>{override ? "Replaced" : "Original"}</span>
      </div>
      <div>
        <Label htmlFor={`alt-${slot}`}>Image description for screen readers</Label>
        <Input id={`alt-${slot}`} value={alt} maxLength={200} placeholder={fallback.alt} onChange={e => setAlt(e.target.value)} onBlur={saveAlt} />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button asChild variant="outline" size="sm" disabled={busy}>
          <label className="cursor-pointer">{busy ? "Uploading..." : "Replace image"}
            <input type="file" accept="image/*" className="sr-only" disabled={busy} onChange={e => { const file = e.target.files?.[0]; if (file) upload(file); e.target.value = ""; }} />
          </label>
        </Button>
        {override && <Button variant="ghost" size="sm" onClick={reset}>Restore original</Button>}
      </div>
    </div>
  </li>;
};

const Inner = () => <main className="pt-24 pb-24">
  <section className="section-padding">
    <div className="mx-auto max-w-[1200px]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold md:text-4xl">Page Images</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Replace the banner and body photos on any page. Upload a real DOE photo (under 5 MB) and add a short description of what it shows. Restore original puts the default photo back.</p>
        </div>
        <div className="flex gap-3 text-sm"><Link to="/admin/media" className="underline underline-offset-4">Media Features</Link><Link to="/admin/submissions" className="underline underline-offset-4">Form Submissions</Link></div>
      </div>
      <ul className="mt-8 grid gap-4 lg:grid-cols-2">{slots.map(slot => <SlotRow key={slot} slot={slot} />)}</ul>
    </div>
  </section>
</main>;

const AdminImages = () => <AdminGuard><Inner /></AdminGuard>;
export default AdminImages;
