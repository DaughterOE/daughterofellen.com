import type { SiteImageSlot } from "@/lib/siteImages";
import { communityUrl } from "@/lib/institutionalContent";

export type PageCta = { title: string; text: string; primary: { label: string; to: string }; secondary?: { label: string; to: string } };

/** Cards used in "You might also like" rows. Image is the target page's banner slot. */
export const pageCards: Record<string, { title: string; line: string; slot: SiteImageSlot }> = {
  "/about": { title: "About Daughter of Ellen", line: "Our story, foundations and leadership.", slot: "about.hero" },
  "/founder": { title: "Our Founder", line: "Eyvonne Eleko's story and vision.", slot: "founder.hero" },
  "/mission": { title: "Mission & Vision", line: "Why inclusion must be designed in.", slot: "mission.hero" },
  "/our-approach": { title: "Our Approach", line: "How our foundations guide the work.", slot: "approach.hero" },
  "/what-we-do": { title: "What We Do", line: "Our delivery areas in one place.", slot: "whatwedo.hero" },
  "/what-we-do/family-support": { title: "Family Support", line: "Guidance and community for families.", slot: "family-support.hero" },
  "/what-we-do/inclusive-education": { title: "Inclusive Education", line: "Training and tools for classrooms.", slot: "inclusive-education.hero" },
  "/what-we-do/technology-accessibility": { title: "Technology & Accessibility", line: "Technology that expands participation.", slot: "technology-accessibility.hero" },
  "/what-we-do/adult-community": { title: "Adult Community", line: "Connect, learn and share without judgment.", slot: "adult-community.hero" },
  "/what-we-do/workplace-inclusion": { title: "Workplace Inclusion", line: "Support for inclusive workplaces.", slot: "workplace-inclusion.hero" },
  "/projects": { title: "Our Projects", line: "Walks, workshops and webinars.", slot: "projects.hero" },
  "/projects/access-fund": { title: "DOE Access Fund", line: "Needs-based support for access barriers.", slot: "access-fund.hero" },
  "/abuja-declaration": { title: "The Abuja Declaration", line: "Advocacy and policy for inclusion.", slot: "abuja-declaration.hero" },
  "/events/lagos-awareness-walk": { title: "Lagos Awareness Walk", line: "Walk for Neurodiversity & Disability Inclusion.", slot: "projects.walk" },
  "/impact": { title: "Impact & Evidence", line: "Tracking outcomes and what DOE learns.", slot: "impact.hero" },
  "/events": { title: "Events", line: "Upcoming and past DOE events.", slot: "events.hero" },
  "/learn": { title: "Learn & Train", line: "Training for schools and workplaces.", slot: "learn.hero" },
  "/get-support": { title: "Get Support", line: "Find the right support pathway.", slot: "get-support.hero" },
  "/partner": { title: "Partner With Us", line: "Build inclusion together.", slot: "partner.hero" },
  "/get-involved": { title: "Get Involved", line: "Partner, fund or volunteer.", slot: "get-involved.hero" },
  "/contact": { title: "Contact", line: "Reach the Daughter of Ellen team.", slot: "contact.hero" },
  "/tende": { title: "Tende by DOE", line: "Mental health and wellness.", slot: "tende.hero" },
  "/media": { title: "Media Features", line: "DOE in the media.", slot: "media.hero" },
};

export type PageConfig = { hero: SiteImageSlot; cta: PageCta; related: string[] };

const ctas = {
  support: { title: "Looking for support?", text: "Tell us what you need and we will point you to the right next step.", primary: { label: "Get Support", to: "/get-support" }, secondary: { label: "Contact Us", to: "/contact" } },
  partner: { title: "Build inclusion with us.", text: "Partner with Daughter of Ellen to make inclusion part of the design.", primary: { label: "Partner With Us", to: "/partner" }, secondary: { label: "Contact Us", to: "/contact" } },
  training: { title: "Bring inclusive practice to your team.", text: "Training requests are inquiries. We will follow up with current offers and timing.", primary: { label: "Register for Training", to: "/learn" }, secondary: { label: "Contact Us", to: "/contact" } },
  contact: { title: "Have a question?", text: "Our team is happy to hear from you.", primary: { label: "Contact Us", to: "/contact" }, secondary: { label: "Get Support", to: "/get-support" } },
  community: { title: "You belong here.", text: "Join the Daughter of Ellen community on WhatsApp.", primary: { label: "Join the Community", to: communityUrl }, secondary: { label: "Contact Us", to: "/contact" } },
  events: { title: "Join us at the next event.", text: "See what is coming up and how to take part.", primary: { label: "See Upcoming Events", to: "/events" }, secondary: { label: "Contact Us", to: "/contact" } },
  fund: { title: "Help remove access barriers.", text: "Fund the work or discuss sponsorship with our team.", primary: { label: "Fund the Work", to: "/get-involved#fund-the-work" }, secondary: { label: "Partner With Us", to: "/partner" } },
} satisfies Record<string, PageCta>;

