import { ActionLink, ContentBand, PageHeading } from "@/components/InstitutionalLayout";
import { brand, communityUrl, programs } from "@/lib/institutionalContent";
const GetInvolved = () => <main className="pt-24"><PageHeading title="Get Involved" description={brand.descriptor} />
  <ContentBand title="Partner With Us"><p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">Corporate, school, government, NGO, funder and technical partnerships.</p><ActionLink to="/partner">Start a Partnership</ActionLink></ContentBand>
  <ContentBand title="Fund the Work" tone="muted" id="fund-the-work"><p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">{programs[5].description}</p><div className="flex flex-wrap gap-4"><ActionLink to="/access-fund">Explore the Access Fund</ActionLink><ActionLink secondary to="mailto:partnership@daughterofellen.org?subject=Funding%20Inquiry">Discuss Funding or Sponsorship</ActionLink></div></ContentBand>
  <ContentBand title="Volunteer With DOE" id="volunteer"><div className="flex flex-wrap gap-4"><ActionLink to="mailto:info@daughterofellen.org?subject=Volunteer%20Inquiry">Inquire About Volunteering</ActionLink><ActionLink secondary to="/events">Explore Events</ActionLink></div></ContentBand>
  <ContentBand title="Community & Events" tone="muted"><div className="flex flex-wrap gap-4"><ActionLink to={communityUrl}>Join the Community</ActionLink><ActionLink secondary to="/what-we-do/adult-community">Explore Adult Community</ActionLink><ActionLink secondary to="/events">Upcoming &amp; Past Events</ActionLink></div></ContentBand>
</main>;
export default GetInvolved;
