import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/ScrollReveal";
import { Radio, Tv, FileText, Globe, Play, Headphones, ExternalLink } from "lucide-react";

type MediaFeature = {
  id: string;
  outlet_name: string;
  feature_title: string;
  description: string | null;
  media_type: "radio" | "tv" | "print" | "online";
  thumbnail_url: string | null;
  audio_url: string | null;
  video_url: string | null;
  article_url: string | null;
  feature_date: string | null;
};

const TYPE_META: Record<string, { label: string; icon: any; badgeClass: string }> = {
  radio: { label: "Radio", icon: Radio, badgeClass: "bg-forest text-cream" },
  tv: { label: "TV", icon: Tv, badgeClass: "bg-[#FF0000] text-white" },
  print: { label: "Print", icon: FileText, badgeClass: "bg-secondary text-secondary-foreground" },
  online: { label: "Online", icon: Globe, badgeClass: "bg-forest-light text-cream" },
};

const Media = () => {
  const [items, setItems] = useState<MediaFeature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "In the Media | Daughter of Ellen";
    (async () => {
      const { data } = await supabase
        .from("media_features")
        .select("*")
        .eq("is_visible", true)
        .order("display_order", { ascending: true })
        .order("feature_date", { ascending: false, nullsFirst: false });
      setItems((data as any) || []);
      setLoading(false);
    })();
  }, []);

  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="section-padding relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-forest-light opacity-90" />
        <div className="deco-orb right-0 top-0 h-96 w-96 bg-secondary opacity-[0.07]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">
              Press &amp; Media
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              In the Media
            </h1>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              Explore Daughter of Ellen's features across radio, television, print, and digital platforms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* GRID */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading features...</p>
          ) : items.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-10 text-center">
              <p className="text-muted-foreground">
                Media features will appear here as they are added.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 80}>
                  <MediaCard item={item} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const MediaCard = ({ item }: { item: MediaFeature }) => {
  const meta = TYPE_META[item.media_type];
  const Icon = meta.icon;

  const button = renderButton(item);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative w-full overflow-hidden bg-muted">
        {item.thumbnail_url ? (
          <img
            src={item.thumbnail_url}
            alt={item.feature_title}
            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="flex aspect-[16/9] h-full w-full items-center justify-center bg-gradient-to-br from-forest to-forest-light">
            <Icon className="h-12 w-12 text-secondary" />
          </div>
        )}
        <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${meta.badgeClass}`}>
          <Icon className="h-3 w-3" />
          {meta.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          {item.outlet_name}
        </p>
        <h3 className="mt-2 font-heading text-xl font-bold leading-snug text-foreground">
          {item.feature_title}
        </h3>
        {item.description && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
        {item.feature_date && (
          <p className="mt-3 text-xs text-muted-foreground">
            {new Date(item.feature_date).toLocaleDateString("en-GB", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </p>
        )}
        <div className="mt-auto pt-5">{button}</div>
      </div>
    </article>
  );
};

function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function renderButton(item: MediaFeature) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md";

  if (item.media_type === "tv" && item.video_url) {
    const ytId = getYouTubeId(item.video_url);
    return (
      <div className="space-y-3">
        {ytId ? (
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ytId}`}
              title={item.feature_title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : null}
        <a href={item.video_url} target="_blank" rel="noreferrer"
          className={`${baseClasses} text-white`}
          style={{ backgroundColor: "#FF0000" }}>
          <Play className="h-4 w-4" /> Watch on YouTube
        </a>
      </div>
    );
  }
  if (item.media_type === "radio" && item.audio_url) {
    return (
      <div className="space-y-3">
        <audio controls className="w-full">
          <source src={item.audio_url} />
        </audio>
        <a href={item.audio_url} target="_blank" rel="noreferrer"
          className={`${baseClasses} bg-forest text-cream`}>
          <Headphones className="h-4 w-4" /> Listen to Feature
        </a>
      </div>
    );
  }
  if (item.media_type === "print" && item.article_url) {
    return (
      <a href={item.article_url} target="_blank" rel="noreferrer"
        className={`${baseClasses} bg-secondary text-secondary-foreground`}>
        <FileText className="h-4 w-4" /> Read Feature
      </a>
    );
  }
  const fallbackUrl = item.article_url || item.video_url || item.audio_url;
  if (fallbackUrl) {
    return (
      <a href={fallbackUrl} target="_blank" rel="noreferrer"
        className={`${baseClasses} bg-forest text-cream`}>
        <ExternalLink className="h-4 w-4" /> View Feature
      </a>
    );
  }
  return null;
}

export default Media;
