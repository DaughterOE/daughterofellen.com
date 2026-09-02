import ScrollReveal from "@/components/ScrollReveal";

const AbujaDeclaration = () => (
  <main className="pt-24">
    {/* HEADER */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">The Abuja Declaration</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          <p className="mt-6 font-heading text-xl italic text-foreground">A Living Document for Lasting Change</p>
        </ScrollReveal>
      </div>
    </section>

    {/* WHAT IS IT */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Is the Abuja Declaration
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The Abuja Declaration on Neurodivergence Inclusion is a policy commitment document co-created by delegates at the inaugural Daughter of Ellen Conference. It is not a statement produced in isolation by a single organization. It is a declaration of collective responsibility, shaped by the voices of parents, educators, employers, policymakers, clinicians, and neurodivergent individuals themselves.
            </p>
            <p>
              The Declaration will be formally adopted at the close of the inaugural conference and submitted to relevant government ministries and the National Assembly. It represents the first structured, civil-society-led attempt to define what neurodivergence inclusion should look like in Nigeria, and to hold institutions accountable for delivering it.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="mt-10 rounded-xl border border-border bg-parchment p-8">
            <p className="font-heading text-lg italic text-foreground text-center">
              "The Abuja Declaration is not a document. It is a commitment. And commitments require accountability."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* WHAT IT COVERS */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What the Declaration Covers
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>The Declaration addresses five domains of inclusion:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Commitments to accessible, timely, and culturally competent developmental screening across Nigeria: Early Identification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Commitments to inclusive classroom practice, teacher training, and curriculum reform: Education</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Commitments to neurodiversity-affirming hiring practices and workplace accommodation frameworks: Employment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Commitments to stronger implementation and enforcement of existing disability law, and advocacy for legislative reform: Policy and Legislation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Commitments to reducing stigma, building peer networks, and creating public environments that actively include neurodivergent individuals: Community and Belonging</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* HOW IT LIVES BEYOND */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            How the Declaration Lives Beyond the Conference
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>Following its adoption, the Abuja Declaration will be:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Formally submitted to the Federal Ministry of Education, the Ministry of Humanitarian Affairs, and the National Assembly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Published and distributed to all conference delegates, partner organizations, and media contacts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Used as the basis for Daughter of Ellen's annual policy scorecard, tracking progress against commitments year on year</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Updated and expanded at each subsequent annual conference, growing in scope and strengthening its accountability mechanisms</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default AbujaDeclaration;