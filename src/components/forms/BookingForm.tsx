import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postJSON } from '../../utils/fetcher';
import { useUTM } from '../../context/UTMContext';
import { allServices } from '../../lib/services';
import { trackEvent } from '../../utils/analytics';

const BookingForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { utm } = useUTM();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      serviceId: formData.get('serviceId'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      preferredDateISO: formData.get('preferredDateISO'),
      notes: formData.get('notes'),
      utm
    };

    setStatus('loading');
    try {
      await postJSON<{ success: boolean; bookingId: string }>('/api/book', payload);
      setStatus('success');
      setMessage('We received your request! A nurse will confirm shortly.');
      trackEvent('booking_request', { serviceId: payload.serviceId });
      event.currentTarget.reset();
      setTimeout(() => navigate('/thank-you', { replace: true }), 1200);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('We could not process your booking. Please call (480) 555-0123.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Booking form">
      <div className="grid gap-2">
        <label htmlFor="serviceId" className="text-sm font-semibold text-slate-800">
          Select a service
        </label>
        <select
          id="serviceId"
          name="serviceId"
          required
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
        >
          <option value="">Choose a drip</option>
          {allServices.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title} — ${service.price}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-slate-800">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
        />
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="phone" className="text-sm font-semibold text-slate-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
          />
        </div>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="preferredDateISO" className="text-sm font-semibold text-slate-800">
            Preferred date & time
          </label>
          <input
            id="preferredDateISO"
            name="preferredDateISO"
            type="datetime-local"
            required
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="notes" className="text-sm font-semibold text-slate-800">
            Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500"
            placeholder="Allergies, concerns, or special requests"
          />
        </div>
      </div>
      <button type="submit" className="btn-primary w-full md:w-auto" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting…' : 'Request Appointment'}
      </button>
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-brand-600' : 'text-rose-600'}`}>{message}</p>
      )}
    </form>
  );
};

export default BookingForm;
