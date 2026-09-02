import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import evonAnthony from "@/assets/evon-anthony.jpeg";
import TeamSection from "@/components/home/TeamSection";

const About = () => {
  return (
    <main className="pt-24">
      {/* WHO WE ARE */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="deco-orb -right-24 top-0 h-72 w-72 bg-secondary" />
        <div className="relative mx-auto max-w-3xl">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">Who We Are</h1>
            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Story</h2>
              <p>
                Daughter of Ellen was born from conviction and personal experience. Named as a tribute to legacy, resilience, and the quiet, unwavering strength of maternal love, the initiative carries in its name a promise: that every child will be seen the way a mother sees her daughter, fully, without condition, and with fierce, uncompromising hope.
              </p>
              <p>
                Founded under the Evon Anthony Brand, Daughter of Ellen began as a response to a reality that millions of Nigerian and African families live every day but rarely speak about publicly: the reality of raising, educating, loving, or being a neurodivergent child in a world that was not designed with that child in mind.
              </p>
              <p>
                The founders recognized that the barriers facing neurodivergent children across Africa are not simply medical. They are structural, cultural, and political. Early diagnosis is inaccessible. Inclusive education is rare. Workplaces are unwelcoming. Policy frameworks exist on paper but not in practice. Families carry these burdens largely alone.
              </p>
              <p>
                Daughter of Ellen was established to address all of it. Not through charity. Through empowerment, systems change, community, and advocacy.
              </p>
              <p>
                In 2026, Daughter of Ellen Support and Empowerment Initiative extended its reach with the launch of Tende by DOE, a mental health and wellness branch with no geographic or demographic restriction. Tende exists for every person navigating burnout, anxiety, depression, or the quiet exhaustion of carrying too much for too long, whether or not they have a diagnosis, and regardless of where they come from. It is the part of our work that says: you do not have to be from anywhere specific to deserve support.
              </p>
              <div className="mt-4">
                <Link
                  to="/tende"
                  className="inline-block rounded-full border-2 border-secondary bg-secondary px-6 py-2.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:shadow-lg"
                >
                  Discover Tende by DOE
                </Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="mt-10 rounded-xl border border-border bg-parchment p-8">
              <p className="font-heading text-lg italic text-foreground text-center">
                "The most powerful thing a society can do for a neurodivergent child is build a world that already knows how to include them."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-forest-light" />
        <div className="relative mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              What Makes Us Different
            </h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                We are not a support group. We are not a one-off awareness campaign. We are a long-term movement with a structured strategy, an institutional backbone, and a clear vision: a generation of neurodivergent children across Nigeria and Africa who grow with dignity, confidence, and full opportunity.
              </p>
              <p>
                Our work is evidence-based, policy-oriented, and community-rooted. We bring together parents, clinicians, educators, employers, policymakers, and neurodivergent individuals at the same table, not in separate rooms.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Early Identification and Intervention",
                desc: "We work to ensure that neurodivergent children are identified at the earliest possible stage of development and given access to appropriate, compassionate, and effective support. Early intervention changes the trajectory of a child's life.",
              },
              {
                num: "02",
                title: "Parent and Educator Support",
                desc: "Families and teachers are on the front line. We equip them with training, peer networks, practical resources, and access to professionals who understand what they are navigating. No parent should carry this journey alone.",
              },
              {
                num: "03",
                title: "Public Awareness and Policy Advocacy",
                desc: "Cultural stigma and weak policy enforcement are among the greatest barriers to inclusion. We challenge both. Through advocacy, public education, and direct engagement with legislators, we work to shift narratives and strengthen the legal frameworks protecting neurodivergent individuals.",
              },
            ].map((pillar, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-secondary hover:-translate-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">{pillar.num}</span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FOUNDER */}
      <section className="section-padding relative overflow-hidden bg-card">
        <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
        <div className="relative mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our Founder
            </h2>
            <div className="gold-divider mx-auto mb-16 max-w-xs" />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid gap-12 md:grid-cols-5">
              <div className="md:col-span-2 overflow-hidden rounded-xl">
                <img
                  src={evonAnthony}
                  alt="Eyvonne Eleko"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="md:col-span-3 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Founder and Chair, Daughter of Ellen
                </span>
                <h3 className="mt-2 font-heading text-3xl font-bold text-foreground">Eyvonne Eleko</h3>
                <p className="mt-1 font-heading text-base italic text-muted-foreground">
                  Strategist &middot; Advocate &middot; Architect of Inclusion
                </p>
                <div className="gold-divider mt-6 mb-6" />
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
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
              </div>
            </div>
          </ScrollReveal>

          {/* Executive Leadership */}
          <ScrollReveal delay={250}>
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Executive Leadership and Professional Formation
              </h3>
              <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
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
            </div>
          </ScrollReveal>

          {/* Quote */}
          <ScrollReveal delay={300}>
            <div className="mt-12 rounded-xl border border-border bg-parchment p-8 md:p-10 max-w-3xl mx-auto">
              <p className="font-heading text-lg italic text-foreground text-center md:text-xl">
                "Advocacy requires more than urgency. It requires architecture."
              </p>
            </div>
          </ScrollReveal>

          {/* Public Advocacy and Media Presence */}
          <ScrollReveal delay={300}>
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Public Advocacy and Media Presence
              </h3>
              <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
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
            </div>
          </ScrollReveal>

          {/* The Founding Vision */}
          <ScrollReveal delay={300}>
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                The Founding Vision
              </h3>
              <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
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
            </div>
          </ScrollReveal>

          {/* Strategic Oversight */}
          <ScrollReveal delay={300}>
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Strategic Oversight and Institutional Direction
              </h3>
              <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
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
            </div>
          </ScrollReveal>

          {/* Leadership Philosophy */}
          <ScrollReveal delay={300}>
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Leadership Philosophy
              </h3>
              <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Eyvonne's leadership philosophy rests on three interlocking principles that define both her personal practice and the institutional character of Daughter of Ellen.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {[
                  { principle: "Clarity", text: "Systems change demands structure. Advocacy that lacks rigor yields noise, not movement." },
                  { principle: "Courage", text: "Meaningful change requires naming difficult truths and holding institutions to account for them." },
                  { principle: "Compassion", text: "Community is only possible where psychological safety exists. Dignity is not negotiable." },
                ].map((p, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-border bg-background p-6 text-center transition-all duration-500 hover:border-secondary hover:-translate-y-1"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                      <span className="font-heading text-lg font-bold text-secondary">{p.principle.charAt(0)}</span>
                    </span>
                    <h5 className="mt-3 font-heading text-lg font-bold text-foreground">{p.principle}</h5>
                    <div className="gold-divider mx-auto my-3 w-12" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  This tripartite framework is not abstract. It is the operating principle behind every decision Daughter of Ellen makes, from how it structures its board governance to how it designs community spaces where neurodivergent individuals are centered not as subjects, but as authorities on their own experience.
                </p>
                <p>
                  Eyvonne's approach is distinctively integrated: executive without being distant, empathetic without being sentimental. She brings to every engagement a precise understanding of the emotional realities that families navigating neurodivergence and disability live with daily, and she holds that understanding alongside an equally precise commitment to the structural conditions necessary for lasting change.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Long-Term Vision */}
          <ScrollReveal delay={300}>
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Long-Term Vision and Continental Impact
              </h3>
              <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
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
            </div>
          </ScrollReveal>

          {/* Closing Statement */}
          <ScrollReveal delay={300}>
            <div className="mt-12 max-w-3xl mx-auto">
              <p className="text-sm leading-relaxed text-muted-foreground text-center">
                EyvonneEleko leads Daughter of Ellen with intentionality, accountability, and the conviction that building systems of inclusion is among the most important work of our time.
              </p>
            </div>
          </ScrollReveal>

          {/* Closing Quote */}
          <ScrollReveal delay={300}>
            <div className="mt-12 rounded-xl border border-border bg-parchment p-8 md:p-10 max-w-3xl mx-auto">
              <p className="font-heading text-lg italic text-foreground text-center md:text-xl">
                "She does not raise awareness. She builds what comes after it."
              </p>
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={400}>
            <div className="mt-10 mx-auto max-w-3xl rounded-xl border border-border bg-background p-8">
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

      {/* MEET THE TEAM */}
      <TeamSection />
    </main>
  );
};

export default About;
