import flyer from "@/assets/inclusive-classrooms-flyer.jpeg";
import inclusionExchangeArt from "@/assets/events/inclusion-exchange-flyer.jpg";
import tendeSessionsArt from "@/assets/events/tende-mode-flyer.jpg";
import lc1 from "@/assets/lagos-city/IMG_5900.jpg";
import lc2 from "@/assets/lagos-city/IMG_5909.jpg";
import lc3 from "@/assets/lagos-city/IMG_5920.jpg";
import lc4 from "@/assets/lagos-city/IMG_5942.jpg";
import lc5 from "@/assets/lagos-city/IMG_5943.jpg";
import lc6 from "@/assets/lagos-city/IMG_5953.jpg";
import lc7 from "@/assets/lagos-city/IMG_5982.jpg";
import lc8 from "@/assets/lagos-city/IMG_6082.jpg";
import lc9 from "@/assets/lagos-city/IMG_6103.jpg";
import lc10 from "@/assets/lagos-city/IMG_6105.jpg";

export type Speaker = { name: string; title: string; photo?: string };

/** A list item may start with a short bold lead followed by the rest of the sentence. */
export type ReportItem = { lead?: string; text: string; href?: string };
export type ReportSection = { heading: string; paragraphs?: string[]; items?: ReportItem[]; ordered?: boolean; afterItems?: string[] };
export type EventReport = { title: string; details: [string, string][]; sections: ReportSection[] };

export type DoeEvent = {
  slug: string; label: string; startsAt: string; endsAt: string; title: string; theme: string;
  date: string; time: string; venue: string; description: string; cta: string; link: string;
  image?: string; imageAlt?: string; speakers: Speaker[]; recap?: string; reportUrl?: string; report?: EventReport; gallery: string[];
};

export const reportPath = (slug: string) => `/events/${slug}#report`;

const aiReport: EventReport = {
  title: "AI for Accessibility: Building Inclusive Solutions for the Future",
  details: [["Date", "7th August 2026"], ["Format", "Virtual Webinar"], ["Time", "6 pm to 8 pm WAT"], ["Participants", "366"], ["Prepared By", "Bethel Amurawaiye"]],
  sections: [
    { heading: "Overview", paragraphs: [
      "As part of Daughter of Ellen's commitment to inclusive skills-building, the organisation hosted a virtual AI Empowerment Masterclass in partnership with Lola Adey of Vibe Code Africa. The session was designed for the general public, including neurodivergent participants, and introduced foundational AI literacy alongside practical, hands-on use of AI tools in an accessible and supportive format.",
      "The session reflected DOE's broader commitment to building practical, future-relevant skills and expanding opportunities within the neurodivergent community.",
    ] },
    { heading: "Objectives", ordered: true, items: [
      { lead: "Introduce practical AI literacy", text: "by equipping participants with a foundational, accessible understanding of AI tools and how they work." },
      { lead: "Demystify AI for everyday and professional use", text: "by showing participants how AI tools can support learning, communication, and productivity in ways suited to diverse cognitive styles." },
      { lead: "Build confidence with hands-on practice", text: "by giving participants direct, guided experience using AI tools in a low-pressure, supportive environment." },
      { lead: "Promote inclusive tech adoption:", text: "Position AI as an accessibility enabler, not just a productivity tool, for neurodivergent individuals." },
      { lead: "Support DOE's broader empowerment mandate", text: "by Tying the session to its mission of building skills and opportunity within the neurodivergent community." },
    ] },
    { heading: "Summary", paragraphs: [
      "The masterclass met its objectives by combining accessible instruction with practical, guided use of AI tools, giving participants both the confidence and the context to see AI as an enabler of independence rather than a barrier. The session reinforces DOE's continued investment in equipping the neurodivergent community with future-relevant digital skills, and strengthens DOE's partnership with Vibe Code Africa for future collaborative programming.",
    ] },
    { heading: "Participant Engagement", paragraphs: [
      "Participants actively engaged throughout the session through questions, reflections, and practical participation. The level of engagement demonstrated strong interest in gaining a practical understanding of AI and in having continued opportunities to learn from professionals and apply new skills to personal and professional development.",
      "Following the workshop, participants received certificates of participation for their portfolios.",
    ] },
    { heading: "Key Outcomes", items: [
      { text: "Participants left with a working understanding of what AI tools are and how to use them, reducing the intimidation factor often associated with new tech." },
      { text: "Participants saw concrete examples of AI supporting learning, communication, and productivity, making the tools feel relevant to their own routines and work." },
      { text: "Direct, guided practice gave participants real experience using AI tools themselves, rather than just observing, building comfort through repetition in a safe setting." },
      { text: "Participants began to see AI as an accessibility tool that can support neurodivergent ways of working, not just a generic productivity add-on." },
      { text: "The session strengthened DOE's positioning as a hands-on skills-builder for the neurodivergent community, and deepened the working relationship with Vibe Code Africa." },
    ] },
    { heading: "Conclusion", paragraphs: [
      "The AI Empowerment Masterclass achieved its core objective of providing participants with an accessible and practical introduction to AI while presenting the technology as a potential tool for greater independence and inclusion.",
      "The partnership with Vibe Code Africa complemented DOE's inclusion-focused approach with technical facilitation and created an opportunity for future collaborative programming. The session further supports DOE's broader commitment to building practical, future-relevant skills and expanding opportunities for the community it serves.",
    ] },
  ],
};

