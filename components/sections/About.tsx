import React from 'react';
import { Cpu, Shield, Globe, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-cyber-gray/30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyber-green text-2xl">01.</span>
          <h2 className="text-3xl font-bold text-white">System Profile</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Image / Avatar Placeholder */}
          <div className="md:col-span-1">
            <div className="w-full aspect-square bg-cyber-gray/50 rounded-lg border border-cyber-green/20 relative overflow-hidden group">
              <img 
                src="https://picsum.photos/400/400?grayscale" 
                alt="Arpit Profile" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-xs font-mono text-cyber-green bg-cyber-black/80 px-2 py-1 rounded">
                IMG_SOURCE: /dev/camera0
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:col-span-2 space-y-6 text-cyber-muted text-lg font-light">
            <p>
              I am a <span className="text-white font-medium">Final-year Integrated Masters student</span> in Cybersecurity at VIT Bhopal. My kernel is optimized for threat detection, SIEM engineering, and offensive security.
            </p>
            <p>
              My runtime environment includes hands-on experience from <span className="text-cyber-blue">NPCIL</span>, where I deployed Splunk architectures and hardened critical infrastructure. When I'm not analyzing logs, I'm ranking in the <span className="text-cyber-green">Top 50 on HackTheBox</span> or publishing research on Post-Quantum Cryptography with IEEE.
            </p>
            <p>
              I thrive in environments that require deep curiosity—whether it's creating automated recon pipelines or teaching secure coding practices as an OWASP mentor.
            </p>

            {/* Highlights Chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                'CEH Certified', 
                'Top 50 HackTheBox', 
                'SIEM Specialist', 
                'IEEE Researcher', 
                'Linux/Cloud Native'
              ].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono border border-cyber-blue/30 text-cyber-blue bg-cyber-blue/5 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;