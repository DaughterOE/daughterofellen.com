import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Clock, MapPin } from "lucide-react";

const UpcomingEventSection = () => (
  <section className="section-padding relative overflow-hidden bg-primary">
    <div className="noise-overlay absolute inset-0" />
    <div className="deco-orb left-1/4 top-0 h-96 w-96 bg-secondary" />
    <div className="relative mx-auto max-w-3xl text-center">
      <ScrollReveal>
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
          Upcoming Workshop
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
          AI for Accessibility: Building Inclusive Solutions for the Future
        </h2>
        <div className="gold-divider mx-auto mt-8 mb-6 max-w-xs" />
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-primary-foreground/80">
          <span className="inline-flex items-center gap-2">
            <Calendar size={18} className="text-secondary" />
            Friday, August 7
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock size={18} className="text-secondary" />
            6:00 PM - 8:00 PM GMT+1
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={18} className="text-secondary" />
            Zoom
          </span>
        </div>
        <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
          A hands-on intermediate workshop for students and professionals exploring how AI can improve accessibility, productivity, and innovation.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://luma.com/33g5cl44"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
          >
            Register
          </a>
          <Link
            to="/events"
            className="inline-block rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            See All Events
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default UpcomingEventSection;
