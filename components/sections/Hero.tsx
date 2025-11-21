import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgb(var(--cyber-green)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--cyber-green)) 1px, transparent 1px)', 
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)' 
           }}>
      </div>

      <div className="w-full max-w-6xl z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center px-4 md:px-8">
        
        {/* Left Panel: Text */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyber-green/50 rounded-full text-cyber-green text-xs font-mono bg-cyber-green/10 mb-2 select-none">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
            SYSTEM_STATUS: ONLINE
          </div>
          
          <div className="space-y-1">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-cyber-heading leading-tight">
              ARPIT <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-cyber-blue opacity-20 blur-lg"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue">
                  SIVAKUMAR
                </span>
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-cyber-muted font-light max-w-lg leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Cybersecurity Engineer specializing in SIEM, Threat Detection, and Offensive Security. 
            <span className="block mt-2 text-sm font-mono text-cyber-blue opacity-80">
              &gt; Final-Year Integrated Masters @ VIT Bhopal
            </span>
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button 
               onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
               className="group relative px-8 py-3 bg-cyber-green/10 text-cyber-green border border-cyber-green font-mono text-sm uppercase hover:bg-cyber-green hover:text-cyber-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] rounded-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-cyber-green/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Initialize_Contact()
            </button>
            <a 
              href="#" 
              className="flex items-center gap-2 px-8 py-3 text-cyber-muted border border-cyber-gray hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300 font-mono text-sm uppercase hover:bg-cyber-blue/5 rounded-sm"
            >
              <Download size={16} /> Download_CV.pdf
            </a>
          </div>
        </div>

        {/* Right Panel: System Specs Widget */}
        <div className="relative animate-fade-in-up hidden md:block w-full" style={{animationDelay: '0.6s'}}>
           {/* Decorator elements */}
           <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-cyber-blue/30 rounded-tr-3xl"></div>
           <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-cyber-green/30 rounded-bl-3xl"></div>

           <div className="bg-cyber-dark/90 backdrop-blur-xl border border-cyber-gray p-6 rounded-xl shadow-2xl font-mono text-sm relative overflow-hidden hover:border-cyber-green/30 transition-colors duration-300">
              {/* Scanning line effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-cyber-green/50 animate-scanline opacity-20"></div>

              <div className="border-b border-cyber-gray mb-5 pb-3 flex justify-between items-center text-xs text-cyber-muted">
                <span className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </span>
                <span>PID: 1024 // KERNEL_INFO</span>
              </div>
              
              <div className="space-y-5">
                <div className="group grid grid-cols-[100px_1fr] gap-2 items-baseline">
                  <span className="text-cyber-green font-bold">User:</span>
                  <span className="text-cyber-text">arpit.sivakumar</span>
                </div>
                <div className="group grid grid-cols-[100px_1fr] gap-2 items-baseline">
                  <span className="text-cyber-green font-bold">Role:</span>
                  <span className="text-cyber-text">Security Engineer</span>
                </div>
                <div className="group grid grid-cols-[100px_1fr] gap-2 items-baseline">
                  <span className="text-cyber-green font-bold">CPU Focus:</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-cyber-blue/10 text-cyber-blue px-1 rounded text-xs border border-cyber-blue/20">SIEM</span>
                    <span className="bg-cyber-blue/10 text-cyber-blue px-1 rounded text-xs border border-cyber-blue/20">Splunk</span>
                    <span className="bg-cyber-blue/10 text-cyber-blue px-1 rounded text-xs border border-cyber-blue/20">Threat Intel</span>
                  </div>
                </div>
                <div className="group grid grid-cols-[100px_1fr] gap-2 items-baseline">
                  <span className="text-cyber-green font-bold">Memory:</span>
                  <span className="text-cyber-muted">Linux, Cloud, Network</span>
                </div>
                <div className="group grid grid-cols-[100px_1fr] gap-2 items-baseline">
                  <span className="text-cyber-green font-bold">Uptime:</span>
                  <span className="text-cyber-muted">4 Years</span>
                </div>
                <div className="group grid grid-cols-[100px_1fr] gap-2 items-baseline">
                  <span className="text-cyber-green font-bold">Location:</span>
                  <span className="text-cyber-text">Bhopal, IN <span className="text-cyber-green text-xs ml-1">[REMOTE]</span></span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-cyber-gray">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-cyber-muted">SYSTEM LOAD</span>
                  <span className="text-cyber-green font-bold animate-pulse">OPTIMAL</span>
                </div>
                <div className="flex gap-1 h-4">
                   {[...Array(20)].map((_, i) => (
                     <div 
                        key={i} 
                        className={`flex-1 rounded-sm ${i < 15 ? 'bg-cyber-green/60' : 'bg-cyber-gray/30'} ${i === 14 ? 'animate-pulse' : ''}`}
                     ></div>
                   ))}
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;