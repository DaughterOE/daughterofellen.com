import { ActionLink, CalloutBand, ContentBand, TextCards, ImageTextRow, PageHeading, ProgramGrid } from "@/components/InstitutionalLayout";
import { brand } from "@/lib/institutionalContent";
const partnerTypes = [
  { title: "Corporate" }, { title: "School" }, { title: "Government" },
  { title: "NGO" }, { title: "Funder" }, { title: "Technical" },
];
const Partner = () => <main className="pt-24"><PageHeading title="Partner With Us" description={brand.descriptor} parent={{label: "Get Involved", path: "/get-involved"}} />
  <ContentBand><ImageTextRow slot="partner.body1" title="Build Inclusion Together"><p>Corporate, school, government, NGO, funder and technical partnerships.</p><div className="flex flex-wrap gap-4 pt-2"><ActionLink to="mailto:partnership@daughterofellen.org?subject=Partnership%20Enquiry">Start a Partnership Inquiry</ActionLink><ActionLink to="/impact" secondary>View Impact</ActionLink></div></ImageTextRow></ContentBand>
  <ContentBand tone="tint"><TextCards items={partnerTypes} /></ContentBand>
  <CalloutBand tone="muted">{brand.support}</CalloutBand>
  <ContentBand title="Our Delivery Areas"><ProgramGrid /></ContentBand>
  <ContentBand tone="muted"><ImageTextRow slot="partner.body2" title="Fund the Access Fund" reverse><div><ActionLink to="/projects/access-fund">Explore the Access Fund</ActionLink></div></ImageTextRow></ContentBand>
</main>;
export default Partner;
