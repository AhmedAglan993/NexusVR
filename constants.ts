import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'branded-campaign-game',
    title: 'Ramadan Brand Activation Game',
    category: 'Game Dev',
    company: 'Fashion Brand Campaign',
    description: 'Web-based mobile game for a major fashion brand\'s Ramadan campaign. Achieved 150K+ plays and 45% engagement rate. Players could unlock exclusive discount codes through gameplay, driving direct conversions.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop', // Gaming aesthetic
    videoUrl: '',
    techStack: ['Unity WebGL', 'React', 'Analytics Integration', 'Mobile Optimization'],
    link: '#'
  },
  {
    id: 'serious-training-game',
    title: 'Corporate Safety Training Simulator',
    category: 'Game Dev',
    company: 'Industrial Training Client',
    description: 'Gamified safety training experience for a manufacturing company. Reduced training time by 60% and increased knowledge retention. Delivered as a modular system allowing for easy content updates.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop', // Industrial
    videoUrl: '',
    techStack: ['Unity', 'VR Support', 'Learning Analytics', 'SCORM Compliance'],
    link: '#'
  },
  {
    id: 'localization-project',
    title: 'MENA Localization: Adventure RPG',
    category: 'Game Dev',
    company: 'Western Game Publisher',
    description: 'Complete culturalization and localization of a Western RPG for MENA markets. Adapted storylines, characters, and gameplay mechanics to align with regional cultural values while maintaining gameplay integrity.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop', // Adventure/RPG vibe
    videoUrl: '',
    techStack: ['Unity', 'Arabic Localization', 'Cultural Consulting', 'QA Testing'],
    link: '#'
  },
  {
    id: 'agency-partnership',
    title: 'E-commerce Loyalty Game Platform',
    category: 'Game Dev',
    company: 'Marketing Agency Partnership',
    description: 'White-label game platform developed for a marketing agency. Allows their clients to deploy branded mini-games for customer engagement. Handled full development while agency managed client relations.',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop', // E-commerce/Shopping
    videoUrl: '',
    techStack: ['React', 'Node.js', 'Multi-tenant Architecture', 'API Integration'],
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'XR Development', level: 100, icon: 'fa-brands fa-unity', color: 'text-white' },
  { name: 'Game Engineering', level: 95, icon: 'fa-solid fa-code', color: 'text-brand-primary' },
  { name: 'Vision Architecture', level: 100, icon: 'fa-solid fa-compass-drafting', color: 'text-brand-secondary' }, // Renamed from Project Leadership
  { name: '3D Optimization', level: 90, icon: 'fa-solid fa-cube', color: 'text-blue-400' },
  { name: 'Immersive UX', level: 90, icon: 'fa-solid fa-vr-cardboard', color: 'text-green-400' },
  { name: 'Full-Cycle Production', level: 100, icon: 'fa-solid fa-infinity', color: 'text-yellow-400' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'OUR CLIENTS', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];