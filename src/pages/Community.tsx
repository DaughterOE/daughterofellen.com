import { ActionLink, CalloutBand, ContentBand, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";
import { brand, communityUrl, programs } from "@/lib/institutionalContent";
const Community = () => <main className="pt-24"><PageHeading title="Community" description={brand.support} />
  <ContentBand><ImageTextRow slot="community.body1" title="Adult Community"><p>{brand.adult}</p><div className="flex flex-wrap gap-4 pt-2"><ActionLink to={communityUrl}>Join the Community</ActionLink><ActionLink to="/what-we-do/adult-community" secondary>Explore Adult Community</ActionLink></div></ImageTextRow></ContentBand>
  <CalloutBand>Belonging without judgment</CalloutBand>
  <ContentBand tone="muted"><ImageTextRow slot="community.body2" title="Parents & Caregivers" reverse><p>{programs[0].description}</p><div className="flex flex-wrap gap-4 pt-2"><ActionLink to="/what-we-do/family-support">Parent &amp; Family Resources</ActionLink><ActionLink to="/get-support" secondary>Explore Support</ActionLink></div></ImageTextRow></ContentBand>
</main>;
export default Community;
