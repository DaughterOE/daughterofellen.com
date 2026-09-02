import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const Community = () => (
  <main className="pt-24">
    {/* HEADER */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Community</h1>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          <p className="mt-6 font-heading text-2xl font-bold text-foreground">You Are Not Alone</p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            One of the most painful realities for families navigating neurodivergence in Nigeria is isolation. There is no map. No one tells you what to do next, who to call, or that anyone else is going through exactly the same thing. Daughter of Ellen is building the community that too many families have never had.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="mt-10 rounded-xl border border-border bg-parchment p-8">
            <p className="font-heading text-lg italic text-foreground text-center">
              "Every parent deserves a community that already understands. Every child deserves a world that was built with them in mind."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* COMMUNITY NETWORK */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            The Daughter of Ellen Community Network
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The Daughter of Ellen Community Network is being established as a structured, active, and growing membership body connecting parents, educators, clinicians, employers, policymakers, and allies across Nigeria and eventually across Africa.
            </p>
            <p>Members will have access to:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Peer support circles for parents, caregivers, and educators navigating neurodivergence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>A curated resource library covering diagnosis, intervention, legal rights, inclusive education, and workplace inclusion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>A professional referral system connecting families with trusted clinicians, therapists, and support organizations across Nigeria</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Priority access to Daughter of Ellen events, conferences, and advocacy activities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>Community forums, both in-person and digital, where members share knowledge and support one another</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <span>A voice in shaping Daughter of Ellen's advocacy agenda, including the Abuja Declaration and annual policy scorecard</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* LAUNCH */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Launch at the Inaugural Conference
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-10 text-base leading-relaxed text-muted-foreground">
            The Community Network will be formally launched at the inaugural Daughter of Ellen Conference in Abuja. Delegates will be the founding members of a community we expect to grow to over 500 members across Nigeria within six months. If you cannot attend the conference, you can register your interest through this website.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden bg-primary">
      <div className="noise-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-xl text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
            Join the Community Network
          </h2>
          <p className="text-primary-foreground/80">
            Free membership for parents, caregivers, and educators
          </p>
          <div className="mt-8">
            <a
              href="https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
            >
              Join the Community Network
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Community;