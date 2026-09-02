import { supabase } from "@/integrations/supabase/client";

export type FormPayload = {
  formSource: string;
  fullName: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  extra?: Record<string, any>;
};

/**
 * Stores submission in contact_submissions and triggers
 * confirmation email to the user + notification email to info@daughterofellen.org
 * via Resend.
 */
export async function submitForm(payload: FormPayload): Promise<{ ok: boolean; error?: string }> {
  const composedMessage =
    payload.message ||
    (payload.extra
      ? Object.entries(payload.extra)
          .map(([k, v]) => `${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`)
          .join("\n")
      : "");

  const id = crypto.randomUUID();

  const { error } = await supabase.from("contact_submissions").insert({
    id,
    full_name: payload.fullName,
    email: payload.email,
    phone: payload.phone ?? null,
    subject: payload.subject ?? null,
    message: composedMessage || "(no message)",
    form_source: payload.formSource,
  });

  if (error) {
    return { ok: false, error: error.message };
  }

  // Fire-and-forget: send confirmation to submitter + notification to info@
  void supabase.functions.invoke("send-form-emails", {
    body: {
      formSource: payload.formSource,
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone || undefined,
      subject: payload.subject || undefined,
      message: composedMessage || undefined,
      extra: payload.extra,
    },
  });

  return { ok: true };
}
