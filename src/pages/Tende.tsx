import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const offerItems = [
  {
    title: "Community and Connection",
    desc: "Peer spaces, both in person and online, where you can be honest about what you are carrying without performing strength. Connection with others who understand because they are living it too.",
  },
  {
    title: "Programming and Events",
    desc: "Workshops, guided experiences, and community gatherings designed around the topics that matter most: burnout recovery, identity and self-worth, anxiety and the weight of constant pressure, grief, rest as a practice, and the work of learning to tend to yourself without guilt.",
  },
  {
    title: "Psychoeducation",
    desc: "Access to information that helps you understand what you are experiencing and why, in language that does not require a clinical background to understand. Knowledge that gives you something to do with what you now know.",
  },
  {
    title: "Guided Wellness Experiences",
    desc: "Curated events and immersive experiences designed to move people through awareness, into practical tools, and toward the kind of lasting shift that changes how you move through the world.",
  },
];

const Tende = () => {
  useEffect(() => {
    document.title = "Tende by DOE | Mental Health and Wellness | Daughter of Ellen";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Tende by DOE is a universal mental health and wellness space for anyone navigating burnout, anxiety, depression, or emotional exhaustion. No diagnosis required. No background required. You are welcome here exactly as you are.");
    }
  }, []);

  return (
  <main className="pt-24">

    {/* HERO */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb -right-24 top-0 h-96 w-96 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Tende by DOE
          </h1>
          <div className="gold-divider mx-auto mt-6 max-w-xs" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            A mental health and wellness space for every person who is carrying more than they should carry alone.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={350}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Tende. A name we created for a space we believed needed to exist. A word that sounds like what it means to us: to tend, to care, to do the quiet and necessary work of looking after something that matters.
          </p>
          <p className="mt-2 font-heading text-lg italic text-foreground">That something is you.</p>
        </ScrollReveal>
      </div>
    </section>

    {/* WHO THIS SPACE IS FOR */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-0 bottom-0 h-64 w-64 bg-secondary" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Who This Space Is For
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Tende by DOE is not a clinical service. It is a community. It is built for anyone navigating burnout, anxiety, depression, grief, or the particular exhaustion that comes from holding everything together for so long that you forgot what it felt like to put anything down.
            </p>
            <p>
              You do not need a diagnosis to be here. You do not need to be from any particular place or background. You do not need to be in crisis. You just need to be human and honest about the fact that you are not entirely okay, or that you want to be more than okay, and you are not sure how to get there on your own.
            </p>
            <p>
              Tende is for the professional who delivers results every day and feels hollowed out by Thursday. For the parent who loves their family completely and still quietly wonders when it will be their turn. For the person who has been told they are doing fine by every external measure and cannot understand why they feel so far from it. For anyone who has been looking for a space that does not require them to arrive already healed.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* WHAT TENDE OFFERS */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="deco-orb right-0 top-1/4 h-72 w-72 bg-secondary" />
      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Tende Offers
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {offerItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:border-secondary hover:shadow-lg hover:-translate-y-1">
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* TENDE IN THE UNITED STATES */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb left-1/3 top-0 h-80 w-80 bg-forest-light" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Tende in the United States
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-10 text-base leading-relaxed text-muted-foreground">
            Tende by DOE is actively building its presence in the United States, starting with communities in cities like Dallas, Texas, where we are developing programming for a diverse audience of people across all backgrounds who are navigating mental wellness without always having community to support them. If you are in the U.S. and want to be part of what we are building, we want to hear from you.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/join-tende"
              className="rounded-full border-2 border-secondary bg-secondary px-6 py-2.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:shadow-lg"
            >
              Join the Tende Community
            </Link>
            <Link
              to="/get-involved"
              className="rounded-full border-2 border-secondary px-6 py-2.5 font-body text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
            >
              Register Your Interest for U.S. Events
            </Link>
            <Link
              to="/contact"
              className="rounded-full border-2 border-border px-6 py-2.5 font-body text-sm font-semibold text-foreground transition-all duration-300 hover:border-secondary hover:text-secondary"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* DISCLAIMER */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
              A note on what Tende is not
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Tende by DOE is a community and wellness platform. It is not a clinical mental health service, a crisis intervention line, or a substitute for professional psychiatric or psychological care. If you are experiencing a mental health emergency, please contact emergency services or a crisis line in your country. In Nigeria: contact your nearest emergency service. In the U.S.: call or text 988.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* RELATIONSHIP TO DOE */}
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="deco-orb right-0 bottom-0 h-64 w-64 bg-secondary" />
      <div className="relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            Tende by DOE is part of Daughter of Ellen.
          </h2>
          <div className="gold-divider mx-auto mt-4 max-w-xs" />
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Tende by DOE is the mental health and wellness branch of Daughter of Ellen Support and Empowerment Initiative. Our advocacy arm focuses on neurodivergence inclusion and disability rights across Africa and the diaspora. Tende extends our reach to every person navigating the harder parts of being human, without borders, without prerequisites.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pillars"
              className="rounded-full border-2 border-secondary bg-secondary px-6 py-2.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:shadow-lg"
            >
              Learn About Our Advocacy Work
            </Link>
            <Link
              to="/about"
              className="rounded-full border-2 border-secondary px-6 py-2.5 font-body text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground"
            >
              About Daughter of Ellen
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
  );
};

export default Tende;
