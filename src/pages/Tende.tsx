import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ActionLink, CalloutBand, ContentBand, TextCards, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";

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
    <PageHeading title="Tende by DOE" description="A mental health and wellness space for every person who is carrying more than they should carry alone." parent={{ label: "About", path: "/about" }} />

    <ContentBand>
      <ImageTextRow slot="tende.body1" title="Who This Space Is For">
        <p>Tende. A name we created for a space we believed needed to exist. A word that sounds like what it means to us: to tend, to care, to do the quiet and necessary work of looking after something that matters.</p>
        <p className="font-heading text-xl italic text-foreground">That something is you.</p>
        <p>Tende by DOE is not a clinical service. It is a community. It is built for anyone navigating burnout, anxiety, depression, grief, or the particular exhaustion that comes from holding everything together for so long that you forgot what it felt like to put anything down.</p>
        <p>You do not need a diagnosis to be here. You do not need to be from any particular place or background. You do not need to be in crisis. You just need to be human and honest about the fact that you are not entirely okay, or that you want to be more than okay, and you are not sure how to get there on your own.</p>
      </ImageTextRow>
    </ContentBand>

    <CalloutBand>Tende is for the professional who delivers results every day and feels hollowed out by Thursday. For the parent who loves their family completely and still quietly wonders when it will be their turn. For the person who has been told they are doing fine by every external measure and cannot understand why they feel so far from it. For anyone who has been looking for a space that does not require them to arrive already healed.</CalloutBand>

    <ContentBand title="What Tende Offers" tone="muted">
      <TextCards columns={2} items={offerItems.map((item, i) => ({ title: item.title, description: item.desc }))} />
    </ContentBand>

    <ContentBand>
      <ImageTextRow slot="tende.body2" title="Tende Events" reverse>
        <p>Our first Tende by DOE gathering takes place in Lagos, Nigeria, bringing people together around rest, recovery and the work of tending to yourself. Tende events are open to anyone who is carrying more than they should carry alone, wherever they are.</p>
        <p>We are also building Tende programming in the United States, beginning with Dallas, Texas.</p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <ActionLink to="/join-tende">Join the Tende Community</ActionLink>
          <ActionLink to="/events/tende-sessions-01-mode" secondary>Register for a Tende Event</ActionLink>
          <Link to="/contact" className="px-2 py-2.5 font-body text-sm font-semibold text-foreground underline-offset-4 hover:underline">Contact Us</Link>
        </div>
      </ImageTextRow>
    </ContentBand>

    <ContentBand tone="tint">
      <div className="max-w-3xl rounded-md border border-border bg-background p-8 md:p-10">
        <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">A note on what Tende is not</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">Tende by DOE is a community and wellness platform. It is not a clinical mental health service, a crisis intervention line, or a substitute for professional psychiatric or psychological care. If you are experiencing a mental health emergency, please contact emergency services or a crisis line in your country. In Nigeria: contact your nearest emergency service. In the U.S.: call or text 988.</p>
      </div>
    </ContentBand>

    <ContentBand title="Tende by DOE is part of Daughter of Ellen." tone="muted">
      <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">Tende by DOE is the mental health and wellness branch of Daughter of Ellen Support and Empowerment Initiative. Our advocacy arm focuses on neurodivergence inclusion and disability rights across Africa and the diaspora. Tende extends our reach to every person navigating the harder parts of being human, without borders, without prerequisites.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ActionLink to="/pillars">Learn About Our Advocacy Work</ActionLink>
        <ActionLink to="/about" secondary>About Daughter of Ellen</ActionLink>
      </div>
    </ContentBand>
  </main>
  );
};

export default Tende;
