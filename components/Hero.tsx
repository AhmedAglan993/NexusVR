import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative flex flex-col items-center text-center">
        <div className="inline-block mb-6 px-4 py-1.5 border border-brand-primary/30 rounded-full bg-brand-primary/5 backdrop-blur-md animate-float">
          <span className="text-brand-primary font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Est. 2025 • Cairo • Riyadh</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter text-white leading-[1.1]">
          ARCHITECTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-secondary text-glow filter drop-shadow-lg">
            DIGITAL MONUMENTS
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          This is <strong className="text-white">Seqed XR</strong>.
          We build immersive worlds with the precision of the ancients and the power of the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
          <a
            href="#services"
            className="group relative px-8 py-4 bg-brand-primary text-black font-bold text-sm tracking-widest uppercase rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
          >
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out skew-x-12 opacity-50"></div>
            <span className="relative z-10">Explore Services</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 hover:border-brand-primary/50 text-white font-mono text-sm tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-white/5"
          >
            Start Project
          </a>
        </div>

        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
          {[
            { value: '35+', label: 'Experiences Built', color: 'border-brand-secondary' },
            { value: '1M+', label: 'Users Engaged', color: 'border-brand-primary' },
            { value: 'MENA', label: 'Region Focused', color: 'border-white' },
            { value: '24/7', label: 'Expert Support', color: 'border-gray-500' }
          ].map((stat, index) => (
            <div key={index} className={`glass-card p-6 border-l-2 ${stat.color} text-left group hover:-translate-y-1 duration-300`}>
              <div className="text-3xl font-mono font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;