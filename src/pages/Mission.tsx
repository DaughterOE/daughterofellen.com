import { ActionLink, CalloutBand, ContentBand, Foundations, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";
import { brand } from "@/lib/institutionalContent";
const Mission = () => <main className="pt-24"><PageHeading title="Mission & Vision" description={brand.descriptor} parent={{label: "About", path: "/about"}} />
  <ContentBand><ImageTextRow slot="mission.body1" title="Designed to Include."><p>{brand.thesis}</p><p>{brand.support}</p><div className="pt-2"><ActionLink to="/what-we-do">Explore What We Do</ActionLink></div></ImageTextRow></ContentBand>
  <CalloutBand>Inclusion should not depend on individuals repeatedly asking to be accommodated.</CalloutBand>
  <Foundations tone="muted" />
</main>;
export default Mission;
