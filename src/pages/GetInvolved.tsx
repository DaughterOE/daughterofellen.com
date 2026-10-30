import { ActionLink, CalloutBand, ContentBand, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";
import { brand, communityUrl, programs, volunteerUrl } from "@/lib/institutionalContent";
const GetInvolved = () => <main className="pt-24"><PageHeading title="Get Involved" description={brand.descriptor} />
  <ContentBand><ImageTextRow slot="get-involved.body1" title="Partner With Us"><p>Corporate, school, government, NGO, funder and technical partnerships.</p><div className="pt-2"><ActionLink to="/partner">Start a Partnership</ActionLink></div></ImageTextRow></ContentBand>
  <ContentBand title="Fund the Work" tone="tint" id="fund-the-work"><p className="mb-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{programs[5].description}</p><div className="flex flex-wrap gap-4"><ActionLink to="/projects/access-fund">Explore the Access Fund</ActionLink><ActionLink secondary to="mailto:partnership@daughterofellen.org?subject=Funding%20Inquiry">Discuss Funding or Sponsorship</ActionLink></div></ContentBand>
  <ContentBand title="Volunteer With DOE" id="volunteer"><div className="flex flex-wrap gap-4"><ActionLink to={volunteerUrl}>Sign Up to Volunteer</ActionLink><ActionLink secondary to="mailto:info@daughterofellen.org?subject=Volunteer%20Inquiry">Inquire About Volunteering</ActionLink><ActionLink secondary to="/events">Explore Events</ActionLink></div></ContentBand>
  <CalloutBand tone="muted">{brand.support}</CalloutBand>
  <ContentBand><ImageTextRow slot="get-involved.body2" title="Community & Events" reverse><div className="flex flex-wrap gap-4"><ActionLink to={communityUrl}>Join the Community</ActionLink><ActionLink secondary to="/what-we-do/adult-community">Explore Adult Community</ActionLink><ActionLink secondary to="/events">Upcoming &amp; Past Events</ActionLink></div></ImageTextRow></ContentBand>
</main>;
export default GetInvolved;
