import { Link } from "react-router-dom";
import HeroSection from "@/components/home/HeroSection";
import UpcomingEventSection from "@/components/home/UpcomingEventSection";
import { NewsletterForm } from "@/components/home/NewsletterSection";
import { ActionLink } from "@/components/InstitutionalLayout";
import { Button } from "@/components/ui/button";
import { brand, foundations, volunteerUrl } from "@/lib/institutionalContent";
import familyImg from "@/assets/hero-family.jpg";
import educatorImg from "@/assets/hero-students-lawn.jpg";
import communityImg from "@/assets/lagos-city/IMG_6082.jpg";
import employerImg from "@/assets/lagos-city/IMG_5909.jpg";
import partnerImg from "@/assets/lagos/lagos-8.jpeg";
import accessFundImg from "@/assets/access-fund-announcement.jpeg";
import abujaWalkImg from "@/assets/lagos/lagos-1.jpeg";
import impactImg from "@/assets/lagos-city/IMG_5953.jpg";
import founderImg from "@/assets/evon-anthony.jpeg";

const audiences = [
  { label: "I’m a parent or caregiver", line: "Guidance, resources and community for families.", path: "/what-we-do/family-support", image: familyImg, alt: "A parent and child sharing a laptop at home" },
  { label: "I’m an educator or school", line: "Training and tools for inclusive classrooms.", path: "/what-we-do/inclusive-education", image: educatorImg, alt: "Students studying together on a lawn" },
  { label: "I’m neurodivergent or disabled", line: "An adult community to connect, learn and share.", path: "/what-we-do/adult-community", image: communityImg, alt: "Walk participants holding a sign that reads Early Support Changes Lives" },
  { label: "I represent an employer", line: "Support for building inclusive workplaces.", path: "/what-we-do/workplace-inclusion", image: employerImg, alt: "Participants in conversation at a Daughter of Ellen walk" },
  { label: "I want to partner or fund", line: "Ways to partner with and fund DOE's work.", path: "/partner", image: partnerImg, alt: "Supporters holding signs that read Equal Access, Equal Opportunity" },
];

const projects = [
  { title: "DOE Access Fund", line: "Needs-based support for individuals and families facing access barriers.", path: "/projects/access-fund", image: accessFundImg, alt: "Daughter of Ellen Access Fund announcement", position: "object-top" },
  { title: "Abuja Declaration and Walk for Neurodiversity", line: "Advocacy and policy work, starting on the streets of Abuja.", path: "/abuja-declaration", image: abujaWalkImg, alt: "Participants carrying the Walk for Neurodiversity and Disability Inclusion banner in Abuja", position: "object-center" },
  { title: "Impact & Evidence", line: "Tracking outcomes and publishing what DOE learns.", path: "/impact", image: impactImg, alt: "Participants at the Walk for Neurodiversity and Disability Inclusion in Lagos", position: "object-center" },
];

const SectionTitle = ({ children }: { children: string }) => <h2 className="mb-8 max-w-3xl font-heading text-3xl leading-tight md:text-4xl">{children}</h2>;

const Index = () => <main>
  <HeroSection />

  <section className="section-compact bg-background">
    <div className="mx-auto max-w-6xl">
      <SectionTitle>Our Foundations</SectionTitle>
      <div className="mb-10 max-w-3xl">
        <p className="font-heading text-2xl leading-snug md:text-3xl">Inclusion should be designed in, not added later.</p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{brand.thesis}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {foundations.map((item, i) => <article key={item.title} className="border-t-2 border-secondary pt-6">
          <span className="text-sm text-muted-foreground">0{i + 1}</span>
          <h3 className="mb-4 mt-3 font-heading text-2xl">{item.title}</h3>
          <p className="leading-relaxed text-muted-foreground">{item.description}</p>
        </article>)}
      </div>
    </div>
  </section>

  <UpcomingEventSection compact />

  <section className="section-compact bg-card">
    <div className="mx-auto max-w-6xl">
      <SectionTitle>Find Your Pathway</SectionTitle>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {audiences.map(item => <Link key={item.path} to={item.path} className="group flex flex-col overflow-hidden rounded-md border border-border bg-background">
          <img src={item.image} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="flex flex-1 flex-col border-t-2 border-secondary p-5">
            <h3 className="font-heading text-xl leading-snug">{item.label}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.line}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-secondary-text underline-offset-4 group-hover:underline">Explore</span>
          </div>
        </Link>)}
      </div>
    </div>
  </section>

  <section className="section-compact bg-background">
    <div className="mx-auto max-w-6xl">
      <SectionTitle>Our Projects</SectionTitle>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map(item => <Link key={item.path} to={item.path} className="group flex flex-col overflow-hidden rounded-md border border-border bg-card">
          <img src={item.image} alt={item.alt} loading="lazy" className={`aspect-[3/2] w-full object-cover ${item.position}`} />
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-heading text-2xl leading-snug">{item.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{item.line}</p>
            <span className="mt-5 inline-block text-sm font-semibold text-secondary-text underline-offset-4 group-hover:underline">Learn more</span>
          </div>
        </Link>)}
      </div>
      <div className="mt-10"><ActionLink to="/projects" secondary>See all projects</ActionLink></div>
    </div>
  </section>

  <section className="section-compact bg-tint">
    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,340px)_1fr]">
      <img src={founderImg} alt="Eyvonne Eleko, Founder and Chair of Daughter of Ellen" loading="lazy" className="aspect-[3/4] w-full max-w-sm rounded-md object-cover object-top" />
      <div>
        <h2 className="font-heading text-3xl leading-tight md:text-4xl">Meet Our Founder</h2>
        <p className="mt-6 font-heading text-2xl">Eyvonne Eleko</p>
        <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-secondary-text">Founder and Chair</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Eyvonne Eleko is the Founder and Chair of Daughter of Ellen, an Africa-focused initiative dedicated to building a continent-wide ecosystem of inclusion for neurodivergent individuals and people living with disabilities.</p>
        <div className="mt-8"><ActionLink to="/founder">Read her story</ActionLink></div>
      </div>
    </div>
  </section>

  <section className="section-compact bg-card">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
      <div>
        <SectionTitle>Get Involved</SectionTitle>
        <div className="flex flex-wrap gap-3">
          <ActionLink to="/partner">Partner With Us</ActionLink>
          <ActionLink to="/get-involved#fund-the-work" secondary>Fund the Work</ActionLink>
          <ActionLink to={volunteerUrl} secondary>Volunteer</ActionLink>
        </div>
      </div>
      <div>
        <h2 className="mb-4 font-heading text-3xl leading-tight md:text-4xl">Stay Connected.</h2>
        <p className="text-base leading-relaxed text-muted-foreground">Get practical inclusion resources, DOE updates and upcoming training.</p>
        <NewsletterForm className="mt-6 flex flex-col gap-4 sm:flex-row" />
        <p className="mt-6 text-sm text-muted-foreground">Have a question? <Button asChild variant="link" className="h-auto p-0 align-baseline"><Link to="/contact">Contact Us</Link></Button></p>
      </div>
    </div>
  </section>
</main>;
export default Index;