const lagosWalkReport: EventReport = {
  title: "Lagos Awareness Walk Report",
  details: [["Theme", "Walk for Neurodiversity & Disability Inclusion"], ["Date", "6th June 2026"], ["Route", "Johnson Jakande Tinubu Park (JJT) to City View Hotel (Taiwo Close), Ikeja, and back to JJT"], ["Time", "9 am to 12 noon"], ["Report Prepared By", "Bethel Irumudomon"]],
  sections: [
    { heading: "Summary", paragraphs: [
      "The awareness walk was organised with two key objectives: to raise awareness that persons with disabilities and neurodivergent Nigerians deserve visibility, dignity, understanding, and inclusion, and to promote the importance of early identification and intervention.",
      "The walk focused on key themes including inclusion and accessibility, understanding disability and neurodivergence, the importance of early support, and how to challenge stigma while reshaping cultural narratives around disability in Nigeria. The active engagement phase of the walk lasted approximately one hour within the 3-hour programme.",
    ] },
    { heading: "Audience", items: [{ lead: "Initial projection:", text: "30 participants" }, { lead: "Actual attendance:", text: "53 participants" }] },
    { heading: "Media coverage", paragraphs: ["Four media houses covered the event:"], ordered: true, items: [
      { lead: "Punch Newspaper:", text: "Punch news", href: "https://punchng.com/ngo-calls-for-stronger-support-inclusion-for-neurodivergent-children/" },
      { lead: "The Nigerian Tribune:", text: "Tribune news", href: "https://tribuneonlineng.com/stakeholders-advocate-inclusive-education-for-children-with-special-needs/" },
      { text: "Arise News" },
      { lead: "TVC News:", text: "TVC news", href: "https://www.youtube.com/watch?v=mODkcnYVCpo" },
    ] },
    { heading: "Issues encountered", ordered: true, items: [{ text: "Delay in securing a suitable location before the event" }, { text: "Access coordination for media houses at the venue" }] },
    { heading: "Conclusion", paragraphs: [
      "The awareness walk was successfully conducted with a higher turnout than initially projected, demonstrating strong community interest in neurodiversity and disability inclusion. Through direct engagement with residents, stakeholders, and members of the public, key messages were effectively communicated, leading to increased awareness and understanding of the issues discussed.",
      "The event also generated significant interest within the community, with several participants expressing willingness to volunteer and support future initiatives after the walk. This reflects the effectiveness of the campaign in mobilising community participation and strengthening local ownership of disability inclusion efforts.",
      "Overall, the activity successfully achieved its objectives and reinforced the importance of continued advocacy, volunteer engagement, and collaboration with relevant stakeholders to sustain momentum and drive long-term impact.",
    ] },
  ],
};

