import { ActionLink, CalloutBand, ContentBand, TextCards, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";

const WHATSAPP_URL = "https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW";

const cards = (items: string[]) => items.map(title => ({ title }));

const Prose = ({ children }: { children: React.ReactNode }) => <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">{children}</div>;

const AccessFund = () => (
  <main className="pt-24">
    <PageHeading title="The Daughter of Ellen Access Fund" description="Expanding Access. Investing in People. Building More Inclusive Communities." parent={{ label: "Projects", path: "/projects" }} crumb="DOE Access Fund" />

    <ContentBand>
      <ImageTextRow slot="access-fund.body1" portrait>
        <p className="font-semibold text-foreground">An initiative of Daughter of Ellen Support &amp; Empowerment Initiative</p>
        <p>At Daughter of Ellen, we believe that access can change the course of a person's life.</p>
        <p>The right assessment can provide answers.</p>
        <p>The right therapy can unlock communication.</p>
        <p>The right support can create opportunities in education, employment, healthcare, and everyday life.</p>
        <p>Yet for far too many neurodivergent individuals, persons with disabilities, and their families, these opportunities remain out of reach, not because the need doesn't exist, but because the financial barriers are too great.</p>
        <p>The Daughter of Ellen Access Fund was created to help bridge that gap.</p>
        <p>It is a community investment initiative dedicated to expanding access to essential services and support, ensuring that more individuals and families can receive the care and resources they need to thrive.</p>
        <p className="border-l-2 border-secondary pl-4 text-base">For the current funding cycle, application status and selection details, contact DOE. Joining the WhatsApp community is not an application or a place on a waitlist.</p>
        <a href="mailto:info@daughterofellen.org?subject=Access%20Fund%20Inquiry" className="inline-block text-base text-primary underline">Contact DOE About the Access Fund</a>
      </ImageTextRow>
    </ContentBand>

    <CalloutBand>Because everyone deserves the opportunity to reach their full potential.</CalloutBand>

    <ContentBand tone="muted">
      <ImageTextRow slot="access-fund.body2" title="A Shared Commitment to Greater Access" reverse>
        <p>The Daughter of Ellen Access Fund was established through the generous support of The Eyvonne Anthony Brand, reflecting a shared commitment to creating a world where accessibility and inclusion are not privileges, but expectations.</p>
        <p>For years, both Daughter of Ellen and The Eyvonne Anthony Brand have been guided by a common belief: that meaningful change happens when awareness is matched with action.</p>
        <p>While Daughter of Ellen continues to advocate for systemic change through education, community engagement, and policy conversations, the Access Fund represents an opportunity to provide practical support to individuals and families navigating challenges today.</p>
        <p>It is one expression of a shared commitment to removing barriers, expanding opportunity, and investing in the wellbeing of our communities.</p>
      </ImageTextRow>
    </ContentBand>

    <ContentBand title="About the Access Fund">
      <Prose>
        <p>The Daughter of Ellen Access Fund provides financial support to eligible neurodivergent individuals, persons with disabilities, and families seeking disability and neurodiversity related services.</p>
        <p>Depending on available funding and community needs, assistance may be available for:</p>
      </Prose>
      <div className="my-8"><TextCards columns={4} items={cards([
        "Developmental and diagnostic assessments", "Speech and language therapy", "Occupational therapy",
        "Behaviour therapy", "Mental health support", "Assistive technology", "Accessibility equipment",
        "Educational support", "Specialist consultations", "Other accessibility related services reviewed on a case by case basis",
      ])} /></div>
      <Prose><p>Every funding cycle is designed to maximize community impact while ensuring the long-term sustainability of the initiative.</p></Prose>
    </ContentBand>

    <ContentBand title="Who the Access Fund Supports" tone="tint">
      <Prose>
        <p>The Access Fund exists to support members of our community who meet the eligibility requirements established for each funding cycle.</p>
        <p>This may include:</p>
      </Prose>
      <div className="my-8"><TextCards items={cards([
        "Neurodivergent children, adolescents, and adults", "Persons with disabilities", "Parents, caregivers, and families",
        "Individuals awaiting assessment or diagnosis", "Children requiring early intervention", "Individuals seeking accessibility related services or support",
      ])} /></div>
      <Prose><p>Eligibility requirements and available funding may vary depending on the objectives and resources available during each application period.</p></Prose>
    </ContentBand>

    <ContentBand title="Our Approach" tone="muted">
      <Prose>
        <p>At Daughter of Ellen, we recognize that no two journeys are the same.</p>
        <p>Every application is considered with care, dignity, fairness, and respect.</p>
        <p>Our review process is designed to ensure that available resources are distributed responsibly while prioritizing those facing significant barriers to accessing essential support.</p>
        <p>We are committed to operating the Access Fund with transparency, accountability, and compassion, always keeping the needs of our community at the center of every decision.</p>
      </Prose>
    </ContentBand>

    <ContentBand title="How to Access the Fund">
      <Prose>
        <p>Applications for the Daughter of Ellen Access Fund are announced during designated funding cycles.</p>
        <p>To ensure you receive timely updates, we encourage you to join the Daughter of Ellen WhatsApp Community.</p>
        <p>Community members receive information about:</p>
      </Prose>
      <div className="my-8"><TextCards columns={4} items={cards([
        "Access Fund application periods", "Eligibility criteria", "Required documentation", "Available support opportunities",
        "Community resources", "Educational programmes", "Events and announcements",
      ])} /></div>
      <Prose><p>Joining the community is the best way to stay informed and prepare for future application opportunities.</p></Prose>
      <div className="mt-6"><ActionLink to={WHATSAPP_URL}>Join Our WhatsApp Community</ActionLink></div>
    </ContentBand>

    <ContentBand tone="tint">
      <ImageTextRow slot="founder.body1" portrait title="A Message from Our Founder">
        <p>When I founded Daughter of Ellen, I envisioned an organization that would do more than raise awareness.</p>
        <p>I wanted us to help build a world where neurodivergent individuals and persons with disabilities could access the opportunities, services, and support they deserve, not simply because someone chose to help, but because inclusion should be how our communities are designed.</p>
        <p>Along the way, I have met countless individuals and families who knew exactly what support they needed but simply could not afford to access it.</p>
        <p>The Daughter of Ellen Access Fund was created with those families in mind.</p>
        <p>I am deeply grateful that The Eyvonne Anthony Brand has chosen to establish this initiative alongside Daughter of Ellen, allowing us to take another meaningful step toward expanding access within our community.</p>
        <p>While we continue advocating for long-term systemic change, this fund allows us to respond to immediate needs with practical support and hope.</p>
        <p>This is only the beginning, and I look forward to the lives that will be touched through this initiative.</p>
        <div className="pt-2 text-base">
          <p className="font-heading text-lg font-semibold text-foreground">Eyvonne Anthony</p>
          <p className="text-sm">Founder &amp; Executive Director</p>
          <p className="text-sm">Daughter of Ellen Support &amp; Empowerment Initiative</p>
        </div>
      </ImageTextRow>
    </ContentBand>

    <ContentBand title="A Long-Term Vision" tone="muted">
      <Prose>
        <p>The Daughter of Ellen Access Fund is part of a broader vision to create communities where neurodivergent individuals and persons with disabilities have equitable access to the resources they need to thrive.</p>
        <p>As the initiative grows, we hope to expand the number of individuals and families supported, broaden the range of services available, and strengthen pathways to care across Africa and the diaspora.</p>
        <p>Every life changed through this initiative brings us one step closer to that vision.</p>
      </Prose>
    </ContentBand>

    <ContentBand title="Important Information">
      <Prose>
        <p>The Daughter of Ellen Access Fund operates based on available funding and organisational capacity.</p>
        <p>Submitting an application does not guarantee financial assistance.</p>
        <p>Eligibility requirements, available funding, and programme priorities may change over time to ensure the responsible stewardship of resources and the long-term sustainability of the initiative.</p>
      </Prose>
    </ContentBand>

    <ContentBand title="Join Our Community" tone="tint">
      <Prose>
        <p>Whether you are seeking support, looking for trusted resources, or simply want to stay connected with our work, we invite you to become part of the Daughter of Ellen community.</p>
        <p>By joining our WhatsApp Community, you'll receive updates on the Access Fund, educational resources, upcoming programmes, community events, and opportunities to stay informed.</p>
        <p>Together, we are building a future where access is not determined by circumstance, but strengthened through community, collaboration, and a shared commitment to inclusion.</p>
      </Prose>
      <div className="mt-6"><ActionLink to={WHATSAPP_URL}>Join Our WhatsApp Community</ActionLink></div>
    </ContentBand>
  </main>
);

export default AccessFund;
