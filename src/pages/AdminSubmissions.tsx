import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AdminGuard from "@/components/AdminGuard";

type Submission = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  form_source: string;
  created_at: string;
};

const Inner = () => {
  const [items, setItems] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      setItems((data as any) || []);
      setLoading(false);
    })();
  }, []);

  return (
    <main className="pt-24 pb-24">
      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Form Submissions</h1>
          <p className="mt-2 text-sm text-muted-foreground">All submissions across every form on the website.</p>

          {loading ? (
            <p className="mt-8 text-muted-foreground">Loading...</p>
          ) : items.length === 0 ? (
            <p className="mt-8 text-muted-foreground">No submissions yet.</p>
          ) : (
            <div className="mt-8 space-y-3">
              {items.map((s) => (
                <details key={s.id} className="rounded-xl border border-border bg-card p-5">
                  <summary className="flex cursor-pointer flex-wrap items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="rounded-full bg-forest px-2 py-0.5 text-[10px] font-semibold uppercase text-cream">{s.form_source}</span>
                      <span className="ml-3 font-semibold text-foreground">{s.full_name}</span>
                      <span className="ml-2 text-sm text-muted-foreground">{s.email}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleString()}</span>
                  </summary>
                  <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                    {s.phone && <div><strong className="text-foreground">Phone: </strong>{s.phone}</div>}
                    {s.subject && <div><strong className="text-foreground">Subject: </strong>{s.subject}</div>}
                    <div className="whitespace-pre-wrap"><strong className="text-foreground">Message: </strong>{s.message}</div>
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default function AdminSubmissions() {
  return <AdminGuard><Inner /></AdminGuard>;
}
