import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import type { Service } from '../../types';
import { formatCurrency } from '../../utils/format';

interface ServiceCardProps {
  service: Service;
  orientation?: 'vertical' | 'horizontal';
}

const ServiceCard = ({ service, orientation = 'vertical' }: ServiceCardProps) => {
  return (
    <article
      className={`flex h-full rounded-3xl border border-slate-200 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-within:shadow-lg ${
        orientation === 'horizontal' ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      <img
        src={service.heroImage}
        alt={`${service.title} IV infusion`}
        loading="lazy"
        className={`${orientation === 'horizontal' ? 'h-48 w-full rounded-t-3xl object-cover md:h-auto md:w-1/3 md:rounded-l-3xl md:rounded-tr-none' : 'h-48 w-full rounded-t-3xl object-cover'}`}
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
          <p className="text-sm font-medium uppercase tracking-wide text-brand-600">{service.duration}</p>
        </div>
        <p className="text-body">{service.shortDescription}</p>
        <p className="text-sm font-medium text-slate-600">Who it’s for: {service.whoFor}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">Starting at</p>
            <p className="text-2xl font-semibold text-brand-700">{formatCurrency(service.price)}</p>
          </div>
          <Link
            to={`/services/${service.slug}`}
            className="btn-secondary inline-flex items-center gap-2"
            aria-label={`Learn more about ${service.title}`}
          >
            View Details
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
