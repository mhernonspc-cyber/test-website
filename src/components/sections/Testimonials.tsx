import { allTestimonials } from '../../lib/testimonials';

const Testimonials = () => {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-300">Client Love</p>
            <h2 className="section-title text-white">Trusted by our Phoenix community</h2>
          </div>
          <p className="max-w-md text-sm text-slate-200">
            Real words from people who count on VitaVera to recover faster, travel well, and stay energized.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {allTestimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/10 p-6">
              <div className="flex items-center gap-2 text-brand-200" aria-label={`${testimonial.rating} star review`}>
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="mt-4 flex-1 text-lg font-medium text-white">“{testimonial.text}”</p>
              <cite className="mt-6 text-sm font-semibold text-brand-100 not-italic">{testimonial.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
