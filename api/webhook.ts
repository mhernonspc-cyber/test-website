import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_TEST_KEY; // TODO: REPLACE
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET; // TODO: REPLACE

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).end('Method not allowed');
  }

  const chunks: Buffer[] = [];
  for await (const chunk of request) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  const rawBody = Buffer.concat(chunks);

  try {
    if (!stripeSecretKey || !webhookSecret || stripeSecretKey.includes('sk_test_12345')) {
      console.info('Received mock webhook payload', rawBody.toString());
      return response.status(200).json({ received: true });
    }

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2023-10-16' });
    const signature = request.headers['stripe-signature'];

    if (!signature) {
      return response.status(400).send('Missing Stripe signature header');
    }

    const event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);

    switch (event.type) {
      case 'checkout.session.completed':
        // TODO: REPLACE with fulfillment logic
        console.info('Stripe checkout completed', event.data.object);
        break;
      default:
        console.info('Unhandled event type', event.type);
    }

    return response.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error', error);
    return response.status(400).send('Webhook signature verification failed');
  }
}
