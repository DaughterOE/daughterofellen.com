import { Link, useParams } from "react-router-dom";
import { ActionLink, CalloutBand, ContentBand, ImageTextRow, PageHeading, SiteImg } from "@/components/InstitutionalLayout";
import { brand, communityUrl } from "@/lib/institutionalContent";
import EventCard from "@/components/EventCard";
import GallerySlider from "@/components/GallerySlider";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import { type EventReport, events, isUpcoming, reportPath, upcomingEvents } from "@/lib/events";
import NotFound from "./NotFound";

const Tabs = ({ active }: { active: "upcoming" | "past" | "reports" }) => <nav aria-label="Events" className="mb-10 flex gap-6 border-b border-border">
  {([["upcoming", "Upcoming Events", "/events"], ["past", "Past Events", "/events/past"], ["reports", "Event Reports", "/events/reports"]] as const).map(([key, label, to]) =>
    <Link key={key} to={to} aria-current={active === key ? "page" : undefined} className={`-mb-px border-b-2 pb-3 font-semibold ${active === key ? "border-secondary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{label}</Link>)}
</nav>;

const Events = () => {
  const list = upcomingEvents();
  return <main className="pt-24"><PageHeading title="Upcoming Events" description="Convenings, workshops, and webinars advancing inclusion for neurodivergent individuals and persons with disabilities." />
    <section id="upcoming" className="section-padding bg-background"><div className="mx-auto max-w-4xl"><Tabs active="upcoming" />
      <div className="space-y-8">{list.length ? list.map(e => <EventCard key={e.slug} event={e} />) : <p className="text-muted-foreground">No upcoming events are listed.</p>}</div>
    </div></section>
    <CalloutBand tone="muted">Convenings, workshops, and webinars advancing inclusion for neurodivergent individuals and persons with disabilities.</CalloutBand>
    <ContentBand tone="tint"><ImageTextRow slot="events.body1" title="Join the Community"><p>{brand.support}</p><div className="flex flex-wrap gap-4 pt-2"><ActionLink to={communityUrl}>Join the Community</ActionLink><ActionLink to="/events/past" secondary>Explore Past Events</ActionLink></div></ImageTextRow></ContentBand></main>;
};

export const PastEvents = () => {
  const list = events.filter(e => !isUpcoming(e)).sort((a, b) => b.startsAt.localeCompare(a.startsAt));
  return <main className="pt-24"><PageHeading title="Past Events" parent={{ label: "Events", path: "/events" }} />
    <section className="section-padding bg-background"><div className="mx-auto max-w-4xl"><Tabs active="past" />
      <div className="space-y-8">{list.length ? list.map(e => <EventCard key={e.slug} event={e} />) : <p className="text-muted-foreground">No past events are listed.</p>}</div>
    </div></section>
    <CalloutBand tone="muted">Convenings, workshops, and webinars advancing inclusion for neurodivergent individuals and persons with disabilities.</CalloutBand>
    <ContentBand tone="tint"><ImageTextRow slot="events.body2" title="Our Projects" reverse><p>{brand.support}</p><div className="pt-2"><ActionLink to="/projects">Explore Our Projects</ActionLink></div></ImageTextRow></ContentBand></main>;
};

export const EventReports = () => {
  const list = events.filter(e => e.report).sort((a, b) => b.startsAt.localeCompare(a.startsAt));
  return <main className="pt-24"><PageHeading title="Event Reports" parent={{ label: "Events", path: "/events" }} />
    <section className="section-padding bg-background"><div className="mx-auto max-w-4xl"><Tabs active="reports" />
      <div className="space-y-6">{list.map(e => <article key={e.slug} className="rounded-md border border-border bg-card p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-secondary-text">{e.label} · {e.date}</p>
        <h3 className="mt-3 font-heading text-2xl font-bold">{e.report!.title}</h3>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button asChild><Link to={reportPath(e.slug)}>Read the Report</Link></Button>
          {e.reportUrl && <Button asChild variant="link" className="px-0"><a href={e.reportUrl} target="_blank" rel="noopener noreferrer">Open the Original Document</a></Button>}
        </div>
      </article>)}</div>
    </div></section></main>;
};

const ReportBody = ({ report }: { report: EventReport }) => <div className="max-w-3xl">
  <h2 className="font-heading text-3xl leading-tight md:text-4xl">{report.title}</h2>
  <dl className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
    {report.details.map(([k, v]) => <div key={k}><dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt><dd className="text-foreground">{v}</dd></div>)}
  </dl>
  {report.sections.map(section => <section key={section.heading} className="mt-10">
    <h3 className="mb-4 font-heading text-2xl">{section.heading}</h3>
    <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
      {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
      {section.items && (() => {
        const items = section.items.map((item, i) => <li key={i} className="pl-1">
          {item.lead && <strong className="font-semibold text-foreground">{item.lead} </strong>}
          {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-secondary-text underline underline-offset-4">{item.text}</a> : item.text}
        </li>);
        return section.ordered ? <ol className="list-decimal space-y-2 pl-6">{items}</ol> : <ul className="list-disc space-y-2 pl-6">{items}</ul>;
      })()}
      {section.afterItems?.map((p, i) => <p key={`a${i}`}>{p}</p>)}
    </div>
  </section>)}
</div>;

export const EventDetail = () => {
  const { slug } = useParams();
  const event = events.find(e => e.slug === slug);
  if (!event) return <NotFound />;
  const upcoming = isUpcoming(event);
  return <main className="pt-24"><PageHeading title={event.title} description={event.description} parent={upcoming ? { label: "Upcoming Events", path: "/events" } : { label: "Past Events", path: "/events/past" }} />
    <section className="section-padding bg-background"><div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[2fr_1fr]">
      <div className="space-y-12">
        <div><p className="text-sm uppercase tracking-[0.2em] text-secondary-text">{event.label}</p><h2 className="mt-3 font-heading text-2xl">Theme: {event.theme}</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3"><div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Date</dt><dd>{event.date}</dd></div><div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Time</dt><dd>{event.time}</dd></div><div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Venue</dt><dd>{event.venue}</dd></div></dl>
          {upcoming && <div className="mt-8"><Countdown startsAt={event.startsAt} tone="light" /></div>}
          {upcoming && <Button asChild size="lg" className="mt-8"><a href={event.link} target="_blank" rel="noopener noreferrer">{event.cta}</a></Button>}
          {!upcoming && event.report && <Button asChild size="lg" className="mt-8"><a href="#report">View the Report</a></Button>}
        </div>
        <div><h2 className="mb-6 font-heading text-2xl">{event.slug === "ai-for-accessibility" ? "Facilitators" : "Guest Speakers"}</h2>
          {event.speakers.length ? <ul className="grid gap-6 sm:grid-cols-2">{event.speakers.map(s => <li key={s.name} className="flex items-center gap-4">{s.photo && <img src={s.photo} alt={s.name} className="h-20 w-20 rounded-md object-cover" />}<div><p className="font-semibold">{s.name}</p><p className="text-sm text-muted-foreground">{s.title}</p></div></li>)}</ul>
            : <p className="text-muted-foreground">Speaker details will be published here.</p>}
        </div>
        {!upcoming && <div><h2 className="mb-4 font-heading text-2xl">Event Summary</h2><p className="leading-relaxed text-muted-foreground">{event.recap ?? "The event recap will be published here."}</p></div>}
      </div>
      {event.image ? <img src={event.image} alt={event.imageAlt ?? `Flyer for ${event.title}`} className="w-full self-start rounded-md object-contain" /> : <SiteImg slot="events.body2" className="aspect-[4/5] w-full self-start rounded-md" />}
    </div></section>
    {!upcoming && <section id="report" className="section-padding scroll-mt-28 bg-tint"><div className="mx-auto max-w-[1200px]">
      <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-secondary-text">Event Report</p>
      {event.report ? <ReportBody report={event.report} /> : <p className="text-muted-foreground">The event report will be available here.</p>}
    </div></section>}
    {!upcoming && <section className="section-padding overflow-hidden bg-card"><div className="mx-auto max-w-[1200px]">
      <h2 className="font-heading text-3xl">Photo Gallery</h2>{event.gallery.length ? <GallerySlider images={event.gallery} alt={event.title} /> : <p className="mt-4 text-muted-foreground">Photos will be added here.</p>}
    </div></section>}
  </main>;
};

export default Events;
