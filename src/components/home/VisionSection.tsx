import ScrollReveal from "@/components/ScrollReveal";
import { Scale, Eye, Landmark, Users, GraduationCap } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Advocacy",
    desc: "Driving systemic reform through structured engagement with lawmakers, institutions, and civil society across Nigeria and the continent.",
  },
  {
    icon: Eye,
    title: "Awareness",
    desc: "Shifting national narratives through media partnerships, public campaigns, and community-led dialogues that dismantle stigma.",
  },
  {
    icon: Landmark,
    title: "Policy Influence",
    desc: "Closing the gap between international disability frameworks and African institutional practice through legislative engagement.",
  },
  {
    icon: Users,
    title: "Community Support",
    desc: "Equipping families and caregivers with peer networks, professional guidance, and structured resources for daily practice.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Building inclusive education frameworks and neurodiversity-affirming training for educators and employers alike.",
  },
];

const VisionSection = () => (
  <section className="section-padding relative overflow-hidden bg-card">
    <div className="deco-orb left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-secondary" />
    <div className="relative mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Our Vision
        </h2>
        <p className="mx-auto mb-4 max-w-2xl text-center text-muted-foreground">
          Creating systems of inclusion in education, workplaces, and policy — championing neurodivergent
          children across Africa and building national and continental dialogue.
        </p>
        <div className="gold-divider mx-auto mb-16 max-w-xs" />
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={i} delay={i * 120}>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-background p-8 transition-all duration-500 hover:border-secondary hover:shadow-xl hover:-translate-y-1">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-secondary-foreground">
                <pillar.icon size={22} />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pillar.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
