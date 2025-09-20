import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-2">
            <img src="/images/favicon.svg" alt="VitaVera Wellness logo" className="h-10 w-10" />
            <span className="font-display text-xl font-semibold text-brand-800">VitaVera Wellness</span>
          </div>
          <p className="text-body">
            IV hydration, vitamin infusions, and wellness memberships helping Phoenix feel vibrant and balanced.
          </p>
          <div className="space-y-1 text-sm text-slate-600">
            <p>732 N Central Ave, Phoenix, AZ 85004</p>
            <a href="tel:4805550123" className="hover:text-brand-600">
              (480) 555-0123
            </a>
            <p>Open daily 8am–7pm</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-slate-600 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-900">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-brand-600">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-brand-600">
                  Book
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-brand-600">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-brand-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-brand-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-slate-500 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} VitaVera Wellness. All rights reserved.</p>
          <p>
            Built for fast performance, accessibility, and conversions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
