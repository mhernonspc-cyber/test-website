import { Link } from 'react-router-dom';
import SEO from '../utils/seo';
import { allServices } from '../lib/services';
import ServiceCard from '../components/sections/ServiceCard';
import Testimonials from '../components/sections/Testimonials';
import Gallery from '../components/sections/Gallery';
import FAQ from '../components/sections/FAQ';
import NewsletterForm from '../components/forms/NewsletterForm';
import ProofBar from '../components/sections/ProofBar';
import { formatCurrency } from '../utils/format';

const HomePage = () => {
  const topServices = allServices.slice(0, 3);

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'VitaVera Wellness',
    image: 'https://vitaverawellness.com/images/hero-placeholder.svg',
    '@id': 'https://vitaverawellness.com',
    url: 'https://vitaverawellness.com',
    telephone: '+14805550123',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '732 N Central Ave',
      addressLocality: 'Phoenix',
      addressRegion: 'AZ',
      postalCode: '85004',
      addressCountry: 'US'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '19:00'
    },
    priceRange: '$$'
  };

  const serviceJsonLd = allServices.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'VitaVera Wellness'
    },
    areaServed: {
      '@type': 'City',
      name: 'Phoenix'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: service.price,
      url: `https://vitaverawellness.com/services/${service.slug}`
    }
  }));

  return (
    <>
      <SEO
        title="VitaVera Wellness | IV Hydration & Vitamin Infusions — Recover Faster"
        description="IV hydration, vitamin drips, and wellness memberships in Phoenix. Book online for concierge-level care with board-certified nurses."
        url="/"
        jsonLd={[localBusinessJsonLd, ...serviceJsonLd]}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
        <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 py-20 md:flex-row md:py-28">
          <div className="w-full md:w-1/2">
            <p className="text-sm uppercase tracking-widest text-brand-600">Phoenix IV Lounge & Mobile</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
              IV Hydration & Vitamin Infusions — Recover Faster. Book Online.
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              Bounce back from workouts, travel, or big events with nutrient-rich IV drips delivered by our board-certified nurses.
              Appointments available in-clinic or on-location.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/book" className="btn-primary">
                Book Your Infusion
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
            <ProofBar />
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/hero-placeholder.svg"
              alt="Nurse preparing an IV hydration treatment"
              className="w-full rounded-3xl border border-white shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="services-title">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-brand-600">Signature Drips</p>
              <h2 id="services-title" className="section-title">
                Hydration therapy tailored to your goals
              </h2>
            </div>
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {topServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16" aria-labelledby="booking-flow">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-white md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 id="booking-flow" className="section-title text-white">
              Booking takes under two minutes
            </h2>
            <p className="mt-4 text-lg text-slate-200">
              Choose your drip, select a time, and secure your spot with a small deposit through our Stripe-powered checkout.
              We’ll send a confirmation and reminders.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>✓ Real-time nurse availability via Calendly embed</li>
              <li>✓ Secure intake forms + optional concierge travel</li>
              <li>✓ Personalized supplement recommendations with every visit</li>
            </ul>
            <Link to="/book" className="btn-primary mt-8">
              Start Booking
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-brand-200 bg-white/10 p-4 text-slate-900 shadow-lg">
              <p className="text-sm font-semibold text-brand-700">Live availability (mock)</p>
              <iframe
                title="Calendly booking widget"
                src="https://calendly.com/d/your-calendly-link?embed_domain=vitaverawellness.com&hide_event_type_details=1"
                className="mt-4 h-[360px] w-full rounded-2xl border border-slate-200"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="membership">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-brand-600">Memberships</p>
              <h2 id="membership" className="section-title">
                Feel amazing all month long
              </h2>
              <p className="mt-4 text-body">
                Join the VitaVera membership to unlock members-only pricing, priority booking, and quarterly lab reviews with our
                medical director.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>✓ Two IV drips per month with rollover credits</li>
                <li>✓ 15% off booster shots and supplements</li>
                <li>✓ Members-only community events and recovery lounge</li>
              </ul>
              <Link to="/contact" className="btn-secondary mt-8">
                Request Membership Info
              </Link>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-brand-50/60 p-8 shadow-inner">
              <h3 className="text-2xl font-semibold text-brand-800">Membership value snapshot</h3>
              <dl className="mt-6 space-y-4 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <dt>Monthly drip value</dt>
                  <dd className="font-semibold">{formatCurrency(topServices[0].price * 2)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Member price</dt>
                  <dd className="font-semibold">{formatCurrency(topServices[0].price * 1.6)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>Annual savings</dt>
                  <dd className="font-semibold text-brand-700">{formatCurrency(468)}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Gallery />
      <FAQ />

      <section className="bg-brand-900 py-16" aria-labelledby="newsletter">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center text-white">
          <h2 id="newsletter" className="section-title text-white">
            Stay in the loop with recovery tips
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
};

export default HomePage;
