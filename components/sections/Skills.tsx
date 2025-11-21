
import React, { useState } from 'react';
import { SKILLS } from '../../constants';

const Skills = () => {
  const [filter, setFilter] = useState<string>('top');

  const categories = [
    { id: 'top', label: 'TOP_SKILLS' },
    { id: 'all', label: 'ALL_MODULES' },
    { id: 'foundation', label: 'FUNDAMENTALS' },
    { id: 'core', label: 'CORE' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'infra', label: 'INFRASTRUCTURE' },
    { id: 'cert', label: 'CERTIFICATIONS' },
  ];

  const filteredSkills = filter === 'all' 
    ? SKILLS 
    : filter === 'top'
      ? SKILLS.filter(s => s.isTop)
      : SKILLS.filter(s => s.category === filter);

  const getCategoryStyles = (category: string) => {
    switch(category) {
      case 'core': return 'border-orange-500/30 text-orange-500 hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] bg-orange-500/5';
      case 'tools': return 'border-violet-500/30 text-violet-400 hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] bg-violet-500/5';
      case 'infra': return 'border-rose-500/30 text-rose-400 hover:border-rose-500 hover:shadow-[0_0_15px_rgba(244,63,94,0.15)] bg-rose-500/5';
      case 'cert': return 'border-amber-500/30 text-amber-400 hover:border-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] bg-amber-500/5';
      case 'foundation': return 'border-cyan-500/30 text-cyan-400 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-cyan-500/5';
      default: return 'border-cyber-gray text-cyber-text hover:border-cyber-green bg-cyber-black';
    }
  };

  const getIndicatorColor = (category: string) => {
    switch(category) {
      case 'core': return 'bg-orange-500';
      case 'tools': return 'bg-violet-500';
      case 'infra': return 'bg-rose-500';
      case 'cert': return 'bg-amber-500';
      case 'foundation': return 'bg-cyan-500';
      default: return 'bg-cyber-green';
    }
  };

  return (
    <section id="skills" className="py-20 bg-cyber-gray/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-cyber-green text-2xl">02.</span>
          <h2 className="text-3xl font-bold text-cyber-heading">Loaded Modules</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs font-mono transition-all duration-200 border rounded-full ${
                filter === cat.id 
                  ? 'bg-cyber-green text-cyber-black border-cyber-green font-bold shadow-[0_0_10px_rgba(0,255,65,0.3)]' 
                  : 'bg-transparent text-cyber-muted border-cyber-gray hover:border-cyber-green hover:text-cyber-green'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div 
              key={idx}
              className={`group relative border p-6 flex flex-col items-center text-center transition-all duration-300 overflow-hidden rounded-2xl animate-fade-in-up ${getCategoryStyles(skill.category)}`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className={`absolute top-3 right-3 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className={`w-2 h-2 rounded-full animate-pulse ${getIndicatorColor(skill.category)}`}></div>
              </div>

              <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                {skill.icon && <skill.icon size={32} />}
                {skill.iconClass && <i className={`${skill.iconClass} text-3xl`}></i>}
              </div>
              
              <h3 className="font-bold mb-1 text-sm group-hover:text-white transition-colors">
                {skill.name}
              </h3>
              
              <p className="text-[10px] font-mono uppercase opacity-70 tracking-widest">
                {skill.category === 'foundation' ? 'CORE_CONCEPT' : skill.category}
              </p>

              {skill.description && (
                <div className="absolute inset-0 bg-cyber-black/95 backdrop-blur-sm p-4 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-2xl cursor-default">
                  <p className={`text-xs font-mono leading-relaxed ${getCategoryStyles(skill.category).split(' ')[1]}`}>
                    &gt; {skill.description}
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
