import { ActionLink, CalloutBand, ContentBand, Foundations, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";
import { brand } from "@/lib/institutionalContent";
const Vision = () => <main className="pt-24"><PageHeading title="Our Vision" description={brand.thesis} parent={{label: "About", path: "/about"}} />
  <ContentBand><ImageTextRow slot="mission.body1" title="Designed to Include."><p>{brand.descriptor}</p><p>{brand.support}</p><div className="pt-2"><ActionLink to="/what-we-do">Explore What We Do</ActionLink></div></ImageTextRow></ContentBand>
  <CalloutBand>Inclusion should be designed in, not added later.</CalloutBand>
  <Foundations tone="muted" />
</main>;
export default Vision;
