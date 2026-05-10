import type { APIRoute } from 'astro';
import { verifyWaitlistToken } from '../../../lib/token';
import { sendMail } from '../../../lib/mailer';
import { buildNotificationMail, buildWelcomeMail } from '../../../lib/mailTemplates';

export const prerender = false;

const TOKEN_MAX_AGE_MS = 72 * 60 * 60 * 1000; // 72 hours

export const GET: APIRoute = async ({ url }) => {
  const token = url.searchParams.get('token') ?? '';
  const secret = process.env.WAITLIST_SECRET;

  if (!secret) {
    console.error('WAITLIST_SECRET is missing.');
    return Response.redirect(`${url.origin}/danke/?confirm=error`, 302);
  }

  const result = verifyWaitlistToken(token, secret, TOKEN_MAX_AGE_MS);

  if (!result.ok) {
    const locale = guessLocaleFromReferer(url);
    const target = locale === 'en' ? '/en/thanks/' : '/danke/';
    const reason = result.reason; // 'invalid' | 'expired'
    return Response.redirect(`${url.origin}${target}?confirm=${reason}`, 302);
  }

  const { payload } = result;
  const labUrl = process.env.LAB_URL ?? 'https://lab.benchtrust.com';
  const notificationTo = process.env.MAIL_NOTIFICATION_TO ?? 'holger.schmeding@benchtrust.com';

  const welcome = buildWelcomeMail(payload.locale, payload.name, labUrl);
  const notification = buildNotificationMail(payload);

  try {
    await sendMail({ to: payload.email, ...welcome });
  } catch (error) {
    console.error('Failed to send welcome mail', error);
  }

  try {
    await sendMail({ to: notificationTo, ...notification });
  } catch (error) {
    console.error('Failed to send notification mail', error);
  }

  const target = payload.locale === 'en' ? '/en/thanks/' : '/danke/';
  return Response.redirect(`${url.origin}${target}?confirm=ok`, 302);
};

function guessLocaleFromReferer(url: URL): 'de' | 'en' {
  const ref = url.searchParams.get('locale');
  return ref === 'en' ? 'en' : 'de';
}
