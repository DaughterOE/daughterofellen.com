import { Button } from "@/components/ui/button";
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
            Stay Connected.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            Get practical inclusion resources, DOE updates and upcoming training.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 input-gold-focus focus:outline-none sm:max-w-sm"
            />
            <Button
              type="submit"
              disabled={loading}
              className="shrink-0 rounded-md bg-secondary px-8 py-3 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "..." : "Subscribe"}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsletterSection;