import type { WaitlistTokenPayload } from './token';

type Locale = 'de' | 'en';

const LAB_URL_FALLBACK = 'https://lab.benchtrust.com';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface MailContent {
  subject: string;
  text: string;
  html: string;
}

export function buildConfirmationMail(
  locale: Locale,
  name: string,
  confirmUrl: string
): MailContent {
  const safeName = escapeHtml(name || (locale === 'de' ? 'dort' : 'there'));
  const safeUrl = escapeHtml(confirmUrl);

  if (locale === 'de') {
    return {
      subject: 'Bitte bestätigen Sie Ihre Co-Creator-Anmeldung bei BenchTrust',
      text: `Hallo ${name || ''},\n\nvielen Dank für Ihr Interesse am BenchTrust Co-Creator Panel.\nBitte bestätigen Sie Ihre Anmeldung über folgenden Link:\n\n${confirmUrl}\n\nDer Link ist 72 Stunden gültig. Falls Sie diese Anmeldung nicht ausgelöst haben, ignorieren Sie diese E-Mail bitte einfach.\n\nHerzliche Grüße\nIhr BenchTrust Team\nhttps://prelaunch.benchtrust.com`,
      html: `<p>Hallo ${safeName},</p>
<p>vielen Dank für Ihr Interesse am <strong>BenchTrust Co-Creator Panel</strong>.</p>
<p>Bitte bestätigen Sie Ihre Anmeldung über den folgenden Link:</p>
<p><a href="${safeUrl}" style="background:#0891b2;color:#fff;text-decoration:none;padding:12px 20px;border-radius:9999px;display:inline-block;font-weight:600">Anmeldung bestätigen</a></p>
<p style="font-size:12px;color:#475569">Falls der Button nicht funktioniert: <br><a href="${safeUrl}">${safeUrl}</a></p>
<p>Der Link ist 72 Stunden gültig. Sollten Sie diese Anmeldung nicht ausgelöst haben, ignorieren Sie diese E-Mail bitte einfach.</p>
<p>Herzliche Grüße<br>Ihr BenchTrust Team</p>`
    };
  }

  return {
    subject: 'Please confirm your BenchTrust Co-Creator sign-up',
    text: `Hello ${name || ''},\n\nthanks for your interest in the BenchTrust Co-Creator Panel.\nPlease confirm your sign-up using the link below:\n\n${confirmUrl}\n\nThe link is valid for 72 hours. If you did not request this, please ignore this email.\n\nBest regards\nThe BenchTrust team\nhttps://prelaunch.benchtrust.com`,
    html: `<p>Hello ${safeName},</p>
<p>thanks for your interest in the <strong>BenchTrust Co-Creator Panel</strong>.</p>
<p>Please confirm your sign-up using the link below:</p>
<p><a href="${safeUrl}" style="background:#0891b2;color:#fff;text-decoration:none;padding:12px 20px;border-radius:9999px;display:inline-block;font-weight:600">Confirm sign-up</a></p>
<p style="font-size:12px;color:#475569">If the button does not work: <br><a href="${safeUrl}">${safeUrl}</a></p>
<p>The link is valid for 72 hours. If you did not request this, simply ignore this email.</p>
<p>Best regards<br>The BenchTrust team</p>`
  };
}

