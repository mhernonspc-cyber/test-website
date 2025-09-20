import { useEffect, useState } from 'react';

const galleryImages = [
  { src: '/images/hero-placeholder.svg', alt: 'Nurse preparing IV bag', caption: 'Concierge IV therapy suites' },
  { src: '/images/clinic-exterior.svg', alt: 'Clinic exterior', caption: 'Central Phoenix clinic' },
  { src: '/images/hero-placeholder.svg', alt: 'Client relaxing during infusion', caption: 'Comfort-first lounge chairs' }
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    };
    if (activeIndex !== null) {
      window.addEventListener('keydown', handler);
    }
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [activeIndex]);

  return (
    <section className="bg-slate-50 py-16" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-brand-600">Inside VitaVera</p>
          <h2 id="gallery-title" className="section-title">
            Light-filled spaces designed for calm
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm focus-visible:outline focus-visible:outline-brand-500"
              onClick={() => setActiveIndex(index)}
            >
              <img src={image.src} alt={image.alt} className="h-64 w-full object-cover transition group-hover:scale-105" loading="lazy" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent px-4 py-3 text-left text-sm font-medium text-white">
                {image.caption}
              </span>
            </button>
          ))}
        </div>
        {activeIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-6"
            role="dialog"
            aria-modal="true"
            aria-label={galleryImages[activeIndex].alt}
          >
            <button
              type="button"
              className="absolute right-6 top-6 text-white underline-offset-2 hover:underline"
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="max-h-full w-auto max-w-3xl rounded-3xl border-8 border-white object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
