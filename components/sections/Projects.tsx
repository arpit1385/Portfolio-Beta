import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Folder, Terminal, Play, Cpu, ArrowRight } from 'lucide-react';
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
              className="group bg-cyber-gray/10 border border-cyber-gray hover:border-cyber-green/60 p-6 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Hover Glitch Effect Overlay */}
              <div className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="p-3 bg-cyber-black border border-cyber-gray rounded group-hover:border-cyber-green transition-colors">
                  <Folder size={24} className="text-cyber-blue group-hover:text-cyber-green transition-colors" />
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyber-gray group-hover:bg-red-500/80 transition-colors"></div>
                  <div className="w-2 h-2 rounded-full bg-cyber-gray group-hover:bg-yellow-500/80 transition-colors"></div>
                  <div className="w-2 h-2 rounded-full bg-cyber-gray group-hover:bg-green-500/80 transition-colors"></div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-green transition-colors relative z-10">
                {project.title}
              </h3>
              
              <p className="text-cyber-muted text-sm mb-4 line-clamp-2 relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-cyber-gray/40 text-cyber-text rounded border border-transparent group-hover:border-cyber-gray/50">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-cyber-gray/30 flex items-center justify-between relative z-10">
                 <span className="text-xs font-mono text-cyber-muted">v1.0.0-stable</span>
                 <button className="text-xs font-mono text-cyber-green flex items-center gap-1 hover:underline">
                   LAUNCH_APP <Play size={10} />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-cyber-black border border-cyber-green w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-[0_0_50px_rgba(0,255,65,0.15)] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-cyber-gray/20 p-4 flex justify-between items-center border-b border-cyber-green/30 sticky top-0 backdrop-blur bg-opacity-90 z-10">
              <div className="flex items-center gap-3">
                 <Terminal size={18} className="text-cyber-green" />
                 <h3 className="text-cyber-green font-mono text-sm">root@arpit-os:~/projects/{selectedProject.id}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-cyber-muted hover:text-white font-mono text-sm">
                [X] CLOSE
              </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-8">
              {/* Header Section */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-cyber-blue font-light text-lg">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architecture Schematic (Visual Only) */}
              <div className="border border-cyber-gray rounded p-4 bg-cyber-black relative overflow-hidden group">
                 <div className="absolute top-2 right-2 text-xs font-mono text-cyber-muted">FIG 1.0: SYSTEM_SCHEMATIC</div>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="w-24 h-16 border border-cyber-blue/50 flex items-center justify-center text-xs text-cyber-blue rounded bg-cyber-blue/5">
                      <span className="text-center">LOG SOURCE<br/>(Linux/Syslog)</span>
                    </div>
                    <ArrowRight className="text-cyber-muted rotate-90 md:rotate-0" size={20} />
                    <div className="w-24 h-16 border-2 border-cyber-green flex items-center justify-center text-xs text-cyber-green font-bold rounded bg-cyber-green/10 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                       <span className="text-center">CORE ENGINE<br/>(Python/Splunk)</span>
                    </div>
                    <ArrowRight className="text-cyber-muted rotate-90 md:rotate-0" size={20} />
                    <div className="w-24 h-16 border border-cyber-blue/50 flex items-center justify-center text-xs text-cyber-blue rounded bg-cyber-blue/5">
                       <span className="text-center">DASHBOARD<br/>(Alerts)</span>
                    </div>
                 </div>
              </div>

              {/* Detailed Content */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-mono text-cyber-green mb-2 flex items-center gap-2">
                      <Cpu size={14} /> PROBLEM_DEFINITION
                    </h4>
                    <p className="text-sm text-cyber-text leading-relaxed border-l-2 border-cyber-gray pl-3">
                      {selectedProject.longDescription.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-cyber-green mb-2 flex items-center gap-2">
                      <Cpu size={14} /> EXECUTION_STRATEGY
                    </h4>
                    <p className="text-sm text-cyber-text leading-relaxed border-l-2 border-cyber-gray pl-3">
                      {selectedProject.longDescription.approach}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-mono text-cyber-green mb-2 flex items-center gap-2">
                      <Cpu size={14} /> SYSTEM_IMPACT
                    </h4>
                    <p className="text-sm text-cyber-text leading-relaxed border-l-2 border-cyber-gray pl-3">
                      {selectedProject.longDescription.impact}
                    </p>
                  </div>
                  {selectedProject.longDescription.futureImprovements && (
                    <div>
                      <h4 className="text-sm font-mono text-cyber-blue mb-2 flex items-center gap-2">
                        <Cpu size={14} /> FUTURE_OPTIMIZATION
                      </h4>
                      <p className="text-sm text-cyber-muted leading-relaxed border-l-2 border-cyber-blue/30 pl-3 italic">
                        {selectedProject.longDescription.futureImprovements}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-6 border-t border-cyber-gray/30 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-2">
                  {selectedProject.tags.slice(0,3).map(tag => (
                     <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-cyber-gray/30 text-cyber-muted rounded">
                        {tag}
                     </span>
                  ))}
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 md:flex-none px-6 py-2 border border-cyber-green/30 text-cyber-green font-mono text-xs hover:bg-cyber-green/10 transition-colors"
                  >
                    RUN_DIAGNOSTICS
                  </button>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 md:flex-none px-6 py-2 bg-cyber-green text-cyber-black font-bold font-mono text-xs hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,255,65,0.3)]"
                  >
                    LAUNCH_V2.0
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;