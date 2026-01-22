
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Installations</h2>
            <p className="text-slate-400 text-lg">
              Explore our diverse range of successful projects across residential, commercial, and industrial sectors.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold transition-all">
              View All Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-400/10 px-3 py-1 rounded-full mb-3 inline-block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center text-slate-400 group-hover:text-emerald-400 transition-colors">
                  <span className="text-sm font-medium mr-2">View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
