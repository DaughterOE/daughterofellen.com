
-- Roles for admin
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users view own roles" ON public.user_roles
FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins view all roles" ON public.user_roles
FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage roles" ON public.user_roles
FOR ALL TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Contact submissions (universal form storage)
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  form_source text NOT NULL DEFAULT 'contact',
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit" ON public.contact_submissions
FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admins read submissions" ON public.contact_submissions
FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Media features
CREATE TYPE public.media_type AS ENUM ('radio', 'tv', 'print', 'online');

CREATE TABLE public.media_features (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  outlet_name text NOT NULL,
  feature_title text NOT NULL,
  description text,
  media_type public.media_type NOT NULL,
  thumbnail_url text,
  audio_url text,
  video_url text,
  article_url text,
  feature_date date,
  is_visible boolean NOT NULL DEFAULT true,
  display_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.media_features ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public reads visible media" ON public.media_features
FOR SELECT TO anon, authenticated USING (is_visible = true);

CREATE POLICY "Admins read all media" ON public.media_features
FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins insert media" ON public.media_features
FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update media" ON public.media_features
FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete media" ON public.media_features
FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER media_features_updated
BEFORE UPDATE ON public.media_features
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Storage bucket for media files
INSERT INTO storage.buckets (id, name, public) VALUES ('media-features', 'media-features', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read media files" ON storage.objects
FOR SELECT USING (bucket_id = 'media-features');

CREATE POLICY "Admins upload media files" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'media-features' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update media files" ON storage.objects
FOR UPDATE TO authenticated
USING (bucket_id = 'media-features' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete media files" ON storage.objects
FOR DELETE TO authenticated
USING (bucket_id = 'media-features' AND public.has_role(auth.uid(), 'admin'));
