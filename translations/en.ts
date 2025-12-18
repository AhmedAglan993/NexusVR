// English translations for Seqed Games website

export interface StatItem {
    value: string;
    label: string;
}

export interface ServiceItem {
    title: string;
    description: string;
}

export interface ProjectItem {
    title: string;
    company: string;
    description: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
}

export interface Translations {
    lang: string;
    dir: string;
    nav: {
        home: string;
        services: string;
        portfolio: string;
        clients: string;
        contact: string;
        blog: string;
    };
    hero: {
        tagline: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
        ctaConsultation: string;
        stats: StatItem[];
    };
    services: {
        sectionTag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        items: ServiceItem[];
    };
    projects: {
        title: string;
        subtitle: string;
        comment: string;
        viewCaseStudy: string;
        contactForDetails: string;
        projectOverview: string;
        items: ProjectItem[];
    };
    testimonials: {
        clientsTag: string;
        clientsTitle: string;
        clientsTitleHighlight: string;
        clientsSubtitle: string;
        clientsComingSoon: string;
        clientsComingSoonText: string;
        feedbackTag: string;
        feedbackTitle: string;
        feedbackTitleHighlight: string;
        feedbackSubtitle: string;
        feedbackComingSoon: string;
        feedbackComingSoonText: string;
    };
    contact: {
        sectionTag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        form: {
            nameLabel: string;
            namePlaceholder: string;
            emailLabel: string;
            emailPlaceholder: string;
            messageLabel: string;
            messagePlaceholder: string;
            submit: string;
            sending: string;
            success: string;
            error: string;
        };
    };
    footer: {
        copyright: string;
    };
    skills: {
        sectionTag: string;
        title: string;
        titleHighlight: string;
    };
    languageSwitcher: {
        switchTo: string;
    };
    whatsapp: {
        tooltip: string;
    };
    faq: {
        sectionTag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        ctaText: string;
        ctaButton: string;
        items: FAQItem[];
    };
    blog: {
        sectionTag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        readMore: string;
        allPosts: string;
        categories: {
            all: string;
            gameDev: string;
            branding: string;
            industry: string;
        };
        comingSoon: string;
        comingSoonText: string;
    };
    consultation: {
        badge: string;
        title: string;
        subtitle: string;
        ctaButton: string;
    };
    servicePage: {
        backToHome: string;
        whatWeDeliver: string;
        ourProcess: string;
        readyToStart: string;
        readyToStartText: string;
        whatsapp: string;
        contactForm: string;
    };
}

