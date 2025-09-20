import { z } from 'zod';

export const bookingSchema = z.object({
  serviceId: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  preferredDateISO: z.string().refine((val) => !Number.isNaN(Date.parse(val)), 'Invalid date'),
  notes: z.string().max(500).optional(),
  utm: z.record(z.string()).optional()
});

export const stripeSessionSchema = z.object({
  productId: z.string()
});

export const newsletterSchema = z.object({
  email: z.string().email()
});

export const adminAuthSchema = z.object({
  email: z.string().email(),
  passcode: z.string().min(4)
});
