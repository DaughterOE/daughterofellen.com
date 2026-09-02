import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-primary" />
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      className="absolute inset-0 h-full w-full object-cover"
      style={{ willChange: "transform" }}
      ref={(el) => {
        if (el) el.play().catch(() => {});
      }}
      src="/hero-video.mov"
    />
    <div className="noise-overlay absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <ScrollReveal>
        <h1 className="font-heading text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl">
          Celebrating Every Child's Brilliance.
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <p className="mt-6 font-body text-lg text-primary-foreground/90 md:text-xl">
          Daughter of Ellen is Africa's emerging movement for neurodivergence inclusion and disability rights. We advocate. We educate. We build communities that leave no child behind.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <p className="mt-3 font-heading text-base italic text-primary-foreground/70 md:text-lg">
          Not a limitation. A different kind of brilliance.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={600}>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/get-involved"
            className="rounded-full bg-secondary px-8 py-3.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
          >
            Join the Movement
          </Link>
          <Link
            to="/access-fund"
            className="rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Apply for DOE Access Fund
          </Link>
        </div>
      </ScrollReveal>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-scroll-indicator flex flex-col items-center gap-1 text-primary-foreground/50">
          <span className="text-xs font-body tracking-widest uppercase">Discover our story</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;