export const en: Translations = {
    // Language metadata
    lang: 'en',
    dir: 'ltr',

    // Navigation
    nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        clients: 'OUR CLIENTS',
        contact: 'Contact',
        blog: 'Blog',
    },

    // Hero Section
    hero: {
        tagline: 'Est. 2025 • Cairo • Riyadh',
        title: 'GAMES BUILT',
        titleHighlight: 'TO LAST',
        subtitle: 'specializes in game development for brands, agencies, and businesses. We create games that drive engagement, not just entertainment.',
        ctaPrimary: 'Explore Services',
        ctaSecondary: 'Start Project',
        ctaConsultation: 'Free Consultation',
        stats: [
            { value: 'Coming', label: 'Clients Soon' },
            { value: 'MENA', label: 'Regional Expertise' },
            { value: '2+', label: 'Countries Served' },
            { value: 'Results', label: 'Driven by Data' },
        ],
    },

    // Services Section
    services: {
        sectionTag: 'What We Do',
        title: 'AGENCY',
        titleHighlight: 'CAPABILITIES',
        subtitle: 'Game development services for brands, agencies, and businesses. We build games that deliver real business results.',
        items: [
            {
                title: 'Branded Games & Advergames',
                description: 'Create engaging games that promote your brand, product, or campaign. From web-based advergames to mobile brand experiences that drive real engagement and conversions.',
            },
            {
                title: 'Serious Games & Training',
                description: 'Gamified training and educational experiences that people actually want to use. We build serious games for corporate training, education, and skill development.',
            },
            {
                title: 'Game Development for Agencies',
                description: 'We partner with marketing agencies and studios as their dedicated game development team. From concept to launch, we handle the technical execution.',
            },
            {
                title: 'MENA Localization & Culturalization',
                description: "Adapt Western games for MENA markets with cultural sensitivity. We don't just translate—we culturally adapt games for KSA, UAE, Egypt, and beyond.",
            },
        ],
    },

    // Projects Section
    projects: {
        title: 'Our Work',
        subtitle: 'Explore our portfolio of games built for brands, agencies, and businesses. Each project is designed to deliver measurable results.',
        comment: '// GAME PORTFOLIO',
        viewCaseStudy: 'View Case Study',
        contactForDetails: 'Contact for details',
        projectOverview: 'Project Overview',
        items: [
            {
                title: 'Ramadan Brand Activation Game',
                company: 'Fashion Brand Campaign',
                description: "Web-based mobile game for a major fashion brand's Ramadan campaign. Achieved 150K+ plays and 45% engagement rate. Players could unlock exclusive discount codes through gameplay, driving direct conversions.",
            },
            {
                title: 'Corporate Safety Training Simulator',
                company: 'Industrial Training Client',
                description: 'Gamified safety training experience for a manufacturing company. Reduced training time by 60% and increased knowledge retention. Delivered as a modular system allowing for easy content updates.',
            },
            {
                title: 'MENA Localization: Adventure RPG',
                company: 'Western Game Publisher',
                description: 'Complete culturalization and localization of a Western RPG for MENA markets. Adapted storylines, characters, and gameplay mechanics to align with regional cultural values while maintaining gameplay integrity.',
            },
            {
                title: 'E-commerce Loyalty Game Platform',
                company: 'Marketing Agency Partnership',
                description: 'White-label game platform developed for a marketing agency. Allows their clients to deploy branded mini-games for customer engagement. Handled full development while agency managed client relations.',
            },
        ],
    },

    // Testimonials Section
    testimonials: {
        clientsTag: 'Trusted By',
        clientsTitle: 'OUR',
        clientsTitleHighlight: 'CLIENTS',
        clientsSubtitle: 'Brands, agencies, and businesses who trust us to build their games.',
        clientsComingSoon: 'Our Clients Coming Soon',
        clientsComingSoonText: 'Client logos will be displayed here as we work with brands and agencies.',
        feedbackTag: 'Client Feedback',
        feedbackTitle: 'WHAT',
        feedbackTitleHighlight: 'CLIENTS SAY',
        feedbackSubtitle: 'Building games that drive real business results.',
        feedbackComingSoon: 'Client Testimonials Coming Soon',
        feedbackComingSoonText: 'As we work with brands and agencies, their feedback will appear here. Our focus is on delivering games that drive real business results.',
    },

    // Contact Section
    contact: {
        sectionTag: 'Get In Touch',
        title: 'Start a',
        titleHighlight: 'Collaboration',
        subtitle: 'Ready to bring your virtual concepts to reality? Whether you need a full-scale game production, a VR training module, or an AR marketing campaign, our team is ready to deploy.',
        form: {
            nameLabel: 'Identifier (Name)',
            namePlaceholder: 'Your name',
            emailLabel: 'Transmission (Email)',
            emailPlaceholder: 'Your email',
            messageLabel: 'Data Packet (Message)',
            messagePlaceholder: 'Your message',
            submit: 'Initialize Uplink',
            sending: 'Transmitting...',
            success: 'Transmission Complete',
            error: 'Transmission Failed',
        },
    },

    // Footer
    footer: {
        copyright: 'Seqed Games. All rights reserved.',
    },

    // Skills Section
    skills: {
        sectionTag: 'Our Expertise',
        title: 'TECHNICAL',
        titleHighlight: 'ARSENAL',
    },

    // Language switcher
    languageSwitcher: {
        switchTo: 'عربي',
    },

    // WhatsApp
    whatsapp: {
        tooltip: 'Chat with us on WhatsApp',
    },

    // FAQ Section
    faq: {
        sectionTag: 'FAQ',
        title: 'Frequently Asked',
        titleHighlight: 'Questions',
        subtitle: 'Find answers to common questions about our game development services',
        ctaText: 'Still have questions?',
        ctaButton: 'Free Consultation',
        items: [
            {
                question: 'What types of games do you develop?',
                answer: 'We specialize in branded games, advergames, serious games for training, and game development for marketing agencies. We work with Unity, Unreal Engine, and web technologies to deliver games for mobile, web, and desktop platforms.',
            },
            {
                question: 'How long does it take to develop a game?',
                answer: 'Project timelines vary based on complexity. A simple web-based advergame might take 1-2 weeks, while a full mobile game can take 3-6 months. We provide detailed timelines during our free consultation.',
            },
            {
                question: 'Do you work with clients outside the MENA region?',
                answer: 'Yes! While we specialize in the MENA market, we work with clients globally. Our expertise in cultural localization is valuable for any company looking to expand into Middle Eastern markets.',
            },
            {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing based on project scope. We can work on fixed-price projects with clear deliverables, or on a retainer basis for ongoing partnerships. Contact us for a custom quote.',
            },
            {
                question: 'Can you help with game marketing and launch?',
                answer: 'While our core focus is development, we partner with marketing agencies and can advise on launch strategies. We also offer ongoing support and analytics integration to measure your game\'s success.',
            },
        ],
    },

    // Blog Section
    blog: {
        sectionTag: 'Insights',
        title: 'GAME DEV',
        titleHighlight: 'BLOG',
        subtitle: 'Industry insights, case studies, and thought leadership from our team',
        readMore: 'Read More',
        allPosts: 'All Posts',
        categories: {
            all: 'All',
            gameDev: 'Game Development',
            branding: 'Brand Gaming',
            industry: 'Industry News',
        },
        comingSoon: 'Blog Coming Soon',
        comingSoonText: 'We\'re preparing insightful articles about game development, brand gaming, and industry trends. Check back soon!',
    },

    // Consultation CTA
    consultation: {
        badge: 'Limited Spots Available',
        title: 'Book Your Free Consultation',
        subtitle: 'Discuss your project with our game development experts. No commitment required.',
        ctaButton: 'Schedule Now',
    },

    // Service Page
    servicePage: {
        backToHome: 'Back to Home',
        whatWeDeliver: 'What We Deliver',
        ourProcess: 'Our Process',
        readyToStart: 'Ready to Start?',
        readyToStartText: 'Contact us today to discuss your project and get a free consultation',
        whatsapp: 'WhatsApp',
        contactForm: 'Contact Form',
    },
};

