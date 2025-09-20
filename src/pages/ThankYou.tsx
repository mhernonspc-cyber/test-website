import { Link } from 'react-router-dom';
import SEO from '../utils/seo';

const ThankYouPage = () => (
  <>
    <SEO
      title="Thank You | VitaVera Wellness"
      description="We received your booking request and will confirm soon."
      url="/thank-you"
    />
    <section className="bg-white py-16" aria-labelledby="thanks-title">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h1 id="thanks-title" className="section-title">
          You’re all set!
        </h1>
        <p className="mt-4 text-body">
          A VitaVera nurse is reviewing your request and will confirm details within a few minutes. Check your inbox for next
          steps and hydration tips.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <Link to="/services" className="btn-secondary">
            Explore more services
          </Link>
          <Link to="/shop" className="text-sm text-brand-600 hover:underline">
            Grab a gift card while you wait
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default ThankYouPage;
