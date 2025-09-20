import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Book', to: '/book' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
      <div className="bg-brand-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-2 text-sm md:flex-row">
          <p className="flex items-center gap-2" aria-label="Clinic contact">
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            <a href="tel:4805550123" className="font-semibold underline-offset-2 hover:underline">
              (480) 555-0123
            </a>
            <span aria-hidden="true">•</span>
            <span>732 N Central Ave, Phoenix, AZ</span>
          </p>
          <p className="flex items-center gap-2">
            <span aria-hidden="true">★ ★ ★ ★ ★</span>
            <span className="sr-only">Five star rating</span>
            <span>Rated 4.9/5 by 180+ clients</span>
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/favicon.svg" alt="VitaVera Wellness logo" className="h-10 w-10" />
            <span className="font-display text-xl font-semibold text-brand-800">VitaVera Wellness</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-brand-600 ${isActive ? 'text-brand-600' : 'text-slate-700'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/book" className="btn-primary">
            Book Now
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-base font-medium transition hover:bg-brand-50 ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/book"
              className="btn-primary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
