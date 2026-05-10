import { createHmac, timingSafeEqual } from 'node:crypto';

export interface WaitlistTokenPayload {
  name: string;
  email: string;
  role: string;
  feedback: string;
  locale: 'de' | 'en';
  iat: number;
}

function base64url(input: Buffer | string): string {
  const buf = typeof input === 'string' ? Buffer.from(input) : input;
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64url(input: string): Buffer {
  const pad = input.length % 4 === 0 ? '' : '='.repeat(4 - (input.length % 4));
  return Buffer.from(input.replace(/-/g, '+').replace(/_/g, '/') + pad, 'base64');
}

function sign(data: string, secret: string): string {
  return base64url(createHmac('sha256', secret).update(data).digest());
}

export function createWaitlistToken(payload: WaitlistTokenPayload, secret: string): string {
  const body = base64url(JSON.stringify(payload));
  const sig = sign(body, secret);
  return `${body}.${sig}`;
}

export type VerifyResult =
  | { ok: true; payload: WaitlistTokenPayload }
  | { ok: false; reason: 'invalid' | 'expired' };

export function verifyWaitlistToken(token: string, secret: string, maxAgeMs: number): VerifyResult {
  if (typeof token !== 'string' || !token.includes('.')) {
    return { ok: false, reason: 'invalid' };
  }

  const [body, sig] = token.split('.', 2);
  if (!body || !sig) {
    return { ok: false, reason: 'invalid' };
  }

  const expected = sign(body, secret);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, reason: 'invalid' };
  }

  let payload: WaitlistTokenPayload;
  try {
    payload = JSON.parse(fromBase64url(body).toString('utf8')) as WaitlistTokenPayload;
  } catch {
    return { ok: false, reason: 'invalid' };
  }

  if (
    typeof payload?.email !== 'string' ||
    typeof payload?.name !== 'string' ||
    typeof payload?.role !== 'string' ||
    typeof payload?.iat !== 'number' ||
    (payload.locale !== 'de' && payload.locale !== 'en')
  ) {
    return { ok: false, reason: 'invalid' };
  }

  if (Date.now() - payload.iat > maxAgeMs) {
    return { ok: false, reason: 'expired' };
  }

  return { ok: true, payload };
}
