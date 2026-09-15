import type { EventItem } from "@/lib/events";

/**
 * All Daughter of Ellen events, past and upcoming. Order does not matter:
 * the Events page sorts them by `startsAt` and splits them at today's date.
 */
export const events: EventItem[] = [
  {
    label: "Workshop",
    title: "AI for Accessibility: Building Inclusive Solutions for the Future",
    startsAt: "2026-08-07T18:00:00+01:00",
    endsAt: "2026-08-07T20:00:00+01:00",
    date: "Friday, August 7, 2026",
    time: "6:00 PM - 8:00 PM GMT+1",
    venue: "Zoom",
    description:
      "A hands-on intermediate workshop for students and professionals exploring how AI can improve accessibility, productivity, and innovation.",
    cta: "Register",
    link: "https://luma.com/33g5cl44",
  },
  {
    label: "Inaugural Webinar",
    title: "Living It: Inclusion, Accessibility, Stigma and the Search for Support",
    startsAt: "2026-06-20T15:00:00+01:00",
    date: "June 20th, 2026",
    time: "3:00 PM WAT",
    venue: "Online Webinar",
    description:
      "An inaugural Daughter of Ellen webinar convening voices from across Africa and the diaspora to examine the everyday realities of neurodivergent individuals and persons with disabilities, and to chart a clear path toward the support systems our communities deserve.",
    cta: "Register for the Webinar",
    link: "https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support",
  },
];
