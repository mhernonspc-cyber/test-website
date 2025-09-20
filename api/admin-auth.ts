import type { VercelRequest, VercelResponse } from '@vercel/node';
import { adminAuthSchema } from '../src/utils/schema';

const passcode = process.env.ADMIN_PASSCODE; // TODO: REPLACE with secure secret vault

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = adminAuthSchema.parse(request.body);

    if (!passcode || payload.passcode !== passcode) {
      return response.status(401).json({ error: 'Unauthorized' });
    }

    // TODO: REPLACE with signed JWT or true magic link email
    const token = `mock-token-${Date.now()}`;

    return response.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return response.status(400).send('Invalid request');
  }
}
