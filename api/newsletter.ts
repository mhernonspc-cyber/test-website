import type { VercelRequest, VercelResponse } from '@vercel/node';
import { newsletterSchema } from '../src/utils/schema';

const mailchimpEndpoint = process.env.MAILCHIMP_ENDPOINT; // TODO: REPLACE with production endpoint

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = newsletterSchema.parse(request.body);

    if (!mailchimpEndpoint || mailchimpEndpoint.includes('<list_id>')) {
      console.info('Mock newsletter signup', payload.email);
      return response.status(200).json({ success: true, message: 'Mock signup saved locally.' });
    }

    // TODO: REPLACE with Mailchimp POST request using API key stored in serverless environment
    // await fetch(mailchimpEndpoint, { method: 'POST', headers: { Authorization: `Bearer ${process.env.MAILCHIMP_KEY}` }, body: JSON.stringify({ email_address: payload.email, status: 'subscribed' }) });

    return response.status(200).json({ success: true, message: 'Subscribed!' });
  } catch (error) {
    console.error(error);
    return response.status(400).send('Unable to process newsletter signup');
  }
}
