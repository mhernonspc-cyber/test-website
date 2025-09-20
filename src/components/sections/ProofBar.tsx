import { MapPinIcon, PhoneIcon, SparklesIcon } from '@heroicons/react/24/outline';

const ProofBar = () => {
  return (
    <div className="mt-6 grid gap-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-lg backdrop-blur-sm md:grid-cols-3">
      <div className="flex items-center gap-3">
        <MapPinIcon className="h-8 w-8 text-brand-600" aria-hidden="true" />
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Visit Us</p>
          <p className="text-base font-semibold text-slate-900">732 N Central Ave, Phoenix</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <PhoneIcon className="h-8 w-8 text-brand-600" aria-hidden="true" />
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Call or Text</p>
          <a href="tel:4805550123" className="text-base font-semibold text-slate-900 hover:text-brand-600">
            (480) 555-0123
          </a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <SparklesIcon className="h-8 w-8 text-brand-600" aria-hidden="true" />
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Popular Service</p>
          <p className="text-base font-semibold text-slate-900">IVs start at $149</p>
        </div>
      </div>
    </div>
  );
};

export default ProofBar;
