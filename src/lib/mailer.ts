import nodemailer, { type Transporter } from 'nodemailer';

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = (process.env.SMTP_SECURE ?? 'true').toLowerCase() !== 'false';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration missing (SMTP_HOST, SMTP_USER, SMTP_PASS).');
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  });

  return cachedTransporter;
}

export interface SendMailInput {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

export async function sendMail(input: SendMailInput): Promise<void> {
  const transporter = getTransporter();
  const from = process.env.MAIL_FROM ?? 'BenchTrust <contact@benchtrust.com>';
  const replyTo = input.replyTo ?? process.env.MAIL_REPLY_TO;

  await transporter.sendMail({
    from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
    ...(replyTo ? { replyTo } : {})
  });
}
