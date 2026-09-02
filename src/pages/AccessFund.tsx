import ScrollReveal from "@/components/ScrollReveal";
import accessFundImg from "@/assets/access-fund-announcement.jpeg.asset.json";

const WHATSAPP_URL = "https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW";

const Divider = () => (
  <div className="mx-auto my-12 h-px w-24 bg-secondary/60" />
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{children}</h2>
    <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
  </>
);

const AccessFund = () => (
  <main className="pt-24">
    {/* HEADER */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
            The Daughter of Ellen Access Fund
          </h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          <p className="mt-6 font-heading text-xl font-semibold text-foreground">
            Expanding Access. Investing in People. Building More Inclusive Communities.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            An initiative of Daughter of Ellen Support &amp; Empowerment Initiative
          </p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            Established through the generous support of The Eyvonne Anthony Brand
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <img
            src={accessFundImg.url}
            alt="Daughter of Ellen Access Fund announcement"
            className="w-full rounded-xl border border-border shadow-lg"
          />
        </ScrollReveal>
      </div>
    </section>

    {/* INTRO */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="relative mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground">
        <ScrollReveal>
          <p>At Daughter of Ellen, we believe that access can change the course of a person's life.</p>
          <p className="mt-4">The right assessment can provide answers.</p>
          <p className="mt-4">The right therapy can unlock communication.</p>
          <p className="mt-4">The right support can create opportunities in education, employment, healthcare, and everyday life.</p>
          <p className="mt-4">
            Yet for far too many neurodivergent individuals, persons with disabilities, and their families, these opportunities remain out of reach, not because the need doesn't exist, but because the financial barriers are too great.
          </p>
          <p className="mt-4">The Daughter of Ellen Access Fund was created to help bridge that gap.</p>
          <p className="mt-4">
            It is a community investment initiative dedicated to expanding access to essential services and support, ensuring that more individuals and families can receive the care and resources they need to thrive.
          </p>
          <p className="mt-4 font-heading text-lg italic text-foreground">
            Because everyone deserves the opportunity to reach their full potential.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* SHARED COMMITMENT */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading>A Shared Commitment to Greater Access</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The Daughter of Ellen Access Fund was established through the generous support of The Eyvonne Anthony Brand, reflecting a shared commitment to creating a world where accessibility and inclusion are not privileges, but expectations.
            </p>
            <p>
              For years, both Daughter of Ellen and The Eyvonne Anthony Brand have been guided by a common belief: that meaningful change happens when awareness is matched with action.
            </p>
            <p>
              While Daughter of Ellen continues to advocate for systemic change through education, community engagement, and policy conversations, the Access Fund represents an opportunity to provide practical support to individuals and families navigating challenges today.
            </p>
            <p>
              It is one expression of a shared commitment to removing barriers, expanding opportunity, and investing in the wellbeing of our communities.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ABOUT THE FUND */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading>About the Access Fund</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The Daughter of Ellen Access Fund provides financial support to eligible neurodivergent individuals, persons with disabilities, and families seeking disability and neurodiversity related services.
            </p>
            <p>Depending on available funding and community needs, assistance may be available for:</p>
            <ul className="space-y-3 pl-1">
              {[
                "Developmental and diagnostic assessments",
                "Speech and language therapy",
                "Occupational therapy",
                "Behaviour therapy",
                "Mental health support",
                "Assistive technology",
                "Accessibility equipment",
                "Educational support",
                "Specialist consultations",
                "Other accessibility related services reviewed on a case by case basis",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Every funding cycle is designed to maximize community impact while ensuring the long-term sustainability of the initiative.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* WHO IT SUPPORTS */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading>Who the Access Fund Supports</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The Access Fund exists to support members of our community who meet the eligibility requirements established for each funding cycle.
            </p>
            <p>This may include:</p>
            <ul className="space-y-3 pl-1">
              {[
                "Neurodivergent children, adolescents, and adults",
                "Persons with disabilities",
                "Parents, caregivers, and families",
                "Individuals awaiting assessment or diagnosis",
                "Children requiring early intervention",
                "Individuals seeking accessibility related services or support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Eligibility requirements and available funding may vary depending on the objectives and resources available during each application period.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* APPROACH */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading>Our Approach</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>At Daughter of Ellen, we recognize that no two journeys are the same.</p>
            <p>Every application is considered with care, dignity, fairness, and respect.</p>
            <p>
              Our review process is designed to ensure that available resources are distributed responsibly while prioritizing those facing significant barriers to accessing essential support.
            </p>
            <p>
              We are committed to operating the Access Fund with transparency, accountability, and compassion, always keeping the needs of our community at the center of every decision.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* HOW TO ACCESS */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading>How to Access the Fund</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Applications for the Daughter of Ellen Access Fund are announced during designated funding cycles.
            </p>
            <p>
              To ensure you receive timely updates, we encourage you to join the Daughter of Ellen WhatsApp Community.
            </p>
            <p>Community members receive information about:</p>
            <ul className="space-y-3 pl-1">
              {[
                "Access Fund application periods",
                "Eligibility criteria",
                "Required documentation",
                "Available support opportunities",
                "Community resources",
                "Educational programmes",
                "Events and announcements",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Joining the community is the best way to stay informed and prepare for future application opportunities.
            </p>
            <div className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-secondary px-8 py-3 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
              >
                Join Our WhatsApp Community
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* FOUNDER MESSAGE */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading>A Message from Our Founder</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              When I founded Daughter of Ellen, I envisioned an organization that would do more than raise awareness.
            </p>
            <p>
              I wanted us to help build a world where neurodivergent individuals and persons with disabilities could access the opportunities, services, and support they deserve, not simply because someone chose to help, but because inclusion should be how our communities are designed.
            </p>
            <p>
              Along the way, I have met countless individuals and families who knew exactly what support they needed but simply could not afford to access it.
            </p>
            <p>The Daughter of Ellen Access Fund was created with those families in mind.</p>
            <p>
              I am deeply grateful that The Eyvonne Anthony Brand has chosen to establish this initiative alongside Daughter of Ellen, allowing us to take another meaningful step toward expanding access within our community.
            </p>
            <p>
              While we continue advocating for long-term systemic change, this fund allows us to respond to immediate needs with practical support and hope.
            </p>
            <p>This is only the beginning, and I look forward to the lives that will be touched through this initiative.</p>
            <div className="pt-4">
              <p className="font-heading text-lg font-semibold text-foreground">Eyvonne Anthony</p>
              <p className="text-sm">Founder &amp; Executive Director</p>
              <p className="text-sm">Daughter of Ellen Support &amp; Empowerment Initiative</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* LONG-TERM VISION */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading>A Long-Term Vision</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The Daughter of Ellen Access Fund is part of a broader vision to create communities where neurodivergent individuals and persons with disabilities have equitable access to the resources they need to thrive.
            </p>
            <p>
              As the initiative grows, we hope to expand the number of individuals and families supported, broaden the range of services available, and strengthen pathways to care across Africa and the diaspora.
            </p>
            <p>Every life changed through this initiative brings us one step closer to that vision.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* IMPORTANT INFO */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading>Important Information</SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The Daughter of Ellen Access Fund operates based on available funding and organisational capacity.
            </p>
            <p>Submitting an application does not guarantee financial assistance.</p>
            <p>
              Eligibility requirements, available funding, and programme priorities may change over time to ensure the responsible stewardship of resources and the long-term sustainability of the initiative.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* JOIN OUR COMMUNITY CTA */}
    <section className="section-padding relative overflow-hidden bg-primary">
      <div className="noise-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Join Our Community
          </h2>
          <p className="text-primary-foreground/85 leading-relaxed">
            Whether you are seeking support, looking for trusted resources, or simply want to stay connected with our work, we invite you to become part of the Daughter of Ellen community.
          </p>
          <p className="mt-4 text-primary-foreground/85 leading-relaxed">
            By joining our WhatsApp Community, you'll receive updates on the Access Fund, educational resources, upcoming programmes, community events, and opportunities to stay informed.
          </p>
          <p className="mt-4 text-primary-foreground/85 leading-relaxed">
            Together, we are building a future where access is not determined by circumstance, but strengthened through community, collaboration, and a shared commitment to inclusion.
          </p>
          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
            >
              Join Our WhatsApp Community
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default AccessFund;
