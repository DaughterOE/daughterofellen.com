import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
    <div className="relative mx-auto max-w-4xl">
      <ScrollReveal>
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          About Daughter of Ellen
        </h2>
        <div className="gold-divider mx-auto mb-16 max-w-xs" />
      </ScrollReveal>
      <div className="grid gap-12 md:grid-cols-2">
        <ScrollReveal delay={150}>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              Daughter of Ellen is an Africa-focused initiative dedicated to building a continent-wide ecosystem
              of inclusion for neurodivergent individuals and people living with disabilities. Headquartered in
              Abuja, Nigeria, the initiative represents a bold and structured response to a critical gap in
              culturally informed support, policy, and community infrastructure.
            </p>
            <p>
              Our mission is to move inclusion from principle to practice — and from practice to enforceable,
              sustained change — through awareness, structured education, community building, and disciplined
              policy engagement.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              We envision a generation of neurodivergent children and adults across Nigeria and Africa who grow
              with dignity, confidence, and the full opportunity to reach their potential — supported by systems,
              policies, and communities that have been deliberately and accountably built to include them.
            </p>
            <p>
              Daughter of Ellen is not a moment of awareness. It is a movement — institutional, strategic, and
              built to endure.
            </p>
            <Link
              to="/about"
              className="underline-sweep inline-block text-sm font-semibold text-secondary transition-colors hover:text-foreground"
            >
              Read Our Full Story →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
