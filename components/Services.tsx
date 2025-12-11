
import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Branded Games & Advergames',
            description: 'Create engaging games that promote your brand, product, or campaign. From web-based advergames to mobile brand experiences that drive real engagement and conversions.',
            icon: 'fa-gamepad'
        },
        {
            id: 2,
            title: 'Serious Games & Training',
            description: 'Gamified training and educational experiences that people actually want to use. We build serious games for corporate training, education, and skill development.',
            icon: 'fa-graduation-cap'
        },
        {
            id: 3,
            title: 'Game Development for Agencies',
            description: 'We partner with marketing agencies and studios as their dedicated game development team. From concept to launch, we handle the technical execution.',
            icon: 'fa-handshake'
        },
        {
            id: 4,
            title: 'MENA Localization & Culturalization',
            description: "Adapt Western games for MENA markets with cultural sensitivity. We don't just translate—we culturally adapt games for KSA, UAE, Egypt, and beyond.",
            icon: 'fa-language'
        }
    ];

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
                    <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        AGENCY <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">CAPABILITIES</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Game development services for brands, agencies, and businesses. We build games that deliver real business results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="glass-card p-10 rounded-xl group hover:bg-white/10"
                        >
                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                                <i className={`fa-solid ${service.icon} text-2xl text-brand-primary`}></i>
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
