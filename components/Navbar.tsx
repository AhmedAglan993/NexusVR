import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  // Handle navigation - if on homepage, scroll to section; if not, navigate to home then section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMobileMenu();

    if (isHomePage) {
      // Just scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      navigate('/' + href);
    }
  };

  // Scroll to section if navigated with hash
  useEffect(() => {
    if (location.hash && isHomePage) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash, isHomePage]);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#projects' },
    { name: t.nav.clients, href: '#testimonials' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-panel py-4 shadow-lg shadow-brand-primary/5' : 'bg-transparent py-6'}`}>
        <div className={`container mx-auto px-6 flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          <Link to="/" className={`flex flex-col items-center group ${isRTL ? 'mr-4' : 'ml-4'}`}>
            <img src="/logo.png" alt="Seqed Games" className="h-12 md:h-20 w-auto" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-[#B8956A] group-hover:from-brand-primary group-hover:to-brand-primary transition-all">
              SEQED GAMES
            </span>
          </Link>

          <div className={`hidden md:flex gap-8 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-mono text-gray-400 hover:text-brand-primary transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-primary after:transition-all hover:after:w-full cursor-pointer"
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
            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-white text-xl cursor-pointer hover:text-brand-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMobileMenu}
      >
        <div
          className={`absolute top-24 left-0 right-0 px-6 transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`glass-panel rounded-xl p-6 border border-brand-primary/20 ${isRTL ? 'text-right' : ''}`}>
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-mono text-white hover:text-brand-primary transition-colors uppercase tracking-widest py-2 border-b border-white/10 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;