import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass-panel py-4 shadow-lg shadow-brand-primary/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col items-center group ml-4">
          <img src="/logo.png" alt="Seqed Games" className="h-20 w-auto" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-[#B8956A] group-hover:from-brand-primary group-hover:to-brand-primary transition-all">
            SEQED GAMES
          </span>
        </a>

        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-gray-400 hover:text-brand-primary transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-primary after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden text-white text-xl cursor-pointer hover:text-brand-primary transition-colors">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;