import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import evonAnthony from "@/assets/evon-anthony.jpeg";

const FounderPreview = () => (
  <section className="section-padding relative overflow-hidden bg-card">
    <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
    <div className="relative mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Our Founder
        </h2>
        <div className="gold-divider mx-auto mb-16 max-w-xs" />
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2 overflow-hidden rounded-xl">
            <img
              src={evonAnthony}
              alt="Eyvonne Eleko"
              className="h-full w-full object-cover object-top aspect-[3/4]"
            />
          </div>
          <div className="md:col-span-3 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Founder and Chair
            </span>
            <h3 className="mt-2 font-heading text-3xl font-bold text-foreground">Eyvonne Eleko</h3>
            <p className="mt-1 font-heading text-base italic text-muted-foreground">
              Strategist &middot; Advocate &middot; Architect of Inclusion
            </p>
            <div className="gold-divider mt-6 mb-6" />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Eyvonne Eleko is the Founder and Chair of Daughter of Ellen, an Africa-focused initiative dedicated to building a continent-wide ecosystem of inclusion for neurodivergent individuals and people living with disabilities. Headquartered in both Dallas, Texas and Abuja, Nigeria, the initiative represents a bold and structured response to a critical gap in culturally informed support, policy, and community infrastructure across the African continent and within African diaspora communities.
              </p>
              <p>
                Eyvonne is a strategist, aerospace program leader, public speaker, accessibility consultant and community architect whose work sits precisely at the convergence of lived experience, executive leadership, policy advocacy, and systemic change. Her approach is simultaneously rigorous and humane, combining the discipline of institutional governance with the depth of personal conviction.
              </p>
            </div>
            <Link
              to="/founder"
              className="underline-sweep mt-6 inline-block text-sm font-semibold text-secondary transition-colors hover:text-foreground"
            >
              Read More &rarr;
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FounderPreview;
