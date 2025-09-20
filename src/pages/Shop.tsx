import { useState } from 'react';
import SEO from '../utils/seo';
import { allProducts } from '../lib/products';
import { postJSON } from '../utils/fetcher';
import { formatCurrency } from '../utils/format';

const ShopPage = () => {
  const [status, setStatus] = useState<Record<string, 'idle' | 'loading' | 'success' | 'error'>>({});

  const handleCheckout = async (productId: string) => {
    setStatus((prev) => ({ ...prev, [productId]: 'loading' }));
    try {
      const response = await postJSON<{ url: string }>('/api/stripe-session', { productId });
      window.location.href = response.url;
    } catch (error) {
      console.error(error);
      setStatus((prev) => ({ ...prev, [productId]: 'error' }));
    }
  };

  return (
    <>
      <SEO
        title="Shop | VitaVera Wellness Gift Cards & Supplements"
        description="Purchase VitaVera gift cards, supplements, and digital guides. Secure Stripe Checkout in test mode."
        url="/shop"
      />
      <section className="bg-white py-16" aria-labelledby="shop-title">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-brand-600">Shop VitaVera</p>
            <h1 id="shop-title" className="section-title">
              Send wellness or restock your routine
            </h1>
            <p className="mt-4 text-body">
              All transactions use Stripe test mode. Replace credentials in <code>.env</code> and serverless functions to go live.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {allProducts.map((product) => {
              const state = status[product.id] ?? 'idle';
              return (
                <article key={product.id} className="flex h-full flex-col rounded-3xl border border-slate-200 p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-slate-900">{product.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-slate-700">{product.description}</p>
                  <p className="mt-4 text-2xl font-semibold text-brand-700">{formatCurrency(product.price_cents / 100)}</p>
                  {product.digitalDownloadUrl && (
                    <p className="text-xs text-slate-500">Digital download delivered via email after purchase.</p>
                  )}
                  <button
                    type="button"
                    className="btn-primary mt-6"
                    onClick={() => handleCheckout(product.id)}
                    disabled={state === 'loading'}
                  >
                    {state === 'loading' ? 'Redirecting…' : 'Buy with Stripe'}
                  </button>
                  {state === 'error' && (
                    <p className="mt-2 text-xs text-rose-600">Unable to create checkout session. Check Stripe credentials.</p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
