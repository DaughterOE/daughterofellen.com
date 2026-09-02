import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown } from "lucide-react";

const tiers = [
  {
    name: "Principal Sponsor",
    desc: "Primary financial partner for the full conference. Highest brand visibility across all event materials, media, and publications. Named opportunity to address delegates during the plenary session. Direct association with the most significant neurodivergence inclusion event in Nigeria's history.",
  },
  {
    name: "Gold Sponsor",
    desc: "Co-funding partner supporting a specific panel or session. Named recognition across the conference program, press releases, and digital campaigns. Thematic association with an area of the conference that aligns with your organization's focus.",
  },
  {
    name: "Exhibition Partner",
    desc: "Host a stand at the conference to showcase services, resources, or products aligned with neurodivergence and disability inclusion. Direct access to 150 to 200 engaged, purpose-driven delegates.",
  },
  {
    name: "Knowledge Partner",
    desc: "Academic institutions, think tanks, or research bodies contributing intellectual resources, research findings, or expert speakers. An opportunity to position your institution at the forefront of Nigeria's emerging neurodiversity knowledge landscape.",
  },
  {
    name: "Media Partner",
    desc: "Print, broadcast, or digital media organizations providing coverage before, during, and after the event. Exclusive access to conference proceedings, speakers, and the Daughter of Ellen story as it builds.",
  },
  {
    name: "Institutional Partner",
    desc: "Government agencies, embassies, or multilateral bodies providing endorsement, in-kind support, or policy-level engagement. An opportunity to formally align with a growing civil society movement and demonstrate institutional commitment to disability inclusion.",
  },
  {
    name: "Program Donor",
    desc: "Funders supporting specific program components including participant travel stipends, catering, materials, translation services, or post-event publication costs. Targeted, visible contributions to the operational success of the conference.",
  },
];

const Partner = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden bg-primary">
        <div className="noise-overlay absolute inset-0" />
        <div className="deco-orb right-1/4 top-0 h-80 w-80 bg-secondary" />
        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-6xl">
              Partners and Sponsors
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* OPENING COPY */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
        <div className="relative mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="text-base leading-relaxed text-muted-foreground">
              <p>
                Daughter of Ellen warmly invites aligned organizations and individuals to partner with us in building a Nigeria, and an Africa, where neurodivergent individuals are fully included. Partnership with Daughter of Ellen is not a transaction. It is an alignment of values, a commitment to a shared future, and an opportunity to be present at the founding moment of a movement.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PARTNERSHIP TIERS */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="deco-orb -left-20 top-1/3 h-64 w-64 bg-secondary" />
        <div className="relative mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Partnership Tiers
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          </ScrollReveal>
          <div className="mt-12 space-y-4">
            {tiers.map((tier, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full rounded-xl border border-border bg-background p-6 text-left transition-all duration-500 hover:border-secondary hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{tier.name}</h3>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-muted-foreground transition-transform duration-300 ${
                        expanded === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {expanded === i && (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {tier.desc}
                    </p>
                  )}
                </button>
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
              Discuss a Partnership
            </h2>
            <p className="text-primary-foreground/80">
              Contact us at{" "}
              <a href="mailto:info@daughterofellen.org" className="underline text-secondary">
                info@daughterofellen.org
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Partner;