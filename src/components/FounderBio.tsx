import { CalloutBand, ContentBand, TextCards, ImageTextRow } from "@/components/InstitutionalLayout";

const Prose = ({ children }: { children: React.ReactNode }) => <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">{children}</div>;

/** Approved founder biography (verbatim), laid out with the inner page template. */
const FounderBio = ({ showName = true, sectionTitle }: { showName?: boolean; sectionTitle?: string }) => <>
  <ContentBand title={sectionTitle}>
    <ImageTextRow slot="founder.body1" portrait title={showName ? <>
      <span className="block text-xs font-bold uppercase tracking-widest text-secondary-text font-body">Founder and Chair, Daughter of Ellen</span>
      <span className="mt-2 block">Eyvonne Eleko</span>
      <span className="mt-1 block font-heading text-base italic text-muted-foreground">Strategist &middot; Advocate &middot; Architect of Inclusion</span>
    </> : undefined}>
      {!showName && <p className="text-xs font-bold uppercase tracking-widest text-secondary-text">Founder and Chair, Daughter of Ellen</p>}
      <p>Eyvonne Eleko is the Founder and Chair of Daughter of Ellen, an Africa-focused initiative dedicated to building a continent-wide ecosystem of inclusion for neurodivergent individuals and people living with disabilities. Headquartered in both Dallas, Texas and Abuja, Nigeria, the initiative represents a bold and structured response to a critical gap in culturally informed support, policy, and community infrastructure across the African continent and within African diaspora communities.</p>
      <p>Eyvonne is a strategist, aerospace program leader, public speaker, accessibility consultant and community architect whose work sits precisely at the convergence of lived experience, executive leadership, policy advocacy, and systemic change. Her approach is simultaneously rigorous and humane, combining the discipline of institutional governance with the depth of personal conviction.</p>
      <p>A certified Disability Rights and Accessibility Consultant through the US Institute of Diplomacy and Human Rights, Eyvonne's advocacy is grounded in both professional training and lived experience. She has also completed specialized training in Protecting the Rights of the Child in Humanitarian Situations, strengthening her work at the intersection of disability rights, child protection, accessibility, and inclusive humanitarian response.</p>
    </ImageTextRow>
  </ContentBand>

  <ContentBand tone="tint">
    <ImageTextRow slot="founder.body2" portrait reverse title="Executive Leadership and Professional Formation">
      <p>With over a decade of senior leadership experience spanning governance, risk management, regulatory compliance, aerospace and technology program delivery, Eyvonne brings to Daughter of Ellen a level of executive rigor that is rare in mission-driven organizations. She has led complex, cross-functional initiatives, directed stakeholder engagement across executive and institutional environments, and designed strategic frameworks that align long-term vision with measurable, time-bound outcomes.</p>
      <p>Her professional background spans enterprise technology, transformation leadership, operations, and strategic program management, shaping a leadership style rooted in structure, accountability, and execution. It is this foundation that informs Daughter of Ellen's architecture: an organization where advocacy is not performative rhetoric, but structured, evidence-based, community-centered, and built to scale.</p>
      <p>Every initiative, partnership, awareness campaign, and policy conversation is approached with the rigor of an institution designed not only to endure, but to influence systems and drive measurable change.</p>
    </ImageTextRow>
  </ContentBand>

  <CalloutBand tone="muted">"Advocacy requires more than urgency. It requires architecture."</CalloutBand>

  <ContentBand>
    <ImageTextRow slot="founder.body3" title="Public Advocacy and Media Presence">
      <p>As a growing voice in disability inclusion and neurodiversity advocacy, Eyvonne has lent her voice to national and international conversations across television, radio, digital media, and public platforms in both the United States and Nigeria.</p>
      <p>Her advocacy and leadership have been featured by VoyageDallas, where she shared her journey, mission, and work building inclusive systems for underserved communities. She has also appeared as a guest speaker and commentator on platforms including Global TV Nigeria, Splash FM, Mainland 98.3 FM, and AIT Weekend Show, contributing to conversations on neurodivergence, disability inclusion, equitable healthcare systems, education, mental wellness, accessibility, and the social realities facing neurodivergent individuals and families across African communities.</p>
      <p>Her public engagement work is rooted in one core belief: inclusion cannot remain a theoretical conversation reserved for policy rooms or international panels. It must become visible, practical, culturally understood, and accessible within everyday communities.</p>
    </ImageTextRow>
  </ContentBand>

  <ContentBand title="The Founding Vision" tone="tint">
    <Prose>
      <p>Daughter of Ellen was founded from both clarity of purpose and urgency of need. Eyvonne identified a persistent and largely unaddressed reality: while global conversations on neurodiversity and disability inclusion have gained momentum, African communities continue to confront deeply entrenched stigma, severely limited access to diagnostic services, fragmented and underfunded support infrastructure, and an almost total absence of enabling policy frameworks.</p>
      <p>The consequences are generational. Neurodivergent children across Nigeria and the wider continent are often misunderstood, underserved, and in many cases entirely invisible to the systems that should protect them. Adults navigating neurodivergence or disability continue to face structural exclusion from education, employment, healthcare access, and civic participation. Families frequently carry these realities in isolation, without institutional support, professional guidance, or informed community networks.</p>
      <p>Daughter of Ellen was established to fundamentally shift that reality. Through awareness, structured education, grassroots outreach, community building, media advocacy, and disciplined policy engagement, the initiative is committed to moving inclusion from principle to practice, and from practice to enforceable, sustained change.</p>
      <p>Through her leadership, Eyvonne continues to advocate for a future where accessibility, dignity, belonging, and human-centered systems are not treated as privileges, but as standards woven into the foundation of society itself.</p>
    </Prose>
  </ContentBand>

  <ContentBand title="Strategic Oversight and Institutional Direction">
    <Prose>
      <p>As Chair, Eyvonne provides overarching strategic leadership across Daughter of Ellen's programs, partnerships, and long-term advocacy agenda. She leads the organization's vision to convene a high-calibre, multi-stakeholder community uniting parents, clinicians, educators, employers, human resources professionals, civil society leaders, policymakers, and individuals with lived experience in meaningful, outcome-oriented dialogue.</p>
      <p>Under her direction, Daughter of Ellen operates across four strategic pillars: access to early identification and intervention services; inclusive education and professional training; workplace inclusion and neurodiversity-affirming employment practices; and structured engagement with legislators and regulatory bodies to close the policy gap between international frameworks and African institutional practice.</p>
      <p>The organization's inaugural conference, to be held in Abuja in 2026, marks the formal launch of what Eyvonne envisions as an annual national convening, eventually expanding to a continent-wide platform for policy dialogue, community accountability, and shared commitment to inclusion.</p>
    </Prose>
  </ContentBand>

  <ContentBand title="Leadership Philosophy" tone="muted">
    <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">Eyvonne's leadership philosophy rests on three interlocking principles that define both her personal practice and the institutional character of Daughter of Ellen.</p>
    <TextCards items={[
      { title: "Clarity", description: "Systems change demands structure. Advocacy that lacks rigor yields noise, not movement." },
      { title: "Courage", description: "Meaningful change requires naming difficult truths and holding institutions to account for them." },
      { title: "Compassion", description: "Community is only possible where psychological safety exists. Dignity is not negotiable." },
    ]} />
    <div className="mt-10"><Prose>
      <p>This tripartite framework is not abstract. It is the operating principle behind every decision Daughter of Ellen makes, from how it structures its board governance to how it designs community spaces where neurodivergent individuals are centered not as subjects, but as authorities on their own experience.</p>
      <p>Eyvonne's approach is distinctively integrated: executive without being distant, empathetic without being sentimental. She brings to every engagement a precise understanding of the emotional realities that families navigating neurodivergence and disability live with daily, and she holds that understanding alongside an equally precise commitment to the structural conditions necessary for lasting change.</p>
    </Prose></div>
  </ContentBand>

  <ContentBand title="Long-Term Vision and Continental Impact">
    <Prose>
      <p>Eyvonne's ambition for Daughter of Ellen extends well beyond a single country or a single cycle of advocacy. Her long-term vision is to establish Daughter of Ellen as the pre-eminent civil society voice on neurodivergence and disability inclusion across Africa, with a presence and influence that spans legislation, institutional practice, and public culture.</p>
      <p>Through an expanding portfolio of national conferences, policy roundtables, public education campaigns, strategic corporate partnerships, and collaborative research programs, Evon is building the infrastructure for a movement that outlasts any single moment of awareness. Her objective is not to generate conversation, but to generate consequence: legislation that enforces inclusion, institutions that design for difference, and communities that recognize neurodivergent brilliance as a societal asset rather than an inconvenient exception.</p>
      <p>The long-term goal is unambiguous: a generation of neurodivergent children and adults across Nigeria and Africa who grow with dignity, confidence, and the full opportunity to reach their potential, supported by systems, policies, and communities that have been deliberately and accountably built to include them.</p>
      <p>Eyvonne Eleko leads Daughter of Ellen with intentionality, accountability, and the conviction that building systems of inclusion is among the most important work of our time.</p>
    </Prose>
  </ContentBand>

  <CalloutBand>"She does not raise awareness. She builds what comes after it."</CalloutBand>

  <ContentBand tone="muted">
    <dl className="max-w-3xl space-y-3 rounded-md border border-border bg-background p-6 text-sm md:p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
        <dt className="w-20 shrink-0 font-semibold text-foreground">Website</dt>
        <dd className="flex min-w-0 flex-wrap items-center gap-3">
          <a href="https://www.daughterofellen.org" target="_blank" rel="noreferrer" className="text-secondary-text underline-offset-4 hover:underline">daughterofellen.org</a>
          <span aria-hidden="true" className="text-muted-foreground">|</span>
          <a href="https://www.evonanthony.com" target="_blank" rel="noreferrer" className="text-secondary-text underline-offset-4 hover:underline">evonanthony.com</a>
        </dd>
      </div>
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
        <dt className="w-20 shrink-0 font-semibold text-foreground">Email</dt>
        <dd><a href="mailto:founder@daughterofellen.org" className="break-all text-secondary-text underline-offset-4 hover:underline">founder@daughterofellen.org</a></dd>
      </div>
    </dl>
  </ContentBand>
</>;

export default FounderBio;
