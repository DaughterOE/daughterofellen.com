import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import susanMichael from "@/assets/susan-o-michael.jpeg";
import sainabouManneh from "@/assets/sainabou-manneh.jpeg";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  img: string;
  shortBio: string;
  fullBio: React.ReactNode;
}

const team: TeamMember[] = [
  {
    name: "Sainabou Manneh",
    role: "Director of Operations",
    img: sainabouManneh,
    shortBio:
      "Sainabou Manneh is an accomplished operations and program leader with over 10 years of experience driving cross-functional initiatives across technology, artificial intelligence, finance, healthcare, fashion, entertainment, and gas sectors.",
    fullBio: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          With a strong foundation in Agile and project management, she specializes in building scalable systems, optimizing organizational workflows, and leading high-performing teams to deliver measurable, impact-driven outcomes.
        </p>
        <p>
          As Director of Operations at Daughter of Ellen, Sainabou leads the development and execution of strategic programs that support neurodivergent children and individuals with disabilities across Africa. She translates the organization's vision into structured, sustainable operations—strengthening early identification efforts, expanding community-based support, and enabling partnerships that drive long-term inclusion.
        </p>
        <p>
          She is deeply committed to advancing equitable systems and building inclusive ecosystems that empower underserved communities to thrive.
        </p>
      </div>
    ),
  },
  {
    name: "Susan O. Michael",
    role: "Strategist in Inclusive Governance | Peacebuilding & Social Impact | Leader in Policy, Programs & Community Transformation",
    img: susanMichael,
    shortBio:
      "Susan O. Michael is a governance, peacebuilding, and social impact professional with over a decade of experience designing, leading, and managing community-centered and policy-driven initiatives. She holds an MSc in Peace and Conflict Studies and is pursuing a PhD in Gender Studies, further deepening her expertise in gender-responsive peacebuilding, inclusive governance, and social development.",
    fullBio: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          She has designed and coordinated multi-stakeholder programs bridging government and civil society, convened and managed large-scale conferences and policy dialogues, and implemented initiatives that actively engage women, youth, persons with disabilities, neurodivergent individuals, and other marginalized groups. Her work focuses on inclusive peacebuilding, conflict transformation, gender-responsive policy, and youth leadership development, ensuring that all programs are evidence-driven and grounded in community participation.
        </p>
        <p>
          Susan previously served as Director for Women, Peace and Security at Building Blocks for Peace Foundation, where she led programs on conflict prevention, peace education, community dialogue, and youth empowerment. She currently serves as a Senior Administrative Officer in a leading Nigerian government ministry, supporting multi-stakeholder coordination and program implementation while continuing to drive initiatives that promote equity, inclusion, and resilient communities.
        </p>
        <p>
          A multiple award recipient recognized by YALI Network, JCI Nigeria, FCTA, and Friends in Need Initiative, Susan is also an active contributor to advancing evidence-based governance, peacebuilding, and social impact initiatives. Her work spans advocacy, capacity building, policy engagement, project management, and systems-level interventions, all aimed at fostering sustainable, inclusive, and peaceful societies.
        </p>
      </div>
    ),
  },
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 150}>
      <div className="group overflow-hidden rounded-xl border border-border bg-background transition-all duration-500 hover:border-secondary hover:-translate-y-1">
        <div className="grid md:grid-cols-3">
          <div className="aspect-[3/4] overflow-hidden bg-muted md:aspect-auto">
            {member.img ? (
              <img
                src={member.img}
                alt={member.name}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/5">
                <span className="font-heading text-6xl font-bold text-secondary/30">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col p-8 md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-foreground">{member.name}</h3>
            <p className="mt-1 text-sm font-semibold text-secondary">{member.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.shortBio}</p>

            {expanded && <div className="mt-4">{member.fullBio}</div>}

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-foreground"
              aria-expanded={expanded}
            >
              {expanded ? "Read Less" : "Read More"}
              {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const TeamSection = () => (
  <section className="section-padding relative overflow-hidden bg-card">
    <div className="deco-orb -left-16 bottom-0 h-56 w-56 bg-forest-light" />
    <div className="relative mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="mb-4 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Meet the Team
        </h2>
        <div className="gold-divider mx-auto mb-16 max-w-xs" />
      </ScrollReveal>

      <div className="mx-auto grid max-w-4xl gap-8">
        {team.map((member, i) => (
          <TeamCard key={i} member={member} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
