export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  duration: string;
  ingredients: string[];
  heroImage: string;
  whoFor: string;
}

export interface Product {
  id: string;
  title: string;
  price_cents: number;
  stripe_price_id: string;
  description: string;
  digitalDownloadUrl?: string | null;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  photo: string | null;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  coverImage?: string;
}

export interface BlogPost extends BlogFrontmatter {
  content: string;
}

export interface BookingPayload {
  serviceId: string;
  name: string;
  email: string;
  phone: string;
  preferredDateISO: string;
  notes?: string;
  utm?: Record<string, string>;
}
