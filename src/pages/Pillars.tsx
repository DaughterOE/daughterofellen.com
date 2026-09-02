import ScrollReveal from "@/components/ScrollReveal";

const Pillars = () => (
  <main className="pt-24">
    {/* INTRO */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Our Pillars</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-10 text-base leading-relaxed text-muted-foreground">
            Everything we do flows from three foundational pillars. They are not simply programmed areas. They are the architecture of a movement built to last.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* PILLAR ONE */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Pillar One</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Early Identification and Intervention
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The earlier a neurodivergent child is identified and supported, the better their developmental outcomes. This is not opinion. It is the consistent finding of decades of clinical research. In Nigeria and across much of Africa, most children with neurodevelopment conditions receive a diagnosis in late childhood or adolescence, if they receive one at all. Many never do. The consequences are permanent and preventable.
            </p>
            <p>Our work in this pillar includes:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Raising awareness among parents and caregivers about the signs of neurodevelopment conditions and the importance of early screening</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Advocating for the integration of developmental screening into national primary healthcare and education systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Connecting families with qualified clinical professionals who offer accessible diagnostic and intervention services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Producing plain-language resources that help parents understand what early identification means and what to do next</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* PILLAR TWO */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Pillar Two</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Parent and Educator Support
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Parents and educators are the most powerful forces in a neurodivergent child's daily life. When they are equipped, supported, and connected, that child's world changes.
            </p>
            <p>Our work in this pillar includes:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Facilitating peer support networks for parents and caregivers navigating neurodivergence across Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Developing training resources for teachers and school administrators on inclusive classroom practice and neurodiversity-affirming pedagogy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Convening community forums where parents, educators, and clinicians share knowledge and co-develop practical solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Partnering with schools and education authorities to build inclusive learning environments as institutional standard</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Providing a curated resource library covering diagnosis, intervention, legal rights, and community services</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* PILLAR THREE */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Pillar Three</span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Public Awareness and Policy Advocacy
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Inclusion is not possible without the cultural shifts and legislative frameworks that make it a societal expectation rather than an individual act of goodwill. Nigeria has ratified the United Nations Convention on the Rights of Persons with Disabilities and passed the Discrimination Against Persons with Disabilities Prohibition Act of 2018. Both represent important commitments. Neither is consistently enforced.
            </p>
            <p>Our work in this pillar includes:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Conducting public awareness campaigns that challenge stigma and reshape cultural narratives around neurodivergence and disability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Engaging directly with legislators, ministry officials, and policymakers to advocate for stronger implementation of disability legislation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Producing annual policy scorecards and advocacy briefs that document gaps, highlight progress, and recommend specific legislative actions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Submitting the Abuja Declaration on Neurodivergence Inclusion to the National Assembly and relevant government ministries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Building relationships with disability rights lawyers, civil society leaders, and international advocacy bodies to amplify Nigeria's inclusion agenda</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Pillars;