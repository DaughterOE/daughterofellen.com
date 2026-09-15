export interface EventItem {
  label: string;
  title: string;
  /** ISO 8601 timestamp with offset, e.g. "2026-08-07T18:00:00+01:00". Drives upcoming/past sorting. */
  startsAt: string;
  /** Optional ISO 8601 end. Until this passes the event still counts as upcoming. Defaults to startsAt. */
  endsAt?: string;
  /** Human-readable strings shown on the card. */
  date: string;
  time: string;
  venue: string;
  description: string;
  cta: string;
  link: string;
}

export interface PartitionedEvents {
  upcoming: EventItem[];
  past: EventItem[];
}

const endOf = (event: EventItem) => new Date(event.endsAt ?? event.startsAt).getTime();
const startOf = (event: EventItem) => new Date(event.startsAt).getTime();

/**
 * Splits events into upcoming (soonest first) and past (most recent first).
 * An event is upcoming until its end time (or start time, if no end is given) has passed.
 */
export const partitionEvents = (events: EventItem[], now: Date = new Date()): PartitionedEvents => {
  const cutoff = now.getTime();
  const upcoming = events.filter((e) => endOf(e) >= cutoff).sort((a, b) => startOf(a) - startOf(b));
  const past = events.filter((e) => endOf(e) < cutoff).sort((a, b) => startOf(b) - startOf(a));
  return { upcoming, past };
};