export function buildWelcomeMail(
  locale: Locale,
  name: string,
  labUrl: string = LAB_URL_FALLBACK
): MailContent {
  const safeName = escapeHtml(name || (locale === 'de' ? 'dort' : 'there'));
  const safeLab = escapeHtml(labUrl);

  if (locale === 'de') {
    return {
      subject: 'Willkommen im BenchTrust Co-Creator Panel',
      text: `Hallo ${name || ''},\n\nherzlich willkommen im BenchTrust Co-Creator Panel.\n\nIhre Anmeldung ist bestätigt. Ab sofort können Sie das Co-Creator Lab nutzen:\n\n${labUrl}\n\nDort finden Sie aktuelle Sneak Peeks, Feature-Votings und Möglichkeiten, mit dem Gründerteam in Kontakt zu treten.\n\nHerzliche Grüße\nIhr BenchTrust Team`,
      html: `<p>Hallo ${safeName},</p>
<p>herzlich willkommen im <strong>BenchTrust Co-Creator Panel</strong>. Ihre Anmeldung ist bestätigt.</p>
<p>Ab sofort können Sie das Co-Creator Lab nutzen:</p>
<p><a href="${safeLab}" style="background:#0891b2;color:#fff;text-decoration:none;padding:12px 20px;border-radius:9999px;display:inline-block;font-weight:600">Zum Co-Creator Lab</a></p>
<p style="font-size:12px;color:#475569"><a href="${safeLab}">${safeLab}</a></p>
<p>Dort finden Sie aktuelle Sneak Peeks, Feature-Votings und Möglichkeiten, mit dem Gründerteam direkt in Kontakt zu treten.</p>
<p>Herzliche Grüße<br>Ihr BenchTrust Team</p>`
    };
  }

  return {
    subject: 'Welcome to the BenchTrust Co-Creator Panel',
    text: `Hello ${name || ''},\n\nwelcome to the BenchTrust Co-Creator Panel. Your sign-up is confirmed.\n\nYou can now access the Co-Creator Lab:\n\n${labUrl}\n\nThere you will find sneak peeks, feature votings and ways to connect directly with the founding team.\n\nBest regards\nThe BenchTrust team`,
    html: `<p>Hello ${safeName},</p>
<p>welcome to the <strong>BenchTrust Co-Creator Panel</strong>. Your sign-up is confirmed.</p>
<p>You can now access the Co-Creator Lab:</p>
<p><a href="${safeLab}" style="background:#0891b2;color:#fff;text-decoration:none;padding:12px 20px;border-radius:9999px;display:inline-block;font-weight:600">Open Co-Creator Lab</a></p>
<p style="font-size:12px;color:#475569"><a href="${safeLab}">${safeLab}</a></p>
<p>There you will find sneak peeks, feature votings and ways to connect directly with the founding team.</p>
<p>Best regards<br>The BenchTrust team</p>`
  };
}

export function buildNotificationMail(payload: WaitlistTokenPayload): MailContent {
  const lines = [
    `Name:     ${payload.name}`,
    `E-Mail:   ${payload.email}`,
    `Rolle:    ${payload.role}`,
    `Sprache:  ${payload.locale}`,
    `Feedback: ${payload.feedback || '-'}`,
    `Eintrag:  ${new Date(payload.iat).toISOString()}`
  ];

  return {
    subject: `[BenchTrust Co-Creator] Bestätigte Anmeldung: ${payload.email}`,
    text: `Eine neue Co-Creator-Anmeldung wurde per Double-Opt-in bestätigt:\n\n${lines.join('\n')}\n`,
    html: `<p>Eine neue Co-Creator-Anmeldung wurde per Double-Opt-in bestätigt:</p>
<table style="border-collapse:collapse">
  <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
  <tr><td style="padding:4px 12px 4px 0"><strong>E-Mail</strong></td><td>${escapeHtml(payload.email)}</td></tr>
  <tr><td style="padding:4px 12px 4px 0"><strong>Rolle</strong></td><td>${escapeHtml(payload.role)}</td></tr>
  <tr><td style="padding:4px 12px 4px 0"><strong>Sprache</strong></td><td>${escapeHtml(payload.locale)}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;vertical-align:top"><strong>Feedback</strong></td><td style="white-space:pre-wrap">${escapeHtml(payload.feedback || '-')}</td></tr>
  <tr><td style="padding:4px 12px 4px 0"><strong>Eintrag</strong></td><td>${new Date(payload.iat).toISOString()}</td></tr>
</table>`
  };
}
