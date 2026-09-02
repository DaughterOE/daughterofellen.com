import ScrollReveal from "@/components/ScrollReveal";

const Mission = () => (
  <main className="pt-24">
    {/* MISSION STATEMENT */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Our Mission</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg font-heading text-foreground">
              To ensure that neurodivergent children and individuals living with disabilities across Africa are seen, understood, and supported from the earliest stages of life, by building the communities, systems, and policies that make genuine inclusion possible.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* MISSION IN PRACTICE */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Mission in Practice
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Our mission is not a statement on a wall. It is a daily commitment to action. Every programme we design, every conference we convene, every partnership we form, and every policy document we submit is driven by one question: does this make life better and more dignified for neurodivergent children and adults in Africa?
            </p>
            <p>We pursue this mission by:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Convening multi-stakeholder dialogues that bring families, professionals, employers, and policymakers into productive, solution-focused conversation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Building community networks that reduce isolation and create durable structures of peer support and shared knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Advocating for stronger implementation of disability legislation and integration of neurodivergence frameworks into national education and employment policy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Partnering with clinical professionals, academics, and civil society organizations to produce evidence-based resources and recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Centering the voices, experiences, and expertise of neurodivergent individuals and their families in everything we do</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="mt-10 rounded-xl border border-border bg-parchment p-8">
            <p className="font-heading text-lg italic text-foreground text-center">
              "This is not charity. This is empowerment."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* THE PROBLEM WE ARE SOLVING */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            The Problem We Are Solving
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Nigeria is home to an estimated 30 million persons living with disabilities. Neurodivergent children are frequently misdiagnosed, mislabelled, or simply overlooked. Families carry enormous emotional and financial weight without professional guidance or peer community. Educators lack training and resources for inclusive classroom practice. Employers operate without neurodiversity policies. Legislators who have ratified international conventions do not yet consistently enforce them.
            </p>
            <p>
              Daughter of Ellen was built to address each of these failures, one by one, with urgency, strategy, and care.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Mission;