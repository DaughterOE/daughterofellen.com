CREATE TABLE public.conference_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  participation_categories TEXT[] NOT NULL DEFAULT '{}',
  other_category TEXT,
  requires_accessibility_support BOOLEAN NOT NULL DEFAULT false,
  accessibility_details TEXT,
  awareness_source TEXT,
  awareness_other TEXT,
  confirms_physical_attendance BOOLEAN NOT NULL DEFAULT false,
  agrees_to_updates BOOLEAN NOT NULL DEFAULT false,
  consents_to_contact BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.conference_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for conference"
ON public.conference_registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can read registrations"
ON public.conference_registrations
FOR SELECT
TO authenticated
USING (true);