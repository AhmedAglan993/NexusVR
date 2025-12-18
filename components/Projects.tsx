import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectModal: React.FC<{ project: Project; projectIndex: number; onClose: () => void }> = ({ project, projectIndex, onClose }) => {
  const { t, isRTL } = useLanguage();
  const translatedProject = t.projects.items[projectIndex];

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl bg-brand-dark border border-brand-primary/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.1)] flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`flex justify-between items-center p-4 border-b border-white/10 bg-white/5 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className={isRTL ? 'text-right' : ''}>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">{translatedProject?.title || project.title}</h3>
            {translatedProject?.company && (
              <span className="text-brand-secondary text-xs font-mono uppercase tracking-wider">{translatedProject.company}</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-red-500/50 transition-all"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black w-full">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          ) : (
            <img src={project.imageUrl} alt={translatedProject?.title || project.title} className="w-full h-full object-cover opacity-50" />
          )}
        </div>

        {/* Content */}
        <div className={`p-6 md:p-8 overflow-y-auto ${isRTL ? 'text-right' : ''}`}>
          <div className={`flex flex-wrap gap-2 mb-6 ${isRTL ? 'justify-end' : ''}`}>
            <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary border border-brand-primary/30 rounded text-xs font-mono uppercase">
              {project.category}
            </span>
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 rounded text-xs font-mono uppercase">
                {tech}
              </span>
            ))}
          </div>

          <h4 className="text-lg font-bold text-white mb-2 font-mono">{t.projects.projectOverview}</h4>
          <p className="text-gray-300 leading-relaxed mb-6 font-light">
            {translatedProject?.description || project.description}
          </p>

          <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
            <button className="px-6 py-2 bg-brand-primary text-black font-bold rounded hover:bg-white transition-colors uppercase tracking-wider text-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.projects.contactForDetails}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; projectIndex: number; onSelect: (p: Project, index: number) => void }> = ({ project, projectIndex, onSelect }) => {
  const { t, isRTL } = useLanguage();
  const translatedProject = t.projects.items[projectIndex];
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleMouseEnter = () => {
    if (project.videoUrl && videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
  };

  const handleMouseLeave = () => {
    if (project.videoUrl && videoRef.current) {
      setIsPlaying(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="glass-card flex flex-col h-full group relative overflow-hidden rounded-xl cursor-pointer hover:-translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project, projectIndex)}
    >
      {/* Media container */}
      <div className="aspect-video w-full overflow-hidden relative bg-black border-b border-white/5">
        <img
          src={project.imageUrl}
          alt={translatedProject?.title || project.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        />

        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none"></div>
        <div className={`absolute top-4 z-10 ${isRTL ? 'left-4' : 'right-4'}`}>
          <span className="px-3 py-1 bg-black/70 backdrop-blur text-xs font-mono border border-gray-600 rounded text-brand-primary uppercase shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col flex-1 ${isRTL ? 'text-right' : ''}`}>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors leading-tight">
          {translatedProject?.title || project.title}
        </h3>

        {translatedProject?.company && (
          <div className={`flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <i className="fa-solid fa-building text-brand-secondary text-xs"></i>
            <span className="text-brand-secondary text-xs font-mono tracking-wide uppercase">{translatedProject.company}</span>
          </div>
        )}

        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1 font-light">
          {translatedProject?.description || project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className={`flex flex-wrap gap-2 mb-6 ${isRTL ? 'justify-end' : ''}`}>
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/5 group-hover:border-brand-primary/30 transition-colors">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/5">+{project.techStack.length - 3}</span>
          )}
        </div>

        <button className={`inline-flex items-center text-sm font-mono text-brand-primary hover:text-white transition-colors mt-auto uppercase tracking-wider ${isRTL ? 'flex-row-reverse' : ''}`}>
          {t.projects.viewCaseStudy} <i className={`fa-solid fa-arrow-${isRTL ? 'left' : 'right'} ${isRTL ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform`}></i>
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<{ project: Project; index: number } | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row justify-between items-end mb-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className={isRTL ? 'text-right' : ''}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{t.projects.title}</h2>
            <div className={`h-1 w-20 bg-brand-primary rounded shadow-[0_0_10px_theme('colors.brand-primary')] ${isRTL ? 'mr-0 ml-auto' : ''}`}></div>
            <p className="text-gray-400 mt-4 max-w-xl text-lg font-light">
              {t.projects.subtitle}
            </p>
          </div>
          <p className="text-gray-500 font-mono mt-4 md:mt-0 opacity-50">
            {t.projects.comment}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              projectIndex={index}
              onSelect={(p, i) => setSelectedProject({ project: p, index: i })}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject.project}
          projectIndex={selectedProject.index}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;