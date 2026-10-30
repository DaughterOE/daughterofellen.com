import { Link } from "react-router-dom";
import Countdown from "@/components/Countdown";
import { upcomingEvents } from "@/lib/events";

const UpcomingEventSection = ({ compact = false }: { compact?: boolean }) => {
  const list = upcomingEvents();
  return (
    <section className={`${compact ? "section-compact" : "section-padding"} relative overflow-hidden bg-authority text-authority-foreground`}>
      <div className="relative mx-auto max-w-6xl">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">Upcoming Events</p>
        {list.length === 0 && <p className="mt-6 text-authority-foreground/80">No upcoming events are listed. Explore past events and reports.</p>}
        <div className="mt-6 space-y-16">
          {list.map((event, i) => (
            <article key={event.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div className={i % 2 ? "md:order-2" : undefined}>
                <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">{event.label}</p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight md:text-5xl">{event.title}</h2>
                <div className="gold-divider mt-6 mb-6 max-w-xs" />
                <p className="max-w-xl text-base leading-relaxed text-authority-foreground/80 md:text-lg">{event.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-authority-foreground/80">
                  <span>{event.date}</span><span>{event.time}</span><span>{event.venue}</span>
                </div>
                <div className="mt-8"><Countdown startsAt={event.startsAt} /></div>
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-secondary px-10 py-4 font-body text-sm font-semibold text-secondary-foreground">{event.cta}</a>
                  <Link to={`/events/${event.slug}`} className="inline-block rounded-md border-2 border-authority-foreground/40 px-8 py-3.5 font-body text-sm font-semibold text-authority-foreground hover:border-authority-foreground hover:bg-authority-foreground/10">View Event Details</Link>
                </div>
              </div>
              {event.image && <div className={i % 2 ? "md:order-1" : undefined}>
                <img src={event.image} alt={event.imageAlt ?? `Artwork for ${event.title}`} loading="lazy" className="mx-auto w-full max-w-md rounded-md border border-authority-foreground/15 object-contain" />
              </div>}
            </article>
          ))}
        </div>
        <div className="mt-12"><Link to="/events#upcoming" className="inline-block rounded-md border-2 border-authority-foreground/40 px-8 py-3.5 font-body text-sm font-semibold text-authority-foreground hover:border-authority-foreground hover:bg-authority-foreground/10">See All Events</Link></div>
      </div>
    </section>
  );
};

export default UpcomingEventSection;
