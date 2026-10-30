import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/ScrollReveal";
import { Callout, ContentBand, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";

const JoinTende = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    whatBringsYou: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = form.fullName.trim();
    const trimmedEmail = form.email.trim();

    if (!trimmedName || !trimmedEmail) {
      toast({ title: "Please fill in your name and email.", variant: "destructive" });
      return;
    }

    if (trimmedName.length > 200 || trimmedEmail.length > 255) {
      toast({ title: "Input too long.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast({ title: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("tende_community_signups").insert({
        full_name: trimmedName,
        email: trimmedEmail,
        phone: form.phone.trim() || null,
        location: form.location.trim() || null,
        what_brings_you: form.whatBringsYou.trim() || null,
      });

      if (error) throw error;

      // Also persist to universal contact_submissions and trigger emails
      const { submitForm } = await import("@/lib/submitForm");
      await submitForm({
        formSource: "tende-community",
        fullName: trimmedName,
        email: trimmedEmail,
        phone: form.phone.trim() || null,
        message: form.whatBringsYou.trim() || null,
        extra: { location: form.location.trim() || undefined },
      });

      setSubmitted(true);
      toast({ title: "Welcome to Tende.", description: "Check your inbox for a confirmation." });
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-24">
      <PageHeading title="Join the Tende Community" description="A space for every person who is carrying more than they should carry alone." parent={{ label: "Tende by DOE", path: "/tende" }} />

      <ContentBand>
        <ImageTextRow slot="join-tende.body1" title="Come as you are.">
          <Callout>You are welcome here.</Callout>
        </ImageTextRow>
      </ContentBand>

      <ContentBand tone="tint">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <ScrollReveal>
              <div className="rounded-md border border-secondary/30 bg-background p-10 text-center md:p-14">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Thank you for joining Tende.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  We have received your details and will be in touch. You are already part of what we are building.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="rounded-md border border-border bg-background p-8 md:p-12">
                <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                  Tell us about yourself
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  All fields marked with * are required.
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Your full name"
                      maxLength={200}
                      required
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      maxLength={255}
                      required
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Phone / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+1 or +234..."
                      maxLength={30}
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-sm font-semibold text-foreground">
                      Where are you based?
                    </Label>
                    <Input
                      id="location"
                      value={form.location}
                      onChange={(e) => update("location", e.target.value)}
                      placeholder="City, Country"
                      maxLength={150}
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="whatBringsYou" className="text-sm font-semibold text-foreground">
                      What brings you to Tende?
                    </Label>
                    <Textarea
                      id="whatBringsYou"
                      value={form.whatBringsYou}
                      onChange={(e) => update("whatBringsYou", e.target.value)}
                      placeholder="Share as much or as little as you like."
                      maxLength={1000}
                      rows={4}
                      className="mt-1.5 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 w-full rounded-md border-2 border-secondary bg-secondary px-8 py-3 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Join the Tende Community"}
                </button>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Your information is kept private and will only be used to connect you with the Tende community.
                </p>
              </form>
            </ScrollReveal>
          )}
        </div>
      </ContentBand>
    </main>
  );
};

export default JoinTende;
