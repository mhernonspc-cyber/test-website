import { FormEvent, useState } from 'react';
import { postJSON } from '../../utils/fetcher';
import { trackEvent } from '../../utils/analytics';

const NewsletterForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')?.toString() ?? '';

    setStatus('loading');
    try {
      await postJSON<{ success: boolean; message: string }>('/api/newsletter', { email });
      setStatus('success');
      setMessage('You are on the list! Check your inbox for a welcome note.');
      trackEvent('newsletter_signup', { email_masked: email.replace(/(.{2}).+(@.+)/, '$1***$2') });
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Something went wrong. Please try again or email hello@vitavera.com.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur"
      aria-label="Newsletter signup form"
    >
      <div>
        <label htmlFor="newsletter-email" className="text-sm font-semibold text-white">
          Get wellness tips & promos
        </label>
        <p className="text-xs text-slate-200">We send 1-2 emails per month. No spam, ever.</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="flex-1 rounded-full border border-transparent px-4 py-3 text-sm text-slate-900 focus:border-brand-500"
        />
        <button type="submit" className="btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Join the List'}
        </button>
      </div>
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-brand-100' : 'text-rose-100'}`}>{message}</p>
      )}
    </form>
  );
};

export default NewsletterForm;
