
import React from 'react';
import { LANGUAGES } from '../../constants';
import { Globe } from 'lucide-react';

const Languages = () => {
  return (
    <section id="languages" className="py-20 transition-colors duration-300 border-t border-cyber-gray/30">
      <div className="max-w-4xl mx-auto px-4">
         {/* Header */}
         <div className="flex items-center gap-4 mb-12">
          <span className="text-cyber-green text-2xl">06.</span>
          <h2 className="text-3xl font-bold text-cyber-heading">Language Packs</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {LANGUAGES.map((lang, idx) => (
             <div key={idx} className="bg-cyber-gray/10 border border-cyber-gray p-6 rounded hover:border-cyber-green transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                <div className="flex justify-between items-end mb-3 relative z-10">
                   <div className="flex items-center gap-3">
                      <Globe size={18} className="text-cyber-green opacity-70" />
                      <h3 className="text-xl font-bold text-cyber-heading group-hover:text-cyber-green transition-colors">{lang.name}</h3>
                   </div>
                   <span className="text-xs font-mono text-cyber-muted bg-cyber-black px-2 py-1 rounded border border-cyber-gray/50">{lang.level}</span>
                </div>
                
                <div className="w-full bg-cyber-black h-2 rounded-full overflow-hidden border border-cyber-gray/30 relative z-10">
                   <div className="bg-cyber-blue h-full transition-all duration-1000 group-hover:bg-cyber-green shadow-[0_0_10px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)]" style={{ width: `${lang.percent}%` }}></div>
                </div>
                
                <div className="flex justify-end mt-2">
                  <span className="text-[10px] font-mono text-cyber-muted">{lang.percent}% INSTALLED</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  )
}
export default Languages;
