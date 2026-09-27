import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const involvements = [
  {
    title: "AI for Accessibility: Building Inclusive Solutions for the Future",
    desc: "Friday, August 7. 6:00 PM to 8:00 PM GMT+1. Zoom. A hands-on intermediate workshop for students and professionals exploring how AI can improve accessibility, productivity, and innovation.",
    cta: "Register",
    link: "https://luma.com/33g5cl44",
    external: true,
  },
  {
    title: "Attend the Webinar",
    desc: "Register to attend the inaugural Daughter of Ellen webinar, Living It: Inclusion, Accessibility, Stigma and the Search for Support. Join voices from across Africa and the diaspora for a structured online dialogue on the realities of neurodivergence and disability inclusion. Be present at the founding moment.",
    cta: "Register for the Webinar",
    link: "https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support",
    external: true,
  },
  {
    title: "Join the Community Network",
    desc: "The Daughter of Ellen Community Network is a structured membership body for parents, educators, professionals, and advocates committed to neurodivergence inclusion. Members receive access to peer networks, resources, event invitations, and a voice in shaping our advocacy agenda.",
    cta: "Join the Network",
    link: "https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW",
    external: true,
  },
  {
    title: "Partner With Us",
    desc: "If your organization shares our values, we want to build with you. We are actively seeking corporate partners, civil society allies, academic institutions, and media organizations to support the conference and the wider movement.",
    cta: "Explore Partnership Opportunities",
    link: "/partner",
  },
  {
    title: "Volunteer",
    desc: "Daughter of Ellen is volunteer powered at this founding stage. We are looking for skilled, mission-aligned individuals to join us in operations, communications, program delivery, and partnership development. Volunteering with Daughter of Ellen is not a token gesture. It is a founding role in a movement.",
    cta: "Apply to Volunteer",
    link: "/contact",
  },
  {
    title: "Nominate a Speaker",
    desc: "Do you know a neurodivergent individual with a story worth sharing? A clinician doing exceptional work? A policymaker who truly understands inclusion. A parent who has navigated the system and come out with wisdom to offer? Nominate them as a speaker or panelist for the inaugural conference.",
    cta: "Submit a Speaker Nomination",
    link: "/contact",
  },
  {
    title: "Support Our Work",
    desc: "Individual contributions, however large or small, strengthen Daughter of Ellen's ability to deliver programs, resources, and advocacy that reach families across Nigeria. Every contribution matters and every contributor is part of this story.",
    cta: "Support Our Work",
    link: "/contact",
  },
];

const GetInvolved = () => (
  <main className="pt-24">
    {/* HEADER */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Get Involved</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-10 text-base leading-relaxed text-muted-foreground">
            There are many ways to be part of Daughter of Ellen. Whether you come as a partner, a volunteer, an attendee, a donor, or simply someone who believes this work matters, there is a place for you here.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* INVOLVEMENT OPTIONS */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-4xl">
        <div className="space-y-8">
          {involvements.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="rounded-xl border border-border bg-background p-8 transition-all duration-500 hover:border-secondary hover:-translate-y-1">
                <h3 className="font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                {(item as any).external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full bg-secondary px-8 py-3 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
                  >
                    {item.cta}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className="mt-6 inline-block rounded-full bg-secondary px-8 py-3 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
                  >
                    {item.cta}
                  </Link>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default GetInvolved;