import { describe, expect, it } from "vitest";
import { getPageConfig, pageCards } from "@/lib/pageConfig";
import { siteImages } from "@/lib/siteImages";

// Inner pages named in the inner page template brief.
const briefPages = [
  "/about", "/about/founder", "/what-we-do/family-support", "/what-we-do/inclusive-education",
  "/what-we-do/technology-accessibility", "/what-we-do/adult-community", "/what-we-do/workplace-inclusion",
  "/projects", "/projects/access-fund", "/abuja-declaration", "/impact", "/events", "/learn", "/get-support",
  "/partner", "/get-involved", "/contact",
];

describe("inner page template config", () => {
  it.each(briefPages)("%s has a banner image, a CTA band and 2 to 3 related cards", path => {
    const config = getPageConfig(path);
    expect(config).toBeDefined();
    expect(siteImages[config!.hero]).toBeDefined();
    expect(config!.cta.primary.label.length).toBeGreaterThan(0);
    const related = config!.related.filter(p => p !== path && pageCards[p]);
    expect(related.length).toBeGreaterThanOrEqual(2);
    expect(related.length).toBeLessThanOrEqual(3);
  });

  it("Family Support links to Inclusive Education and Adult Community", () => {
    expect(getPageConfig("/what-we-do/family-support")!.related).toEqual(expect.arrayContaining(["/what-we-do/inclusive-education", "/what-we-do/adult-community"]));
  });

  it("DOE Access Fund related cards link to other projects, not What We Do pages", () => {
    const related = getPageConfig("/projects/access-fund")!.related;
    expect(related.some(p => p.startsWith("/what-we-do"))).toBe(false);
    expect(related).toContain("/projects");
  });

  it("no What We Do page recommends the Access Fund", () => {
    for (const slug of ["family-support", "inclusive-education", "technology-accessibility", "adult-community", "workplace-inclusion"]) {
      expect(getPageConfig(`/what-we-do/${slug}`)!.related).not.toContain("/projects/access-fund");
    }
  });

  it("the homepage has no inner page template", () => {
    expect(getPageConfig("/")).toBeUndefined();
  });

  it("event detail pages fall back to the events template", () => {
    expect(getPageConfig("/events/living-it-webinar")?.hero).toBe("events.hero");
  });
});
