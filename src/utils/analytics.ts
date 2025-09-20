export const trackEvent = (event: string, params: Record<string, unknown> = {}) => {
  if (typeof window === 'undefined') return;
  if (!import.meta.env.VITE_GA_MEASUREMENT_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
