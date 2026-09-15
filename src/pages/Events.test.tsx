import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Events from "./Events";

describe("Events page", () => {
  it("lists upcoming events above the divider and past events below it", () => {
    // Between the June webinar and the August workshop.
    render(<Events now={new Date("2026-07-01T00:00:00Z")} />);

    const upcoming = screen.getAllByTestId("upcoming-event");
    const past = screen.getAllByTestId("past-event");
    expect(upcoming).toHaveLength(1);
    expect(past).toHaveLength(1);
    expect(within(upcoming[0]).getByText(/AI for Accessibility/)).toBeInTheDocument();
    expect(within(past[0]).getByText(/Living It/)).toBeInTheDocument();

    const divider = screen.getByRole("separator", { name: "Past events" });
    expect(upcoming[0].compareDocumentPosition(divider) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(divider.compareDocumentPosition(past[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("keeps the register button for upcoming events and swaps it for a link on past ones", () => {
    render(<Events now={new Date("2026-07-01T00:00:00Z")} />);
    expect(screen.getByRole("link", { name: "Register" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View event" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Register for the Webinar" })).not.toBeInTheDocument();
  });

  it("shows an empty state when nothing is upcoming", () => {
    render(<Events now={new Date("2030-01-01T00:00:00Z")} />);
    expect(screen.getByTestId("no-upcoming")).toBeInTheDocument();
    expect(screen.queryAllByTestId("upcoming-event")).toHaveLength(0);
    expect(screen.getAllByTestId("past-event")).toHaveLength(2);
  });

  it("omits the past section when every event is upcoming", () => {
    render(<Events now={new Date("2026-01-01T00:00:00Z")} />);
    expect(screen.queryByRole("separator", { name: "Past events" })).not.toBeInTheDocument();
    expect(screen.getAllByTestId("upcoming-event")).toHaveLength(2);
  });
});
