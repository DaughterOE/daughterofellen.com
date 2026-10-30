import { ActionLink, CalloutBand, ContentBand, Foundations, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";
import FounderBio from "@/components/FounderBio";
import TeamSection from "@/components/home/TeamSection";
import { brand } from "@/lib/institutionalContent";

const About = () => (
  <main className="pt-24">
    <PageHeading title="About Daughter of Ellen" description={brand.descriptor} />

    <ContentBand>
      <ImageTextRow slot="about.body1" title="Our Story">
        <p className="font-heading text-2xl text-foreground">{brand.tagline}</p>
        <p>Daughter of Ellen was born from conviction and personal experience. Named as a tribute to legacy, resilience, and the quiet, unwavering strength of maternal love, the initiative carries in its name a promise: that every child will be seen the way a mother sees her daughter, fully, without condition, and with fierce, uncompromising hope.</p>
        <p>{brand.support}</p>
      </ImageTextRow>
      <div className="mt-10 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
        <p>The founders recognized that the barriers facing neurodivergent children across Africa are not simply medical. They are structural, cultural, and political. Early diagnosis is inaccessible. Inclusive education is rare. Workplaces are unwelcoming. Policy frameworks exist on paper but not in practice. Families carry these burdens largely alone.</p>
        <p>Daughter of Ellen was established to address all of it. Not through charity. Through empowerment, systems change, community, and advocacy.</p>
        <p>In 2026, Daughter of Ellen Support and Empowerment Initiative extended its reach with the launch of Tende by DOE, a mental health and wellness branch with no geographic or demographic restriction. Tende exists for every person navigating burnout, anxiety, depression, or the quiet exhaustion of carrying too much for too long, whether or not they have a diagnosis, and regardless of where they come from. It is the part of our work that says: you do not have to be from anywhere specific to deserve support.</p>
        <div className="pt-2"><ActionLink to="/tende">Discover Tende by DOE</ActionLink></div>
      </div>
    </ContentBand>

    <CalloutBand>"The most powerful thing a society can do for a neurodivergent child is build a world that already knows how to include them."</CalloutBand>

    <ContentBand tone="muted">
      <ImageTextRow slot="about.body2" title="What Makes Us Different" reverse>
        <p>{brand.thesis}</p>
        <p>Our work is evidence-based, policy-oriented, and community-rooted. We bring together parents, clinicians, educators, employers, policymakers, and neurodivergent individuals at the same table, not in separate rooms.</p>
      </ImageTextRow>
    </ContentBand>

    <Foundations tone="tint" />

    <FounderBio sectionTitle="Our Founder" />

    <TeamSection />
  </main>
);

export default About;
