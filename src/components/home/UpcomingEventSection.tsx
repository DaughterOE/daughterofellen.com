import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import flyer from "@/assets/inclusive-classrooms-flyer.jpeg";

const STARTS_AT = "2026-10-17T16:00:00+01:00";
const REGISTER_URL = "https://luma.com/0q687e5v";

const remainingMs = () => new Date(STARTS_AT).getTime() - Date.now();

const units = (ms: number) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  return [
    { label: "Days", value: Math.floor(total / 86400) },
    { label: "Hours", value: Math.floor(total / 3600) % 24 },
    { label: "Minutes", value: Math.floor(total / 60) % 60 },
    { label: "Seconds", value: total % 60 },
  ];
};

const UpcomingEventSection = () => {
  const [ms, setMs] = useState(remainingMs);

  useEffect(() => {
    const id = window.setInterval(() => setMs(remainingMs()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const live = ms > 0;
  const parts = units(ms);

  return (
    <section className="section-padding relative overflow-hidden bg-authority text-authority-foreground">
      <div className="noise-overlay absolute inset-0" />
      <div className="deco-orb left-1/4 top-0 h-96 w-96 bg-secondary" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <ScrollReveal>
          <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">A FREE Teachers’ Training</p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-5xl">Creating Inclusive Classrooms</h2>
          <div className="gold-divider mt-8 mb-6 max-w-xs" />
          <p className="max-w-xl text-base leading-relaxed text-authority-foreground/80 md:text-lg">
            Equipping educators and caregivers with practical ways to support different learners in the classroom.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-authority-foreground/80">
            <span className="">
              17 October, 2026
            </span>
            <span className="">
              4:00 PM WAT
            </span>
            <span className="">
              Live on Zoom
            </span>
          </div>

          {live ? (
            <div className="mt-10">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-secondary">Countdown to the session</p>
              <div className="mt-4 flex flex-wrap gap-3" aria-hidden="true">
                {parts.map(unit => (
                  <div key={unit.label} className="min-w-[5rem] rounded-lg border border-authority-foreground/20 bg-authority-foreground/5 px-5 py-4 text-center">
                    <span className="block font-heading text-3xl font-bold tabular-nums md:text-4xl">{unit.value}</span>
                    <span className="mt-1 block font-body text-[11px] uppercase tracking-[0.18em] text-authority-foreground/70">{unit.label}</span>
                  </div>
                ))}
              </div>
              <p className="sr-only">The session begins in {parts[0].value} days and {parts[1].value} hours.</p>
            </div>
          ) : (
            <p className="mt-10 text-authority-foreground/80">This session has taken place. Explore upcoming events.</p>
          )}

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300"
            >
              Register Now
            </a>
            <Link
              to="/events#upcoming"
              className="inline-block rounded-md border-2 border-authority-foreground/40 px-8 py-3.5 font-body text-sm font-semibold text-authority-foreground transition-all duration-300 hover:border-authority-foreground hover:bg-authority-foreground/10"
            >
              See All Events
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <img
            src={flyer}
            alt="Event flyer for Creating Inclusive Classrooms, a free teachers’ training on 17 October, 2026 at 4:00 PM WAT, live on Zoom"
            loading="lazy"
            className="mx-auto w-full max-w-md rounded-xl border border-authority-foreground/15 object-contain"
          />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default UpcomingEventSection;
