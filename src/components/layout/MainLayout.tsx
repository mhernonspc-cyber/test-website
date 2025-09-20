import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './Header';
import Footer from './Footer';
import StickyBookCTA from '../cta/StickyBookCTA';
import AnalyticsScripts from '../sections/AnalyticsScripts';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <AnalyticsScripts />
      <Analytics />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyBookCTA />
    </div>
  );
};

export default MainLayout;
