import { useParams } from "react-router-dom";
import { ActionLink, ContentBand, Foundations, PageHeading, ProgramGrid } from "@/components/InstitutionalLayout";
import { brand, communityUrl, programs } from "@/lib/institutionalContent";
import NotFound from "@/pages/NotFound";

const inquiry = (subject: string) => `mailto:info@daughterofellen.org?subject=${encodeURIComponent(subject)}`;

export function WhatWeDo() {
  return <main className="pt-24"><PageHeading title="What We Do" description={brand.descriptor} /><Foundations /><ContentBand title="Our Delivery Areas" tone="muted"><ProgramGrid /></ContentBand></main>;
}

export function OurApproach() {
  return <main className="pt-24"><PageHeading title="Our Approach" description={brand.thesis} parent={{ label: "About", path: "/about" }} /><Foundations /><ContentBand title="Our Delivery Areas" tone="muted"><ProgramGrid /></ContentBand><ContentBand title="Building the evidence"><p className="mb-6 max-w-3xl leading-relaxed text-muted-foreground">{programs[7].description}</p><ActionLink to="/impact">View Impact &amp; Evidence</ActionLink></ContentBand></main>;
}

export function GetSupport() {
  return <main className="pt-24"><PageHeading title="Get Support" description={brand.support} />
    <ContentBand><div className="grid gap-8 md:grid-cols-2">
      {[
        { title: "Parents & Caregivers", description: programs[0].description, to: "/what-we-do/family-support", action: "Parent & Family Resources" },
        { title: "Neurodivergent & Disabled Adults", description: brand.adult, to: "/what-we-do/adult-community", action: "Explore Adult Community" },
        { title: "Access Fund", description: programs[5].description, to: "/access-fund", action: "Access Fund Information" },
        { title: "Tende by DOE", description: "Mental health and wellness", to: "/tende", action: "Explore Tende by DOE" },
      ].map(item => <article key={item.title} className="rounded-lg border border-border p-7"><h2 className="mb-4 font-heading text-2xl">{item.title}</h2><p className="mb-6 leading-relaxed text-muted-foreground">{item.description}</p><ActionLink to={item.to}>{item.action}</ActionLink></article>)}
    </div></ContentBand>
    <ContentBand title="Contact DOE" tone="muted"><div className="flex flex-wrap gap-4"><ActionLink to="/contact">Submit an Inquiry</ActionLink><ActionLink to={inquiry("Support Inquiry")} secondary>Email a Support Inquiry</ActionLink></div></ContentBand>
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

export function ProgramPage() {
  const { slug } = useParams();
  const program = programs.find(item => item.slug === slug);
  if (!program) return <NotFound />;
  const adult = slug === "adult-community";
  const education = slug === "inclusive-education";
  const workplace = slug === "workplace-inclusion";
  const technology = slug === "technology-accessibility";
  return <main className="pt-24"><PageHeading title={program.title} description={program.description} parent={{ label: "What We Do", path: "/what-we-do" }} />
    <ContentBand title={technology ? "Technology can remove barriers - or reproduce them. We work to make inclusion part of the design." : adult ? "Belonging without judgment" : education ? "Build more inclusive schools." : workplace ? "Build more inclusive workplaces." : "Identify & Support Early"}>
      <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{technology ? brand.technology : adult ? brand.adult : education || workplace ? brand.services : "We advocate for earlier identification, informed support and access to appropriate services so children and families are not left navigating alone. Early support should be timely, culturally relevant and connected to practical next steps."}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ActionLink to={adult ? communityUrl : education ? inquiry("School Training Inquiry") : workplace ? inquiry("Institutional Training Inquiry") : technology ? "/learn" : "/get-support"}>
          {adult ? "Join the Adult Community" : education ? "Request School Training" : workplace ? "Request Institutional Training" : technology ? "Explore Training" : "Get Support"}
        </ActionLink>
        <ActionLink secondary to={adult ? "/get-support" : education || workplace ? "/learn" : technology ? "/partner" : communityUrl}>{adult ? "Explore Support" : education || workplace ? "Explore DOE Academy" : technology ? "Partner With Us" : "Join the Community"}</ActionLink>
      </div>
    </ContentBand>
    {technology && <ContentBand title="Technology & Participation" tone="muted"><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{technologyModules.map(item => <article key={item.title} className="border-t border-border pt-6"><h3 className="mb-3 font-heading text-2xl">{item.title}</h3><p className="leading-relaxed text-muted-foreground">{item.description}</p></article>)}</div></ContentBand>}
    {(education || workplace) && <ContentBand title={education ? "Educator Pathway" : "Workplace Pathway"} tone="muted"><ul className="grid gap-4 sm:grid-cols-2">{(education ? ["Inclusive Classrooms", "Universal Design for Learning", "Disability & Neurodiversity Foundations", "Assistive Technology & AI"] : ["Disability Inclusion", "Neuroinclusive Management", "Accessible Workplace Practice", "AI & Accessibility"]).map(title => <li key={title} className="border-b border-border pb-4 font-heading text-xl">{title}</li>)}</ul><p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">For current offers, delivery formats, timing and pricing, contact DOE. Training requests are inquiries, not confirmed bookings.</p></ContentBand>}
  </main>;
}

export function Learn() {
  return <main className="pt-24"><PageHeading title="Learn & Train" description={brand.services} />
    <ContentBand title="DOE Academy"><p className="max-w-3xl leading-relaxed text-muted-foreground">For current offers, delivery formats, timing and pricing, contact DOE. Training requests are inquiries, not confirmed bookings.</p><div className="mt-8 flex flex-wrap gap-4"><ActionLink to={inquiry("School Training Inquiry")}>Request School Training</ActionLink><ActionLink to={inquiry("Workplace Training Inquiry")} secondary>Request Workplace Training</ActionLink></div></ContentBand>
    <ContentBand title="Learning Pathways" tone="muted"><div className="grid gap-8 md:grid-cols-3">{programs.filter(item => ["inclusive-education", "technology-accessibility", "workplace-inclusion"].includes(item.slug)).map(item => <article key={item.slug} className="border-t border-border pt-6"><h2 className="mb-4 font-heading text-2xl">{item.title}</h2><p className="mb-6 leading-relaxed text-muted-foreground">{item.description}</p><ActionLink to={`/what-we-do/${item.slug}`} secondary>Explore {item.shortTitle}</ActionLink></article>)}</div></ContentBand>
  </main>;
}

export function Impact() {
  return <main className="pt-24"><PageHeading title="Impact & Evidence" description={programs[7].description} />
    <ContentBand title="Building the evidence"><p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">DOE should prove work without overstating maturity. Reach, participation, outputs and outcomes are distinct measures.</p><div className="mt-8 flex flex-wrap gap-4"><ActionLink to="/projects">Explore Past Events / Projects</ActionLink><ActionLink to="/media" secondary>View Media Features</ActionLink></div></ContentBand>
    <ContentBand title="Evidence & Partnership" tone="muted"><div className="flex flex-wrap gap-4"><ActionLink to="/partner">Partner With Us</ActionLink><ActionLink to={inquiry("Research and Evidence Inquiry")} secondary>Contact DOE About Evidence</ActionLink></div></ContentBand>
  </main>;
}