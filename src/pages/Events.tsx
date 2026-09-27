import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Clock, Globe, MapPin } from "lucide-react";
import { events as allEvents } from "@/data/events";
import { partitionEvents, type EventItem } from "@/lib/events";

interface EventCardProps {
  event: EventItem;
  past?: boolean;
}

const EventCard = ({ event, past = false }: EventCardProps) => (
  <article
    data-testid={past ? "past-event" : "upcoming-event"}
    className={`rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:border-secondary md:p-10 ${
      past ? "opacity-80 hover:opacity-100" : ""
    }`}
  >
    <div className="flex flex-wrap items-center gap-3">
      <p className="font-body text-sm uppercase tracking-[0.2em] text-secondary">{event.label}</p>
      {past && (
        <span className="rounded-full border border-border px-3 py-1 font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Past event
        </span>
      )}
    </div>
    <h3 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">{event.title}</h3>
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
    <p className="mt-6 text-base leading-relaxed text-muted-foreground">{event.description}</p>
    <div className="mt-8">
      {past ? (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border-2 border-border px-8 py-3.5 font-body text-sm font-semibold text-foreground transition-all duration-300 hover:border-secondary"
        >
          View event
        </a>
      ) : (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-secondary px-8 py-3.5 font-body text-sm font-semibold text-secondary-foreground transition-all duration-300 gold-glow-hover hover:scale-105 hover:-translate-y-0.5"
        >
          {event.cta}
        </a>
      )}
    </div>
  </article>
);

const SectionHeading = ({ id, title, subtitle }: { id: string; title: string; subtitle: string }) => (
  <div className="mb-8">
    <h2 id={id} className="font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    <p className="mt-2 text-muted-foreground">{subtitle}</p>
  </div>
);

const PastDivider = () => (
  <div role="separator" aria-label="Past events" className="flex items-center gap-6 py-4">
    <div className="gold-divider flex-1" />
    <span className="font-body text-sm uppercase tracking-[0.2em] text-secondary">Past Events</span>
    <div className="gold-divider flex-1" />
  </div>
);

interface EventsProps {
  /** Overrides the current time. Used by tests; the page defaults to now. */
  now?: Date;
  /** Overrides the event list. Used by tests; the page defaults to the shared data. */
  events?: EventItem[];
}

const Events = ({ now, events = allEvents }: EventsProps = {}) => {
  const { upcoming, past } = partitionEvents(events, now);

  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden bg-primary">
        <div className="noise-overlay absolute inset-0" />
        <div className="deco-orb left-1/4 top-0 h-96 w-96 bg-secondary" />
        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-6xl">Events</h1>
            <div className="gold-divider mx-auto mt-6 mb-4 max-w-xs" />
            <p className="text-base text-primary-foreground/80 md:text-lg">
              Convenings, workshops, and webinars advancing inclusion for neurodivergent individuals and persons with
              disabilities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="section-padding relative overflow-hidden bg-background" aria-labelledby="upcoming-heading">
        <div className="relative mx-auto max-w-4xl">
          <ScrollReveal>
            <SectionHeading id="upcoming-heading" title="Upcoming" subtitle="Register early to secure your place." />
          </ScrollReveal>
          {upcoming.length === 0 ? (
            <ScrollReveal>
              <p
                data-testid="no-upcoming"
                className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground"
              >
                No upcoming events are scheduled right now. Check back soon.
              </p>
            </ScrollReveal>
          ) : (
            <div className="space-y-10">
              {upcoming.map((event, i) => (
                <ScrollReveal key={event.title} delay={i * 100}>
                  <EventCard event={event} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PAST */}
      {past.length > 0 && (
        <section className="section-padding relative overflow-hidden bg-background pt-0 lg:pt-0" aria-labelledby="past-heading">
          <div className="relative mx-auto max-w-4xl">
            <ScrollReveal>
              <PastDivider />
              <SectionHeading id="past-heading" title="Past events" subtitle="A look back at what we have convened so far." />
            </ScrollReveal>
            <div className="space-y-10">
              {past.map((event, i) => (
                <ScrollReveal key={event.title} delay={i * 100}>
                  <EventCard event={event} past />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Events;