export const pageConfig: Record<string, PageConfig> = {
  "/about": { hero: "about.hero", cta: ctas.partner, related: ["/founder", "/what-we-do", "/projects"] },
  "/founder": { hero: "founder.hero", cta: ctas.contact, related: ["/about", "/abuja-declaration", "/tende"] },
  "/about/founder": { hero: "founder.hero", cta: ctas.contact, related: ["/about", "/abuja-declaration", "/tende"] },
  "/mission": { hero: "mission.hero", cta: ctas.partner, related: ["/about", "/our-approach", "/what-we-do"] },
  "/vision": { hero: "mission.hero", cta: ctas.partner, related: ["/about", "/our-approach", "/what-we-do"] },
  "/pillars": { hero: "pillars.hero", cta: ctas.partner, related: ["/mission", "/what-we-do", "/impact"] },
  "/our-approach": { hero: "approach.hero", cta: ctas.partner, related: ["/mission", "/what-we-do", "/impact"] },
  "/what-we-do": { hero: "whatwedo.hero", cta: ctas.support, related: ["/what-we-do/family-support", "/what-we-do/inclusive-education", "/what-we-do/workplace-inclusion"] },
  "/what-we-do/family-support": { hero: "family-support.hero", cta: ctas.support, related: ["/what-we-do/inclusive-education", "/what-we-do/adult-community", "/get-support"] },
  "/what-we-do/inclusive-education": { hero: "inclusive-education.hero", cta: ctas.training, related: ["/learn", "/what-we-do/technology-accessibility", "/what-we-do/family-support"] },
  "/what-we-do/technology-accessibility": { hero: "technology-accessibility.hero", cta: ctas.training, related: ["/what-we-do/inclusive-education", "/what-we-do/workplace-inclusion", "/learn"] },
  "/what-we-do/adult-community": { hero: "adult-community.hero", cta: ctas.community, related: ["/tende", "/what-we-do/family-support", "/events"] },
  "/what-we-do/workplace-inclusion": { hero: "workplace-inclusion.hero", cta: ctas.training, related: ["/learn", "/what-we-do/technology-accessibility", "/partner"] },
  "/what-we-do/*": { hero: "program.hero", cta: ctas.support, related: ["/what-we-do", "/get-support", "/partner"] },
  "/projects": { hero: "projects.hero", cta: ctas.events, related: ["/abuja-declaration", "/projects/access-fund", "/impact"] },
  "/projects/access-fund": { hero: "access-fund.hero", cta: ctas.fund, related: ["/projects", "/abuja-declaration", "/events/lagos-awareness-walk"] },
  "/abuja-declaration": { hero: "abuja-declaration.hero", cta: ctas.partner, related: ["/projects", "/impact", "/founder"] },
  "/impact": { hero: "impact.hero", cta: ctas.partner, related: ["/projects", "/media", "/abuja-declaration"] },
  "/events": { hero: "events.hero", cta: ctas.contact, related: ["/projects", "/learn", "/get-involved"] },
  "/events/past": { hero: "events.hero", cta: ctas.events, related: ["/projects", "/impact", "/media"] },
  "/events/reports": { hero: "events.hero", cta: ctas.events, related: ["/events/past", "/projects", "/impact"] },
  "/events/*": { hero: "events.hero", cta: ctas.events, related: ["/projects", "/learn", "/get-involved"] },
  "/learn": { hero: "learn.hero", cta: ctas.training, related: ["/what-we-do/inclusive-education", "/what-we-do/workplace-inclusion", "/what-we-do/technology-accessibility"] },
  "/get-support": { hero: "get-support.hero", cta: ctas.contact, related: ["/what-we-do/family-support", "/projects/access-fund", "/tende"] },
  "/partner": { hero: "partner.hero", cta: ctas.contact, related: ["/impact", "/projects/access-fund", "/get-involved"] },
  "/get-involved": { hero: "get-involved.hero", cta: ctas.partner, related: ["/events", "/projects/access-fund", "/projects"] },
  "/contact": { hero: "contact.hero", cta: ctas.support, related: ["/about", "/get-involved", "/events"] },
  "/community": { hero: "community.hero", cta: ctas.community, related: ["/what-we-do/adult-community", "/tende", "/events"] },
  "/tende": { hero: "tende.hero", cta: ctas.community, related: ["/what-we-do/adult-community", "/get-support", "/events"] },
  "/join-tende": { hero: "join-tende.hero", cta: ctas.contact, related: ["/tende", "/what-we-do/adult-community", "/get-support"] },
  "/media": { hero: "media.hero", cta: ctas.contact, related: ["/impact", "/projects", "/founder"] },
  "/who-should-attend": { hero: "who-should-attend.hero", cta: ctas.events, related: ["/projects", "/events", "/learn"] },
};

export function getPageConfig(pathname: string): PageConfig | undefined {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (pageConfig[path]) return pageConfig[path];
  const parent = path.slice(0, path.lastIndexOf("/"));
  return pageConfig[`${parent}/*`];
}
