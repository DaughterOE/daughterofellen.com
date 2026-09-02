import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const audiences = [
  {
    title: "Parents and Caregivers",
    desc: "If you are raising a neurodivergent child or caring for an adult with a disability, this conference was built with you at its centre. You will find community, professional insight, and the knowledge that you are not navigating this journey alone. Your experience and your voice are not peripheral to this work. They are essential to it.",
  },
  {
    title: "Educators and School Leaders",
    desc: "From classroom teachers to school principals and education officers, this conference offers practical knowledge, evidence-based frameworks, and a peer community of practitioners committed to genuinely inclusive learning environments. Leave with tools you can implement immediately.",
  },
  {
    title: "HR Professionals and Employers",
    desc: "Neurodiversity is a competitive advantage. Organizations that actively include neurodivergent employees access a broader talent pool, improved problem-solving capacity, and higher retention rates. The conference offers frameworks, case studies, and expert guidance on building workplaces that work for everyone.",
  },
  {
    title: "Policymakers and Government Representatives",
    desc: "Nigeria has made legal commitments to disability inclusion. The conference is an opportunity to hear directly from those affected by gaps in implementation, to engage with evidence-based recommendations, and to leave with a clearer understanding of what meaningful policy action looks like on the ground.",
  },
  {
    title: "Clinicians and Allied Health Professionals",
    desc: "Psychologists, occupational therapists, speech and language therapists, developmental pediatricians, and other allied health professionals will find a cross-sector community of practice and an opportunity to contribute clinical expertise to community and policy solutions.",
  },
  {
    title: "Neurodivergent Individuals and Self-Advocates",
    desc: "Your presence is not symbolic. Your expertise is irreplaceable. The conference centers lived experience not as testimony alone, but as the primary evidence base for everything else we discuss. You belong at this table.",
  },
  {
    title: "Civil Society Organizations and Advocates",
    desc: "Partner with us. Learn from us. Challenge us. The Daughter of Ellen Conference is a convening space for everyone working toward a more inclusive Nigeria and a more inclusive Africa.",
  },
  {
    title: "Media and Communications Professionals",
    desc: "Help us tell this story. Media partners leave the conference with a deep understanding of the neurodivergence landscape in Nigeria and the relationships to continue covering it meaningfully. Media accreditation is available.",
  },
];

const WhoShouldAttend = () => (
  <main className="pt-24">
    {/* HEADER */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Who Should Attend</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-10 text-base leading-relaxed text-muted-foreground">
            The Daughter of Ellen Conference is designed for everyone who believes that neurodivergent children and adults deserve better. That means this event is for you, regardless of your role or your starting point.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* AUDIENCE CARDS */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-4xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {audiences.map((audience, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="rounded-xl border border-border bg-background p-6 transition-all duration-500 hover:border-secondary hover:-translate-y-1 h-full">
                <h3 className="font-heading text-lg font-semibold text-foreground">{audience.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{audience.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden bg-primary">
      <div className="noise-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-xl text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Register Now
          </h2>
          <p className="text-primary-foreground/80">
            Places are limited. Secure yours today.
          </p>
          <div className="mt-8">
            <a
              href="https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
            >
              Register for the Webinar
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default WhoShouldAttend;