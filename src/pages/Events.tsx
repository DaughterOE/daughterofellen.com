import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Clock, Globe, MapPin } from "lucide-react";

const events = [
  {
    label: "Free Teachers’ Training",
    endsAt: "2026-10-17T17:00:00+01:00",
    title: "Creating Inclusive Classrooms",
    date: "17 October, 2026",
    time: "4:00 PM WAT",
    venue: "Live on Zoom",
    description:
      "Equipping educators and caregivers with practical ways to support different learners in the classroom.",
    cta: "Register Now",
    link: "https://luma.com/0q687e5v",
  },
  {
    label: "Workshop",
    endsAt: "2026-08-07T20:00:00+01:00",
    title: "AI for Accessibility: Building Inclusive Solutions for the Future",
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
    endsAt: "2026-06-21T00:00:00+01:00",
    title: "Living It: Inclusion, Accessibility, Stigma and the Search for Support",
    date: "June 20th, 2026",
    time: "3:00 PM WAT",
    venue: "Online Webinar",
    description:
      "An inaugural Daughter of Ellen webinar convening voices from across Africa and the diaspora to examine the everyday realities of neurodivergent individuals and persons with disabilities, and to chart a clear path toward the support systems our communities deserve.",
    cta: "Register for the Webinar",
    link: "https://event.getbookt.io/living-it-inclusion-accessibility-stigma-and-the-search-for-support",
  },
];

const Events = () => {
  const now = Date.now();
  const upcoming = events.filter(event => new Date(event.endsAt).getTime() > now);
  const past = events.filter(event => new Date(event.endsAt).getTime() <= now);
  return (
  <main className="pt-24">
    {/* HERO */}
    <section className="section-padding relative overflow-hidden bg-primary">
      <div className="noise-overlay absolute inset-0" />
      <div className="deco-orb left-1/4 top-0 h-96 w-96 bg-secondary" />
      <div className="relative mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-6xl">
            Events
          </h1>
          <div className="gold-divider mx-auto mt-6 mb-4 max-w-xs" />
          <p className="text-base text-primary-foreground/80 md:text-lg">
            Convenings, workshops, and webinars advancing inclusion for neurodivergent individuals and persons with disabilities.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* EVENT LIST */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-4xl space-y-10">
        <h2 className="font-heading text-3xl">Upcoming Events</h2>
        {upcoming.length === 0 && <p className="text-muted-foreground">No upcoming events are listed.</p>}
        {[{ title: "Upcoming", items: upcoming }, { title: "Past Events", items: past }].map(group => <div key={group.title} className="space-y-8">{group.title === "Past Events" && <h2 className="font-heading text-3xl">Past Events</h2>}{group.items.map((event, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <article className="rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-secondary md:p-10">
              <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">
                {event.label}
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
                {event.title}
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-secondary" />
              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={18} className="text-secondary" />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock size={18} className="text-secondary" />
                  {event.time}
                </span>
                <span className="inline-flex items-center gap-2">
                  {event.venue === "Zoom" ? (
                    <MapPin size={18} className="text-secondary" />
                  ) : (
                    <Globe size={18} className="text-secondary" />
                  )}
                  {event.venue}
                </span>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {event.description}
              </p>
              <div className="mt-8">
                <Button asChild><a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-secondary px-8 py-3.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
                >
                  {new Date(event.endsAt).getTime() > now ? event.cta : "View Event Details"}
                </a></Button>
              </div>
            </article>
          </ScrollReveal>
        ))}</div>)}
        <Button asChild variant="outline"><Link to="/projects">Past Events / Projects</Link></Button>
      </div>
    </section>
  </main>
);
};

export default Events;
