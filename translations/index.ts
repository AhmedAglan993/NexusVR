// Translation utilities and exports
import { en, type Translations } from './en';
import { ar } from './ar';

export type Language = 'en' | 'ar';

export const translations: Record<Language, Translations> = {
    en,
    ar,
};

export const getTranslation = (lang: Language): Translations => {
    return translations[lang] || translations.en;
};

export const isRTL = (lang: Language): boolean => {
    return lang === 'ar';
};

export { en, ar };
export type { Translations };
