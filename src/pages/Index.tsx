import { Link } from "react-router-dom";
import { ArrowUpRight, Users, GraduationCap, HeartHandshake, Briefcase, Building2 } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import UpcomingEventSection from "@/components/home/UpcomingEventSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import { ActionLink, ContentBand, Foundations, ProgramGrid } from "@/components/InstitutionalLayout";
import { Button } from "@/components/ui/button";
import { brand, programs } from "@/lib/institutionalContent";
import walk from "@/assets/lagos/lagos-3.jpeg.asset.json";

const audiences = [
  {label: "I’m a parent or caregiver", path: "/what-we-do/family-support", icon: HeartHandshake},
  {label: "I’m an educator or school", path: "/what-we-do/inclusive-education", icon: GraduationCap},
  {label: "I’m neurodivergent or disabled", path: "/what-we-do/adult-community", icon: Users},
  {label: "I represent an employer", path: "/what-we-do/workplace-inclusion", icon: Briefcase},
  {label: "I want to partner or fund", path: "/partner", icon: Building2},
];
const Index = () => <main>
  <HeroSection />
  <ContentBand title="Inclusion should be designed in - not added later."><p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{brand.thesis}</p></ContentBand>
  <UpcomingEventSection />
  <ContentBand title="Find Your Pathway" tone="muted"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{audiences.map(item => <Button asChild variant="outline" key={item.path} className="h-full min-h-40 flex-col items-start justify-between gap-6 whitespace-normal p-6 text-left"><Link to={item.path}><item.icon className="text-primary" aria-hidden="true" /><span className="text-base">{item.label}</span><ArrowUpRight aria-hidden="true" /></Link></Button>)}</div></ContentBand>
  <Foundations />
  <ContentBand title="What We Do" tone="muted"><ProgramGrid /></ContentBand>
  <ContentBand title="The Daughter of Ellen Access Fund" tone="authority"><p className="mb-8 max-w-3xl text-lg leading-relaxed">{programs[5].description}</p><ActionLink to="/access-fund" secondary>Access Fund Information</ActionLink></ContentBand>
  <ContentBand title="Technology for Inclusion"><p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{brand.technology}</p><ActionLink to="/what-we-do/technology-accessibility">Explore Technology &amp; Accessibility</ActionLink></ContentBand>
  <ContentBand title="Building the evidence" tone="muted"><div className="grid items-center gap-10 md:grid-cols-2"><div><p className="mb-7 text-lg leading-relaxed text-muted-foreground">{programs[7].description}</p><div className="flex flex-wrap gap-3"><ActionLink to="/impact">View Impact &amp; Evidence</ActionLink><ActionLink to="/projects" secondary>Explore Our Projects</ActionLink></div></div><img src={walk.url} alt="Participants at the Walk for Neurodiversity and Disability Inclusion in Abuja" loading="lazy" className="aspect-[3/2] w-full rounded-lg object-cover" /></div></ContentBand>
  <ContentBand title="Build more inclusive schools and workplaces."><p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{brand.services}</p><div className="flex flex-wrap gap-3"><ActionLink to="/what-we-do/inclusive-education">Request School Training</ActionLink><ActionLink to="/what-we-do/workplace-inclusion" secondary>Request Workplace Training</ActionLink><ActionLink to="/learn" secondary>Explore DOE Academy</ActionLink></div></ContentBand>
  <ContentBand title="Get Involved" tone="muted"><div className="flex flex-wrap gap-4"><ActionLink to="/partner">Partner With Us</ActionLink><ActionLink to="/get-involved#fund-the-work" secondary>Fund the Work</ActionLink><ActionLink to="/get-involved#volunteer" secondary>Volunteer</ActionLink></div></ContentBand>
  <NewsletterSection />
</main>;
export default Index;
