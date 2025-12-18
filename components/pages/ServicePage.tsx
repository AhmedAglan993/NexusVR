import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceDataLang {
    features: string[];
    process: string[];
}

interface ServiceData {
    slug: string;
    icon: string;
    color: string;
    en: ServiceDataLang;
    ar: ServiceDataLang;
}

const serviceData: Record<string, ServiceData> = {
    'branded-games': {
        slug: 'branded-games',
        icon: 'fa-gamepad',
        color: '#00f3ff',
        en: {
            features: ['Web-based games', 'Mobile advergames', 'Social media games', 'Campaign activations', 'Loyalty game platforms'],
            process: ['Discovery & Strategy', 'Concept Design', 'Development', 'Testing & QA', 'Launch & Analytics'],
        },
        ar: {
            features: ['ألعاب الويب', 'ألعاب الموبايل الإعلانية', 'ألعاب وسائل التواصل', 'تفعيل الحملات', 'منصات ألعاب الولاء'],
            process: ['الاكتشاف والاستراتيجية', 'تصميم المفهوم', 'التطوير', 'الاختبار وضمان الجودة', 'الإطلاق والتحليلات'],
        },
    },
    'serious-games': {
        slug: 'serious-games',
        icon: 'fa-graduation-cap',
        color: '#a855f7',
        en: {
            features: ['Corporate training', 'Safety simulations', 'Onboarding games', 'Skill assessments', 'Educational games'],
            process: ['Training Needs Analysis', 'Learning Design', 'Game Development', 'Pilot Testing', 'Deployment & Tracking'],
        },
        ar: {
            features: ['التدريب المؤسسي', 'محاكاة السلامة', 'ألعاب التوظيف', 'تقييم المهارات', 'الألعاب التعليمية'],
            process: ['تحليل احتياجات التدريب', 'تصميم التعلم', 'تطوير اللعبة', 'الاختبار التجريبي', 'النشر والمتابعة'],
        },
    },
    'agency-development': {
        slug: 'agency-development',
        icon: 'fa-handshake',
        color: '#f59e0b',
        en: {
            features: ['White-label solutions', 'Technical partnership', 'Game production', 'Asset creation', 'Ongoing support'],
            process: ['Partnership Setup', 'Technical Scoping', 'Agile Development', 'Delivery & Handoff', 'Maintenance'],
        },
        ar: {
            features: ['حلول العلامة البيضاء', 'الشراكة التقنية', 'إنتاج الألعاب', 'إنشاء الأصول', 'الدعم المستمر'],
            process: ['إعداد الشراكة', 'التحديد التقني', 'التطوير المرن', 'التسليم والتحويل', 'الصيانة'],
        },
    },
    'mena-localization': {
        slug: 'mena-localization',
        icon: 'fa-globe',
        color: '#22c55e',
        en: {
            features: ['Arabic localization', 'Cultural adaptation', 'Regional marketing', 'Content moderation', 'Market research'],
            process: ['Cultural Analysis', 'Content Adaptation', 'Voice & Translation', 'QA Testing', 'Market Launch'],
        },
        ar: {
            features: ['التعريب', 'التكييف الثقافي', 'التسويق الإقليمي', 'مراجعة المحتوى', 'بحث السوق'],
            process: ['التحليل الثقافي', 'تكييف المحتوى', 'الصوت والترجمة', 'اختبار الجودة', 'إطلاق السوق'],
        },
    },
};

const ServicePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t, isRTL, language } = useLanguage();

    const service = slug ? serviceData[slug] : null;
    const serviceIndex = slug ? Object.keys(serviceData).indexOf(slug) : -1;
    const serviceTranslation = serviceIndex >= 0 ? t.services?.items?.[serviceIndex] : null;

    // Get the correct language content for features and process
    const serviceContent = service ? (language === 'ar' ? service.ar : service.en) : null;

    if (!service || !serviceTranslation) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-dark">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
                    <Link to="/" className="text-brand-primary hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-brand-dark ${isRTL ? 'font-arabic' : ''}`}>
            {/* Hero Section with Gaming Elements */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Animated Background Grid */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

                    {/* Floating Game Elements */}
                    <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce" style={{ animationDelay: '0s' }}>🎮</div>
                    <div className="absolute top-40 right-20 text-5xl opacity-10 animate-bounce" style={{ animationDelay: '0.5s' }}>🕹️</div>
                    <div className="absolute bottom-20 left-1/4 text-4xl opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>👾</div>
                    <div className="absolute bottom-40 right-1/3 text-5xl opacity-10 animate-bounce" style={{ animationDelay: '1.5s' }}>🎯</div>

                    {/* Glowing Orb */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
                        style={{ background: `radial-gradient(circle, ${service.color}, transparent)` }}
                    ></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Back Link */}
                    <Link
                        to="/"
                        className={`inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                        <i className={`fa-solid ${isRTL ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
                        <span>{t.servicePage?.backToHome || 'Back to Home'}</span>
                    </Link>

                    <div className={`flex flex-col lg:flex-row items-center gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
                        {/* Service Icon */}
                        <div className="relative">
                            <div
                                className="w-40 h-40 rounded-2xl flex items-center justify-center border-2 relative overflow-hidden"
                                style={{ borderColor: service.color, boxShadow: `0 0 60px ${service.color}40` }}
                            >
                                {/* Glitch Effect Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                                <i className={`fa-solid ${service.icon} text-6xl relative z-10`} style={{ color: service.color }}></i>
                            </div>

                            {/* Floating particles */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full animate-ping" style={{ backgroundColor: service.color }}></div>
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: service.color, animationDelay: '0.5s' }}></div>
                        </div>

                        {/* Content */}
                        <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {serviceTranslation.title}
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                                {serviceTranslation.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <h2 className={`text-3xl font-bold text-white mb-12 ${isRTL ? 'text-right' : ''}`}>
                        {t.servicePage?.whatWeDeliver || 'What We Deliver'}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceContent?.features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center text-black font-bold"
                                        style={{ backgroundColor: service.color }}
                                    >
                                        {index + 1}
                                    </div>
                                    <span className="text-white font-medium">{feature}</span>
                                </div>

                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ boxShadow: `inset 0 0 30px ${service.color}20` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section with Game-like Progress Bar */}
            <section className="py-20 relative bg-black/50">
                <div className="container mx-auto px-6">
                    <h2 className={`text-3xl font-bold text-white mb-12 ${isRTL ? 'text-right' : ''}`}>
                        {t.servicePage?.ourProcess || 'Our Process'}
                    </h2>

                    <div className="relative">
                        {/* Progress Line */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-800">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: '100%',
                                    background: `linear-gradient(90deg, ${service.color}, ${service.color}50)`
                                }}
                            ></div>
                        </div>

                        <div className={`grid md:grid-cols-5 gap-8 ${isRTL ? 'direction-rtl' : ''}`}>
                            {serviceContent?.process.map((step, index) => (
                                <div key={index} className="relative text-center">
                                    {/* Step Number - Gaming Style */}
                                    <div
                                        className="relative w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center border-2 bg-black z-10"
                                        style={{ borderColor: service.color, boxShadow: `0 0 20px ${service.color}40` }}
                                    >
                                        <span className="text-2xl font-bold" style={{ color: service.color }}>{index + 1}</span>
                                    </div>
                                    <h3 className="text-white font-medium mb-2">{step}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div
                        className="relative p-12 rounded-2xl border overflow-hidden"
                        style={{ borderColor: `${service.color}30` }}
                    >
                        {/* Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{ background: `radial-gradient(circle at center, ${service.color}, transparent)` }}
                        ></div>

                        <div className={`relative z-10 text-center ${isRTL ? 'font-arabic' : ''}`}>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                {t.servicePage?.readyToStart || 'Ready to Start?'}
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                {t.servicePage?.readyToStartText || 'Contact us today to discuss your project and get a free consultation'}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/201288950926"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <i className="fa-brands fa-whatsapp text-xl"></i>
                                    <span>{t.servicePage?.whatsapp || 'WhatsApp'}</span>
                                </a>
                                <Link
                                    to="/#contact"
                                    className="px-8 py-4 border border-white/20 hover:border-brand-primary text-white font-bold rounded-lg transition-all"
                                >
                                    {t.servicePage?.contactForm || 'Contact Form'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
