import ContactForm from '../components/forms/ContactForm';
import SEO from '../utils/seo';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact VitaVera Wellness"
        description="Ask our nurses a question, request mobile IV services, or collaborate on a wellness event."
        url="/contact"
      />
      <section className="bg-white py-16" aria-labelledby="contact-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr,1fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand-600">Get in touch</p>
            <h1 id="contact-title" className="section-title">
              We’re here to support your wellness goals
            </h1>
            <p className="mt-4 text-body">
              Call or text <a href="tel:4805550123" className="text-brand-600 hover:underline">(480) 555-0123</a> or email
              <a href="mailto:hello@vitavera.com" className="text-brand-600 hover:underline"> hello@vitavera.com</a>.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-700">
              <p>Clinic: 732 N Central Ave, Phoenix, AZ 85004</p>
              <p>Open 7 days a week, 8am–7pm</p>
              <p>Mobile IV radius: 30 miles from downtown Phoenix</p>
            </div>
            <iframe
              title="Map showing VitaVera Wellness"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.3680876135834!2d-112.07358602367432!3d33.45690845308881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b122f4f4c4b4f%3A0x4f4f62db9a2b0f5a!2sPhoenix%20AZ!5e0!3m2!1sen!2sus!4v1709772800000!5m2!1sen!2sus"
              className="mt-8 h-64 w-full rounded-3xl border border-slate-200"
              loading="lazy"
            />
          </div>
          <div className="rounded-3xl border border-brand-100 bg-brand-50/70 p-6 shadow-inner">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
