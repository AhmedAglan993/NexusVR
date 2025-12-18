import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#projects' },
    { name: t.nav.clients, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-panel py-4 shadow-lg shadow-brand-primary/5' : 'bg-transparent py-6'}`}>
      <div className={`container mx-auto px-6 flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
        <a href="#" className={`flex flex-col items-center group ${isRTL ? 'mr-4' : 'ml-4'}`}>
          <img src="/logo.png" alt="Seqed Games" className="h-20 w-auto" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-[#B8956A] group-hover:from-brand-primary group-hover:to-brand-primary transition-all">
            SEQED GAMES
          </span>
        </a>

        <div className={`hidden md:flex gap-8 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-mono text-gray-400 hover:text-brand-primary transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-black transition-all duration-300 rounded text-sm font-bold tracking-wide"
          >
            {t.languageSwitcher.switchTo}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-brand-primary/30 text-brand-primary text-xs font-bold rounded"
          >
            {t.languageSwitcher.switchTo}
          </button>
          <div className="text-white text-xl cursor-pointer hover:text-brand-primary transition-colors">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;