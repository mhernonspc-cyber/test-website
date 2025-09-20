import type { VercelRequest, VercelResponse } from '@vercel/node';
import { bookingSchema } from '../src/utils/schema';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = bookingSchema.parse(request.body);

    // TODO: REPLACE with database persistence or CRM integration
    console.info('Received booking request', payload);

    // Example of forwarding to Zapier/n8n webhook
    // await fetch(process.env.ZAPIER_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify(payload) });

    return response.status(200).json({ success: true, bookingId: `mock-${Date.now()}` });
  } catch (error) {
    console.error(error);
    return response.status(400).send(typeof error === 'string' ? error : 'Invalid booking payload');
  }
}
