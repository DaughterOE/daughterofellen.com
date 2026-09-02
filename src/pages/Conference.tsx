import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Clock, Globe } from "lucide-react";

const WEBINAR_URL = "https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support";

const Conference = () => {
  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden bg-primary">
        <div className="noise-overlay absolute inset-0" />
        <div className="deco-orb left-1/4 top-0 h-96 w-96 bg-secondary" />
        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
              Inaugural Webinar
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-primary-foreground md:text-6xl">
              Living It: Inclusion, Accessibility, Stigma and the Search for Support
            </h1>
            <div className="gold-divider mx-auto mt-8 mb-6 max-w-xs" />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-primary-foreground/80">
              <span className="inline-flex items-center gap-2">
                <Calendar size={18} className="text-secondary" />
                June 20th, 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={18} className="text-secondary" />
                3:00 PM WAT
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe size={18} className="text-secondary" />
                Online Webinar
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="relative mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              About the Webinar
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Living It: Inclusion, Accessibility, Stigma and the Search for Support is the inaugural Daughter of Ellen webinar, convening voices from across Africa and the diaspora to examine the everyday realities of neurodivergent individuals and persons with disabilities.
              </p>
              <p>
                This is a structured, participatory online dialogue designed to surface the practical barriers families and individuals navigate, to challenge the stigma that continues to shape access and opportunity, and to chart a clear path toward the support systems our communities deserve.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="mt-10 rounded-xl border border-border bg-parchment p-8">
              <p className="font-heading text-lg italic text-foreground text-center">
                "Inclusion is not a privilege. It is a standard we are committed to building, together."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="deco-orb -right-16 top-20 h-56 w-56 bg-secondary" />
        <div className="relative mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Event Details
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="mt-10 overflow-hidden rounded-xl border border-border bg-background">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Event Name", "Living It: Inclusion, Accessibility, Stigma and the Search for Support"],
                    ["Host Organization", "Daughter of Ellen, an initiative of the Evon Anthony Brand"],
                    ["Webinar Chair", "Eyvonne Eleko, Founder and Chair, Daughter of Ellen"],
                    ["Format", "Inaugural online webinar"],
                    ["Date", "June 20th, 2026"],
                    ["Time", "3:00 PM WAT (West Africa Time)"],
                    ["Location", "Online (Joining link will be sent to registered participants)"],
                    ["Target Audience", "Parents, Educators, HR Professionals, Policymakers, Clinicians, Neurodivergent Individuals, Persons with Disabilities, Civil Society"],
                  ].map(([label, value], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                      <td className="px-6 py-4 font-semibold text-foreground align-top whitespace-nowrap">{label}</td>
                      <td className="px-6 py-4 text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* REGISTRATION CTA */}
      <section className="section-padding relative overflow-hidden bg-primary">
        <div className="noise-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-xl text-center">
          <ScrollReveal>
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              Register Now
            </h2>
            <p className="text-primary-foreground/80">
              Secure your place at the inaugural Daughter of Ellen webinar.
            </p>
            <div className="mt-8">
              <a
                href={WEBINAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
              >
                Register on Bookt
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Conference;
