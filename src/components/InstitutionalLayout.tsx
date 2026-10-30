import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { deliveryAreas, foundations, programPath } from "@/lib/institutionalContent";
import { getPageConfig, pageCards } from "@/lib/pageConfig";
import { useSiteImage } from "@/hooks/useSiteImages";
import type { SiteImageSlot } from "@/lib/siteImages";

export const contentWidth = "mx-auto w-full max-w-[1200px]";

export function ActionLink({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  const external = to.startsWith("http") || to.startsWith("mailto:");
  return <Button asChild variant={secondary ? "outline" : "default"} className="h-auto min-h-11 whitespace-normal text-left">
    {external ? <a href={to} target={to.startsWith("http") ? "_blank" : undefined} rel={to.startsWith("http") ? "noopener noreferrer" : undefined}>{children}</a>
      : <Link to={to}>{children}</Link>}
  </Button>;
}

/** Image from a managed slot. Admins can replace it from /admin/images. */
export function SiteImg({ slot, className = "", eager = false }: { slot: SiteImageSlot; className?: string; eager?: boolean }) {
  const image = useSiteImage(slot);
  return <img src={image.src} alt={image.alt} loading={eager ? "eager" : "lazy"} decoding="async" className={`object-cover ${image.position ?? "object-center"} ${className}`} />;
}

/** Inner page banner: full-width image, brand gradient, breadcrumb, title and one-line intro. */
export function PageHeading({ title, description, parent, slot, crumb }: { title: string; description?: string; parent?: { label: string; path: string }; slot?: SiteImageSlot; crumb?: string }) {
  const { pathname } = useLocation();
  const heroSlot = slot ?? getPageConfig(pathname)?.hero ?? "about.hero";
  return <header className="relative isolate flex min-h-[35vh] items-end overflow-hidden bg-authority text-authority-foreground md:min-h-[50vh]">
    <SiteImg slot={heroSlot} eager className="absolute inset-0 -z-20 h-full w-full" />
    <div aria-hidden="true" className="page-hero-scrim absolute inset-0 -z-10" />
    <div className={`${contentWidth} px-6 pb-10 pt-16 md:px-12 md:pb-14`}>
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-authority-foreground/85">
        <Link to="/" className="hover:underline underline-offset-4">Home</Link><span aria-hidden="true">/</span>
        {parent && <><Link to={parent.path} className="hover:underline underline-offset-4">{parent.label}</Link><span aria-hidden="true">/</span></>}
        <span aria-current="page" className="text-authority-foreground">{crumb ?? title}</span>
      </nav>
      <h1 className="max-w-4xl font-heading text-4xl leading-tight md:text-5xl">{title}</h1>
      <div className="my-5 h-1 w-16 bg-secondary" />
      {description && <p className="max-w-3xl text-lg leading-relaxed text-authority-foreground/90">{description}</p>}
    </div>
  </header>;
}

export type Tone = "default" | "muted" | "tint" | "authority";
const toneClass: Record<Tone, string> = {
  default: "bg-background",
  muted: "bg-card",
  tint: "bg-tint",
  authority: "bg-authority text-authority-foreground",
};

export function ContentBand({ title, children, tone = "default", id }: { title?: string; children: ReactNode; tone?: Tone; id?: string }) {
  return <section id={id} className={`section-padding overflow-hidden ${toneClass[tone]}`}>
    <div className={contentWidth}>
      {title && <h2 className="mb-8 max-w-3xl font-heading text-3xl leading-tight md:text-4xl">{title}</h2>}
      {children}
    </div>
  </section>;
}

/** Alternating image and text row. Set reverse to put the image on the right. */
export function ImageTextRow({ slot, title, children, reverse = false, portrait = false }: { slot: SiteImageSlot; title?: ReactNode; children: ReactNode; reverse?: boolean; portrait?: boolean }) {
  return <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
    <div className={reverse ? "md:order-2" : undefined}>
      <SiteImg slot={slot} className={`w-full rounded-md ${portrait ? "aspect-[4/5]" : "aspect-[4/3]"}`} />
    </div>
    <div className={reverse ? "md:order-1" : undefined}>
      {title && <h2 className="mb-5 font-heading text-3xl leading-tight md:text-4xl">{title}</h2>}
      <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">{children}</div>
    </div>
  </div>;
}

/** Highlighted key line for a page. */
export function Callout({ children, source }: { children: ReactNode; source?: string }) {
  return <figure className="border-l-4 border-secondary bg-background/60 py-2 pl-6 md:pl-10">
    <blockquote className="max-w-4xl font-heading text-2xl leading-snug text-foreground md:text-3xl">{children}</blockquote>
    {source && <figcaption className="mt-4 text-sm font-semibold uppercase tracking-widest text-secondary-text">{source}</figcaption>}
  </figure>;
}

export function CalloutBand({ children, source, tone = "tint" }: { children: ReactNode; source?: string; tone?: Tone }) {
  return <ContentBand tone={tone}><Callout source={source}>{children}</Callout></ContentBand>;
}

export type TextCardItem = { title: string; description?: ReactNode; to?: string; action?: string };

export function TextCards({ items, columns = 3 }: { items: TextCardItem[]; columns?: 2 | 3 | 4 }) {
  const cols = columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return <div className={`grid gap-5 ${cols}`}>
    {items.map(item => {
      const body = <>
        <h3 className="border-t-2 border-secondary pt-4 font-heading text-xl leading-snug">{item.title}</h3>
        {item.description && <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
        {item.to && <span className="mt-5 inline-block text-sm font-semibold text-secondary-text underline-offset-4 group-hover:underline">{item.action ?? "Explore"}</span>}
      </>;
      const cls = "group flex h-full flex-col rounded-md border border-border bg-background p-6";
      if (!item.to) return <article key={item.title} className={cls}>{body}</article>;
      const external = item.to.startsWith("http") || item.to.startsWith("mailto:");
      return external
        ? <a key={item.title} href={item.to} target={item.to.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>{body}</a>
        : <Link key={item.title} to={item.to} className={cls}>{body}</Link>;
    })}
  </div>;
}

export function NumberedSteps({ items }: { items: { title: string; description?: ReactNode }[] }) {
  return <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {items.map((item, i) => <li key={item.title} className="border-t-2 border-secondary pt-5">
      <span className="font-heading text-3xl text-secondary-text">{String(i + 1).padStart(2, "0")}</span>
      <h3 className="mt-2 font-heading text-xl leading-snug">{item.title}</h3>
      {item.description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
    </li>)}
  </ol>;
}

export function Foundations({ heading = true, tone = "default" }: { heading?: boolean; tone?: Tone }) {
  return <ContentBand title={heading ? "Our Foundations" : undefined} tone={tone}>
    <NumberedSteps items={foundations.map(item => ({ title: item.title, description: item.description }))} />
  </ContentBand>;
}

export function ProgramGrid() {
  return <TextCards columns={4} items={deliveryAreas.map(item => ({ title: item.shortTitle, description: item.description, to: programPath(item.slug), action: `Explore ${item.shortTitle}` }))} />;
}

function RelatedCard({ path }: { path: string }) {
  const card = pageCards[path];
  if (!card) return null;
  return <Link to={path} className="group flex flex-col overflow-hidden rounded-md border border-border bg-background">
    <SiteImg slot={card.slot} className="aspect-[3/2] w-full" />
    <div className="flex flex-1 flex-col p-6">
      <h3 className="font-heading text-xl leading-snug">{card.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{card.line}</p>
      <span className="mt-4 text-sm font-semibold text-secondary-text underline-offset-4 group-hover:underline">Learn more</span>
    </div>
  </Link>;
}

/** CTA band and "You might also like" row, shown at the bottom of every configured inner page. */
export function PageEnd() {
  const { pathname } = useLocation();
  const config = getPageConfig(pathname);
  if (!config) return null;
  const { cta } = config;
  const related = config.related.filter(path => path !== pathname && pageCards[path]).slice(0, 3);
  return <>
    <section className="section-padding bg-authority text-authority-foreground">
      <div className={`${contentWidth} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl leading-tight md:text-4xl">{cta.title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-authority-foreground/85">{cta.text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ActionLink to={cta.primary.to}>{cta.primary.label}</ActionLink>
          {cta.secondary && <ActionLink to={cta.secondary.to} secondary>{cta.secondary.label}</ActionLink>}
        </div>
      </div>
    </section>
    {related.length > 0 && <section className="section-padding bg-card" aria-labelledby="related-heading">
      <div className={contentWidth}>
        <h2 id="related-heading" className="mb-8 font-heading text-3xl leading-tight md:text-4xl">You might also like</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map(path => <RelatedCard key={path} path={path} />)}</div>
      </div>
    </section>}
  </>;
}
