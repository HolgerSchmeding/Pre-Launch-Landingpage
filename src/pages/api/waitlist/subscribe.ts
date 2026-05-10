import type { APIRoute } from 'astro';
import { createWaitlistToken, type WaitlistTokenPayload } from '../../../lib/token';
import { sendMail } from '../../../lib/mailer';
import { buildConfirmationMail } from '../../../lib/mailTemplates';

export const prerender = false;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_ROLES = new Set(['buyer', 'provider', 'advisor', 'investor']);
const VALID_LOCALES = new Set(['de', 'en']);
const MAX_FEEDBACK = 2000;
const MAX_NAME = 200;
const MAX_EMAIL = 320;

function jsonResponse(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonResponse(400, { ok: false, error: 'invalid_payload' });
  }

  // Honeypot: if the hidden field is filled, silently accept and do nothing.
  if (typeof data.company === 'string' && data.company.trim().length > 0) {
    return jsonResponse(200, { ok: true });
  }

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
  const role = typeof data.role === 'string' ? data.role.trim() : '';
  const feedback = typeof data.feedback === 'string' ? data.feedback.trim() : '';
  const locale = typeof data.locale === 'string' ? data.locale : 'de';

  if (!name || name.length > MAX_NAME) {
    return jsonResponse(400, { ok: false, error: 'invalid_name' });
  }
  if (!email || email.length > MAX_EMAIL || !EMAIL_REGEX.test(email)) {
    return jsonResponse(400, { ok: false, error: 'invalid_email' });
  }
  if (!VALID_ROLES.has(role)) {
    return jsonResponse(400, { ok: false, error: 'invalid_role' });
  }
  if (feedback.length > MAX_FEEDBACK) {
    return jsonResponse(400, { ok: false, error: 'invalid_feedback' });
  }
  if (!VALID_LOCALES.has(locale)) {
    return jsonResponse(400, { ok: false, error: 'invalid_locale' });
  }

  const secret = process.env.WAITLIST_SECRET;
  if (!secret || secret.length < 16) {
    console.error('WAITLIST_SECRET is missing or too short.');
    return jsonResponse(500, { ok: false, error: 'server_misconfigured' });
  }

  const payload: WaitlistTokenPayload = {
    name,
    email,
    role,
    feedback,
    locale: locale as 'de' | 'en',
    iat: Date.now()
  };

  const token = createWaitlistToken(payload, secret);

  const siteUrl =
    process.env.PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://www.prelaunch.benchtrust.com';
  const confirmUrl = `${siteUrl}/api/waitlist/confirm?token=${encodeURIComponent(token)}`;

  const mail = buildConfirmationMail(payload.locale, name, confirmUrl);

  try {
    await sendMail({ to: email, ...mail });
  } catch (error) {
    console.error('Failed to send confirmation mail', error);
    return jsonResponse(500, { ok: false, error: 'mail_failed' });
  }

  return jsonResponse(200, { ok: true });
};
