import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const stats = [
  { value: 30, suffix: " million", label: "Estimated persons living with disabilities in Nigeria" },
  { value: 1, suffix: " in 36", label: "Children diagnosed with Autism Spectrum Disorder globally" },
  { value: 10, suffix: "%", prefix: "<", label: "Nigerian children with disabilities access appropriate support" },
];

const StatsSection = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    <div className="deco-orb -left-16 top-0 h-64 w-64 bg-forest-light" />
    <div className="relative mx-auto max-w-6xl">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 120}>
            <div className="rounded-xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-secondary hover:-translate-y-1">
              <div className="font-heading text-4xl font-bold text-secondary">
                {stat.prefix && <span>{stat.prefix}</span>}
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={400}>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-secondary hover:-translate-y-1">
            <p className="font-heading text-lg font-semibold text-foreground">
              Nigeria's Disability Act was passed in 2018 and remains largely unenforced
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-secondary hover:-translate-y-1">
            <p className="font-heading text-lg font-bold text-secondary">
              One movement. Starting now.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default StatsSection;