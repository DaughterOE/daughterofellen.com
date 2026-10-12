import { ActionLink, ContentBand, Foundations, PageHeading } from "@/components/InstitutionalLayout";
import { brand } from "@/lib/institutionalContent";
const Mission = () => <main className="pt-24"><PageHeading title="Mission & Vision" description={brand.descriptor} parent={{label: "About", path: "/about"}} /><ContentBand title="Designed to Include."><p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{brand.thesis}</p><p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">{brand.support}</p></ContentBand><Foundations /><ContentBand tone="muted"><ActionLink to="/what-we-do">Explore What We Do</ActionLink></ContentBand></main>;
export default Mission;
