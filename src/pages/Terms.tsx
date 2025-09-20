import SEO from '../utils/seo';

const TermsPage = () => (
  <>
    <SEO title="Terms of Service | VitaVera Wellness" description="Understand the terms of service for VitaVera Wellness treatments and purchases." url="/terms" />
    <section className="bg-white py-16" aria-labelledby="terms-title">
      <div className="mx-auto max-w-4xl px-4">
        <h1 id="terms-title" className="section-title">
          Terms of Service
        </h1>
        <p className="mt-4 text-body">
          By booking an appointment or purchasing products from VitaVera Wellness you agree to the following terms. These
          policies are designed to ensure safe, ethical, and reliable care.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Appointments</h2>
        <p className="mt-4 text-body">
          Deposits are required to confirm bookings. Cancellations with less than 24 hours notice may forfeit deposits. All
          clients must complete medical intake before receiving treatment.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Medical disclaimer</h2>
        <p className="mt-4 text-body">
          VitaVera Wellness does not replace your primary care physician. Treatments are not intended to diagnose, treat, cure,
          or prevent disease. Always consult with your healthcare provider.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Payments & refunds</h2>
        <p className="mt-4 text-body">
          Products and gift cards are final sale unless otherwise stated. Membership charges recur monthly and may be canceled with
          30 days notice.
        </p>
      </div>
    </section>
  </>
);

export default TermsPage;
