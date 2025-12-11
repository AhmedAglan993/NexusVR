
import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Culturalized Game Porting',
            description: "We don't just translate; we adapt. Expert localization and culturalization for Western games entering the MENA market (KSA, UAE, Egypt).",
            icon: 'fa-language'
        },
        {
            id: 2,
            title: 'Interactive Brand Experiences',
            description: 'Turn passive marketing into active engagement. We build high-fidelity "Advergames" for web and mobile that drive user retention.',
            icon: 'fa-gamepad'
        },
        {
            id: 3,
            title: 'Rapid MVP Prototyping',
            description: 'Visualize your game idea in weeks, not months. We deliver polished "Vertical Slices" for investors and pre-production validation.',
            icon: 'fa-rocket'
        }
    ];

    return (
        <section id="services" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                        Our Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Bridging the gap between global gaming standards and regional cultural nuance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                                <i className={`fa-solid ${service.icon} text-2xl text-neon-blue`}></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
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
