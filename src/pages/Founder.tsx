import { PageHeading } from "@/components/InstitutionalLayout";
import FounderBio from "@/components/FounderBio";

const Founder = () => <main className="pt-24">
  <PageHeading title="Eyvonne Eleko" description="Strategist · Advocate · Architect of Inclusion" parent={{ label: "About", path: "/about" }} />
  <FounderBio showName={false} />
</main>;

export default Founder;
