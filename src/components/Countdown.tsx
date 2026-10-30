import { useEffect, useState } from "react";

const units = (ms: number) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  return [
    { label: "Days", value: Math.floor(total / 86400) },
    { label: "Hours", value: Math.floor(total / 3600) % 24 },
    { label: "Minutes", value: Math.floor(total / 60) % 60 },
    { label: "Seconds", value: total % 60 },
  ];
};

/** Live countdown to an event start time. Renders nothing once the event has started. */
const Countdown = ({ startsAt, tone = "dark", label = "Countdown to the event" }: { startsAt: string; tone?: "dark" | "light"; label?: string }) => {
  const target = new Date(startsAt).getTime();
  const [ms, setMs] = useState(() => target - Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setMs(target - Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [target]);
  if (ms <= 0) return null;
  const parts = units(ms);
  const box = tone === "dark" ? "border-authority-foreground/20 bg-authority-foreground/5" : "border-border bg-background";
  const sub = tone === "dark" ? "text-authority-foreground/70" : "text-muted-foreground";
  return <div>
    <p className={`font-body text-xs uppercase tracking-[0.2em] ${tone === "dark" ? "text-secondary" : "text-secondary-text"}`}>{label}</p>
    <div className="mt-3 flex flex-wrap gap-3" aria-hidden="true">
      {parts.map(unit => <div key={unit.label} className={`min-w-[4.5rem] rounded-md border px-4 py-3 text-center ${box}`}>
        <span className="block font-heading text-2xl font-bold tabular-nums md:text-3xl">{unit.value}</span>
        <span className={`mt-1 block font-body text-[11px] uppercase tracking-[0.18em] ${sub}`}>{unit.label}</span>
      </div>)}
    </div>
    <p className="sr-only">Begins in {parts[0].value} days and {parts[1].value} hours.</p>
  </div>;
};

export default Countdown;
