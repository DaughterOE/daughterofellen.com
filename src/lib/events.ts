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
  title: "A Report On AI for Accessibility: Building Inclusive Solutions for the Future",
  details: [["Date", "7th August 2026"], ["Format", "Virtual Webinar"], ["Time", "6 pm - 9pm WAT"], ["Participants", "366"], ["Prepared By", "Bethel Amurawaiye"]],
  sections: [
    { heading: "Executive summary", paragraphs: [
      "On 7 August 2026, Daughter of Ellen Support and Empowerment Initiative (DOE), in partnership with Nard AI, hosted a virtual masterclass on artificial intelligence (AI) and its potential applications in learning, communication, productivity and accessibility.",
      "The session was designed primarily for professionals and learners working or studying in education and related fields, including educators, special educators, students, neurodivergent professionals and people interested in supporting neurodivergent learners and colleagues. It combined foundational instruction with guided, hands-on practice in an accessible and supportive learning environment. A total of 366 participants attended.",
      "The masterclass advanced DOE’s commitment to practical, future-relevant skills-building. It explored how AI tools may support diverse ways of learning, communicating and working, and how educators and professionals might apply them in educational and workplace settings. Participants received certificates of participation following the session.",
    ] },
    { heading: "Background and purpose", paragraphs: [
      "AI tools are increasingly used across education, work and everyday life. For educators and students, these tools may offer new ways to engage with information, organise tasks, communicate ideas and support learning. For neurodivergent professionals, AI may also help with tasks such as planning, drafting, summarising and managing information, depending on the person’s needs and the tool being used.",
      "At the same time, people need opportunities to become familiar with these technologies and consider how to use them thoughtfully. DOE organised the masterclass to provide accessible instruction and direct practice, with particular attention to educators, special educators, students and neurodivergent professionals. The session supported DOE’s wider focus on expanding skills and opportunities while encouraging more inclusive approaches to technology use.",
    ] },
    { heading: "Objectives", paragraphs: ["The masterclass aimed to:"], ordered: true, items: [
      { text: "Introduce participants to foundational AI concepts and practical AI tools." },
      { text: "Demonstrate how AI tools may support learning, communication and productivity in educational, professional and everyday settings." },
      { text: "Build familiarity through guided, hands-on participation." },
      { text: "Explore potential applications of AI for neurodivergent learners, educators and professionals with diverse cognitive styles." },
      { text: "Encourage educators and other professionals to consider how AI tools might support inclusive practice." },
      { text: "Advance DOE’s commitment to skills development and opportunity for neurodivergent people and the wider community." },
    ] },
    { heading: "Programme and facilitation", paragraphs: ["The three-hour virtual session brought together inclusion-focused facilitation and technical expertise."] },
    { heading: "Facilitators", items: [
      { text: "Eyvonne Eleko, Founder, Daughter of Ellen Support and Empowerment Initiative" },
      { text: "Lola Adey, Founder, Nard AI and Vibe Code Africa" },
    ], afterItems: [
      "The programme introduced participants to AI tools and their potential uses through practical examples and guided activities. It was structured to support participants with different levels of familiarity with AI and to make the subject approachable. Examples and discussion focused on how AI could be explored in learning and teaching, communication, productivity and professional work.",
    ] },
    { heading: "Participation and engagement", paragraphs: [
      "A total of 366 participants attended the webinar. Participants engaged through questions, reflections and practical participation, demonstrating interest in learning about AI and considering its relevance to education, professional practice and personal development.",
      "Following the workshop, participants received certificates of participation for their portfolios.",
    ] },
    { heading: "Key outcomes", paragraphs: ["The session:"], items: [
      { text: "Introduced participants to AI tools and practical ways they may be used." },
      { text: "Presented examples of potential AI applications in learning, communication and productivity." },
      { text: "Gave participants an opportunity to practise using AI tools with guidance." },
      { text: "Created space for educators, special educators, students and neurodivergent professionals to consider how AI might support their work, learning and participation." },
      { text: "Encouraged participants to consider how AI tools may be adapted to different learning and working needs." },
      { text: "Strengthened collaboration between DOE and Nard AI on technology-focused learning." },
    ] },
    { heading: "Alignment with DOE’s programmes", paragraphs: [
      "The masterclass aligned with DOE’s Education / Education & Technology programme category. Its focus on practical AI literacy and accessible technology use connected directly to DOE’s education and technology work. By bringing together educators, special educators, students and neurodivergent professionals, the session created space to explore how AI tools might support learning, teaching, communication and participation.",
      "The programme also reflected DOE’s broader commitment to skills development and opportunity for neurodivergent people. It encouraged participants to consider emerging technology in relation to diverse learning and working needs.",
    ] },
    { heading: "Contribution to DOE’s work", paragraphs: [
      "The masterclass extended DOE’s inclusive skills-building work into AI literacy. By pairing accessible instruction with practical engagement, the session gave participants an opportunity to become more familiar with AI tools and consider how they might apply them to their own learning, teaching and professional needs.",
      "The programme also reflected DOE’s commitment to ensuring that conversations about technology and opportunity include neurodivergent people. Its emphasis on educators, students and professionals brought attention to the different contexts in which AI may support participation, while keeping accessibility and inclusion within the discussion.",
    ] },
    { heading: "Conclusion", paragraphs: [
      "The AI for Accessibility masterclass provided 366 participants with an introduction to AI and an opportunity to explore its practical applications. With particular relevance to educators, special educators, students and neurodivergent professionals, the session advanced DOE’s efforts to build future-relevant skills and encourage more inclusive engagement with emerging technologies.",
      "Through its collaboration with Nard AI, DOE delivered a programme connecting inclusion-focused learning with technical facilitation. The masterclass contributed to DOE’s Education / Education & Technology programme category. DOE will continue to explore opportunities that build digital skills and promote more inclusive use of technology.",
    ] },
  ],
};

