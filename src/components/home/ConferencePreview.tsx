import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Clock } from "lucide-react";

const ConferencePreview = () => (
  <section className="section-padding relative overflow-hidden bg-primary">
    <div className="noise-overlay absolute inset-0" />
    <div className="deco-orb left-1/4 top-0 h-96 w-96 bg-secondary" />
    <div className="relative mx-auto max-w-3xl text-center">
      <ScrollReveal>
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
          Inaugural Webinar
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
          Living It: Inclusion, Accessibility, Stigma and the Search for Support
        </h2>
        <div className="gold-divider mx-auto mt-8 mb-6 max-w-xs" />
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-primary-foreground/80">
          <span className="inline-flex items-center gap-2">
            <Calendar size={18} className="text-secondary" />
            June 20th, 2026
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock size={18} className="text-secondary" />
            3:00 PM WAT
          </span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="mt-10">
          <a
            href="https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
          >
            Register for the Webinar
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ConferencePreview;
