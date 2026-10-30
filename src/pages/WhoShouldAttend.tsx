import { ActionLink, Callout, ContentBand, TextCards, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";

const audiences = [
  {
    title: "Parents and Caregivers",
    desc: "If you are raising a neurodivergent child or caring for an adult with a disability, this conference was built with you at its centre. You will find community, professional insight, and the knowledge that you are not navigating this journey alone. Your experience and your voice are not peripheral to this work. They are essential to it.",
  },
  {
    title: "Educators and School Leaders",
    desc: "From classroom teachers to school principals and education officers, this conference offers practical knowledge, evidence-based frameworks, and a peer community of practitioners committed to genuinely inclusive learning environments. Leave with tools you can implement immediately.",
  },
  {
    title: "HR Professionals and Employers",
    desc: "Neurodiversity is a competitive advantage. Organizations that actively include neurodivergent employees access a broader talent pool, improved problem-solving capacity, and higher retention rates. The conference offers frameworks, case studies, and expert guidance on building workplaces that work for everyone.",
  },
  {
    title: "Policymakers and Government Representatives",
    desc: "Nigeria has made legal commitments to disability inclusion. The conference is an opportunity to hear directly from those affected by gaps in implementation, to engage with evidence-based recommendations, and to leave with a clearer understanding of what meaningful policy action looks like on the ground.",
  },
  {
    title: "Clinicians and Allied Health Professionals",
    desc: "Psychologists, occupational therapists, speech and language therapists, developmental pediatricians, and other allied health professionals will find a cross-sector community of practice and an opportunity to contribute clinical expertise to community and policy solutions.",
  },
  {
    title: "Neurodivergent Individuals and Self-Advocates",
    desc: "Your presence is not symbolic. Your expertise is irreplaceable. The conference centers lived experience not as testimony alone, but as the primary evidence base for everything else we discuss. You belong at this table.",
  },
  {
    title: "Civil Society Organizations and Advocates",
    desc: "Partner with us. Learn from us. Challenge us. The Daughter of Ellen Conference is a convening space for everyone working toward a more inclusive Nigeria and a more inclusive Africa.",
  },
  {
    title: "Media and Communications Professionals",
    desc: "Help us tell this story. Media partners leave the conference with a deep understanding of the neurodivergence landscape in Nigeria and the relationships to continue covering it meaningfully. Media accreditation is available.",
  },
];

const WhoShouldAttend = () => (
  <main className="pt-24">
    <PageHeading title="Who Should Attend" description="The Daughter of Ellen Conference is designed for everyone who believes that neurodivergent children and adults deserve better." parent={{ label: "Events", path: "/events" }} />

    <ContentBand>
      <ImageTextRow slot="who-should-attend.body1">
        <Callout>That means this event is for you, regardless of your role or your starting point.</Callout>
      </ImageTextRow>
    </ContentBand>

    <ContentBand tone="tint">
      <TextCards columns={2} items={audiences.map((audience, i) => ({ title: audience.title, description: audience.desc }))} />
    </ContentBand>

    <ContentBand title="Register Now" tone="muted">
      <p className="text-lg leading-relaxed text-muted-foreground">Places are limited. Secure yours today.</p>
      <div className="mt-6"><ActionLink to="https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support">Register for the Webinar</ActionLink></div>
    </ContentBand>
  </main>
);

export default WhoShouldAttend;
