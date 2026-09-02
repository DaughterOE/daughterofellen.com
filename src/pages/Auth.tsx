import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) return toast.error(error.message);
      toast.success("Signed in");
      navigate("/admin/media");
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin/media` },
      });
      setLoading(false);
      if (error) return toast.error(error.message);
      toast.success("Account created. You may now sign in.");
      setMode("signin");
    }
  };

  return (
    <main className="pt-24 pb-24">
      <section className="section-padding">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h1 className="font-heading text-3xl font-bold text-foreground">Admin Sign In</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to manage media features and view form submissions.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
            </Button>
          </form>
          <button
            type="button"
            className="mt-4 text-xs text-muted-foreground underline"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          >
            {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Auth;
