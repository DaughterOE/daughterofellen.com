import ScrollReveal from "@/components/ScrollReveal";
import evonAnthony from "@/assets/evon-anthony.jpeg";
import { motion } from "framer-motion";

const Founder = () => (
  <main className="pt-24">
    {/* FOUNDER HERO */}
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-forest-light opacity-90" />
      <div className="deco-orb right-0 top-0 h-96 w-96 bg-secondary opacity-[0.06]" />
      <div className="deco-orb -left-20 bottom-0 h-72 w-72 bg-gold-light opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-12 lg:px-24 lg:py-32">
        <div className="grid items-center gap-12 md:grid-cols-5">
          <ScrollReveal className="md:col-span-2">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="absolute -inset-3 rounded-2xl border border-secondary/20" />
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={evonAnthony}
                  alt="Eyvonne Eleko"
                  className="h-full w-full object-cover object-top aspect-[3/4]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border border-secondary/30" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Founder and Chair, Daughter of Ellen
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Eyvonne Eleko
            </h1>
            <p className="mt-3 font-heading text-lg italic text-secondary">
              Strategist &middot; Advocate &middot; Architect of Inclusion
            </p>
            <div className="mt-8 h-px w-24 bg-secondary/40" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* INTRO BIOGRAPHY */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-80 w-80 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="space-y-6 text-base leading-[1.85] text-muted-foreground">
            <p>
              Eyvonne Eleko is the Founder and Chair of Daughter of Ellen, an Africa-focused initiative dedicated to building a continent-wide ecosystem of inclusion for neurodivergent individuals and people living with disabilities. Headquartered in both Dallas, Texas and Abuja, Nigeria, the initiative represents a bold and structured response to a critical gap in culturally informed support, policy, and community infrastructure across the African continent and within African diaspora communities.
            </p>
            <p>
              Eyvonne is a strategist, aerospace program leader, public speaker, accessibility consultant and community architect whose work sits precisely at the convergence of lived experience, executive leadership, policy advocacy, and systemic change. Her approach is simultaneously rigorous and humane, combining the discipline of institutional governance with the depth of personal conviction.
            </p>
            <p>
              A certified Disability Rights and Accessibility Consultant through the US Institute of Diplomacy and Human Rights, Eyvonne's advocacy is grounded in both professional training and lived experience. She has also completed specialized training in Protecting the Rights of the Child in Humanitarian Situations, strengthening her work at the intersection of disability rights, child protection, accessibility, and inclusive humanitarian response.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* EXECUTIVE LEADERSHIP AND PROFESSIONAL FORMATION */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 top-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Executive Leadership and Professional Formation
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-muted-foreground">
            <p>
              With over a decade of senior leadership experience spanning governance, risk management, regulatory compliance, aerospace and technology program delivery, Eyvonne brings to Daughter of Ellen a level of executive rigor that is rare in mission-driven organizations. She has led complex, cross-functional initiatives, directed stakeholder engagement across executive and institutional environments, and designed strategic frameworks that align long-term vision with measurable, time-bound outcomes.
            </p>
            <p>
              Her professional background spans enterprise technology, transformation leadership, operations, and strategic program management, shaping a leadership style rooted in structure, accountability, and execution. It is this foundation that informs Daughter of Ellen's architecture: an organization where advocacy is not performative rhetoric, but structured, evidence-based, community-centered, and built to scale.
            </p>
            <p>
              Every initiative, partnership, awareness campaign, and policy conversation is approached with the rigor of an institution designed not only to endure, but to influence systems and drive measurable change.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* QUOTE */}
    <section className="relative overflow-hidden bg-background py-16 md:py-20">
      <div className="relative mx-auto max-w-3xl px-6 md:px-12">
        <ScrollReveal>
          <div className="relative rounded-xl border border-secondary/20 bg-parchment p-10 md:p-14">
            <svg className="absolute left-6 top-6 h-10 w-10 text-secondary/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
            </svg>
            <p className="relative z-10 font-heading text-xl italic leading-relaxed text-foreground text-center md:text-2xl">
              "Advocacy requires more than urgency. It requires architecture."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* PUBLIC ADVOCACY AND MEDIA PRESENCE */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb right-0 top-0 h-64 w-64 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Public Advocacy and Media Presence
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-muted-foreground">
            <p>
              As a growing voice in disability inclusion and neurodiversity advocacy, Eyvonne has lent her voice to national and international conversations across television, radio, digital media, and public platforms in both the United States and Nigeria.
            </p>
            <p>
              Her advocacy and leadership have been featured by VoyageDallas, where she shared her journey, mission, and work building inclusive systems for underserved communities. She has also appeared as a guest speaker and commentator on platforms including Global TV Nigeria, Splash FM, Mainland 98.3 FM, and AIT Weekend Show, contributing to conversations on neurodivergence, disability inclusion, equitable healthcare systems, education, mental wellness, accessibility, and the social realities facing neurodivergent individuals and families across African communities.
            </p>
            <p>
              Her public engagement work is rooted in one core belief: inclusion cannot remain a theoretical conversation reserved for policy rooms or international panels. It must become visible, practical, culturally understood, and accessible within everyday communities.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* THE FOUNDING VISION */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            The Founding Vision
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-muted-foreground">
            <p>
              Daughter of Ellen was founded from both clarity of purpose and urgency of need. Eyvonne identified a persistent and largely unaddressed reality: while global conversations on neurodiversity and disability inclusion have gained momentum, African communities continue to confront deeply entrenched stigma, severely limited access to diagnostic services, fragmented and underfunded support infrastructure, and an almost total absence of enabling policy frameworks.
            </p>
            <p>
              The consequences are generational. Neurodivergent children across Nigeria and the wider continent are often misunderstood, underserved, and in many cases entirely invisible to the systems that should protect them. Adults navigating neurodivergence or disability continue to face structural exclusion from education, employment, healthcare access, and civic participation. Families frequently carry these realities in isolation, without institutional support, professional guidance, or informed community networks.
            </p>
            <p>
              Daughter of Ellen was established to fundamentally shift that reality. Through awareness, structured education, grassroots outreach, community building, media advocacy, and disciplined policy engagement, the initiative is committed to moving inclusion from principle to practice, and from practice to enforceable, sustained change.
            </p>
            <p>
              Through her leadership, Eyvonne continues to advocate for a future where accessibility, dignity, belonging, and human-centered systems are not treated as privileges, but as standards woven into the foundation of society itself.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* STRATEGIC OVERSIGHT AND INSTITUTIONAL DIRECTION */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Strategic Oversight and Institutional Direction
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-muted-foreground">
            <p>
              As Chair, Eyvonne provides overarching strategic leadership across Daughter of Ellen's programs, partnerships, and long-term advocacy agenda. She leads the organization's vision to convene a high-calibre, multi-stakeholder community uniting parents, clinicians, educators, employers, human resources professionals, civil society leaders, policymakers, and individuals with lived experience in meaningful, outcome-oriented dialogue.
            </p>
            <p>
              Under her direction, Daughter of Ellen operates across four strategic pillars: access to early identification and intervention services; inclusive education and professional training; workplace inclusion and neurodiversity-affirming employment practices; and structured engagement with legislators and regulatory bodies to close the policy gap between international frameworks and African institutional practice.
            </p>
            <p>
              The organization's inaugural conference, to be held in Abuja in 2026, marks the formal launch of what Eyvonne envisions as an annual national convening, eventually expanding to a continent-wide platform for policy dialogue, community accountability, and shared commitment to inclusion.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* LEADERSHIP PHILOSOPHY */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Leadership Philosophy
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="mt-8 text-base leading-[1.85] text-muted-foreground">
            Eyvonne's leadership philosophy rests on three interlocking principles that define both her personal practice and the institutional character of Daughter of Ellen.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { principle: "Clarity", text: "Systems change demands structure. Advocacy that lacks rigor yields noise, not movement." },
              { principle: "Courage", text: "Meaningful change requires naming difficult truths and holding institutions to account for them." },
              { principle: "Compassion", text: "Community is only possible where psychological safety exists. Dignity is not negotiable." },
            ].map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-border bg-card p-6 text-center transition-colors duration-500 hover:border-secondary"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <span className="font-heading text-lg font-bold text-secondary">{p.principle.charAt(0)}</span>
                </span>
                <h5 className="mt-3 font-heading text-lg font-bold text-foreground">{p.principle}</h5>
                <div className="gold-divider mx-auto my-3 w-12" />
                <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={250}>
          <div className="mt-10 space-y-6 text-base leading-[1.85] text-muted-foreground">
            <p>
              This tripartite framework is not abstract. It is the operating principle behind every decision Daughter of Ellen makes, from how it structures its board governance to how it designs community spaces where neurodivergent individuals are centered not as subjects, but as authorities on their own experience.
            </p>
            <p>
              Eyvonne's approach is distinctively integrated: executive without being distant, empathetic without being sentimental. She brings to every engagement a precise understanding of the emotional realities that families navigating neurodivergence and disability live with daily, and she holds that understanding alongside an equally precise commitment to the structural conditions necessary for lasting change.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* LONG-TERM VISION AND CONTINENTAL IMPACT */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb right-0 top-0 h-64 w-64 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Long-Term Vision and Continental Impact
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-muted-foreground">
            <p>
              Eyvonne's ambition for Daughter of Ellen extends well beyond a single country or a single cycle of advocacy. Her long-term vision is to establish Daughter of Ellen as the pre-eminent civil society voice on neurodivergence and disability inclusion across Africa, with a presence and influence that spans legislation, institutional practice, and public culture.
            </p>
            <p>
              Through an expanding portfolio of national conferences, policy roundtables, public education campaigns, strategic corporate partnerships, and collaborative research programs, Evon is building the infrastructure for a movement that outlasts any single moment of awareness. Her objective is not to generate conversation, but to generate consequence: legislation that enforces inclusion, institutions that design for difference, and communities that recognize neurodivergent brilliance as a societal asset rather than an inconvenient exception.
            </p>
            <p>
              The long-term goal is unambiguous: a generation of neurodivergent children and adults across Nigeria and Africa who grow with dignity, confidence, and the full opportunity to reach their potential, supported by systems, policies, and communities that have been deliberately and accountably built to include them.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CLOSING STATEMENT */}
    <section className="relative overflow-hidden bg-background py-16 md:py-20">
      <div className="relative mx-auto max-w-3xl px-6 md:px-12">
        <ScrollReveal>
          <p className="text-base leading-[1.85] text-muted-foreground text-center">
            Eyvonne Eleko leads Daughter of Ellen with intentionality, accountability, and the conviction that building systems of inclusion is among the most important work of our time.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* CLOSING QUOTE */}
    <section className="relative overflow-hidden bg-card py-16 md:py-20">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl px-6 md:px-12">
        <ScrollReveal>
          <div className="relative rounded-xl border border-secondary/20 bg-parchment p-10 md:p-14">
            <svg className="absolute left-6 top-6 h-10 w-10 text-secondary/20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
            </svg>
            <p className="relative z-10 font-heading text-xl italic leading-relaxed text-foreground text-center md:text-2xl">
              "She does not raise awareness. She builds what comes after it."
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CONTACT LINKS */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="space-y-3 text-sm">
              <div className="flex gap-4">
                <span className="w-20 shrink-0 font-semibold text-foreground">Website</span>
                <div className="flex items-center gap-3">
                  <a href="https://www.daughterofellen.org" target="_blank" rel="noreferrer" className="underline-sweep text-secondary transition-colors hover:text-foreground">daughterofellen.org</a>
                  <span className="text-muted-foreground">|</span>
                  <a href="https://www.evonanthony.com" target="_blank" rel="noreferrer" className="underline-sweep text-secondary transition-colors hover:text-foreground">evonanthony.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="w-20 shrink-0 font-semibold text-foreground">Email</span>
                <a href="mailto:founder@daughterofellen.org" className="underline-sweep text-secondary transition-colors hover:text-foreground">founder@daughterofellen.org</a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Founder;
