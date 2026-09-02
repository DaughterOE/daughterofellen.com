CREATE TABLE public.tende_community_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  location text,
  what_brings_you text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.tende_community_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.tende_community_signups
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
