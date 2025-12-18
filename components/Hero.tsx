import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>

        {/* Floating Game Elements */}
        <div className="absolute top-[20%] left-[5%] text-6xl opacity-10 animate-float" style={{ animationDelay: '0s' }}>🎮</div>
        <div className="absolute top-[30%] right-[8%] text-5xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🕹️</div>
        <div className="absolute bottom-[25%] left-[10%] text-4xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>👾</div>
        <div className="absolute bottom-[35%] right-[5%] text-5xl opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>🎯</div>
        <div className="absolute top-[60%] left-[15%] text-4xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }}>🏆</div>
        <div className="absolute top-[15%] right-[15%] text-4xl opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>⚔️</div>
        <div className="absolute bottom-[20%] right-[20%] text-5xl opacity-10 animate-float" style={{ animationDelay: '3s' }}>🚀</div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

          {/* Text Content */}
          <div className={`flex-1 ${isRTL ? 'text-right' : 'text-center lg:text-left'}`}>
            <div className={`inline-block mb-6 px-4 py-1.5 border border-brand-primary/30 rounded-full bg-brand-primary/5 backdrop-blur-md animate-float ${isRTL ? '' : ''}`}>
              <span className="text-brand-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase">{t.hero.tagline}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-white leading-[1.3]">
              {t.hero.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-secondary text-glow filter drop-shadow-lg">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-light">
              <strong className="text-white">Seqed Games</strong> {t.hero.subtitle}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse justify-end' : 'justify-center lg:justify-start'}`}>
              <a
                href="#services"
                className="group relative px-8 py-4 bg-brand-primary text-black font-bold text-sm tracking-widest uppercase rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
              >
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out skew-x-12 opacity-50"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <i className="fa-solid fa-gamepad"></i>
                  {t.hero.ctaPrimary}
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 hover:border-brand-primary/50 text-white font-mono text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-rocket"></i>
                {t.hero.ctaSecondary}
              </a>
              <a
                href="https://wa.me/201288950926"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>{t.hero.ctaConsultation || 'Free Consultation'}</span>
              </a>
            </div>
          </div>

          {/* Mascot Image */}
          <div className="flex-1 relative hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-[80px] scale-75"></div>

              {/* Mascot */}
              <img
                src="/game-mascot.png"
                alt="Seqed Games Mascot"
                className="relative z-10 w-[400px] h-auto drop-shadow-[0_0_30px_rgba(0,243,255,0.3)] animate-float"
              />

              {/* Floating particles around mascot */}
              <div className="absolute top-10 left-0 w-4 h-4 bg-brand-primary rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-20 right-0 w-3 h-3 bg-brand-secondary rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-10 w-2 h-2 bg-green-500 rounded-full animate-ping opacity-60" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
          {t.hero.stats.map((stat, index) => {
            const colors = ['border-brand-secondary', 'border-brand-primary', 'border-green-500', 'border-purple-500'];
            const icons = ['fa-users', 'fa-globe-asia', 'fa-flag', 'fa-chart-line'];
            return (
              <div key={index} className={`glass-card p-6 border-l-2 ${isRTL ? 'border-l-0 border-r-2' : ''} ${colors[index]} ${isRTL ? 'text-right' : 'text-left'} group hover:-translate-y-1 duration-300 hover:bg-white/5`}>
                <div className="flex items-center gap-3 mb-2">
                  <i className={`fa-solid ${icons[index]} text-lg ${colors[index].replace('border-', 'text-')}`}></i>
                  <div className="text-2xl font-mono font-bold text-white group-hover:text-brand-primary transition-colors">{stat.value}</div>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;