import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-lipsync',
    title: 'Project: Neural-Voice',
    category: 'AI / R&D',
    description: 'Real-time AI lipsync integration for dynamic NPC interactions. This tech demo showcases zero-latency viseme mapping from text-to-speech audio sources to 3D morph targets.',
    imageUrl: '/thumbnails/ai_lipsync_placeholder.jpg',
    videoUrl: '', // To be filled with the Tech Demo we build
    techStack: ['React Three Fiber', 'Azure TTS', 'Viseme Mapping', 'Ready Player Me'],
    link: '#'
  },
  {
    id: 'tech-demo-1',
    title: 'Interactive ArchViz Configurator',
    category: 'VR',
    description: 'A generic architectural visualization tool allowing users to swap materials and lighting in real-time. Demonstrates our capability to build sales tools for real estate developers.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop', // Luxury Living Room
    videoUrl: '', // Placeholder for future generic demo
    techStack: ['Unreal Engine 5', 'Pixel Streaming', 'Lumen', 'Blueprint'],
    link: '#'
  },
  {
    id: 'tech-demo-2',
    title: 'Web-Based Advergame Engine',
    category: 'Game Dev',
    description: 'A high-performance HTML5 endless runner framework optimized for mobile browsers. Designed for high-conversion marketing campaigns.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop', // Retro Gaming / Synthwave
    videoUrl: '', // Placeholder for future generic demo
    techStack: ['Three.js', 'React', 'WebGL', 'Cannon.js'],
    link: '#'
  },
  {
    id: 'tech-demo-3',
    title: 'Industrial Training Sim (POC)',
    category: 'AR',
    description: 'Proof of Concept for safety training using Augmented Reality. Shows object recognition and step-by-step holographic overlays.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop', // Industrial AR / Factory
    videoUrl: '', // Placeholder for future generic demo
    techStack: ['Unity', 'AR Foundation', 'Mobile AR', 'UX Design'],
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Team Leadership', level: 100, icon: 'fa-solid fa-users-gear', color: 'text-neon-blue' },
  { name: 'Project Management', level: 95, icon: 'fa-solid fa-list-check', color: 'text-neon-purple' },
  { name: 'Unity (C#)', level: 90, icon: 'fa-brands fa-unity', color: 'text-white' },
  { name: 'Unreal (Blueprints)', level: 90, icon: 'fa-gamepad', color: 'text-blue-400' },
  { name: 'C# Programming', level: 90, icon: 'fa-code', color: 'text-green-400' },
  { name: 'Full Cycle Dev', level: 100, icon: 'fa-solid fa-infinity', color: 'text-yellow-400' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Studio Labs', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];