import { Link } from 'react-router-dom';
import SEO from '../utils/seo';
import { allServices } from '../lib/services';
import ServiceCard from '../components/sections/ServiceCard';

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Services | VitaVera Wellness IV Drips"
        description="Explore IV hydration, immunity boosts, beauty drips, and mobile IV parties. Every service includes a nurse consult and tailored nutrients."
        url="/services"
      />
      <section className="bg-white py-16" aria-labelledby="services-headline">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-brand-600">Our Menu</p>
              <h1 id="services-headline" className="section-title">
                Choose the infusion that fits your goals
              </h1>
              <p className="mt-4 max-w-2xl text-body">
                Every VitaVera session includes medical intake, vitals, and curated boosters. Click any service to view ingredients and
                add-ons.
              </p>
            </div>
            <Link to="/book" className="btn-primary">
              Book Consultation
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {allServices.map((service) => (
              <ServiceCard key={service.id} service={service} orientation="horizontal" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
