import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminGuard from "@/components/AdminGuard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, X, Upload } from "lucide-react";

type MediaFeature = {
  id: string;
  outlet_name: string;
  feature_title: string;
  description: string | null;
  media_type: "radio" | "tv" | "print" | "online";
  thumbnail_url: string | null;
  audio_url: string | null;
  video_url: string | null;
  article_url: string | null;
  feature_date: string | null;
  is_visible: boolean;
  display_order: number;
};

const blank: Partial<MediaFeature> = {
  outlet_name: "",
  feature_title: "",
  description: "",
  media_type: "radio",
  thumbnail_url: "",
  audio_url: "",
  video_url: "",
  article_url: "",
  feature_date: "",
  is_visible: true,
  display_order: 0,
};

const Inner = () => {
  const [items, setItems] = useState<MediaFeature[]>([]);
  const [editing, setEditing] = useState<Partial<MediaFeature> | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);

  const load = async () => {
    const { data, error } = await supabase
      .from("media_features")
      .select("*")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setItems((data as any) || []);
  };

  useEffect(() => { load(); }, []);

  const handleUpload = async (field: "thumbnail_url" | "audio_url" | "article_url", file: File) => {
    setUploading(field);
    const path = `${Date.now()}-${file.name.replace(/[^a-z0-9.\-_]/gi, "_")}`;
    const { error } = await supabase.storage.from("media-features").upload(path, file);
    if (error) {
      toast.error(error.message);
      setUploading(null);
      return;
    }
    const { data } = supabase.storage.from("media-features").getPublicUrl(path);
    setEditing((prev) => ({ ...prev, [field]: data.publicUrl }));
    setUploading(null);
    toast.success("File uploaded");
  };

  const save = async () => {
    if (!editing) return;
    if (!editing.outlet_name || !editing.feature_title || !editing.media_type) {
      toast.error("Outlet, title, and media type are required");
      return;
    }
    setSaving(true);
    const payload = {
      outlet_name: editing.outlet_name!,
      feature_title: editing.feature_title!,
      description: editing.description || null,
      media_type: editing.media_type as any,
      thumbnail_url: editing.thumbnail_url || null,
      audio_url: editing.audio_url || null,
      video_url: editing.video_url || null,
      article_url: editing.article_url || null,
      feature_date: editing.feature_date || null,
      is_visible: editing.is_visible ?? true,
      display_order: editing.display_order ?? 0,
    };
    const { error } = editing.id
      ? await supabase.from("media_features").update(payload).eq("id", editing.id)
      : await supabase.from("media_features").insert(payload);
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success("Saved");
    setEditing(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this media feature?")) return;
    const { error } = await supabase.from("media_features").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    load();
  };

  return (
    <main className="pt-24 pb-24">
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Manage Media Features</h1>
              <p className="mt-2 text-sm text-muted-foreground">Add, edit, or remove items shown on the In the Media page.</p>
            </div>
            <Button onClick={() => setEditing({ ...blank })} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Plus className="h-4 w-4" /> New Feature
            </Button>
          </div>

          <div className="mt-8 grid gap-4">
            {items.length === 0 && (
              <p className="text-muted-foreground">No media features yet. Add your first one.</p>
            )}
            {items.map((it) => (
              <div key={it.id} className="flex flex-wrap items-start gap-4 rounded-xl border border-border bg-card p-5">
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                  {it.thumbnail_url && <img src={it.thumbnail_url} alt="" className="h-full w-full object-cover" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-forest px-2 py-0.5 text-[10px] font-semibold uppercase text-cream">{it.media_type}</span>
                    {!it.is_visible && <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">Hidden</span>}
                    <span className="text-xs text-muted-foreground">{it.feature_date}</span>
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-secondary">{it.outlet_name}</p>
                  <h3 className="font-heading text-lg font-bold text-foreground">{it.feature_title}</h3>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setEditing(it)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="outline" size="sm" onClick={() => remove(it.id)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
          </div>

          {editing && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
              <div className="my-8 w-full max-w-2xl rounded-2xl bg-background p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-xl font-bold">{editing.id ? "Edit" : "Add"} Media Feature</h2>
                  <button onClick={() => setEditing(null)}><X className="h-5 w-5" /></button>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Outlet name *</Label>
                      <Input value={editing.outlet_name || ""} onChange={(e) => setEditing({ ...editing, outlet_name: e.target.value })} />
                    </div>
                    <div>
                      <Label>Media type *</Label>
                      <select
                        className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                        value={editing.media_type}
                        onChange={(e) => setEditing({ ...editing, media_type: e.target.value as any })}
                      >
                        <option value="radio">Radio</option>
                        <option value="tv">TV</option>
                        <option value="print">Print</option>
                        <option value="online">Online</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label>Feature title *</Label>
                    <Input value={editing.feature_title || ""} onChange={(e) => setEditing({ ...editing, feature_title: e.target.value })} />
                  </div>

                  <div>
                    <Label>Description</Label>
                    <Textarea rows={3} value={editing.description || ""} onChange={(e) => setEditing({ ...editing, description: e.target.value })} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>Date</Label>
                      <Input type="date" value={editing.feature_date || ""} onChange={(e) => setEditing({ ...editing, feature_date: e.target.value })} />
                    </div>
                    <div>
                      <Label>Display order</Label>
                      <Input type="number" value={editing.display_order ?? 0} onChange={(e) => setEditing({ ...editing, display_order: Number(e.target.value) })} />
                    </div>
                  </div>

                  <FieldWithUpload label="Thumbnail / image URL" field="thumbnail_url" editing={editing} setEditing={setEditing} accept="image/*" onUpload={handleUpload} uploading={uploading} />

                  {editing.media_type === "radio" && (
                    <FieldWithUpload label="Audio file URL" field="audio_url" editing={editing} setEditing={setEditing} accept="audio/*" onUpload={handleUpload} uploading={uploading} />
                  )}
                  {editing.media_type === "tv" && (
                    <div>
                      <Label>Video URL (YouTube, Vimeo, etc.)</Label>
                      <Input value={editing.video_url || ""} onChange={(e) => setEditing({ ...editing, video_url: e.target.value })} placeholder="https://youtube.com/watch?v=..." />
                    </div>
                  )}
                  {(editing.media_type === "print" || editing.media_type === "online") && (
                    <FieldWithUpload label="Article URL or PDF" field="article_url" editing={editing} setEditing={setEditing} accept=".pdf,image/*" onUpload={handleUpload} uploading={uploading} />
                  )}

                  <div className="flex items-center gap-2">
                    <Checkbox id="visible" checked={editing.is_visible ?? true} onCheckedChange={(c) => setEditing({ ...editing, is_visible: c === true })} />
                    <Label htmlFor="visible">Visible on public Media page</Label>
                  </div>

                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => setEditing(null)}>Cancel</Button>
                    <Button onClick={save} disabled={saving} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      {saving ? "Saving..." : "Save"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const FieldWithUpload = ({
  label, field, editing, setEditing, accept, onUpload, uploading,
}: {
  label: string;
  field: "thumbnail_url" | "audio_url" | "article_url";
  editing: Partial<MediaFeature>;
  setEditing: (v: Partial<MediaFeature>) => void;
  accept: string;
  onUpload: (field: any, file: File) => void;
  uploading: string | null;
}) => (
  <div>
    <Label>{label}</Label>
    <div className="mt-1 flex gap-2">
      <Input value={(editing as any)[field] || ""} onChange={(e) => setEditing({ ...editing, [field]: e.target.value })} placeholder="Paste URL or upload" />
      <label className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-input bg-background px-3 text-sm hover:bg-muted">
        <Upload className="h-4 w-4" />
        {uploading === field ? "..." : "Upload"}
        <input type="file" accept={accept} className="hidden" onChange={(e) => e.target.files?.[0] && onUpload(field, e.target.files[0])} />
      </label>
    </div>
  </div>
);

export default function AdminMedia() {
  return <AdminGuard><Inner /></AdminGuard>;
}
