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

export interface Translations {
    lang: string;
    dir: string;
    nav: {
        home: string;
        services: string;
        portfolio: string;
        clients: string;
        contact: string;
    };
    hero: {
        tagline: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
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
    },

    // Hero Section
    hero: {
        tagline: 'Est. 2025 • Cairo • Riyadh',
        title: 'WE BUILD',
        titleHighlight: 'GAMES FOR BRANDS',
        subtitle: 'specializes in game development for brands, agencies, and businesses. We create games that drive engagement, not just entertainment.',
        ctaPrimary: 'Explore Services',
        ctaSecondary: 'Start Project',
        stats: [
            { value: 'Games', label: 'For Brands & Agencies' },
            { value: 'MENA', label: 'Regional Expertise' },
            { value: 'Our', label: 'Clients' },
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
};
