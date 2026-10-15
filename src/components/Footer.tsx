import { Link } from "react-router-dom";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/doe-logo.png";
import { brand, communityUrl } from "@/lib/institutionalContent";
import { Button } from "@/components/ui/button";

const Footer = () => <footer className="section-padding border-t border-border bg-card">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
      <div><img src={logo} alt="Daughter of Ellen" className="mb-5 h-16 w-auto dark:brightness-0 dark:invert" /><p className="font-heading text-2xl">{brand.tagline}</p><p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{brand.descriptor}</p>
        <div className="mt-5 flex gap-2">{[{label: "Instagram", href: "https://www.instagram.com/_daughterofellen", Icon: Instagram}, {label: "YouTube", href: "https://www.youtube.com/channel/UCIh1_524EWN_IfS-M5yO0Vw", Icon: Youtube}, {label: "WhatsApp Community", href: communityUrl, Icon: MessageCircle}].map(social => <Button asChild variant="outline" size="icon" key={social.label}><a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}><social.Icon /></a></Button>)}</div>
      </div>
      {[{title: "Explore", links: [{label: "About", path: "/about"}, {label: "What We Do", path: "/what-we-do"}, {label: "Learn", path: "/learn"}, {label: "Impact", path: "/impact"}, {label: "Events", path: "/events"}, {label: "Projects", path: "/projects"}, {label: "Media Features", path: "/media"}, {label: "Tende by DOE", path: "/tende"}]}, {title: "Take Action", links: [{label: "Get Support", path: "/get-support"}, {label: "Partner With Us", path: "/partner"}, {label: "Fund the Work", path: "/get-involved#fund-the-work"}, {label: "Volunteer", path: "/get-involved#volunteer"}, {label: "Access Fund", path: "/access-fund"}]}].map(column => <nav key={column.title} aria-label={column.title}><h2 className="mb-5 text-base font-semibold">{column.title}</h2><ul className="space-y-3">{column.links.map(item => <li key={item.path}><Link to={item.path} className="text-sm text-muted-foreground hover:text-primary">{item.label}</Link></li>)}</ul></nav>)}
      <div><h2 className="mb-5 text-base font-semibold">Contact</h2><div className="flex flex-col gap-3 break-words text-sm text-muted-foreground"><a href="mailto:info@daughterofellen.org">info@daughterofellen.org</a><a href="mailto:partnership@daughterofellen.org">partnership@daughterofellen.org</a><p>Abuja, Federal Capital Territory, Nigeria | Dallas, Texas</p><Link to="/contact">Contact DOE</Link></div></div>
    </div>
    <div className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground"><p>&copy; {new Date().getFullYear()} Daughter of Ellen Support and Empowerment Initiative. All rights reserved.</p><p className="mt-2">Tende by DOE · A branch of Daughter of Ellen Support and Empowerment Initiative</p></div>
  </div>
</footer>;
export default Footer;
