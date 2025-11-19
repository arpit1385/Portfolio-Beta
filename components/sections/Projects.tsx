import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Folder, ExternalLink, Terminal } from 'lucide-react';
import { ProjectItem } from '../../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-cyber-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyber-green text-2xl">04.</span>
          <h2 className="text-3xl font-bold text-white">Installed Applications</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group bg-cyber-gray/10 border border-cyber-gray hover:border-cyber-green/60 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-between items-start mb-4">
                <Folder size={40} className="text-cyber-blue group-hover:text-cyber-green transition-colors" />
                <div className="flex gap-2">
                  {/* Fake window controls */}
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-green transition-colors">
                {project.title}
              </h3>
              
              <p className="text-cyber-muted text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-cyber-gray/40 text-cyber-text rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="mt-6 w-full py-2 border border-dashed border-cyber-muted/30 text-xs font-mono text-cyber-muted hover:text-cyber-green hover:border-cyber-green transition-all flex items-center justify-center gap-2">
                <Terminal size={12} /> EXECUTE_APP()
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-cyber-black border border-cyber-green w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-[0_0_50px_rgba(0,255,65,0.1)]">
            <div className="bg-cyber-gray/30 p-4 flex justify-between items-center border-b border-cyber-gray">
              <h3 className="text-cyber-green font-mono">./{selectedProject.id}.exe</h3>
              <button onClick={() => setSelectedProject(null)} className="text-cyber-muted hover:text-white">
                [CLOSE]
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <p className="text-cyber-muted border-l-2 border-cyber-blue pl-4 italic">
                {selectedProject.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-mono text-cyber-blue mb-1">PROBLEM_STATEMENT</h4>
                  <p className="text-sm text-cyber-text">{selectedProject.longDescription.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-cyber-blue mb-1">EXECUTION_STRATEGY</h4>
                  <p className="text-sm text-cyber-text">{selectedProject.longDescription.approach}</p>
                </div>
                <div>
                  <h4 className="text-sm font-mono text-cyber-blue mb-1">SYSTEM_IMPACT</h4>
                  <p className="text-sm text-cyber-text">{selectedProject.longDescription.impact}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-cyber-gray/30 flex justify-end">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-cyber-green text-cyber-black font-bold text-sm hover:bg-white transition-colors"
                >
                  TERMINATE_PROCESS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;