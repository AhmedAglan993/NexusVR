import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-brand-dark border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Competencies</h2>
          <div className="h-1 w-20 bg-brand-secondary rounded mx-auto mb-6 shadow-[0_0_15px_theme('colors.brand-secondary')]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Our mastery of the digital pipeline ensures precision in every polygon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="glass-card p-8 rounded-xl group hover:bg-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-md`}>
                  <i className={skill.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-white font-mono">{skill.name}</h3>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary relative"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-[5px] bg-white shadow-[0_0_10px_white]"></div>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-xs font-mono text-gray-500 uppercase tracking-wider">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Badge Grid for smaller tools */}
        <div className="mt-20 pt-12 border-t border-white/5">
          <h4 className="text-center text-sm font-mono text-gray-500 mb-8 uppercase tracking-[0.2em]">Other Tools & Software</h4>
          <div className="flex flex-wrap justify-center gap-12 text-gray-600 text-4xl">
            <i className="fa-brands fa-git-alt hover:text-[#F05032] hover:scale-110 transition-all duration-300 cursor-pointer" title="Git"></i>
            <i className="fa-brands fa-jira hover:text-[#0052CC] hover:scale-110 transition-all duration-300 cursor-pointer" title="Jira"></i>
            <i className="fa-brands fa-figma hover:text-[#F24E1E] hover:scale-110 transition-all duration-300 cursor-pointer" title="Figma"></i>
            <i className="fa-brands fa-python hover:text-[#3776AB] hover:scale-110 transition-all duration-300 cursor-pointer" title="Python"></i>
            <i className="fa-brands fa-docker hover:text-[#2496ED] hover:scale-110 transition-all duration-300 cursor-pointer" title="Docker"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;