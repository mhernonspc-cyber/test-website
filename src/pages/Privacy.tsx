import SEO from '../utils/seo';

const PrivacyPage = () => (
  <>
    <SEO title="Privacy Policy | VitaVera Wellness" description="How VitaVera Wellness collects, stores, and protects your information." url="/privacy" />
    <section className="bg-white py-16" aria-labelledby="privacy-title">
      <div className="mx-auto max-w-4xl px-4">
        <h1 id="privacy-title" className="section-title">
          Privacy Policy
        </h1>
        <p className="mt-4 text-body">
          VitaVera Wellness respects your privacy and is committed to protecting your personal data. This policy explains what
          information we collect, why we collect it, and how you can exercise your rights.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Information we collect</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-body">
          <li>Contact details when you submit booking, contact, or newsletter forms.</li>
          <li>Health history provided during medical intake and stored in HIPAA-compliant software.</li>
          <li>Payment information processed securely through Stripe (we never store full card numbers).</li>
        </ul>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">How we use data</h2>
        <p className="mt-4 text-body">
          We use your data to schedule appointments, communicate with you, and deliver personalized care. We may also share minimal
          information with trusted partners like Mailchimp or Stripe to complete services you request.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Your rights</h2>
        <p className="mt-4 text-body">
          You can request access, corrections, or deletion of your data by emailing privacy@vitavera.com. We honor all lawful
          opt-out requests from marketing communications.
        </p>
      </div>
    </section>
  </>
);

export default PrivacyPage;
