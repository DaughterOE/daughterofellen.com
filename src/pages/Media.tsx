import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/ScrollReveal";
import { Callout, ContentBand, ImageTextRow, PageHeading } from "@/components/InstitutionalLayout";

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

const TYPE_META: Record<string, { label: string; badgeClass: string }> = {
  radio: { label: "Radio", badgeClass: "bg-forest text-cream" },
  tv: { label: "TV", badgeClass: "bg-destructive text-destructive-foreground" },
  print: { label: "Print", badgeClass: "bg-secondary text-secondary-foreground" },
  online: { label: "Online", badgeClass: "bg-forest-light text-cream" },
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
      <PageHeading title="In the Media" description="Explore Daughter of Ellen's features across radio, television, print, and digital platforms." parent={{ label: "Reports", path: "/impact" }} />

      <ContentBand>
        <ImageTextRow slot="media.body1" title="Press &amp; Media">
          <Callout>Explore Daughter of Ellen's features across radio, television, print, and digital platforms.</Callout>
        </ImageTextRow>
      </ContentBand>

      {/* GRID */}
      <section className="section-padding bg-tint">
        <div className="mx-auto max-w-[1200px]">
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
            <span className="font-heading text-2xl text-secondary">{meta.label}</span>
          </div>
        )}
        <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-md px-3 py-1 text-xs font-semibold ${meta.badgeClass}`}>
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
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-md";

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
          Watch on YouTube
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
          Listen to Feature
        </a>
      </div>
    );
  }
  if (item.media_type === "print" && item.article_url) {
    return (
      <a href={item.article_url} target="_blank" rel="noreferrer"
        className={`${baseClasses} bg-secondary text-secondary-foreground`}>
        Read Feature
      </a>
    );
  }
  const fallbackUrl = item.article_url || item.video_url || item.audio_url;
  if (fallbackUrl) {
    return (
      <a href={fallbackUrl} target="_blank" rel="noreferrer"
        className={`${baseClasses} bg-forest text-cream`}>
        View Feature
      </a>
    );
  }
  return null;
}

export default Media;
