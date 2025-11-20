import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-cyber-green text-2xl">05.</span>
          <h2 className="text-3xl font-bold text-cyber-heading">Build Information</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        <div className="bg-cyber-gray/10 border border-cyber-gray rounded p-6 md:p-8 font-mono text-sm">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex justify-between border-b border-cyber-gray/30 pb-1">
                <span className="text-cyber-muted">build_target</span>
                <span className="text-cyber-text text-right">Integrated Masters (B.Tech + M.Tech)</span>
              </div>
              <div className="flex justify-between border-b border-cyber-gray/30 pb-1">
                <span className="text-cyber-muted">specialization</span>
                <span className="text-cyber-green text-right">Cybersecurity & Digital Forensics</span>
              </div>
              <div className="flex justify-between border-b border-cyber-gray/30 pb-1">
                <span className="text-cyber-muted">origin</span>
                <span className="text-cyber-text text-right">VIT Bhopal University</span>
              </div>
              <div className="flex justify-between border-b border-cyber-gray/30 pb-1">
                <span className="text-cyber-muted">version_date</span>
                <span className="text-cyber-text text-right">Jul 2021 – Jul 2026</span>
              </div>
              <div className="flex justify-between border-b border-cyber-gray/30 pb-1">
                <span className="text-cyber-muted">performance_idx</span>
                <span className="text-cyber-blue text-right">CGPA: 8.5 / 10.0</span>
              </div>
            </div>

            <div>
              <h3 className="text-cyber-blue mb-3">INSTALLED_PKG_GROUPS:</h3>
              <ul className="grid grid-cols-1 gap-2 text-cyber-text">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div> Network Security
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div> Cryptography
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div> Operating Systems
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div> Web Application Security
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div> Cloud Security
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div> Incident Response
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;