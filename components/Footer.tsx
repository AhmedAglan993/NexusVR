import React from 'react';
import { Box, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Box className="w-6 h-6 text-cyan-400" />
          <span className="font-bold text-xl text-white">NEXUS<span className="text-cyan-400">VR</span></span>
        </div>
        
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} NexusVR Agency. All rights reserved.
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
