import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { foundations, programs, programPath } from "@/lib/institutionalContent";

export function ActionLink({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  const external = to.startsWith("http") || to.startsWith("mailto:");
  return <Button asChild variant={secondary ? "outline" : "default"} className="h-auto min-h-11 whitespace-normal text-left">
    {external ? <a href={to} target={to.startsWith("http") ? "_blank" : undefined} rel={to.startsWith("http") ? "noopener noreferrer" : undefined}>{children}<ArrowUpRight aria-hidden="true" /></a>
      : <Link to={to}>{children}<ArrowUpRight aria-hidden="true" /></Link>}
  </Button>;
}

export function PageHeading({ title, description, parent }: { title: string; description?: string; parent?: { label: string; path: string } }) {
  return <header className="border-b border-border bg-background px-6 pb-14 pt-12 md:px-12 md:pb-20">
    <div className="mx-auto max-w-6xl">
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Link to="/">Home</Link><ChevronRight size={14} aria-hidden="true" />
        {parent && <><Link to={parent.path}>{parent.label}</Link><ChevronRight size={14} aria-hidden="true" /></>}
        <span aria-current="page" className="text-foreground">{title}</span>
      </nav>
      <h1 className="max-w-4xl font-heading text-4xl leading-tight md:text-5xl">{title}</h1>
      <div className="my-6 h-1 w-16 bg-secondary" />
      {description && <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  </header>;
}

export function ContentBand({ title, children, tone = "default", id }: { title?: string; children: ReactNode; tone?: "default" | "muted" | "authority"; id?: string }) {
  return <section id={id} className={`section-padding ${tone === "authority" ? "bg-authority text-authority-foreground" : tone === "muted" ? "bg-card" : "bg-background"}`}>
    <div className="mx-auto max-w-6xl">
      {title && <h2 className="mb-8 max-w-3xl font-heading text-3xl leading-tight md:text-4xl">{title}</h2>}
      {children}
    </div>
  </section>;
}

export function Foundations({ heading = true }: { heading?: boolean }) {
  return <ContentBand title={heading ? "Our Foundations" : undefined}>
    <div className="grid gap-8 md:grid-cols-3">
      {foundations.map((item, i) => <article key={item.title} className="border-t-2 border-secondary pt-6">
        <span className="text-sm text-muted-foreground">0{i + 1}</span>
        <h3 className="mb-4 mt-3 font-heading text-2xl">{item.title}</h3>
        <p className="leading-relaxed text-muted-foreground">{item.description}</p>
      </article>)}
    </div>
  </ContentBand>;
}

export function ProgramGrid() {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {programs.map(item => <article key={item.slug} className="flex flex-col rounded-lg border border-border bg-background p-6">
      <h3 className="mb-4 font-heading text-xl">{item.shortTitle}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      <Button asChild variant="link" className="h-auto justify-start whitespace-normal p-0 text-left"><Link to={programPath(item.slug)}>Explore {item.shortTitle}<ArrowUpRight aria-hidden="true" /></Link></Button>
    </article>)}
  </div>;
}