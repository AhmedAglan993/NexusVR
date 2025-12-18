import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    const SERVICE_ID = 'service_m58f2w1';
    const TEMPLATE_ID = 'template_omofbst';
    const PUBLIC_KEY = '8rCZ_cSY2cdkfLzWx';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        if (form.current) form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background Accent */}
      <div className={`absolute top-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none ${isRTL ? 'left-0 bg-gradient-to-r' : 'right-0'}`}></div>
      <div className={`absolute bottom-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px] ${isRTL ? 'right-0' : 'left-0'}`}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 ${isRTL ? 'md:grid-flow-col-dense' : ''}`}>

            {/* Contact Info */}
            <div className={isRTL ? 'text-right md:order-2' : ''}>
              <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">{t.contact.sectionTag}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.contact.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{t.contact.titleHighlight}</span>
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed font-light">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className={`space-y-6 ${isRTL ? 'md:order-1' : ''}`}>
              <div>
                <label className={`block text-xs font-mono text-brand-primary mb-2 tracking-widest uppercase ${isRTL ? 'text-right' : ''}`}>{t.contact.form.nameLabel}</label>
                <input
                  type="text"
                  name="user_name"
                  className={`w-full bg-black/40 border border-white/10 rounded p-4 text-white focus:border-brand-primary focus:bg-brand-primary/5 focus:outline-none transition-all duration-300 placeholder-gray-600 ${isRTL ? 'text-right' : ''}`}
                  placeholder={t.contact.form.namePlaceholder}
                  required
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
              <div>
                <label className={`block text-xs font-mono text-brand-primary mb-2 tracking-widest uppercase ${isRTL ? 'text-right' : ''}`}>{t.contact.form.emailLabel}</label>
                <input
                  type="email"
                  name="user_email"
                  className={`w-full bg-black/40 border border-white/10 rounded p-4 text-white focus:border-brand-primary focus:bg-brand-primary/5 focus:outline-none transition-all duration-300 placeholder-gray-600 ${isRTL ? 'text-right' : ''}`}
                  placeholder={t.contact.form.emailPlaceholder}
                  required
                  dir="ltr"
                />
              </div>
              <div>
                <label className={`block text-xs font-mono text-brand-primary mb-2 tracking-widest uppercase ${isRTL ? 'text-right' : ''}`}>{t.contact.form.messageLabel}</label>
                <textarea
                  name="message"
                  rows={4}
                  className={`w-full bg-black/40 border border-white/10 rounded p-4 text-white focus:border-brand-primary focus:bg-brand-primary/5 focus:outline-none transition-all duration-300 placeholder-gray-600 ${isRTL ? 'text-right' : ''}`}
                  placeholder={t.contact.form.messagePlaceholder}
                  required
                  dir={isRTL ? 'rtl' : 'ltr'}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 border font-bold uppercase tracking-[0.2em] rounded transition-all duration-300 transform hover:-translate-y-1 ${status === 'success'
                  ? 'bg-green-500/10 border-green-500 text-green-500'
                  : status === 'error'
                    ? 'bg-red-500/10 border-red-500 text-red-500'
                    : 'bg-brand-primary text-black border-brand-primary hover:bg-white hover:border-white shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                  }`}
              >
                {status === 'idle' && t.contact.form.submit}
                {status === 'sending' && t.contact.form.sending}
                {status === 'success' && t.contact.form.success}
                {status === 'error' && t.contact.form.error}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;