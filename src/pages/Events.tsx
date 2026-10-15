import { Link, useParams } from "react-router-dom";
import { PageHeading } from "@/components/InstitutionalLayout";
import EventCard from "@/components/EventCard";
import GallerySlider from "@/components/GallerySlider";
import { Button } from "@/components/ui/button";
import { events, isUpcoming } from "@/lib/events";
import NotFound from "./NotFound";

const Tabs = ({ active }: { active: "upcoming" | "past" }) => <nav aria-label="Events" className="mb-10 flex gap-6 border-b border-border">
  {([["upcoming", "Upcoming Events", "/events"], ["past", "Past Events", "/events/past"]] as const).map(([key, label, to]) =>
    <Link key={key} to={to} aria-current={active === key ? "page" : undefined} className={`-mb-px border-b-2 pb-3 font-semibold ${active === key ? "border-secondary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{label}</Link>)}
</nav>;

const Events = () => {
  const list = events.filter(e => isUpcoming(e));
  return <main className="pt-24"><PageHeading title="Upcoming Events" description="Convenings, workshops, and webinars advancing inclusion for neurodivergent individuals and persons with disabilities." />
    <section id="upcoming" className="section-padding bg-background"><div className="mx-auto max-w-4xl"><Tabs active="upcoming" />
      <div className="space-y-8">{list.length ? list.map(e => <EventCard key={e.slug} event={e} />) : <p className="text-muted-foreground">No upcoming events are listed.</p>}</div>
    </div></section></main>;
};

export const PastEvents = () => {
  const list = events.filter(e => !isUpcoming(e));
  return <main className="pt-24"><PageHeading title="Past Events" parent={{ label: "Events", path: "/events" }} />
    <section className="section-padding bg-background"><div className="mx-auto max-w-4xl"><Tabs active="past" />
      <div className="space-y-8">{list.length ? list.map(e => <EventCard key={e.slug} event={e} />) : <p className="text-muted-foreground">No past events are listed.</p>}</div>
    </div></section></main>;
};

export const EventDetail = () => {
  const { slug } = useParams();
  const event = events.find(e => e.slug === slug);
  if (!event) return <NotFound />;
  const upcoming = isUpcoming(event);
  return <main className="pt-24"><PageHeading title={event.title} parent={upcoming ? { label: "Upcoming Events", path: "/events" } : { label: "Past Events", path: "/events/past" }} />
    <section className="section-padding bg-background"><div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[2fr_1fr]">
      <div className="space-y-12">
        <div><p className="text-sm uppercase tracking-[0.2em] text-secondary-text">{event.label}</p><h2 className="mt-3 font-heading text-2xl">Theme: {event.theme}</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3"><div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Date</dt><dd>{event.date}</dd></div><div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Time</dt><dd>{event.time}</dd></div><div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Venue</dt><dd>{event.venue}</dd></div></dl>
          <p className="mt-6 leading-relaxed text-muted-foreground">{event.description}</p>
          {upcoming && <Button asChild size="lg" className="mt-8"><a href={event.link} target="_blank" rel="noopener noreferrer">{event.cta}</a></Button>}
        </div>
        <div><h2 className="mb-6 font-heading text-2xl">Guest Speakers</h2>
          {event.speakers.length ? <ul className="grid gap-6 sm:grid-cols-2">{event.speakers.map(s => <li key={s.name} className="flex items-center gap-4">{s.photo && <img src={s.photo} alt={s.name} className="h-20 w-20 rounded-md object-cover" />}<div><p className="font-semibold">{s.name}</p><p className="text-sm text-muted-foreground">{s.title}</p></div></li>)}</ul>
            : <p className="text-muted-foreground">Speaker details will be published here.</p>}
        </div>
        {!upcoming && <>
          <div><h2 className="mb-4 font-heading text-2xl">Event Summary</h2><p className="leading-relaxed text-muted-foreground">{event.recap ?? "The event recap will be published here."}</p></div>
          <div><h2 className="mb-4 font-heading text-2xl">Event Report</h2>{event.reportUrl ? <Button asChild variant="outline"><a href={event.reportUrl} target="_blank" rel="noopener noreferrer">Download the Report</a></Button> : <p className="text-muted-foreground">The event report will be available here.</p>}</div>
          <div><h2 className="font-heading text-2xl">Photo Gallery</h2>{event.gallery.length ? <GallerySlider images={event.gallery} alt={event.title} /> : <p className="mt-4 text-muted-foreground">Photos will be added here.</p>}</div>
        </>}
      </div>
      {event.image && <img src={event.image} alt={`Flyer for ${event.title}`} className="w-full rounded-md object-contain" />}
    </div></section></main>;
};

export default Events;
