import { useParams } from "react-router-dom";
import { ActionLink, CalloutBand, ContentBand, Foundations, TextCards, ImageTextRow, PageHeading, ProgramGrid } from "@/components/InstitutionalLayout";
import { brand, communityUrl, programs } from "@/lib/institutionalContent";
import type { SiteImageSlot } from "@/lib/siteImages";
import NotFound from "@/pages/NotFound";

const inquiry = (subject: string) => `mailto:info@daughterofellen.org?subject=${encodeURIComponent(subject)}`;

export function WhatWeDo() {
  return <main className="pt-24"><PageHeading title="What We Do" description={brand.descriptor} />
    <ContentBand><ImageTextRow slot="whatwedo.body1" title="Designed to Include."><p>{brand.support}</p></ImageTextRow></ContentBand>
    <CalloutBand>{brand.thesis}</CalloutBand>
    <Foundations tone="muted" />
    <ContentBand title="Our Delivery Areas"><ProgramGrid /></ContentBand>
  </main>;
}

export function OurApproach() {
  return <main className="pt-24"><PageHeading title="Our Approach" description={brand.thesis} parent={{ label: "About", path: "/about" }} />
    <Foundations />
    <CalloutBand>Inclusion should be designed in, not added later.</CalloutBand>
    <ContentBand title="Our Delivery Areas" tone="muted"><ProgramGrid /></ContentBand>
    <ContentBand><ImageTextRow slot="approach.body1" title="Building the evidence" reverse><p>{programs[7].description}</p><div className="pt-2"><ActionLink to="/impact">View Impact &amp; Evidence</ActionLink></div></ImageTextRow></ContentBand>
  </main>;
}

export function GetSupport() {
  return <main className="pt-24"><PageHeading title="Get Support" description={brand.support} />
    <ContentBand><TextCards columns={2} items={[
      { title: "Parents & Caregivers", description: programs[0].description, to: "/what-we-do/family-support", action: "Parent & Family Resources" },
      { title: "Neurodivergent & Disabled Adults", description: brand.adult, to: "/what-we-do/adult-community", action: "Explore Adult Community" },
      { title: "Access Fund", description: programs[5].description, to: "/projects/access-fund", action: "Access Fund Information" },
      { title: "Tende by DOE", description: "Mental health and wellness", to: "/tende", action: "Explore Tende by DOE" },
    ]} /></ContentBand>
    <CalloutBand>Inclusion should not depend on individuals repeatedly asking to be accommodated.</CalloutBand>
    <ContentBand tone="muted"><ImageTextRow slot="get-support.body1" title="Contact DOE"><div className="flex flex-wrap gap-4"><ActionLink to="/contact">Submit an Inquiry</ActionLink><ActionLink to={inquiry("Support Inquiry")} secondary>Email a Support Inquiry</ActionLink></div></ImageTextRow></ContentBand>
  </main>;
}

const technologyModules = [
  { title: "EdTech & Inclusive Learning", description: "Tools and approaches that widen participation in education." },
  { title: "Universal Design for Learning", description: "Flexible ways of presenting information, supporting engagement and enabling learners to demonstrate understanding." },
  { title: "Assistive Technology", description: "Tools that support communication, mobility, learning, sensory access and participation." },
  { title: "AI for Accessibility", description: "Practical uses, limitations, bias and responsible implementation." },
  { title: "Accessible Digital Experiences", description: "Websites, forms, documents and digital services designed to work for more people." },
  { title: "Training & Partnerships", description: "How schools, employers, technology companies and institutions can work with DOE." },
];

const knownSlugs = ["family-support", "inclusive-education", "technology-accessibility", "adult-community", "workplace-inclusion"] as const;

