import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AIChatBot from './components/AIChatBot';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen relative ${isRTL ? 'font-arabic' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm font-mono">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* The Digital Twin Assistant */}
      <AIChatBot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;