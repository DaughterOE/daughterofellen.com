import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<"loading" | "valid" | "already" | "invalid" | "done" | "error">("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Unsubscribe | Daughter of Ellen";
    if (!token) { setState("invalid"); return; }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_KEY } }
        );
        const data = await res.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        setState("error");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setSubmitting(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_KEY },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.success || data.reason === "already_unsubscribed") setState("done");
      else setState("error");
    } catch {
      setState("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-32 pb-24">
      <section className="section-padding">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="font-heading text-2xl font-bold text-foreground">Unsubscribe</h1>
          <div className="mt-6 text-sm text-muted-foreground">
            {state === "loading" && "Validating your link..."}
            {state === "invalid" && "This unsubscribe link is invalid or has expired."}
            {state === "already" && "You have already been unsubscribed."}
            {state === "done" && "You have been unsubscribed. We are sorry to see you go."}
            {state === "error" && "Something went wrong. Please try again later."}
            {state === "valid" && (
              <>
                <p>Click below to confirm you want to stop receiving emails from Daughter of Ellen.</p>
                <Button onClick={confirm} disabled={submitting} className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  {submitting ? "Processing..." : "Confirm Unsubscribe"}
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Unsubscribe;
