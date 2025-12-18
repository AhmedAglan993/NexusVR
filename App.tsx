import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIChatBot from './components/AIChatBot';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './components/pages/HomePage';
import ServicePage from './components/pages/ServicePage';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/pages/BlogPostPage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen relative ${isRTL ? 'font-arabic' : ''}`}>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm font-mono">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </footer>

      {/* Floating Buttons */}
      <WhatsAppButton />
      <AIChatBot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;