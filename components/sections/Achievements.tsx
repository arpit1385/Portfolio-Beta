import React from 'react';
import { ACHIEVEMENTS } from '../../constants';

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-cyber-gray/5 border-y border-cyber-gray/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="text-center p-4 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyber-gray/20 rounded-full flex items-center justify-center border border-cyber-gray group-hover:border-cyber-green group-hover:bg-cyber-green/10 transition-all duration-500">
                <ach.icon className="text-cyber-muted group-hover:text-cyber-green" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 font-mono">{ach.value}</h3>
              <p className="text-cyber-blue text-sm font-bold uppercase tracking-wider mb-2">{ach.title}</p>
              <p className="text-xs text-cyber-muted">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;