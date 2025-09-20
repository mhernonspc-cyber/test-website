import { FormEvent, useEffect, useState } from 'react';
import SEO from '../utils/seo';
import { postJSON } from '../utils/fetcher';

type AdminView = 'request' | 'verified';

const AdminPage = () => {
  const [view, setView] = useState<AdminView>('request');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('vitavera_admin_token');
    if (token) {
      setView('verified');
    }
  }, []);

  const handleRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const passcode = formData.get('passcode');

    try {
      const result = await postJSON<{ token: string }>('/api/admin-auth', { email, passcode });
      window.localStorage.setItem('vitavera_admin_token', result.token);
      setView('verified');
      setMessage('Magic link verified. Replace this mock flow with production auth.');
    } catch (error) {
      console.error(error);
      setMessage('Invalid passcode. Check your .env ADMIN_PASSCODE value.');
    }
  };

  return (
    <>
      <SEO
        title="Admin | VitaVera Wellness"
        description="Secure area for VitaVera team to view bookings and webhook logs."
        url="/admin"
      />
      <section className="bg-white py-16" aria-labelledby="admin-title">
        <div className="mx-auto max-w-3xl px-4">
          <h1 id="admin-title" className="section-title">
            VitaVera Admin (mock)
          </h1>
          {view === 'request' ? (
            <form onSubmit={handleRequest} className="mt-8 grid gap-4 rounded-3xl border border-brand-100 bg-brand-50/60 p-6">
              <p className="text-sm text-slate-700">
                Enter your team email and passcode to receive a mock magic link token.
              </p>
              <div className="grid gap-2">
                <label htmlFor="admin-email" className="text-sm font-semibold text-slate-800">
                  Team email
                </label>
                <input
                  id="admin-email"
                  name="email"
                  type="email"
                  required
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="admin-passcode" className="text-sm font-semibold text-slate-800">
                  Passcode
                </label>
                <input
                  id="admin-passcode"
                  name="passcode"
                  type="password"
                  required
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
                />
                <p className="text-xs text-slate-500">Configured via ADMIN_PASSCODE in environment variables.</p>
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Generate Magic Link
              </button>
              {message && <p className="text-sm text-brand-700">{message}</p>}
            </form>
          ) : (
            <div className="mt-8 space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm text-slate-700">
                Success! This is a placeholder admin view. Replace with analytics dashboards, booking exports, or CMS previews.
              </p>
              <div>
                <h2 className="text-base font-semibold text-slate-900">Recent booking requests (mock)</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Immune Boost — Ana G. — 2024-03-17 10:00</li>
                  <li>• Mobile IV Party — Franklin Co. — 2024-03-19 18:30</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900">Webhook activity</h2>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Stripe checkout.session.completed (test)</li>
                  <li>• Mailchimp new-subscriber (test)</li>
                  <li>• Zapier CRM push (test)</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AdminPage;
