import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Language, type Translations, isRTL } from '../translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    // Detect initial language from URL or localStorage
    const getInitialLanguage = (): Language => {
        // Check URL path first
        const path = window.location.pathname;
        if (path.startsWith('/ar')) return 'ar';
        if (path.startsWith('/en')) return 'en';

        // Then check localStorage
        const stored = localStorage.getItem('language') as Language;
        if (stored && (stored === 'en' || stored === 'ar')) return stored;

        // Default to English
        return 'en';
    };

    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);

        // Update URL without full page reload
        const currentPath = window.location.pathname;
        const basePath = currentPath.replace(/^\/(en|ar)/, '') || '/';
        const newPath = lang === 'en' ? basePath : `/${lang}${basePath === '/' ? '' : basePath}`;
        window.history.pushState({}, '', newPath);
    };

    // Update document direction and lang attribute
    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = isRTL(language) ? 'rtl' : 'ltr';
    }, [language]);

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language],
        isRTL: isRTL(language),
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
