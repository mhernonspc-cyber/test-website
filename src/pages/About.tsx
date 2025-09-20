import SEO from '../utils/seo';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About VitaVera Wellness"
        description="Meet the VitaVera clinical team delivering premium IV hydration, vitamin therapy, and wellness guidance across Phoenix."
        url="/about"
      />
      <section className="bg-white py-16" aria-labelledby="about-title">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-sm uppercase tracking-widest text-brand-600">Our Story</p>
          <h1 id="about-title" className="section-title">
            Clinician-led care with a hospitality touch
          </h1>
          <p className="mt-4 text-body">
            VitaVera Wellness was founded by emergency room nurse practitioner Ana Rivera after seeing how quickly IV therapy
            restored patients during critical moments. She envisioned the same clinical expertise delivered in a calming, spa-like
            environment.
          </p>
          <p className="mt-4 text-body">
            Today our team of nurses and wellness strategists has delivered more than 12,000 infusions across Phoenix. We pair
            evidence-based nutrients with compassionate care—whether you visit our Roosevelt Row lounge or invite us to your
            office, Airbnb, or event.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-brand-100 bg-brand-50/70 p-6">
              <h2 className="text-lg font-semibold text-brand-800">What makes us different</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>✓ All infusions administered by advanced practice nurses</li>
                <li>✓ Labs and vitals reviewed before every treatment</li>
                <li>✓ Integrations with your functional medicine provider and trainers</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Community partnerships</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>• Phoenix Rising FC performance team</li>
                <li>• ASU Esports wellness initiative</li>
                <li>• Downtown Phoenix hotel concierge program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
