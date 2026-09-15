import { describe, it, expect } from "vitest";
import { partitionEvents, type EventItem } from "./events";

const make = (title: string, startsAt: string, endsAt?: string): EventItem => ({
  label: "Test",
  title,
  startsAt,
  endsAt,
  date: "",
  time: "",
  venue: "",
  description: "",
  cta: "",
  link: "",
});

const now = new Date("2026-09-15T12:00:00Z");

describe("partitionEvents", () => {
  it("splits events into upcoming and past relative to now", () => {
    const { upcoming, past } = partitionEvents(
      [make("past", "2026-06-20T15:00:00+01:00"), make("future", "2026-12-01T10:00:00Z")],
      now,
    );
    expect(upcoming.map((e) => e.title)).toEqual(["future"]);
    expect(past.map((e) => e.title)).toEqual(["past"]);
  });

  it("orders upcoming soonest-first and past most-recent-first", () => {
    const { upcoming, past } = partitionEvents(
      [
        make("far", "2027-01-01T00:00:00Z"),
        make("soon", "2026-10-01T00:00:00Z"),
        make("old", "2025-01-01T00:00:00Z"),
        make("recent", "2026-08-01T00:00:00Z"),
      ],
      now,
    );
    expect(upcoming.map((e) => e.title)).toEqual(["soon", "far"]);
    expect(past.map((e) => e.title)).toEqual(["recent", "old"]);
  });

  it("keeps an event upcoming while it is still running", () => {
    const running = make("running", "2026-09-15T11:00:00Z", "2026-09-15T13:00:00Z");
    const justEnded = make("ended", "2026-09-15T09:00:00Z", "2026-09-15T11:00:00Z");
    const { upcoming, past } = partitionEvents([running, justEnded], now);
    expect(upcoming.map((e) => e.title)).toEqual(["running"]);
    expect(past.map((e) => e.title)).toEqual(["ended"]);
  });

  it("returns empty lists when there are no events", () => {
    expect(partitionEvents([], now)).toEqual({ upcoming: [], past: [] });
  });
});
