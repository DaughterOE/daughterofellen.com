import flyer from "@/assets/inclusive-classrooms-flyer.jpeg";

export type Speaker = { name: string; title: string; photo?: string };
export type DoeEvent = {
  slug: string; label: string; startsAt: string; endsAt: string; title: string; theme: string;
  date: string; time: string; venue: string; description: string; cta: string; link: string;
  image?: string; speakers: Speaker[]; recap?: string; reportUrl?: string; gallery: string[];
};

// Speakers, recaps, reports and galleries are published only when DOE supplies verified material.
export const events: DoeEvent[] = [
  { slug: "creating-inclusive-classrooms", label: "Free Teachers’ Training", startsAt: "2026-10-17T16:00:00+01:00", endsAt: "2026-10-17T17:00:00+01:00",
    title: "Creating Inclusive Classrooms", theme: "Creating Inclusive Classrooms", date: "17 October, 2026", time: "4:00 PM WAT", venue: "Live on Zoom",
    description: "Equipping educators and caregivers with practical ways to support different learners in the classroom.", cta: "Register Now", link: "https://luma.com/0q687e5v", image: flyer, speakers: [], gallery: [] },
  { slug: "ai-for-accessibility", label: "Workshop", startsAt: "2026-08-07T18:00:00+01:00", endsAt: "2026-08-07T20:00:00+01:00",
    title: "AI for Accessibility: Building Inclusive Solutions for the Future", theme: "AI for Accessibility", date: "Friday, August 7, 2026", time: "6:00 PM - 8:00 PM GMT+1", venue: "Zoom",
    description: "A hands-on intermediate workshop for students and professionals exploring how AI can improve accessibility, productivity, and innovation.", cta: "Register", link: "https://luma.com/33g5cl44", speakers: [], gallery: [] },
  { slug: "living-it-webinar", label: "Inaugural Webinar", startsAt: "2026-06-20T15:00:00+01:00", endsAt: "2026-06-21T00:00:00+01:00",
    title: "Living It: Inclusion, Accessibility, Stigma and the Search for Support", theme: "Inclusion, Accessibility, Stigma and the Search for Support", date: "June 20th, 2026", time: "3:00 PM WAT", venue: "Online Webinar",
    description: "An inaugural Daughter of Ellen webinar convening voices from across Africa and the diaspora to examine the everyday realities of neurodivergent individuals and persons with disabilities, and to chart a clear path toward the support systems our communities deserve.",
    cta: "Register for the Webinar", link: "https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support", speakers: [], gallery: [] },
];

export const isUpcoming = (e: DoeEvent, now = Date.now()) => new Date(e.endsAt).getTime() > now;