const lagosWalkReport: EventReport = {
  title: "Lagos/Abuja Awareness Walk Report",
  details: [["Theme", "Walk for Neurodiversity and Disability Inclusion"], ["Location and Date", "Abuja and Lagos | 1 and 6 June 2026"]],
  sections: [
    { heading: "Activity overview", paragraphs: [
      "Daughter of Ellen Support and Empowerment Initiative (DOE) organised awareness walks in Abuja and Lagos to advance public understanding of neurodiversity, disability inclusion and the importance of early identification and support.",
      "The walks called for the visibility, dignity and inclusion of persons with disabilities and neurodivergent people in Nigeria. They also created opportunities to engage residents, stakeholders and members of the public on the barriers people face and the role communities can play in challenging stigma.",
      "More than 100 people attended across the two locations.",
    ] },
    { heading: "Objectives and key messages", paragraphs: ["The activity focused on four connected themes:"], items: [
      { lead: "Inclusion and accessibility:", text: "Promoting environments and communities where persons with disabilities and neurodivergent people can participate." },
      { lead: "Understanding disability and neurodivergence:", text: "Encouraging informed, respectful public engagement." },
      { lead: "Early identification and support:", text: "Highlighting the importance of timely access to appropriate support." },
      { lead: "Challenging stigma:", text: "Encouraging communities to question harmful assumptions and reshape cultural narratives around disability in Nigeria." },
    ] },
    { heading: "Community engagement and participation", paragraphs: [
      "The turnout exceeded DOE’s initial projection and demonstrated community interest in disability inclusion and neurodiversity. Through direct engagement during the walks, the campaign brought its key messages into public spaces and invited residents and other stakeholders to take part in the conversation.",
      "Several participants expressed interest in volunteering and supporting future initiatives. This provides a foundation for continued community engagement and follow-up.",
    ] },
    { heading: "Media coverage", paragraphs: ["The walks received coverage from four media organisations:"], items: [
      { text: "Punch Newspaper", href: "https://punchng.com/ngo-calls-for-stronger-support-inclusion-for-neurodivergent-children/" },
      { text: "The Nigerian Tribune", href: "https://tribuneonlineng.com/stakeholders-advocate-inclusive-education-for-children-with-special-needs/" },
      { text: "Arise News" },
      { text: "TVC News", href: "https://www.youtube.com/watch?v=mODkcnYVCpo" },
    ] },
    { heading: "Outcome and next steps", paragraphs: [
      "The Abuja and Lagos walks advanced the visibility of disability inclusion and neurodiversity, promoted early support and encouraged public engagement. Attendance and expressions of volunteer interest indicate an opportunity to sustain this engagement beyond the events.",
      "DOE will continue working with communities, volunteers and relevant stakeholders to strengthen public understanding and support more inclusive practices. Future activities will build on this engagement through continued advocacy, collaboration and community participation.",
    ] },
  ],
};

