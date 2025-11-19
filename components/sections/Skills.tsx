import React, { useState } from 'react';
import { SKILLS } from '../../constants';
import { SkillModule } from '../../types';

const Skills = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL_MODULES' },
    { id: 'core', label: 'CORE' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'infra', label: 'INFRASTRUCTURE' },
    { id: 'cert', label: 'CERTIFICATIONS' },
    { id: 'foundation', label: 'FUNDAMENTALS' },
  ];

  const filteredSkills = filter === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-20 bg-cyber-gray/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-cyber-green text-2xl">02.</span>
          <h2 className="text-3xl font-bold text-white">Loaded Modules</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs font-mono transition-all duration-200 border ${
                filter === cat.id 
                  ? 'bg-cyber-green text-cyber-black border-cyber-green' 
                  : 'bg-transparent text-cyber-muted border-cyber-gray hover:border-cyber-green hover:text-cyber-green'
              }`}
            >
              [{cat.label}]
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div 
              key={idx}
              className="group relative bg-cyber-black border border-cyber-gray p-4 hover:border-cyber-blue transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-white font-medium mb-1 group-hover:text-cyber-blue transition-colors">
                {skill.name}
              </h3>
              
              <p className="text-xs text-cyber-muted font-mono uppercase">
                {skill.category}
              </p>

              {skill.description && (
                <div className="absolute inset-0 bg-cyber-blue/90 p-4 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-cyber-black text-xs font-bold">
                    {skill.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;