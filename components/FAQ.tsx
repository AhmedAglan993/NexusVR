import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
    const { t, isRTL } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 ${isRTL ? 'font-arabic' : ''}`}>
                    <span className="text-brand-primary font-mono text-sm tracking-widest uppercase mb-4 block">
                        {t.faq?.sectionTag || 'FAQ'}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {t.faq?.title || 'Frequently Asked'}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                            {t.faq?.titleHighlight || 'Questions'}
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        {t.faq?.subtitle || 'Find answers to common questions about our game development services'}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {(t.faq?.items || []).map((faq, index) => (
                        <div
                            key={index}
                            className={`glass-card border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-primary/30' : ''
                                }`}
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full px-6 py-5 flex items-center justify-between ${isRTL ? 'flex-row-reverse text-right' : 'text-left'} hover:bg-white/5 transition-colors`}
                            >
                                <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                                <span className={`text-brand-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className={`px-6 pb-5 text-gray-400 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Free Consultation CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-6">{t.faq?.ctaText || "Still have questions?"}</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-black font-bold text-sm tracking-widest uppercase rounded-sm hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300"
                    >
                        <i className="fa-solid fa-headset"></i>
                        {t.faq?.ctaButton || 'Free Consultation'}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