const livingItReport: EventReport = {
  title: "Report on Living It: A conversation on Inclusion, Accessibility, Stigma and the Search for Support",
  details: [["Date", "20th June 2026"], ["Format", "Virtual Webinar"], ["Time", "3 pm to 5 pm WAT"], ["Prepared By", "Bethel Amurawaiye"]],
  sections: [
    { heading: "Objectives", ordered: true, items: [
      { text: "Explore barriers to inclusion, accessibility, and support across Nigeria and Africa." },
      { text: "Highlight evidence-informed approaches to advocacy and systems change." },
      { text: "Foster collaboration among professionals, advocates, caregivers, and community members." },
    ] },
    { heading: "Summary", paragraphs: [
      "The webinar was a structured listening session that brought together neurodivergent individuals, persons with disabilities, parents, caregivers, and allies to share lived experiences, identify gaps in support, and highlight community priorities.",
      "The discussions underscored why these conversations remain more important than ever. An estimated 35 million Nigerians live with a disability, yet significant barriers to inclusion persist. More than 85% of schools in Nigeria are not accessible to students with disabilities, and approximately 70% of children with disabilities remain out of school. These figures reflect deep systemic inequities that continue to limit access to education, healthcare, employment, and community participation.",
      "Beyond these structural challenges, cultural perceptions further compound exclusion. Across Nigeria and much of Africa, neurodivergence is often interpreted through spiritual or moral lenses, contributing to stigma, delayed diagnosis, and limited access to appropriate support and interventions.",
      "The session explored these interconnected issues by creating space for neurodivergent individuals, advocates, caregivers and persons with disabilities to share their experiences directly. Discussions focused on four key themes: inclusion in every space, systems that exclude, social stigma and family dynamics, and access to support and resources. Together, these conversations provided valuable insights into the barriers communities face while identifying opportunities for more inclusive policies, practices, and advocacy.",
    ] },
    { heading: "Key Highlights from the Speakers", paragraphs: [
      "Eyvonne Anthony opened the webinar by setting the context for the discussion, emphasizing Daughter of Ellen Initiative's commitment to creating platforms that amplify lived experiences, challenge stigma, and promote more inclusive systems for neurodivergent individuals and persons with disabilities.",
      "Dr. Davis spoke about navigating multiple identities and shared her work on 3e (thrice-exceptional) learners. These are individuals who are both gifted and have multiple disabilities or exceptionalities, yet they often do not have access to appropriately accelerated or enriched instruction. She highlighted how systemic biases prevent many 3e learners from receiving the services and support they need unless someone actively advocates for them, reinforcing the critical role of advocacy in ensuring equitable access to education and support.",
      "Dr. Davis also emphasized that advocacy is a skill that must be intentionally taught. She explained that many caregivers and educators lack both the understanding of neurodiversity and the language needed to effectively communicate their children's or learners' needs. Without this knowledge, families and professionals may struggle to access appropriate assessments, accommodations, and support services. Empowering caregivers and educators with the tools to advocate, which is essential to ensuring that 3e learners receive the opportunities and resources they deserve.",
      "Alia spoke about the design gap and how it affects people across every stage of life, from education to community participation and the workplace. She highlighted how many of our existing systems reward visibility over insight, presentation over substance, and conformity over meaningful contribution. Her session challenged participants to rethink how systems are designed and to recognize the barriers they create for neurodivergent individuals, emphasizing the need for more inclusive approaches that value different ways of thinking and contributing.",
      "Boluwatife Joshua emphasized the need to end stigma, noting that it is a key driver of exclusion for autistic individuals and persons with disabilities. He stressed the importance of developing a deeper understanding of autism to better support and manage individuals on the autism spectrum. By promoting awareness, acceptance, and informed approaches, he highlighted that caregivers, educators, and communities can create more inclusive environments where autistic individuals are empowered to thrive.",
      "Dr. Emile Gouws drew on his lived experience as an autistic person who did not begin speaking until the age of 15 to underscore the transformative impact of early intervention, support, and inclusive environments for persons with disabilities. He reflected on the progress made in disability rights across Africa while highlighting the persistent gap between policy and practice.",
      "Dr. Gouws argued that Africa's greatest challenge is not the absence of policies or legislation, but the implementation of them. Despite the existence of disability rights frameworks, many individuals and families continue to face significant barriers in accessing the support and services they need. As he noted, the question is no longer \"Do we have disability rights?\" but rather, \"Why are people still unable to experience those rights?\"",
      "He challenged advocates and policymakers to move beyond celebrating the passage of legislation and instead focus on measuring tangible outcomes. Lasting change, he emphasized, will only be achieved when disability rights are reflected in people's everyday experiences through accessible services, inclusive systems, and meaningful opportunities for participation.",
      "Susan O. Michael emphasized that inclusion is fundamentally a governance issue rather than simply a matter of goodwill. She argued that accessibility and reasonable accommodations should be embedded into the design of policies, programmes, and institutions from the outset, rather than being treated as an afterthought. By adopting a systems design approach, organizations and governments can create environments that are inherently inclusive, ensuring that persons with disabilities and neurodivergent individuals are considered in planning, decision-making, and service delivery from the very beginning.",
    ] },
    { heading: "Participant Engagement", paragraphs: [
      "Participants actively engaged through questions, reflections, and shared lived experiences. The discussions demonstrated a strong interest in practical solutions and a desire for continued opportunities to connect with professionals and drive meaningful change.",
    ] },
    { heading: "Key Outcomes", items: [
      { text: "Participants gained a deeper understanding of systemic barriers affecting neurodivergent individuals and persons with disabilities." },
      { text: "Advocacy emerged as a recurring theme, particularly the need to equip caregivers and educators with the language and knowledge to access appropriate support." },
      { text: "Discussions highlighted the importance of designing inclusive educational, workplace, and community systems." },
      { text: "Participants expressed interest in continued conversations and cross-sector collaboration." },
    ] },
    { heading: "Conclusion/Next Steps", paragraphs: [
      "The webinar successfully achieved its objective of creating a platform for meaningful dialogue on inclusion, accessibility, stigma, and support for neurodivergent individuals and persons with disabilities. The discussions reinforced that while awareness is growing, significant structural, cultural, and systemic barriers remain.",
      "Across all presentations, advocacy, inclusive design, and collaboration emerged as central themes. Speakers emphasized that lasting change requires not only policy reform but also equipping caregivers, educators, employers, and communities with the knowledge and tools to create genuinely inclusive environments.",
      "The webinar served as a powerful reminder that these conversations are more important now than ever, shining a light on communities that have long been marginalized and excluded from mainstream systems and decision-making.",
      "Bringing together professionals from diverse disciplines reinforced the value of interdisciplinary collaboration and highlighted the need for continued roundtable discussions, cross-sector partnerships, and sustained advocacy. The webinar reaffirmed that meaningful inclusion requires more than awareness, it demands intentional action, collaborative leadership, and systems designed with accessibility at their core. Building on the momentum of this conversation, Daughter of Ellen Initiative remains committed to advancing dialogue, strengthening partnerships, and translating lived experiences into lasting, measurable impact.",
    ] },
  ],
};

