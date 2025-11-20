import React from 'react';
import { Download, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(rgb(var(--cyber-green)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--cyber-green)) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="w-full max-w-5xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Panel: Text */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 border border-cyber-green/50 rounded-full text-cyber-green text-xs font-mono bg-cyber-green/10 mb-2">
            SYSTEM_STATUS: ONLINE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-cyber-heading">
            ARPIT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue">
              SIVAKUMAR
            </span>
          </h1>
          <p className="text-xl text-cyber-muted font-light max-w-lg">
            Cybersecurity Engineer specializing in SIEM, Threat Detection, and Offensive Security. 
            <span className="block mt-2 text-sm font-mono text-cyber-blue">
              [Final-Year Integrated Masters @ VIT Bhopal]
            </span>
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
               onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
               className="group relative px-6 py-3 bg-cyber-green/10 text-cyber-green border border-cyber-green font-mono text-sm uppercase hover:bg-cyber-green hover:text-cyber-black transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-cyber-green/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Initialize_Contact()
            </button>
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 text-cyber-muted border border-cyber-muted/30 hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300 font-mono text-sm uppercase"
            >
              <Download size={16} /> Download_CV.pdf
            </a>
          </div>
        </div>

        {/* Right Panel: System Specs Widget */}
        <div className="relative">
           {/* Decorator elements */}
           <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-cyber-blue/50 rounded-tr-xl"></div>
           <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-cyber-green/50 rounded-bl-xl"></div>

           <div className="bg-cyber-dark/90 backdrop-blur-sm border border-cyber-gray p-6 rounded-lg shadow-2xl font-mono text-sm">
              <div className="border-b border-cyber-gray mb-4 pb-2 flex justify-between text-xs text-cyber-muted">
                <span>KERNEL_INFO</span>
                <span>PID: 1024</span>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-cyber-green">User:</span>
                  <span className="text-cyber-text">arpit.sivakumar</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-cyber-green">Role:</span>
                  <span className="text-cyber-text">Security Engineer / Threat Hunter</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-cyber-green">CPU Focus:</span>
                  <span className="text-cyber-blue">SIEM, Threat Detection, Splunk</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-cyber-green">Memory:</span>
                  <span className="text-cyber-muted">Linux, Networks, Cloud (Azure/Docker)</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-cyber-green">Uptime:</span>
                  <span className="text-cyber-muted">4 Years (Education + Internships)</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-cyber-green">Location:</span>
                  <span className="text-cyber-text">Bhopal, IN (Remote Ready)</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyber-gray">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-cyber-muted">Load Average</span>
                  <span className="text-cyber-green">0.14, 0.56, 0.89</span>
                </div>
                <div className="w-full bg-cyber-black h-1 rounded-full overflow-hidden">
                   <div className="bg-cyber-green h-full w-[85%] animate-pulse"></div>
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;