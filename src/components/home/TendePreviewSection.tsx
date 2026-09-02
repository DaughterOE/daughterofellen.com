import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const TendePreviewSection = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    <div className="deco-orb left-1/3 top-0 h-80 w-80 bg-forest-light" />
    <div className="relative mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Our work goes beyond borders.
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Alongside our advocacy work in Africa and the diaspora, we have created Tende by DOE, a mental health and wellness space open to every person navigating burnout, anxiety, depression, or emotional exhaustion, wherever they are in the world. No diagnosis required. No background required.
        </p>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2">
        <ScrollReveal delay={100}>
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:border-secondary hover:shadow-lg hover:-translate-y-1 md:p-10">
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
              Advocacy: Africa and Diaspora
            </h3>
            <p className="mb-8 flex-1 text-sm leading-relaxed text-muted-foreground">
              We champion neurodivergence inclusion and disability rights across Nigeria, Africa, and the African diaspora worldwide. Through policy advocacy, community building, caregiver education, and national dialogue, we are building the structures that should already exist.
            </p>
            <Link
              to="/pillars"
              className="inline-block self-start rounded-full border-2 border-secondary bg-secondary px-6 py-2.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:shadow-lg"
            >
              Learn About Our Advocacy Work
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:border-secondary hover:shadow-lg hover:-translate-y-1 md:p-10">
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">
              Tende by DOE
            </h3>
            <p className="mb-8 flex-1 text-sm leading-relaxed text-muted-foreground">
              A universal mental health and wellness space for anyone who is carrying more than they should carry alone. Come as you are. You are welcome here.
            </p>
            <Link
              to="/tende"
              className="inline-block self-start rounded-full border-2 border-secondary bg-secondary px-6 py-2.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:shadow-lg"
            >
              Discover Tende by DOE
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default TendePreviewSection;
