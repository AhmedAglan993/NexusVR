
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
    const { t, isRTL } = useLanguage();

    const icons = ['fa-gamepad', 'fa-graduation-cap', 'fa-handshake', 'fa-language'];

    return (
        <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(112,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(112,0,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">{t.services.sectionTag}</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {t.services.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">{t.services.titleHighlight}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.services.items.map((service, index) => (
                        <div
                            key={index}
                            className={`glass-card p-10 rounded-xl group hover:bg-white/10 ${isRTL ? 'text-right' : ''}`}
                        >
                            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,243,255,0.1)] ${isRTL ? 'mr-0 ml-auto' : ''}`}>
                                <i className={`fa-solid ${icons[index]} text-2xl text-brand-primary`}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white font-mono group-hover:text-brand-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
