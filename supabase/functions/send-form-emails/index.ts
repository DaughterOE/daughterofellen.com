// Sends two emails via Resend for any form submission:
// 1. Confirmation to the person who filled the form
// 2. Notification to info@daughterofellen.org with all submitted data
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const RESEND_URL = 'https://api.resend.com/emails';
const NOTIFY_TO = 'info@daughterofellen.org';
const FROM = 'Daughter of Ellen <info@daughterofellen.org>';

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

function row(label: string, value: unknown) {
  if (value === undefined || value === null || value === '') return '';
  const v = typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value);
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;color:#1a3a2e;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#444;white-space:pre-wrap;">${escapeHtml(v)}</td></tr>`;
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch(RESEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  if (!res.ok) {
    console.error('Resend error', res.status, text);
    throw new Error(`Resend ${res.status}: ${text}`);
  }
  return text;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

  const apiKey = Deno.env.get('RESEND_API_KEY');
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const { formSource = 'website', fullName = '', email = '', phone, subject, message, extra } = body || {};
  if (!email || typeof email !== 'string') {
    return new Response(JSON.stringify({ error: 'email is required' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const submitterName = fullName || 'Friend';

  // 1. Confirmation to the submitter
  const confirmHtml = `
  <div style="font-family:Calibri,Arial,sans-serif;max-width:600px;margin:0 auto;">
    <div style="background:#1a3a2e;padding:28px 25px;text-align:center;">
      <h1 style="font-family:Georgia,serif;color:#d4af37;margin:0;font-size:24px;">Daughter of Ellen</h1>
      <p style="color:#fff;font-style:italic;font-family:Georgia,serif;margin:8px 0 0;font-size:13px;">Celebrating Every Child's Brilliance.</p>
    </div>
    <div style="padding:28px 25px;">
      <h2 style="font-family:Georgia,serif;color:#1a3a2e;margin:0 0 16px;">Thank you, ${escapeHtml(submitterName)}.</h2>
      <p style="color:#444;line-height:1.6;font-size:15px;">We have received your message from our ${escapeHtml(formSource)} form and a member of our team will respond as soon as possible.</p>
      <p style="color:#444;line-height:1.6;font-size:15px;">If your enquiry is time sensitive, you may also reach us directly at info@daughterofellen.org.</p>
      <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
      <p style="color:#777;font-size:13px;line-height:1.6;">With warm regards,<br/>The Daughter of Ellen Team</p>
    </div>
  </div>`;

  // 2. Notification to info@
  const fields = [
    row('Source', formSource),
    row('Name', fullName),
    row('Email', email),
    row('Phone', phone),
    row('Subject', subject),
    row('Message', message),
    ...(extra && typeof extra === 'object' ? Object.entries(extra).map(([k, v]) => row(k, v)) : []),
  ].join('');

  const notifyHtml = `
  <div style="font-family:Calibri,Arial,sans-serif;max-width:640px;margin:0 auto;">
    <div style="background:#1a3a2e;padding:20px 25px;">
      <h1 style="font-family:Georgia,serif;color:#d4af37;margin:0;font-size:20px;">New ${escapeHtml(formSource)} submission</h1>
    </div>
    <div style="padding:20px 25px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${fields}</table>
      <p style="color:#999;font-size:12px;margin-top:20px;">Received via daughterofellen.org</p>
    </div>
  </div>`;

  const errors: string[] = [];

  try {
    await sendEmail(apiKey, {
      from: FROM,
      to: [NOTIFY_TO],
      reply_to: email,
      subject: `New ${formSource} submission${fullName ? ` from ${fullName}` : ''}`,
      html: notifyHtml,
    });
  } catch (e) {
    errors.push(`notify: ${(e as Error).message}`);
  }

  try {
    await sendEmail(apiKey, {
      from: FROM,
      to: [email],
      subject: 'We have received your message',
      html: confirmHtml,
    });
  } catch (e) {
    errors.push(`confirm: ${(e as Error).message}`);
  }

  if (errors.length === 2) {
    return new Response(JSON.stringify({ ok: false, errors }), {
      status: 502,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true, errors: errors.length ? errors : undefined }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
