import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { stripeSessionSchema } from '../src/utils/schema';
import { allProducts } from '../src/lib/products';

const stripeSecretKey = process.env.STRIPE_TEST_KEY; // TODO: REPLACE with live secret key when launching

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { productId } = stripeSessionSchema.parse(request.body);
    const product = allProducts.find((item) => item.id === productId);

    if (!product) {
      return response.status(404).json({ error: 'Product not found' });
    }

    if (!stripeSecretKey || stripeSecretKey.includes('sk_test_12345')) {
      // Mock Stripe Checkout URL for local development
      return response.status(200).json({
        url: `https://checkout.stripe.com/pay/test-session-${productId}`
      });
    }

    const stripe = new Stripe(stripeSecretKey, { apiVersion: '2023-10-16' });

    // TODO: REPLACE line items with live price IDs when ready
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: product.stripe_price_id,
          quantity: 1
        }
      ],
      success_url: `${process.env.VITE_SITE_URL || 'https://vitaverawellness.com'}/thank-you`,
      cancel_url: `${process.env.VITE_SITE_URL || 'https://vitaverawellness.com'}/shop`
    });

    return response.status(200).json({ url: session.url });
  } catch (error) {
    console.error(error);
    return response.status(400).send('Unable to create checkout session');
  }
}
