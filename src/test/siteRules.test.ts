import { describe, expect, it } from "vitest";
import { deliveryAreas, navigation, programPath, volunteerUrl } from "@/lib/institutionalContent";
import { events, upcomingEvents } from "@/lib/events";

describe("site navigation rules", () => {
  it("DOE Access Fund is not listed under What We Do", () => {
    const whatWeDo = navigation.find(m => m.label === "What We Do")!;
    expect(whatWeDo.links.some(l => l.path.includes("access-fund"))).toBe(false);
    expect(deliveryAreas.some(p => p.slug === "access-fund")).toBe(false);
  });

  it("DOE Access Fund is listed under Projects at /projects/access-fund", () => {
    const projects = navigation.find(m => m.label === "Projects")!;
    expect(projects.links).toContainEqual({ label: "DOE Access Fund", path: "/projects/access-fund" });
    expect(programPath("access-fund")).toBe("/projects/access-fund");
  });

  it("volunteers sign up through the DOE volunteer portal", () => {
    expect(volunteerUrl).toBe("https://doe-serve-connect.base44.app/");
  });
});

describe("events", () => {
  it("The Inclusion Exchange registers through Luma on 5 November 2026 in Abuja", () => {
    const e = events.find(x => x.slug === "the-inclusion-exchange")!;
    expect(e.link).toBe("https://luma.com/735xhiit");
    expect(e.startsAt).toBe("2026-11-05T09:00:00+01:00");
    expect(e.venue).toContain("Abuja");
  });

  it("Tende Sessions 01 registers through Luma on 7 November 2026 in Lagos", () => {
    const e = events.find(x => x.slug === "tende-sessions-01-mode")!;
    expect(e.link).toBe("https://luma.com/92d12dhe");
    expect(e.startsAt).toBe("2026-11-07T10:00:00+01:00");
    expect(e.venue).toContain("Lagos");
  });

  it("on 30 October 2026 the two new events are upcoming, soonest first", () => {
    const list = upcomingEvents(new Date("2026-10-30T10:00:00+01:00").getTime());
    expect(list.map(e => e.slug)).toEqual(["the-inclusion-exchange", "tende-sessions-01-mode"]);
  });

  it("the three past events each carry an on-site report", () => {
    for (const slug of ["ai-for-accessibility", "living-it-webinar", "lagos-awareness-walk"]) {
      expect(events.find(e => e.slug === slug)!.report).toBeDefined();
    }
  });
});

describe("event reports", () => {
  it("Event Reports is listed under the Events menu", () => {
    const menu = navigation.find(m => m.label === "Events")!;
    expect(menu.links).toContainEqual({ label: "Event Reports", path: "/events/reports" });
  });
});
