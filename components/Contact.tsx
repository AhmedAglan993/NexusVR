import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    // REPLACE THESE WITH YOUR ACTUAL KEYS FROM EMAILJS DASHBOARD
    // Sign up at https://www.emailjs.com/
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start a <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Collaboration</span></h2>
              <p className="text-gray-400 mb-10 leading-relaxed font-light">
                Ready to bring your virtual concepts to reality? Whether you need a full-scale game production, a VR training module, or an AR marketing campaign, our team is ready to deploy.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.1)]">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-mono tracking-widest">Email Transmission</div>
                    <div className="text-white font-medium group-hover:text-brand-primary transition-colors">contact@seqedxr.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(112,0,255,0.1)]">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-mono tracking-widest">Secure Link</div>
                    <div className="text-white font-medium group-hover:text-brand-secondary transition-colors">linkedin.com/company/seqedxr</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-xs font-mono text-brand-primary mb-2 tracking-widest uppercase">Identifier (Name)</label>
                <input type="text" name="user_name" className="w-full bg-black/40 border border-white/10 rounded p-4 text-white focus:border-brand-primary focus:bg-brand-primary/5 focus:outline-none transition-all duration-300 placeholder-gray-700" placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-xs font-mono text-brand-primary mb-2 tracking-widest uppercase">Transmission (Email)</label>
                <input type="email" name="user_email" className="w-full bg-black/40 border border-white/10 rounded p-4 text-white focus:border-brand-primary focus:bg-brand-primary/5 focus:outline-none transition-all duration-300 placeholder-gray-700" placeholder="john@company.com" required />
              </div>
              <div>
                <label className="block text-xs font-mono text-brand-primary mb-2 tracking-widest uppercase">Data Packet (Message)</label>
                <textarea name="message" rows={4} className="w-full bg-black/40 border border-white/10 rounded p-4 text-white focus:border-brand-primary focus:bg-brand-primary/5 focus:outline-none transition-all duration-300 placeholder-gray-700" placeholder="Tell us about your project..." required></textarea>
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
                {status === 'idle' && 'Initialize Uplink'}
                {status === 'sending' && 'Transmitting...'}
                {status === 'success' && 'Transmission Complete'}
                {status === 'error' && 'Transmission Failed'}
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;