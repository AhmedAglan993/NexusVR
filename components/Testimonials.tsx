import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Client {
  id: string;
  name: string;
  logo?: string;
  industry?: string;
}

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
}

const Testimonials: React.FC = () => {
  const { t, isRTL } = useLanguage();

  // Placeholder clients - replace with real ones when available
  const clients: Client[] = [];

  // Placeholder testimonials - replace with real ones when available
  const testimonials: Testimonial[] = [];

  return (
    <section id="testimonials" className="py-24 bg-brand-dark relative overflow-hidden border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Our Clients Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">{t.testimonials.clientsTag}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {t.testimonials.clientsTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{t.testimonials.clientsTitleHighlight}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              {t.testimonials.clientsSubtitle}
            </p>
          </div>

          {clients.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="glass-card p-6 rounded-xl group hover:bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all duration-300 w-full flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-16 object-contain"
                    />
                  ) : (
                    <span className="text-gray-400 font-mono text-sm uppercase">{client.name}</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-block p-6 glass-card rounded-xl border border-white/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center border border-brand-primary/30">
                  <i className="fa-solid fa-building text-xl text-brand-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">{t.testimonials.clientsComingSoon}</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                  {t.testimonials.clientsComingSoonText}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <span className="text-brand-secondary font-mono text-sm tracking-widest uppercase mb-4 block">{t.testimonials.feedbackTag}</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {t.testimonials.feedbackTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{t.testimonials.feedbackTitleHighlight}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              {t.testimonials.feedbackSubtitle}
            </p>
          </div>

          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`glass-card p-8 rounded-xl group hover:bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all duration-300 ${isRTL ? 'text-right' : ''}`}
                >
                  <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/30"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary/30 to-brand-secondary/30 flex items-center justify-center border-2 border-brand-primary/30">
                        <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-brand-primary text-xs font-mono">{testimonial.role}</p>
                      <p className="text-gray-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-block p-6 glass-card rounded-xl border border-white/10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center border border-brand-primary/30">
                  <i className="fa-solid fa-quote-left text-xl text-brand-primary"></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-mono">{t.testimonials.feedbackComingSoon}</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                  {t.testimonials.feedbackComingSoonText}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
