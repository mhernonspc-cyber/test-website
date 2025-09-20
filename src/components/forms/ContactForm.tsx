import { FormEvent, useState } from 'react';
import { postJSON } from '../../utils/fetcher';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    setStatus('loading');
    try {
      await postJSON('/api/book', {
        ...payload,
        serviceId: 'contact-form',
        preferredDateISO: new Date().toISOString()
      });
      setStatus('success');
      setMessage('Thanks for reaching out! We will reply within one business day.');
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('We could not send your message. Please call (480) 555-0123.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Contact form">
      <div className="grid gap-2">
        <label htmlFor="contact-name" className="text-sm font-semibold text-slate-800">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
        />
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="contact-email" className="text-sm font-semibold text-slate-800">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact-phone" className="text-sm font-semibold text-slate-800">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="contact-message" className="text-sm font-semibold text-slate-800">
          How can we help?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
        />
      </div>
      <button type="submit" className="btn-primary w-full md:w-auto" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-brand-600' : 'text-rose-600'}`}>{message}</p>
      )}
    </form>
  );
};

export default ContactForm;
