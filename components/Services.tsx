
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const serviceColors = ['#00f3ff', '#a855f7', '#f59e0b', '#22c55e'];
const serviceSlugs = ['branded-games', 'serious-games', 'agency-development', 'mena-localization'];

const Services = () => {
    const { t, isRTL } = useLanguage();

    const icons = ['fa-gamepad', 'fa-graduation-cap', 'fa-handshake', 'fa-globe'];

    return (
        <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Decor with Gaming Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(112,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(112,0,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

            {/* Floating Game Elements */}
            <div className="absolute top-20 left-10 text-4xl opacity-5 animate-pulse">🎮</div>
            <div className="absolute top-40 right-20 text-3xl opacity-5 animate-pulse" style={{ animationDelay: '1s' }}>🕹️</div>
            <div className="absolute bottom-20 left-1/4 text-5xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }}>👾</div>
            <div className="absolute bottom-40 right-1/3 text-4xl opacity-5 animate-pulse" style={{ animationDelay: '0.5s' }}>🎯</div>
            <div className="absolute top-1/2 right-10 text-3xl opacity-5 animate-pulse" style={{ animationDelay: '1.5s' }}>🏆</div>

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
                        <Link
                            key={index}
                            to={`/services/${serviceSlugs[index]}`}
                            className={`glass-card p-10 rounded-xl group hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer block ${isRTL ? 'text-right' : ''}`}
                            style={{
                                '--service-color': serviceColors[index],
                            } as React.CSSProperties}
                        >
                            {/* Glowing border on hover */}
                            <div
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                style={{ boxShadow: `0 0 30px ${serviceColors[index]}30, inset 0 0 30px ${serviceColors[index]}10` }}
                            ></div>

                            <div className={`relative w-14 h-14 rounded-lg flex items-center justify-center mb-8 border group-hover:scale-110 transition-all duration-300 ${isRTL ? 'mr-0 ml-auto' : ''}`}
                                style={{
                                    borderColor: serviceColors[index],
                                    boxShadow: `0 0 20px ${serviceColors[index]}40`,
                                    background: `linear-gradient(135deg, ${serviceColors[index]}20, transparent)`
                                }}
                            >
                                <i className={`fa-solid ${icons[index]} text-2xl`} style={{ color: serviceColors[index] }}></i>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white font-mono group-hover:text-brand-primary transition-colors relative">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm relative">
                                {service.description}
                            </p>

                            {/* Learn More indicator */}
                            <div className={`mt-6 flex items-center gap-2 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'flex-row-reverse' : ''}`} style={{ color: serviceColors[index] }}>
                                <span>{isRTL ? 'اكتشف المزيد' : 'Learn More'}</span>
                                <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
