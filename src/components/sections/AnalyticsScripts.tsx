import { useEffect } from 'react';

const AnalyticsScripts = () => {
  useEffect(() => {
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      return;
    }
    if (document.getElementById('ga-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID);
  }, []);

  return null;
};

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default AnalyticsScripts;
