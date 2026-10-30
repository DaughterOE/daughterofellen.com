CREATE TABLE public.site_images (
  slot text PRIMARY KEY,
  image_url text NOT NULL,
  alt_text text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.site_images TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.site_images TO authenticated;
GRANT ALL ON public.site_images TO service_role;

ALTER TABLE public.site_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view site images" ON public.site_images
FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Admins can add site images" ON public.site_images
FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update site images" ON public.site_images
FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete site images" ON public.site_images
FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));