import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Folder, Terminal, Play, Cpu, ArrowRight, Code } from 'lucide-react';
import { ProjectItem } from '../../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-cyber-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyber-green text-2xl">04.</span>
          <h2 className="text-3xl font-bold text-cyber-heading">Installed Applications</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group bg-cyber-gray/5 border border-cyber-gray p-6 rounded-xl transition-all duration-300 hover:border-cyber-green/60 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] cursor-pointer relative overflow-hidden flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              {/* Hover Glitch Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-cyber-black border border-cyber-gray rounded-lg group-hover:border-cyber-green transition-colors shadow-sm">
                  <Folder size={24} className="text-cyber-blue group-hover:text-cyber-green transition-colors" />
                </div>
                <div className="flex gap-2 items-center bg-cyber-black/50 px-2 py-1 rounded border border-cyber-gray/30">
                   <Code size={12} className="text-cyber-muted" />
                   <span className="text-[10px] font-mono text-cyber-muted">SRC</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-cyber-heading mb-2 group-hover:text-cyber-green transition-colors relative z-10 tracking-tight">
                {project.title}
              </h3>
              
              <p className="text-cyber-muted text-sm mb-6 line-clamp-2 relative z-10 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-cyber-blue/5 text-cyber-blue rounded border border-cyber-blue/20 group-hover:border-cyber-blue/40 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-cyber-gray/30 flex items-center justify-between relative z-10 mt-auto">
                 <span className="text-xs font-mono text-cyber-muted flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                   v1.0.0-stable
                 </span>
                 <button className="text-xs font-mono text-cyber-green flex items-center gap-1 hover:underline decoration-cyber-green/50 underline-offset-4">
                   LAUNCH_APP <Play size={10} />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-cyber-black border border-cyber-green w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-[0_0_50px_rgba(0,255,65,0.15)] flex flex-col scrollbar-thin" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="bg-cyber-black/95 p-4 flex justify-between items-center border-b border-cyber-green/30 sticky top-0 z-20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                 <div className="p-1.5 bg-cyber-green/10 rounded border border-cyber-green/30">
                    <Terminal size={16} className="text-cyber-green" />
                 </div>
                 <h3 className="text-cyber-green font-mono text-sm hidden sm:block">root@arpit-os:~/projects/{selectedProject.id}</h3>
                 <h3 className="text-cyber-green font-mono text-sm sm:hidden">{selectedProject.id}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-cyber-muted hover:text-cyber-heading font-mono text-sm px-3 py-1 hover:bg-cyber-gray/20 rounded transition-colors">
                [X] CLOSE
              </button>
            </div>
            
            <div className="p-6 md:p-10 space-y-8">
              {/* Header Section */}
              <div className="border-b border-cyber-gray/20 pb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-cyber-heading mb-3">{selectedProject.title}</h2>
                <p className="text-cyber-blue font-light text-lg leading-relaxed max-w-2xl">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architecture Schematic */}
              <div className="border border-cyber-gray rounded-lg p-6 bg-cyber-black relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-gray/10 to-transparent opacity-50"></div>
                 <div className="absolute top-3 right-3 text-[10px] font-mono text-cyber-muted bg-cyber-gray/20 px-2 py-1 rounded">FIG 1.0: SYSTEM_SCHEMATIC</div>
                 
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6 relative z-10">
                    <div className="w-32 h-20 border border-cyber-blue/50 flex items-center justify-center text-xs text-cyber-blue rounded-lg bg-cyber-blue/5 backdrop-blur-sm shadow-lg">
                      <div className="text-center">
                        <span className="block font-bold mb-1">INPUT</span>
                        LOG SOURCE
                      </div>
                    </div>
                    
                    <ArrowRight className="text-cyber-muted rotate-90 md:rotate-0 animate-pulse" size={24} />
                    
                    <div className="w-32 h-20 border-2 border-cyber-green flex items-center justify-center text-xs text-cyber-green font-bold rounded-lg bg-cyber-green/10 shadow-[0_0_20px_rgba(0,255,65,0.15)] backdrop-blur-sm">
                       <div className="text-center">
                        <span className="block mb-1 text-[10px] opacity-70">PROCESSING</span>
                        CORE ENGINE
                      </div>
                    </div>
                    
                    <ArrowRight className="text-cyber-muted rotate-90 md:rotate-0 animate-pulse" size={24} />
                    
                    <div className="w-32 h-20 border border-cyber-blue/50 flex items-center justify-center text-xs text-cyber-blue rounded-lg bg-cyber-blue/5 backdrop-blur-sm shadow-lg">
                       <div className="text-center">
                        <span className="block font-bold mb-1">OUTPUT</span>
                        DASHBOARD
                      </div>
                    </div>
                 </div>
              </div>

              {/* Detailed Content */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-mono text-cyber-green mb-3 flex items-center gap-2 uppercase tracking-wider">
                      <Cpu size={14} /> Problem_Definition
                    </h4>
                    <p className="text-sm text-cyber-text leading-7 border-l-2 border-cyber-gray pl-4 text-justify">
                      {selectedProject.longDescription.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-cyber-green mb-3 flex items-center gap-2 uppercase tracking-wider">
                      <Cpu size={14} /> Execution_Strategy
                    </h4>
                    <p className="text-sm text-cyber-text leading-7 border-l-2 border-cyber-gray pl-4 text-justify">
                      {selectedProject.longDescription.approach}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-mono text-cyber-green mb-3 flex items-center gap-2 uppercase tracking-wider">
                      <Cpu size={14} /> System_Impact
                    </h4>
                    <p className="text-sm text-cyber-text leading-7 border-l-2 border-cyber-gray pl-4 text-justify">
                      {selectedProject.longDescription.impact}
                    </p>
                  </div>
                  {selectedProject.longDescription.futureImprovements && (
                    <div>
                      <h4 className="text-xs font-mono text-cyber-blue mb-3 flex items-center gap-2 uppercase tracking-wider">
                        <Cpu size={14} /> Future_Optimization
                      </h4>
                      <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded-lg">
                        <p className="text-sm text-cyber-muted leading-relaxed italic">
                          "{selectedProject.longDescription.futureImprovements}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-8 border-t border-cyber-gray/30 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {selectedProject.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-mono px-3 py-1 bg-cyber-gray/30 text-cyber-muted rounded-full border border-cyber-gray/50">
                        {tag}
                     </span>
                  ))}
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 md:flex-none px-6 py-3 border border-cyber-green/30 text-cyber-green font-mono text-xs hover:bg-cyber-green/10 transition-colors rounded"
                  >
                    RUN_DIAGNOSTICS
                  </button>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 md:flex-none px-6 py-3 bg-cyber-green text-cyber-black font-bold font-mono text-xs hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,255,65,0.3)] rounded"
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