import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import evonAnthony from "@/assets/evon-anthony.jpeg";

const FounderSection = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
    <div className="relative mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Founder
        </h2>
        <div className="gold-divider mx-auto mb-16 max-w-xs" />
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2 overflow-hidden rounded-xl">
            <img
              src={evonAnthony}
              alt="Eyvonne Eleko"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="md:col-span-3 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Founder & Chair
            </span>
            <h3 className="mt-2 font-heading text-3xl font-bold text-foreground">Eyvonne Eleko</h3>
            <p className="mt-1 font-heading text-base italic text-muted-foreground">
              Strategist · Advocate · Architect of Inclusion
            </p>
            <div className="gold-divider mt-6 mb-6" />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Eyvonne Eleko is the Founder and Chair of Daughter of Ellen, an Africa-focused
                initiative dedicated to building a continent-wide ecosystem of inclusion for
                neurodivergent individuals and people living with disabilities.
              </p>
              <p>
                A strategist and community architect, Eyvonne's work sits at the convergence of lived
                experience, executive leadership, policy advocacy, and systemic change. She founded
                Daughter of Ellen from both clarity of purpose and urgency of need — to fundamentally
                shift the reality for neurodivergent children and families across Nigeria and the wider
                continent.
              </p>
              <p>
                Her vision is to establish Daughter of Ellen as the pre-eminent civil society voice on
                neurodivergence and disability inclusion across Africa, generating not just conversation
                but consequence: legislation that enforces inclusion, institutions that design for
                difference, and communities that recognize neurodivergent brilliance.
              </p>
            </div>
            <Link
              to="/about"
              className="underline-sweep mt-6 inline-block text-sm font-semibold text-secondary transition-colors hover:text-foreground"
            >
              Read Full Profile →
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FounderSection;
