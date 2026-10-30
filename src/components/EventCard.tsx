import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import { type DoeEvent, isUpcoming, reportPath } from "@/lib/events";

const EventCard = ({ event }: { event: DoeEvent }) => {
  const upcoming = isUpcoming(event);
  return <article className={`grid gap-8 rounded-md border border-border bg-card p-8 md:p-10 ${event.image ? "md:grid-cols-[1fr_220px]" : ""}`}>
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-secondary-text">{event.label}</p>
      <h3 className="mt-3 font-heading text-2xl font-bold md:text-3xl">{event.title}</h3>
      <dl className="mt-6 grid gap-x-8 gap-y-2 text-muted-foreground sm:grid-cols-3">
        <div><dt className="text-xs uppercase tracking-wider">Date</dt><dd className="text-foreground">{event.date}</dd></div>
        <div><dt className="text-xs uppercase tracking-wider">Time</dt><dd className="text-foreground">{event.time}</dd></div>
        <div><dt className="text-xs uppercase tracking-wider">Location</dt><dd className="text-foreground">{event.venue}</dd></div>
      </dl>
      <p className="mt-6 leading-relaxed text-muted-foreground">{event.description}</p>
      {upcoming && <div className="mt-6"><Countdown startsAt={event.startsAt} tone="light" /></div>}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        {upcoming && <Button asChild><a href={event.link} target="_blank" rel="noopener noreferrer">{event.cta}</a></Button>}
        {!upcoming && event.report && <Button asChild><Link to={reportPath(event.slug)}>View the Report</Link></Button>}
        <Button asChild variant={upcoming || event.report ? "link" : "outline"} className={upcoming || event.report ? "px-0" : ""}><Link to={`/events/${event.slug}`}>View Event Details</Link></Button>
      </div>
    </div>
    {event.image && <img src={event.image} alt={event.imageAlt ?? `Artwork for ${event.title}`} loading="lazy" className="w-full self-start rounded-md object-contain" />}
  </article>;
};
export default EventCard;