const livingItReport: EventReport = {
  title: "A Report On Living It: A Conversation On Inclusion, Accessibility, Stigma And The Search For Support.",
  details: [["Date", "20th June 2026"], ["Format", "Virtual Webinar"], ["Time", "3 pm - 5 pm WAT"], ["Prepared By", "Bethel Amurawaiye"]],
  sections: [
    { heading: "Executive summary", paragraphs: [
      "On 20 June 2026, Daughter of Ellen Support and Empowerment Initiative (DOE) hosted Living It, a virtual webinar bringing together neurodivergent people, persons with disabilities, parents, caregivers, advocates and professionals to discuss inclusion, accessibility, stigma and access to support.",
      "The conversation explored barriers across education, healthcare, employment and community life. Speakers highlighted the gap between disability rights and their implementation, the effects of stigma and cultural perceptions, and the need to embed accessibility and reasonable accommodation into policies, programmes and institutions.",
      "The webinar placed lived experience at the centre of the discussion and identified advocacy, inclusive design and cross-sector collaboration as priorities for translating awareness and policy commitments into practical change.",
    ] },
    { heading: "Objectives", paragraphs: ["The webinar aimed to:"], items: [
      { text: "Explore barriers to inclusion, accessibility and support across Nigeria and Africa." },
      { text: "Highlight evidence-informed approaches to advocacy and systems change." },
      { text: "Foster collaboration among professionals, advocates, caregivers and community members." },
    ] },
    { heading: "About the conversation", paragraphs: [
      "Living It was structured as a listening and dialogue session. Participants shared experiences, identified gaps in support and raised priorities for more inclusive systems and services.",
      "The discussion examined four interconnected themes: inclusion in everyday spaces, systems that exclude, stigma and family dynamics, and access to support and resources. Speakers connected these experiences to the design and implementation of policies, services and institutions.",
    ] },
    { heading: "Context and available statistics", paragraphs: [
      "Nigeria’s disability population remains difficult to establish precisely. The National Population Commission has reported that the widely cited estimate of 35.5 million people with disabilities is based on unreliable figures and has called for better national data. A 2025 estimate of approximately 35 million has since been published, but it should be treated as an estimate rather than a definitive count.",
      "The webinar’s source material cited estimates that more than 85% of schools are inaccessible to students with disabilities and that approximately 70% of children with disabilities are out of school. These figures also appear in a 2024 disability inclusion report, while the 85% school-accessibility estimate has been attributed to the National Commission for Persons with Disabilities. They are useful indicators of reported barriers, but the available sources do not establish them as current national measurements.",
      "Participants also discussed how spiritual or moral interpretations of neurodivergence and disability can contribute to stigma, delayed identification and limited access to appropriate support. The conversation emphasised respectful, informed approaches that centre the experiences and agency of people directly affected.",
    ] },
    { heading: "Speakers", items: [
      { text: "Eyvonne Eleko, Founder, Daughter of Ellen Support and Empowerment Initiative" },
      { text: "Dr. Joy Lawson Davis, Equity Activist" },
      { text: "Dr. Emile Gouws, Disability Advocate and Researcher" },
      { text: "Alia Booley, Country Lead, Institute of Neurodiversity, South Africa" },
      { text: "Ayanwole Boluwatife, Behaviour Interventionist" },
      { text: "Susan O. Michael, Social Inclusion Specialist" },
    ] },
    { heading: "Key contributions", paragraphs: [] },
    { heading: "Lived experience and the purpose of the conversation", paragraphs: [
      "Eyvonne Eleko opened the webinar by outlining DOE’s commitment to creating platforms that amplify lived experiences, challenge stigma and promote more inclusive systems for neurodivergent people and persons with disabilities.",
    ] },
    { heading: "Advocacy and support for twice-exceptional learners", paragraphs: [
      "Dr. Joy Lawson Davis discussed multiple identities and her work with twice-exceptional, or 2e, learners: individuals who are gifted and also have one or more disabilities or exceptionalities. She highlighted how bias and gaps in understanding can prevent these learners from receiving appropriate enrichment, services and support.",
      "Dr. Davis also stressed that advocacy is a skill that can be developed. Caregivers and educators may need stronger knowledge and language to communicate support needs and navigate assessment, accommodation and service systems.",
    ] },
    { heading: "Designing systems for different ways of contributing", paragraphs: [
      "Alia Booley examined the design gap across education, workplaces and community life. She challenged systems that prioritise conformity and visible performance over insight and meaningful contribution, and called for approaches that recognise and accommodate different ways of thinking and participating.",
    ] },
    { heading: "Challenging stigma and supporting autistic people", paragraphs: [
      "Ayanwole Boluwatife addressed the role of stigma in the exclusion of autistic people and persons with disabilities. He emphasised the value of informed understanding and supportive environments in helping autistic people participate and thrive.",
    ] },
    { heading: "Moving from disability rights to implementation", paragraphs: [
      "Drawing on lived experience and disability advocacy, Dr. Emile Gouws reflected on progress in disability rights across Africa and the continuing gap between policy and practice. He called for attention to the outcomes people experience in everyday life, including access to services, accessible environments and meaningful participation.",
    ] },
    { heading: "Embedding accessibility in governance and design", paragraphs: [
      "Susan O. Michael framed inclusion as a governance responsibility. She argued that accessibility and reasonable accommodation should be considered during the design of policies, programmes and institutions, rather than added later. This approach can help ensure that persons with disabilities and neurodivergent people are considered in planning and service delivery.",
    ] },
    { heading: "Participant engagement", paragraphs: [
      "Participants contributed questions, reflections and lived experiences throughout the session. Their engagement reflected interest in practical responses to exclusion and in continued opportunities for dialogue, learning and collaboration.",
    ] },
    { heading: "Key outcomes", paragraphs: ["The webinar:"], items: [
      { text: "Created a platform for direct discussion of barriers affecting neurodivergent people and persons with disabilities." },
      { text: "Highlighted advocacy as an important tool for navigating education and support systems." },
      { text: "Drew attention to the need for inclusive design across education, workplaces and community services." },
      { text: "Examined the gap between disability rights commitments and people’s everyday access to those rights." },
      { text: "Identified continued dialogue and cross-sector collaboration as priorities for further work." },
    ] },
    { heading: "Conclusion and next steps", paragraphs: [
      "Living It brought together people with diverse experiences and expertise to examine inclusion, accessibility, stigma and access to support. The discussion reinforced that awareness alone cannot address the structural and cultural barriers participants described.",
      "Speakers emphasised the importance of equipping caregivers and educators to advocate effectively, embedding accessibility in policy and programme design, and measuring whether rights and commitments translate into meaningful participation in daily life.",
      "The webinar strengthened the case for continued dialogue, cross-sector collaboration and sustained advocacy. DOE remains committed to bringing lived experience into these conversations and supporting efforts to translate community priorities into more inclusive practice.",
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
    reportUrl: "https://docs.google.com/document/d/1r3vaDD_ant44ruOktEgN9B1SXswpoRTjgrMhxb6klCE/view", report: aiReport,
    recap: aiReport.sections[0].paragraphs![0],
    speakers: [{ name: "Eyvonne Eleko", title: "Founder, Daughter of Ellen Support and Empowerment Initiative" }, { name: "Lola Adey", title: "Founder, Nard AI and Vibe Code Africa" }], gallery: [] },
  { slug: "living-it-webinar", label: "Inaugural Webinar", startsAt: "2026-06-20T15:00:00+01:00", endsAt: "2026-06-21T00:00:00+01:00",
    title: "Living It: Inclusion, Accessibility, Stigma and the Search for Support", theme: "Inclusion, Accessibility, Stigma and the Search for Support", date: "June 20th, 2026", time: "3:00 PM WAT", venue: "Online Webinar",
    description: "An inaugural Daughter of Ellen webinar convening voices from across Africa and the diaspora to examine the everyday realities of neurodivergent individuals and persons with disabilities, and to chart a clear path toward the support systems our communities deserve.",
    cta: "Register for the Webinar", link: "https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support",
    reportUrl: "https://docs.google.com/document/d/16fR7axd4TIDoYJxMKcyX1c4tDt4OTZh1c99HCKv3-qI/view", report: livingItReport,
    recap: livingItReport.sections[0].paragraphs![0],
    speakers: [
      { name: "Eyvonne Eleko", title: "Founder, Daughter of Ellen Support and Empowerment Initiative" }, { name: "Dr Joy Lawson Davis", title: "Award-winning Equity Activist" },
      { name: "Dr Emile Gouws", title: "International Disability Advocate & Researcher" }, { name: "Alia Booley", title: "Country Lead for the Institute of Neurodiversity, South Africa" },
      { name: "Ayanwole Boluwatife", title: "Behaviour Interventionist" }, { name: "Susan O Michael", title: "Social Inclusion Specialist" },
    ], gallery: [] },
  { slug: "lagos-awareness-walk", label: "Awareness Walk", startsAt: "2026-06-06T09:00:00+01:00", endsAt: "2026-06-06T12:00:00+01:00",
    title: "Lagos Awareness Walk", theme: "Walk for Neurodiversity & Disability Inclusion", date: "6th June 2026", time: "9 am to 12 noon", venue: "Johnson Jakande Tinubu Park (JJT) to City View Hotel (Taiwo Close), Ikeja, and back to JJT",
    description: lagosWalkReport.sections[0].paragraphs![0], cta: "View the Report", link: reportPath("lagos-awareness-walk"),
    reportUrl: "https://docs.google.com/document/d/1VkEi1Pv3K3QZ8ivuvp3a-phigKaQSj1xjRz6uegTr-4/view", report: lagosWalkReport, recap: lagosWalkReport.sections[0].paragraphs![1],
    speakers: [], gallery: [lc1, lc2, lc3, lc4, lc5, lc6, lc7, lc8, lc9, lc10] },
];

export const isUpcoming = (e: DoeEvent, now = Date.now()) => new Date(e.endsAt).getTime() > now;
export const upcomingEvents = (now = Date.now()) => events.filter(e => isUpcoming(e, now)).sort((a, b) => a.startsAt.localeCompare(b.startsAt));
