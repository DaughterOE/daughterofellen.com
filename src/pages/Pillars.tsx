import { ActionLink, ContentBand, Foundations, PageHeading, ProgramGrid } from "@/components/InstitutionalLayout";
import { brand } from "@/lib/institutionalContent";
const Pillars = () => <main className="pt-24"><PageHeading title="Our Foundations" description={brand.thesis} parent={{label: "About", path: "/about"}} /><Foundations heading={false} /><ContentBand title="Our Delivery Areas" tone="muted"><ProgramGrid /></ContentBand><ContentBand><ActionLink to="/impact">View Impact &amp; Evidence</ActionLink></ContentBand></main>;
export default Pillars;
