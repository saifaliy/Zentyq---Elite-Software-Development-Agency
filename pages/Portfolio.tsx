
import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Portfolio</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A track record of success across multiple industries and technologies.
          </p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="glass-effect p-2 rounded-3xl border border-slate-800">
                  <img src={project.image} alt={project.name} className="rounded-2xl w-full" />
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] uppercase font-bold tracking-widest rounded-full">{t}</span>
                  ))}
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">{project.name}</h2>
                <p className="text-slate-400 mb-8 text-lg">{project.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      The Problem
                    </h4>
                    <p className="text-slate-400 text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                      The Solution
                    </h4>
                    <p className="text-slate-400 text-sm">{project.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
