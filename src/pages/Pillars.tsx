import { ActionLink, CalloutBand, ContentBand, Foundations, ImageTextRow, PageHeading, ProgramGrid } from "@/components/InstitutionalLayout";
import { brand } from "@/lib/institutionalContent";
const Pillars = () => <main className="pt-24"><PageHeading title="Our Foundations" description={brand.thesis} parent={{label: "About", path: "/about"}} />
  <Foundations heading={false} />
  <CalloutBand>Inclusion should be designed in, not added later.</CalloutBand>
  <ContentBand title="Our Delivery Areas" tone="muted"><ProgramGrid /></ContentBand>
  <ContentBand><ImageTextRow slot="pillars.body1" title="Designed to Include." reverse><p>{brand.support}</p><div className="pt-2"><ActionLink to="/impact">View Impact &amp; Evidence</ActionLink></div></ImageTextRow></ContentBand>
</main>;
export default Pillars;
