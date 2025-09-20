import BookingForm from '../components/forms/BookingForm';
import SEO from '../utils/seo';

const BookPage = () => {
  return (
    <>
      <SEO
        title="Book an IV Hydration Appointment | VitaVera Wellness"
        description="Reserve your VitaVera IV hydration appointment in Phoenix. Complete the form and we’ll confirm by text within minutes."
        url="/book"
      />
      <section className="bg-white py-16" aria-labelledby="book-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-600">Request an appointment</p>
            <h1 id="book-title" className="section-title">
              Let’s get your infusion on the books
            </h1>
            <p className="mt-4 text-body">
              Complete the form and a VitaVera nurse will call or text to confirm details, send intake forms, and take a deposit via
              Stripe.
            </p>
            <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
              <h2 className="text-base font-semibold text-slate-900">What happens next?</h2>
              <ol className="mt-3 space-y-2 list-decimal pl-4">
                <li>Our team confirms availability and sends you a Calendly link.</li>
                <li>Pay a $50 deposit via secure Stripe Checkout.</li>
                <li>Receive visit reminders + hydration tips via email and SMS.</li>
              </ol>
            </div>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-brand-50/80 p-6 shadow-lg">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookPage;
