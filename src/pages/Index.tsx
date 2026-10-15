import { Link } from "react-router-dom";
import HeroSection from "@/components/home/HeroSection";
import UpcomingEventSection from "@/components/home/UpcomingEventSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { ActionLink, ContentBand, Foundations, ProgramGrid } from "@/components/InstitutionalLayout";
import { brand, programs } from "@/lib/institutionalContent";
import walk from "@/assets/lagos/lagos-3.jpeg";

const audiences = [
  {label: "I’m a parent or caregiver", line: "Guidance, resources and community for families.", path: "/what-we-do/family-support"},
  {label: "I’m an educator or school", line: "Training and tools for inclusive classrooms.", path: "/what-we-do/inclusive-education"},
  {label: "I’m neurodivergent or disabled", line: "An adult community to connect, learn and share.", path: "/what-we-do/adult-community"},
  {label: "I represent an employer", line: "Support for building inclusive workplaces.", path: "/what-we-do/workplace-inclusion"},
  {label: "I want to partner or fund", line: "Ways to partner with and fund DOE's work.", path: "/partner"},
];
const Index = () => <main>
  <HeroSection />
  <ContentBand title="Inclusion should be designed in - not added later."><p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{brand.thesis}</p></ContentBand>
  <UpcomingEventSection />
  <ContentBand title="Find Your Pathway" tone="muted"><div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">{audiences.map(item => <Link key={item.path} to={item.path} className="group block border-t-2 border-secondary pt-5"><h3 className="font-heading text-xl leading-snug">{item.label}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.line}</p><span className="mt-4 inline-block text-sm font-semibold text-secondary-text group-hover:underline underline-offset-4">Explore</span></Link>)}</div></ContentBand>
  <Foundations />
  <ContentBand title="What We Do" tone="muted"><ProgramGrid /></ContentBand>
  <ContentBand title="The Daughter of Ellen Access Fund" tone="authority"><p className="mb-8 max-w-3xl text-lg leading-relaxed">{programs[5].description}</p><ActionLink to="/access-fund" secondary>Access Fund Information</ActionLink></ContentBand>
  <ContentBand title="Technology for Inclusion"><p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{brand.technology}</p><ActionLink to="/what-we-do/technology-accessibility">Explore Technology &amp; Accessibility</ActionLink></ContentBand>
  <ContentBand title="Building the evidence" tone="muted"><div className="grid items-center gap-10 md:grid-cols-2"><div><p className="mb-7 text-lg leading-relaxed text-muted-foreground">{programs[7].description}</p><div className="flex flex-wrap gap-3"><ActionLink to="/impact">View Impact &amp; Evidence</ActionLink><ActionLink to="/projects" secondary>Explore Our Projects</ActionLink></div></div><img src={walk} alt="Participants at the Walk for Neurodiversity and Disability Inclusion in Abuja" loading="lazy" className="aspect-[3/2] w-full rounded-lg object-cover" /></div></ContentBand>
  <ContentBand title="Build more inclusive schools and workplaces."><p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{brand.services}</p><div className="flex flex-wrap gap-3"><ActionLink to="/what-we-do/inclusive-education">Request School Training</ActionLink><ActionLink to="/what-we-do/workplace-inclusion" secondary>Request Workplace Training</ActionLink><ActionLink to="/learn" secondary>Explore DOE Academy</ActionLink></div></ContentBand>
  <ContentBand title="Get Involved" tone="muted"><div className="flex flex-wrap gap-4"><ActionLink to="/partner">Partner With Us</ActionLink><ActionLink to="/get-involved#fund-the-work" secondary>Fund the Work</ActionLink><ActionLink to="/get-involved#volunteer" secondary>Volunteer</ActionLink></div></ContentBand>
  <NewsletterSection />
</main>;
export default Index;
