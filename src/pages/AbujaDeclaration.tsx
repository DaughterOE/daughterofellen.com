import { CalloutBand, ContentBand, TextCards, ImageTextRow, NumberedSteps, PageHeading } from "@/components/InstitutionalLayout";

const domains = [
  { title: "Early Identification", description: "Commitments to accessible, timely, and culturally competent developmental screening across Nigeria" },
  { title: "Education", description: "Commitments to inclusive classroom practice, teacher training, and curriculum reform" },
  { title: "Employment", description: "Commitments to neurodiversity-affirming hiring practices and workplace accommodation frameworks" },
  { title: "Policy and Legislation", description: "Commitments to stronger implementation and enforcement of existing disability law, and advocacy for legislative reform" },
  { title: "Community and Belonging", description: "Commitments to reducing stigma, building peer networks, and creating public environments that actively include neurodivergent individuals" },
];

const nextSteps = [
  "Formally submitted to the Federal Ministry of Education, the Ministry of Humanitarian Affairs, and the National Assembly",
  "Published and distributed to all conference delegates, partner organizations, and media contacts",
  "Used as the basis for Daughter of Ellen's annual policy scorecard, tracking progress against commitments year on year",
  "Updated and expanded at each subsequent annual conference, growing in scope and strengthening its accountability mechanisms",
];

const AbujaDeclaration = () => (
  <main className="pt-24">
    <PageHeading title="The Abuja Declaration" description="A Living Document for Lasting Change" parent={{ label: "Projects", path: "/projects" }} />

    <ContentBand>
      <ImageTextRow slot="abuja-declaration.body1" title="What Is the Abuja Declaration">
        <p>The Abuja Declaration on Neurodivergence Inclusion is a policy commitment document co-created by delegates at the inaugural Daughter of Ellen Conference. It is not a statement produced in isolation by a single organization. It is a declaration of collective responsibility, shaped by the voices of parents, educators, employers, policymakers, clinicians, and neurodivergent individuals themselves.</p>
        <p>The Declaration will be formally adopted at the close of the inaugural conference and submitted to relevant government ministries and the National Assembly. It represents the first structured, civil-society-led attempt to define what neurodivergence inclusion should look like in Nigeria, and to hold institutions accountable for delivering it.</p>
      </ImageTextRow>
    </ContentBand>

    <CalloutBand>"The Abuja Declaration is not a document. It is a commitment. And commitments require accountability."</CalloutBand>

    <ContentBand title="What the Declaration Covers" tone="muted">
      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">The Declaration addresses five domains of inclusion:</p>
      <TextCards items={domains} />
    </ContentBand>

    <ContentBand>
      <ImageTextRow slot="abuja-declaration.body2" title="How the Declaration Lives Beyond the Conference" reverse>
        <p>Following its adoption, the Abuja Declaration will be:</p>
      </ImageTextRow>
      <div className="mt-10"><NumberedSteps items={nextSteps.map(title => ({ title }))} /></div>
    </ContentBand>
  </main>
);

export default AbujaDeclaration;
