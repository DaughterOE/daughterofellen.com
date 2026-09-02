import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "@/hooks/use-toast";
import { submitForm } from "@/lib/submitForm";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitForm({
      formSource: "newsletter",
      fullName: "Newsletter Subscriber",
      email,
      message: "Subscribed to newsletter",
    });
    setLoading(false);
    if (!res.ok) {
      toast({ title: "Subscription failed", description: "Please try again.", variant: "destructive" });
      return;
    }
    toast({ title: "Subscribed", description: "Thank you for joining our mailing list." });
    setEmail("");
  };

  return (
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb right-0 bottom-0 h-56 w-56 bg-forest-light" />
      <div className="relative mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Stay part of the conversation.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            Join parents, educators, professionals, and advocates across Nigeria receiving updates, resources, and advocacy news from Daughter of Ellen. Be the first to hear about conference announcements, policy developments, and community events.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none sm:max-w-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 rounded-full bg-secondary px-8 py-3 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? "..." : "Subscribe"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsletterSection;