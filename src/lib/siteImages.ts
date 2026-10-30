import walkGroup from "@/assets/walk-group.jpg";
import abuja1 from "@/assets/lagos/lagos-1.jpeg";
import abuja2 from "@/assets/lagos/lagos-2.jpeg";
import abuja3 from "@/assets/lagos/lagos-3.jpeg";
import abuja4 from "@/assets/lagos/lagos-4.jpeg";
import abuja5 from "@/assets/lagos/lagos-5.jpeg";
import abuja6 from "@/assets/lagos/lagos-6.jpeg";
import abuja7 from "@/assets/lagos/lagos-7.jpeg";
import abuja8 from "@/assets/lagos/lagos-8.jpeg";
import lagosGroup from "@/assets/lagos-city/IMG_5900.jpg";
import lagosTalk from "@/assets/lagos-city/IMG_5909.jpg";
import lagosSupport from "@/assets/lagos-city/IMG_5920.jpg";
import lagosVolunteer from "@/assets/lagos-city/IMG_5942.jpg";
import lagosTrio from "@/assets/lagos-city/IMG_5943.jpg";
import lagosMarch from "@/assets/lagos-city/IMG_5953.jpg";
import lagosBanner from "@/assets/lagos-city/IMG_5982.jpg";
import lagosSign from "@/assets/lagos-city/IMG_6082.jpg";
import lagosSpeaker from "@/assets/lagos-city/IMG_6103.jpg";
import lagosSpeaker2 from "@/assets/lagos-city/IMG_6105.jpg";
import family from "@/assets/hero-family.jpg";
import studentsLawn from "@/assets/hero-students-lawn.jpg";
import studentsHighfive from "@/assets/hero-students-highfive.jpg";
import founderPortrait from "@/assets/evon-anthony.jpeg";
import founderPortrait2 from "@/assets/evon-michael.jpeg";
import accessFundFlyer from "@/assets/access-fund-announcement.jpeg";
import classroomsFlyer from "@/assets/inclusive-classrooms-flyer.jpeg";
import stockClassroom from "@/assets/stock/classroom-teacher.jpg";
import stockClassroom2 from "@/assets/stock/classroom-learning.jpg";
import stockTech from "@/assets/stock/students-technology.jpg";
import stockWorkplace from "@/assets/stock/workplace-team.jpg";
import stockAdult from "@/assets/stock/young-adults.jpg";

export type SiteImage = { src: string; alt: string; label: string; position?: string };

const img = (src: string, alt: string, label: string, position?: string): SiteImage => ({ src, alt, label, position });

/**
 * Default image for every managed slot on the inner pages.
 * Admins can replace any slot from /admin/images; the override is stored in the site_images table.
 */
export const siteImages = {
  "about.hero": img(walkGroup, "Daughter of Ellen walk participants gathered under the Walk for Lagos 2026 banner", "About: banner"),
  "about.body1": img(abuja3, "Volunteers in green Daughter of Ellen shirts at the Abuja walk", "About: Our Story"),
  "about.body2": img(lagosSupport, "Three walk participants holding a sign that reads Early Support Changes Lives", "About: Foundations"),
  "founder.hero": img(lagosSpeaker, "A Daughter of Ellen speaker in front of the Walk for Neurodiversity banner in Lagos", "Founder: banner"),
  "founder.body1": img(founderPortrait, "Eyvonne Eleko, Founder and Chair of Daughter of Ellen", "Founder: portrait", "object-top"),
  "founder.body2": img(founderPortrait2, "Eyvonne Eleko seated in a bright room", "Founder: second portrait", "object-top"),
  "founder.body3": img(abuja1, "Eyvonne Eleko's vision in action: walkers carrying the Walk for Neurodiversity banner in Abuja", "Founder: vision"),
  "mission.hero": img(abuja2, "Walk participants holding the Walk for Neurodiversity and Disability Inclusion banner in Abuja", "Mission & Vision: banner"),
  "mission.body1": img(stockClassroom2, "A teacher guiding young children drawing around a classroom table", "Mission & Vision: body"),
  "approach.hero": img(lagosTrio, "Three Daughter of Ellen volunteers standing together in Lagos", "Our Approach: banner"),
  "approach.body1": img(lagosTalk, "Participants in conversation at a Daughter of Ellen walk", "Our Approach: body"),
  "pillars.hero": img(abuja7, "Walk participants holding the Walk for Neurodiversity banner in Abuja", "Foundations: banner"),
  "pillars.body1": img(abuja8, "Supporters holding signs that read Equal Access, Equal Opportunity", "Foundations: body"),
  "whatwedo.hero": img(lagosBanner, "A large group of walk participants behind the Walk for Neurodiversity banner in Lagos", "What We Do: banner"),
  "whatwedo.body1": img(stockClassroom, "A teacher leaning in to help children working together in a classroom", "What We Do: body"),
  "family-support.hero": img(family, "A parent and child sharing a laptop at home", "Family Support: banner"),
  "family-support.body1": img(lagosSupport, "Three walk participants holding a sign that reads Early Support Changes Lives", "Family Support: body 1"),
  "family-support.body2": img(lagosSign, "Walk participants holding a sign that reads Early Support Changes Lives", "Family Support: body 2"),
  "inclusive-education.hero": img(stockClassroom, "A teacher leaning in to help children working together in a classroom", "Inclusive Education: banner"),
  "inclusive-education.body1": img(stockClassroom2, "A teacher guiding young children drawing around a classroom table", "Inclusive Education: body 1"),
  "inclusive-education.body2": img(classroomsFlyer, "Creating Inclusive Classrooms teachers' training flyer", "Inclusive Education: body 2", "object-top"),
  "technology-accessibility.hero": img(stockTech, "A smiling young man working on a laptop with a phone in his hand", "Technology & Accessibility: banner"),
  "technology-accessibility.body1": img(stockClassroom2, "A teacher guiding young children drawing around a classroom table", "Technology & Accessibility: body"),
  "adult-community.hero": img(lagosTrio, "Three young adults standing together at a Daughter of Ellen event", "Adult Community: banner"),
  "adult-community.body1": img(stockAdult, "Two young women chatting while shopping together", "Adult Community: body 1"),
  "adult-community.body2": img(lagosTalk, "Participants in conversation at a Daughter of Ellen walk", "Adult Community: body 2"),
  "workplace-inclusion.hero": img(stockWorkplace, "Three colleagues reviewing work together on a laptop", "Workplace Inclusion: banner"),
  "workplace-inclusion.body1": img(lagosVolunteer, "A Daughter of Ellen volunteer in a green shirt in Lagos", "Workplace Inclusion: body 1"),
  "workplace-inclusion.body2": img(lagosTrio, "Three Daughter of Ellen volunteers standing together in Lagos", "Workplace Inclusion: body 2"),
  "program.hero": img(lagosBanner, "A large group of walk participants behind the Walk for Neurodiversity banner in Lagos", "Other programme pages: banner"),
  "program.body1": img(abuja4, "Daughter of Ellen volunteers at the Abuja walk", "Other programme pages: body"),
  "projects.walk": img(walkGroup, "Daughter of Ellen walk participants gathered under the Walk for Lagos 2026 banner with signs reading Inclusion Starts With Understanding and Early Support Changes Lives", "Projects: Walk photo"),
  "projects.workshop": img(stockTech, "A smiling young man working on a laptop with a phone in his hand", "Projects: AI workshop"),
  "projects.webinar": img(lagosSpeaker2, "A Daughter of Ellen speaker addressing participants", "Projects: webinar"),
  "projects.access-fund": img(accessFundFlyer, "Daughter of Ellen Access Fund announcement", "Projects: Access Fund", "object-top"),
  "projects.hero": img(abuja1, "Walkers carrying the Walk for Neurodiversity and Disability Inclusion banner in Abuja", "Projects: banner"),
  "access-fund.hero": img(lagosSign, "Walk participants holding a sign that reads Early Support Changes Lives", "Access Fund: banner"),
  "access-fund.body1": img(accessFundFlyer, "Daughter of Ellen Access Fund announcement", "Access Fund: announcement", "object-top"),
  "access-fund.body2": img(abuja6, "A Daughter of Ellen volunteer holding the Walk for Neurodiversity banner in Abuja", "Access Fund: body"),
  "abuja-declaration.hero": img(abuja2, "Walk participants holding the Walk for Neurodiversity and Disability Inclusion banner in Abuja", "Abuja Declaration: banner"),
  "abuja-declaration.body1": img(abuja8, "Supporters holding signs that read Equal Access, Equal Opportunity", "Abuja Declaration: body 1"),
  "abuja-declaration.body2": img(abuja1, "Walkers carrying the Walk for Neurodiversity banner in Abuja", "Abuja Declaration: body 2"),
  "impact.hero": img(lagosMarch, "Participants marching at the Walk for Neurodiversity and Disability Inclusion in Lagos", "Impact: banner"),
  "impact.body1": img(lagosMarch, "Participants marching at the Walk for Neurodiversity and Disability Inclusion in Lagos", "Impact: body 1"),
  "impact.body2": img(lagosGroup, "Volunteers gathered for a group photo at the Lagos walk", "Impact: body 2"),
  "events.hero": img(lagosSpeaker2, "A speaker addressing walk participants in front of the Daughter of Ellen banner", "Events: banner"),
  "events.body1": img(lagosTalk, "Participants in conversation at a Daughter of Ellen walk", "Upcoming Events: body"),
  "events.body2": img(abuja4, "Daughter of Ellen volunteers at the Abuja walk", "Past Events: body"),
  "learn.hero": img(studentsLawn, "Students studying together on a lawn", "Learn & Train: banner"),
  "learn.body1": img(stockClassroom2, "A teacher guiding young children drawing around a classroom table", "Learn & Train: body 1"),
  "learn.body2": img(stockWorkplace, "Three colleagues reviewing work together on a laptop", "Learn & Train: body 2"),
  "get-support.hero": img(family, "A parent and child sharing a laptop at home", "Get Support: banner"),
  "get-support.body1": img(lagosSupport, "Three walk participants holding a sign that reads Early Support Changes Lives", "Get Support: body"),
  "partner.hero": img(abuja8, "Supporters holding signs that read Equal Access, Equal Opportunity", "Partner With Us: banner"),
  "partner.body1": img(stockWorkplace, "Three colleagues reviewing work together on a laptop", "Partner With Us: body 1"),
  "partner.body2": img(lagosGroup, "Volunteers gathered for a group photo at the Lagos walk", "Partner With Us: body 2"),
  "get-involved.hero": img(studentsHighfive, "Young people celebrating together outdoors", "Get Involved: banner"),
  "get-involved.body1": img(lagosTrio, "Three Daughter of Ellen volunteers standing together in Lagos", "Get Involved: body 1"),
  "get-involved.body2": img(abuja5, "Two Daughter of Ellen volunteers holding the Walk for Neurodiversity banner in Abuja", "Get Involved: body 2"),
  "contact.hero": img(lagosTalk, "Participants in conversation at a Daughter of Ellen walk", "Contact: banner"),
  "contact.body1": img(lagosSpeaker2, "A Daughter of Ellen speaker in front of the walk banner", "Contact: body"),
  "community.hero": img(lagosGroup, "Volunteers gathered for a group photo at the Lagos walk", "Community: banner"),
  "community.body1": img(stockAdult, "Two young women chatting while shopping together", "Community: body 1"),
  "community.body2": img(abuja5, "Two Daughter of Ellen volunteers holding the Walk for Neurodiversity banner in Abuja", "Community: body 2"),
  "tende.hero": img(stockAdult, "Two young women chatting while shopping together", "Tende: banner"),
  "tende.body1": img(lagosTalk, "Participants in conversation at a Daughter of Ellen walk", "Tende: body 1"),
  "tende.body2": img(lagosVolunteer, "A Daughter of Ellen volunteer in a green shirt in Lagos", "Tende: body 2"),
  "join-tende.hero": img(lagosTalk, "Participants in conversation at a Daughter of Ellen walk", "Join Tende: banner"),
  "join-tende.body1": img(stockAdult, "Two young women chatting while shopping together", "Join Tende: body"),
  "media.hero": img(lagosSpeaker, "A Daughter of Ellen speaker in front of the Walk for Neurodiversity banner", "Media Features: banner"),
  "media.body1": img(lagosSpeaker2, "A speaker addressing walk participants", "Media Features: body"),
  "who-should-attend.hero": img(lagosBanner, "A large group of walk participants behind the Walk for Neurodiversity banner", "Who Should Attend: banner"),
  "who-should-attend.body1": img(stockClassroom, "A teacher leaning in to help children working together in a classroom", "Who Should Attend: body"),
} satisfies Record<string, SiteImage>;

export type SiteImageSlot = keyof typeof siteImages;
