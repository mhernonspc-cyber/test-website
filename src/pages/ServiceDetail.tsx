import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../utils/seo';
import { getServiceBySlug, allServices } from '../lib/services';
import { formatCurrency } from '../utils/format';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = useMemo(() => (slug ? getServiceBySlug(slug) : undefined), [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = allServices.filter((item) => item.id !== service.id).slice(0, 2);

  return (
    <>
      <SEO
        title={`${service.title} | VitaVera Wellness`}
        description={service.shortDescription}
        url={`/services/${service.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.longDescription,
          serviceType: service.title,
          provider: {
            '@type': 'MedicalBusiness',
            name: 'VitaVera Wellness'
          },
          areaServed: 'Phoenix',
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: service.price
          }
        }}
      />
      <article className="bg-white py-16" aria-labelledby="service-title">
        <div className="mx-auto max-w-4xl px-4">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/services" className="hover:text-brand-600">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-slate-700">
                {service.title}
              </li>
            </ol>
          </nav>
          <div className="mt-8 grid gap-8 md:grid-cols-[2fr,1fr] md:items-start">
            <div>
              <h1 id="service-title" className="section-title">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-slate-700">{service.longDescription}</p>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-base font-semibold text-slate-900">What’s inside</h2>
                <ul className="mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  {service.ingredients.map((ingredient) => (
                    <li key={ingredient}>• {ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="text-base font-semibold text-slate-900">Ideal for</h2>
                <p className="mt-2 text-sm text-slate-700">{service.whoFor}</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/book" className="btn-primary">
                  Reserve This Drip
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Ask a Nurse
                </Link>
              </div>
            </div>
            <aside className="space-y-6 rounded-3xl border border-brand-100 bg-brand-50/50 p-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-brand-600">Investment</p>
                <p className="text-3xl font-semibold text-brand-800">{formatCurrency(service.price)}</p>
                <p className="text-sm text-slate-600">{service.duration}</p>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900">Add-ons</h2>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>Vitamin B12 booster — $25</li>
                  <li>Glutathione push — $35</li>
                  <li>Mobile concierge travel — $75</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900">Related drips</h2>
                <ul className="mt-3 space-y-2 text-sm text-brand-700">
                  {related.map((item) => (
                    <li key={item.id}>
                      <Link to={`/services/${item.slug}`} className="hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default ServiceDetailPage;
