import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  {
    title: "What We Do",
    desc: "We build the infrastructure of inclusion through community, education, and policy. From early identification to workforce access, our work spans every stage of a neurodivergent life.",
  },
  {
    title: "Why It Matters",
    desc: "Nigeria is home to an estimated 30 million persons living with disabilities. Most go undiagnosed, unsupported, and unseen. The cost of inaction is generational. We refuse to accept it.",
  },
  {
    title: "How You Can Help",
    desc: "Whether you are a parent, educator, employer, policymaker, or ally, there is a place for you in this movement. Attend the conference. Join the community. Partner with us. Make a commitment.",
  },
];

const HomePillarsSection = () => (
  <section className="section-padding relative overflow-hidden bg-card">
    <div className="deco-orb left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-secondary" />
    <div className="relative mx-auto max-w-6xl">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={i} delay={i * 120}>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-background p-8 transition-all duration-500 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HomePillarsSection;