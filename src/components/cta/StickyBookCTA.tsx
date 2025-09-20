import { Link, useLocation } from 'react-router-dom';

const StickyBookCTA = () => {
  const location = useLocation();
  const isBookPage = location.pathname === '/book';

  if (isBookPage) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center bg-white/95 p-4 shadow-2xl md:hidden">
      <div className="flex w-full max-w-md items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">Ready to rehydrate?</p>
          <p className="text-xs text-slate-600">Reserve your IV in under two minutes.</p>
        </div>
        <Link to="/book" className="btn-primary whitespace-nowrap">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default StickyBookCTA;
