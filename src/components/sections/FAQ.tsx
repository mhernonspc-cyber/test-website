import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { allFAQs } from '../../lib/faqs';

const FAQ = () => {
  return (
    <section className="bg-white py-16" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-widest text-brand-600">Questions</p>
          <h2 id="faq-title" className="section-title">
            Answers before you book
          </h2>
        </div>
        <dl className="space-y-4">
          {allFAQs.map((faq) => (
            <Disclosure key={faq.question}>
              {({ open }) => (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Disclosure.Button className="flex w-full items-center justify-between text-left">
                    <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                    {open ? (
                      <MinusSmallIcon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-3 text-sm text-slate-600">{faq.answer}</Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
