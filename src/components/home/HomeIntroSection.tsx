import ScrollReveal from "@/components/ScrollReveal";

const HomeIntroSection = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
    <div className="relative mx-auto max-w-4xl">
      <ScrollReveal>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            In Nigeria and across Africa, millions of neurodivergent children and individuals living with disabilities are navigating life without the systems, communities, or language they need to thrive. Daughter of Ellen exists to change that.
          </p>
          <p>
            We are an Africa-focused advocacy initiative building an inclusive ecosystem where every neurodivergent child is identified early, supported fully, and celebrated without condition.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <div className="mt-10 rounded-xl border border-border bg-parchment p-8">
          <p className="font-heading text-lg italic text-foreground text-center">
            "We are not a charity. We are a movement demanding inclusion as a right."
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HomeIntroSection;