export function ProgramPage() {
  const { slug } = useParams();
  const program = programs.find(item => item.slug === slug);
  if (!program) return <NotFound />;
  const adult = slug === "adult-community";
  const education = slug === "inclusive-education";
  const workplace = slug === "workplace-inclusion";
  const technology = slug === "technology-accessibility";
  const family = slug === "family-support";
  const known = (knownSlugs as readonly string[]).includes(program.slug);
  const body1 = (known ? `${program.slug}.body1` : "program.body1") as SiteImageSlot;
  const body2 = (known && !technology ? `${program.slug}.body2` : undefined) as SiteImageSlot | undefined;
  const callout = technology ? "Technology can remove barriers, or reproduce them."
    : family ? "Early support should be timely, culturally relevant and connected to practical next steps."
    : adult ? "Belonging without judgment"
    : education ? "DOE works with schools, employers and institutions to strengthen inclusive practice through training, accessibility-focused education and practical implementation support."
    : workplace ? "Programs can be adapted for educators, HR teams, managers and cross-functional institutional audiences."
    : program.description;
  return <main className="pt-24"><PageHeading title={program.title} description={program.description} parent={{ label: "What We Do", path: "/what-we-do" }} slot={known ? undefined : "program.hero"} />
    <ContentBand>
      <ImageTextRow slot={body1} title={technology ? "Technology can remove barriers, or reproduce them. We work to make inclusion part of the design." : adult ? "Belonging without judgment" : education ? "Build more inclusive schools." : workplace ? "Build more inclusive workplaces." : "Identify & Support Early"}>
        <p>{technology ? brand.technology : adult ? brand.adult : education || workplace ? brand.services : "We advocate for earlier identification, informed support and access to appropriate services so children and families are not left navigating alone. Early support should be timely, culturally relevant and connected to practical next steps."}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <ActionLink to={adult ? communityUrl : education ? inquiry("School Training Inquiry") : workplace ? inquiry("Institutional Training Inquiry") : technology ? "/learn" : "/get-support"}>
            {adult ? "Join the Adult Community" : education ? "Request School Training" : workplace ? "Request Institutional Training" : technology ? "Explore Training" : "Get Support"}
          </ActionLink>
          <ActionLink secondary to={adult ? "/get-support" : education || workplace ? "/learn" : technology ? "/partner" : communityUrl}>{adult ? "Explore Support" : education || workplace ? "Explore DOE Academy" : technology ? "Partner With Us" : "Join the Community"}</ActionLink>
        </div>
      </ImageTextRow>
    </ContentBand>
    <CalloutBand>{callout}</CalloutBand>
    {technology && <ContentBand title="Technology & Participation" tone="muted"><TextCards items={technologyModules} /></ContentBand>}
    {(education || workplace) && <ContentBand title={education ? "Educator Pathway" : "Workplace Pathway"} tone="muted">
      <TextCards columns={4} items={(education ? ["Inclusive Classrooms", "Universal Design for Learning", "Disability & Neurodiversity Foundations", "Assistive Technology & AI"] : ["Disability Inclusion", "Neuroinclusive Management", "Accessible Workplace Practice", "AI & Accessibility"]).map(title => ({ title }))} />
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">For current offers, delivery formats, timing and pricing, contact DOE. Training requests are inquiries, not confirmed bookings.</p>
    </ContentBand>}
    {body2 && <ContentBand tone={technology || education || workplace ? "default" : "muted"}>
      <ImageTextRow slot={body2} title={adult ? "Adult Community" : family ? "Parents & Caregivers" : education ? "Educators & Schools" : "Employers & Institutions"} reverse portrait={education}>
        <p>{adult ? program.description : family ? programs[0].description : education ? programs[1].description : programs[4].description}</p>
      </ImageTextRow>
    </ContentBand>}
  </main>;
}

export function Learn() {
  return <main className="pt-24"><PageHeading title="Learn & Train" description={brand.services} />
    <ContentBand><ImageTextRow slot="learn.body1" title="DOE Academy"><p>For current offers, delivery formats, timing and pricing, contact DOE. Training requests are inquiries, not confirmed bookings.</p><div className="flex flex-wrap gap-4 pt-2"><ActionLink to={inquiry("School Training Inquiry")}>Request School Training</ActionLink><ActionLink to={inquiry("Workplace Training Inquiry")} secondary>Request Workplace Training</ActionLink></div></ImageTextRow></ContentBand>
    <CalloutBand>Programs can be adapted for educators, HR teams, managers and cross-functional institutional audiences.</CalloutBand>
    <ContentBand title="Learning Pathways" tone="muted"><TextCards items={programs.filter(item => ["inclusive-education", "technology-accessibility", "workplace-inclusion"].includes(item.slug)).map(item => ({ title: item.title, description: item.description, to: `/what-we-do/${item.slug}`, action: `Explore ${item.shortTitle}` }))} /></ContentBand>
    <ContentBand><ImageTextRow slot="learn.body2" title="Build more inclusive schools and workplaces." reverse><p>{brand.services}</p><div className="pt-2"><ActionLink to="/contact" secondary>Contact DOE</ActionLink></div></ImageTextRow></ContentBand>
  </main>;
}

export function Impact() {
  return <main className="pt-24"><PageHeading title="Impact & Evidence" description={programs[7].description} />
    <ContentBand><ImageTextRow slot="impact.body1" title="Building the evidence"><p>DOE should prove work without overstating maturity. Reach, participation, outputs and outcomes are distinct measures.</p><div className="flex flex-wrap gap-4 pt-2"><ActionLink to="/events/past">Explore Past Events</ActionLink><ActionLink to="/media" secondary>View Media Features</ActionLink></div></ImageTextRow></ContentBand>
    <CalloutBand>Reach, participation, outputs and outcomes are distinct measures.</CalloutBand>
    <ContentBand tone="muted"><ImageTextRow slot="impact.body2" title="Evidence & Partnership" reverse><div className="flex flex-wrap gap-4"><ActionLink to="/partner">Partner With Us</ActionLink><ActionLink to={inquiry("Research and Evidence Inquiry")} secondary>Contact DOE About Evidence</ActionLink></div></ImageTextRow></ContentBand>
  </main>;
}