// Speakers, recaps, reports and galleries are published only when DOE supplies verified material.
export const events: DoeEvent[] = [
  { slug: "the-inclusion-exchange", label: "Roundtable", startsAt: "2026-11-05T09:00:00+01:00", endsAt: "2026-11-05T13:00:00+01:00",
    title: "The Inclusion Exchange", theme: "The Abuja Roundtable on Neurodiversity, Disability and Inclusive Action", date: "Thursday, 5 November, 2026", time: "9:00 AM to 1:00 PM WAT", venue: "Novare Central Mall, Plot 502, Dalaba Street, Wuse Zone 5, Abuja",
    description: "A cross-sector working conversation on how systems can become more inclusive of people with disabilities and neurodivergent people.",
    cta: "Register Now", link: "https://luma.com/735xhiit", image: inclusionExchangeArt, imageAlt: "Flyer for The Inclusion Exchange, the Abuja Roundtable on Neurodiversity, Disability and Inclusive Action, 5 November, 9am to 1pm, Novare Central Mall, Wuse Zone 5, Abuja, with a QR code to register", speakers: [], gallery: [] },
  { slug: "tende-sessions-01-mode", label: "Tende by DOE", startsAt: "2026-11-07T10:00:00+01:00", endsAt: "2026-11-07T14:00:00+01:00",
    title: "TENDE SESSIONS 01: MODE", theme: "TENDE SESSIONS 01: MODE", date: "Saturday, 7 November, 2026", time: "10:00 AM to 2:00 PM WAT", venue: "The Garden, 8 Bayo Kuku Road, Ikoyi, Lagos",
    description: "A participatory wellness and community experience with room to connect, play, reflect, and regulate your energy at your own speed.",
    cta: "Register Now (Free)", link: "https://luma.com/92d12dhe", image: tendeSessionsArt, imageAlt: "Flyer for Tende Mode 1.0 by Tende by DOE, 7 November, 10am to 2pm, The Garden, 8 Bayo Kuku Road, Ikoyi, Lagos, free to attend, with a QR code to register", speakers: [], gallery: [] },
  { slug: "creating-inclusive-classrooms", label: "Free Teachers’ Training", startsAt: "2026-10-17T16:00:00+01:00", endsAt: "2026-10-17T17:00:00+01:00",
    title: "Creating Inclusive Classrooms", theme: "Creating Inclusive Classrooms", date: "17 October, 2026", time: "4:00 PM WAT", venue: "Live on Zoom",
    description: "Equipping educators and caregivers with practical ways to support different learners in the classroom.", cta: "Register Now", link: "https://luma.com/0q687e5v", image: flyer,
    imageAlt: "Event flyer for Creating Inclusive Classrooms, a free teachers’ training on 17 October, 2026 at 4:00 PM WAT, live on Zoom", speakers: [], gallery: [] },
  { slug: "ai-for-accessibility", label: "Workshop", startsAt: "2026-08-07T18:00:00+01:00", endsAt: "2026-08-07T20:00:00+01:00",
    title: "AI for Accessibility: Building Inclusive Solutions for the Future", theme: "AI for Accessibility", date: "Friday, August 7, 2026", time: "6:00 PM to 8:00 PM GMT+1", venue: "Zoom",
    description: "A hands-on intermediate workshop for students and professionals exploring how AI can improve accessibility, productivity, and innovation.", cta: "Register", link: "https://luma.com/33g5cl44",
    reportUrl: "https://docs.google.com/document/d/1qySPrhUD0s5TkoRb4mCRpvjIaYFO0TopZ51UrtktSiw/view", report: aiReport,
    recap: aiReport.sections[0].paragraphs![0],
    speakers: [{ name: "Eyvonne Anthony", title: "Founder, Daughter of Ellen Initiative" }, { name: "Lola Adey", title: "Founder, Vibe Code Africa" }], gallery: [] },
  { slug: "living-it-webinar", label: "Inaugural Webinar", startsAt: "2026-06-20T15:00:00+01:00", endsAt: "2026-06-21T00:00:00+01:00",
    title: "Living It: Inclusion, Accessibility, Stigma and the Search for Support", theme: "Inclusion, Accessibility, Stigma and the Search for Support", date: "June 20th, 2026", time: "3:00 PM WAT", venue: "Online Webinar",
    description: "An inaugural Daughter of Ellen webinar convening voices from across Africa and the diaspora to examine the everyday realities of neurodivergent individuals and persons with disabilities, and to chart a clear path toward the support systems our communities deserve.",
    cta: "Register for the Webinar", link: "https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support",
    reportUrl: "https://docs.google.com/document/d/1tmIkGpqm1cQDVXRfuU-3ORlxD5m7s52A7eZaFuVg6wc/view", report: livingItReport,
    recap: livingItReport.sections[1].paragraphs![0],
    speakers: [
      { name: "Eyvonne Anthony", title: "Founder, Daughter of Ellen Initiative" }, { name: "Dr Joy Lawson Davis", title: "Award-winning Equity Activist" },
      { name: "Dr Emile Gouws", title: "International Disability Advocate & Researcher" }, { name: "Alia Booley", title: "Country Lead for the Institute of Neurodiversity, South Africa" },
      { name: "Ayanwole Boluwatife", title: "Behaviour Interventionist" }, { name: "Susan O Michael", title: "Social Inclusion Specialist" },
    ], gallery: [] },
  { slug: "lagos-awareness-walk", label: "Awareness Walk", startsAt: "2026-06-06T09:00:00+01:00", endsAt: "2026-06-06T12:00:00+01:00",
    title: "Lagos Awareness Walk", theme: "Walk for Neurodiversity & Disability Inclusion", date: "6th June 2026", time: "9 am to 12 noon", venue: "Johnson Jakande Tinubu Park (JJT) to City View Hotel (Taiwo Close), Ikeja, and back to JJT",
    description: lagosWalkReport.sections[0].paragraphs![0], cta: "View the Report", link: reportPath("lagos-awareness-walk"),
    reportUrl: "https://docs.google.com/document/d/1OMVbee62M1V48cR6BWKVvJiJ1G67A6-nv42OesLXVdg/view", report: lagosWalkReport, recap: lagosWalkReport.sections[0].paragraphs![1],
    speakers: [], gallery: [lc1, lc2, lc3, lc4, lc5, lc6, lc7, lc8, lc9, lc10] },
];

export const isUpcoming = (e: DoeEvent, now = Date.now()) => new Date(e.endsAt).getTime() > now;
export const upcomingEvents = (now = Date.now()) => events.filter(e => isUpcoming(e, now)).sort((a, b) => a.startsAt.localeCompare(b.startsAt));
