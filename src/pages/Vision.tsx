import ScrollReveal from "@/components/ScrollReveal";

const Vision = () => (
  <main className="pt-24">
    {/* VISION STATEMENT */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Our Vision</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg font-heading text-foreground">
              A generation of neurodivergent children and adults across Nigeria and Africa who grow with dignity, confidence, and the full opportunity to reach their potential, in societies that have been deliberately and accountably built to include them.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* WHAT WE ARE BUILDING TOWARD */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What We Are Building Toward
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Our vision reaches beyond the next conference, beyond the next policy brief, beyond any single initiative. We are building toward a continent-wide reality where:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>A neurodivergent child in Lagos receives an early diagnosis and a clear, compassionate intervention plan before the age of five</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>A classroom in Abuja is designed to accommodate diverse learning styles as a matter of institutional standard, not exceptional accommodation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>An employer in Nairobi has a structured neurodiversity inclusion policy that is actively implemented and regularly reviewed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>A family in Kano has access to a peer network, professional referrals, and a community that fully understands their journey</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>A neurodivergent adult across the continent can walk into any room, any workplace, any institution, and be accommodated without having to fight for it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>A legislator in Abuja can cite evidence-based frameworks for disability inclusion because a civil society sector built them</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* STRATEGIC HORIZONS */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Strategic Horizons
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              period: "Now",
              year: "2026",
              desc: "Launch the movement. Convene the inaugural conference. Adopt the Abuja Declaration. Establish the community network. Build the institutional foundation that makes everything else possible.",
            },
            {
              period: "Near",
              year: "2026 to 2028",
              desc: "Grow the annual conference to national significance. Formalize the community of practice. Submit the Abuja Declaration to the National Assembly. Secure corporate and institutional partnerships. Expand events to Lagos, Port Harcourt, and Kano.",
            },
            {
              period: "Future",
              year: "2028 and beyond",
              desc: "Become Nigeria's foremost civil society voice on neurodivergence and disability inclusion. Expand to Ghana, Kenya, and South Africa. Influence legislation across multiple African jurisdictions. Establish a continent-wide research and advocacy network.",
            },
          ].map((horizon, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-secondary hover:-translate-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">{horizon.period} &middot; {horizon.year}</span>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{horizon.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Vision;