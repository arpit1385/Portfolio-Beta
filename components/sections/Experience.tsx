import React, { useState } from 'react';
import { EXPERIENCE } from '../../constants';
import { ChevronDown, ChevronUp, Activity } from 'lucide-react';

const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>('npcil');

  return (
    <section id="experience" className="py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyber-green text-2xl">03.</span>
          <h2 className="text-3xl font-bold text-cyber-heading">Active Services</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        <div className="space-y-6 relative border-l border-cyber-gray/30 ml-3 md:ml-6">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="pl-8 md:pl-12 relative">
              {/* Timeline Dot */}
              <div className={`absolute left-[-5px] md:left-[-5px] top-6 w-3 h-3 rounded-full border-2 ${expandedId === exp.id ? 'bg-cyber-green border-cyber-green shadow-[0_0_10px_#00ff41]' : 'bg-cyber-black border-cyber-muted'}`}></div>

              <div 
                className={`bg-cyber-gray/10 border ${expandedId === exp.id ? 'border-cyber-green/40' : 'border-cyber-gray/40'} rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-cyber-gray/20`}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl text-cyber-heading font-bold flex items-center gap-2">
                      {exp.title}
                      {exp.status === 'active' && <span className="text-[10px] text-cyber-black bg-cyber-green px-2 py-0.5 rounded-full font-mono">RUNNING</span>}
                      {exp.status === 'inactive' && <span className="text-[10px] text-cyber-text bg-cyber-gray px-2 py-0.5 rounded-full font-mono">STOPPED</span>}
                    </h3>
                    <p className="text-cyber-blue">{exp.organization}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono text-cyber-muted">{exp.period}</p>
                    <p className="text-xs text-cyber-muted">{exp.location}</p>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${expandedId === exp.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                   <ul className="space-y-2">
                     {exp.description.map((point, i) => (
                       <li key={i} className="flex items-start gap-3 text-sm text-cyber-muted">
                         <span className="text-cyber-green mt-1">➜</span>
                         <span>{point}</span>
                       </li>
                     ))}
                   </ul>
                   <div className="mt-4 pt-4 border-t border-cyber-gray/30 flex items-center gap-2 text-xs font-mono text-cyber-muted">
                      <Activity size={14} />
                      <span>Log output captured from service execution.</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;