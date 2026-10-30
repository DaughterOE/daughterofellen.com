import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { siteImages, type SiteImage, type SiteImageSlot } from "@/lib/siteImages";

export type SiteImageOverride = { slot: string; image_url: string; alt_text: string | null; updated_at: string };

export const siteImageOverridesKey = ["site-image-overrides"] as const;

export function useSiteImageOverrides() {
  return useQuery({
    queryKey: siteImageOverridesKey,
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      const { data, error } = await supabase.from("site_images").select("slot, image_url, alt_text, updated_at");
      if (error) throw error;
      return (data ?? []) as SiteImageOverride[];
    },
  });
}

/** Resolve a managed image slot: the admin override if one exists, otherwise the bundled default. */
export function useSiteImage(slot: SiteImageSlot): SiteImage {
  const { data } = useSiteImageOverrides();
  const fallback = siteImages[slot];
  const override = data?.find(item => item.slot === slot);
  if (!override) return fallback;
  return { ...fallback, src: override.image_url, alt: override.alt_text || fallback.alt, position: undefined };
}
