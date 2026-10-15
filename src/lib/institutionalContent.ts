export const brand = {
  tagline: "Designed to Include.",
  descriptor: "Advancing neurodiversity, disability inclusion and accessibility through education, technology, community and systems change.",
  support: "We work with individuals, families, educators, employers, communities and institutions to build environments where difference is understood, access is intentional and people can participate fully.",
  thesis: "Inclusion should not depend on individuals repeatedly asking to be accommodated. It should be designed into classrooms, technologies, workplaces, communities and public systems from the beginning.",
  technology: "Technology can remove barriers - or reproduce them. DOE works at the intersection of EdTech, assistive technology, artificial intelligence and accessible design to help schools, workplaces and communities use technology in ways that expand participation rather than exclusion.",
  services: "DOE works with schools, employers and institutions to strengthen inclusive practice through training, accessibility-focused education and practical implementation support. Programs can be adapted for educators, HR teams, managers and cross-functional institutional audiences.",
  adult: "A community for neurodivergent adults - including people who are diagnosed, self-identifying or still exploring their neurodivergence - to connect, learn, share experiences and access practical resources without judgment.",
};

export const foundations = [
  { title: "Identify & Support Early", description: "We advocate for earlier identification, informed support and access to appropriate services so children and families are not left navigating alone. Early support should be timely, culturally relevant and connected to practical next steps." },
  { title: "Equip Families & Educators", description: "We equip parents, caregivers, educators and institutions with practical knowledge, tools and community so neurodivergent people and persons with disabilities can be supported with dignity and competence." },
  { title: "Advance Inclusion & Systems Change", description: "We challenge stigma, improve access and work with communities, employers, technology leaders and policymakers to embed inclusion into the systems people encounter every day." },
];

export const programs = [
  { slug: "family-support", title: "Early Identification & Family Support", shortTitle: "Family Support", description: "Information, practical resources, referrals and community for families navigating developmental, disability and neurodiversity needs." },
  { slug: "inclusive-education", title: "Inclusive Education", shortTitle: "Inclusive Education", description: "Training and tools that help schools and educators build classrooms where more learners can participate and thrive." },
  { slug: "technology-accessibility", title: "Technology & Accessibility", shortTitle: "Technology & Accessibility", description: "Using EdTech, assistive technology, AI and accessible design to reduce barriers and expand participation." },
  { slug: "adult-community", title: "Adult Community", shortTitle: "Adult Community", description: "A community for neurodivergent adults - including people who are diagnosed, self-identifying or still exploring their neurodivergence - to connect, learn and access resources without judgment." },
  { slug: "workplace-inclusion", title: "Workplace Inclusion", shortTitle: "Workplace Inclusion", description: "Training and advisory support for employers building more accessible, neuroinclusive and disability-inclusive workplaces." },
  { slug: "access-fund", title: "Access Fund", shortTitle: "Access Fund", description: "Needs-based support for eligible individuals and families facing barriers to disability and neurodiversity-related services, assessments, assistive technology, educational support and other accessibility needs." },
  { slug: "advocacy-policy", title: "Advocacy & Policy", shortTitle: "Advocacy & Policy", description: "Public education, institutional engagement and policy work aimed at moving inclusion from aspiration to lived reality." },
  { slug: "research-evidence", title: "Research & Evidence", shortTitle: "Research & Evidence", description: "Tracking outcomes, publishing what DOE learns and strengthening the evidence base for inclusive practice in African contexts." },
];

export function programPath(slug: string) {
  if (slug === "access-fund") return "/access-fund";
  if (slug === "advocacy-policy") return "/abuja-declaration";
  if (slug === "research-evidence") return "/impact";
  return `/what-we-do/${slug}`;
}

export const navigation = [
  { label: "About", path: "/about", links: [
    { label: "Our Story", path: "/about" }, { label: "Mission & Vision", path: "/mission" },
    { label: "Our Approach", path: "/our-approach" }, { label: "Leadership", path: "/founder" },
    { label: "Tende by DOE", path: "/tende" }, { label: "Contact", path: "/contact" },
  ] },
  { label: "What We Do", path: "/what-we-do", links: [
    { label: "Explore What We Do", path: "/what-we-do" }, ...programs.slice(0, 7).map(p => ({ label: p.title, path: programPath(p.slug) })),
  ] },
  { label: "Learn", path: "/learn", links: [
    { label: "Learn & Train", path: "/learn" }, { label: "Inclusive Education", path: "/what-we-do/inclusive-education" },
    { label: "Workplace Inclusion", path: "/what-we-do/workplace-inclusion" }, { label: "Technology & Accessibility", path: "/what-we-do/technology-accessibility" },
  ] },
  { label: "Reports", path: "/impact", links: [
    { label: "Impact Reports", path: "/impact" }, { label: "Media Features", path: "/media" },
  ] },
  { label: "Get Involved", path: "/get-involved", links: [
    { label: "Get Involved", path: "/get-involved" }, { label: "Partner With Us", path: "/partner" },
    { label: "Fund the Work", path: "/get-involved#fund-the-work" }, { label: "Volunteer", path: "/get-involved#volunteer" },
  ] },
  { label: "Events", path: "/events", links: [
    { label: "Upcoming Events", path: "/events" }, { label: "Past Events", path: "/events/past" },
    { label: "Projects", path: "/projects" },
  ] },
];

export const communityUrl = "https://chat.whatsapp.com/GsfURXWU8fK6EnWHG8x2CW";