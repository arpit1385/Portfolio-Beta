import React, { useState } from 'react';
import { Send, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'encrypting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('encrypting');
    setTimeout(() => {
      setStatus('sent');
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-cyber-gray/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyber-green text-2xl">06.</span>
          <h2 className="text-3xl font-bold text-white">Secure Session Init</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Establish Connection</h3>
            <p className="text-cyber-muted mb-8">
              Open to cybersecurity internships, apprenticeships, and entry-level roles across India.
              Initiate a handshake below.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <a href="mailto:arpit30770@gmail.com" className="flex items-center gap-3 text-cyber-text hover:text-cyber-green transition-colors">
                <Mail size={18} /> arpit30770@gmail.com
              </a>
              <a href="tel:+917434094320" className="flex items-center gap-3 text-cyber-text hover:text-cyber-green transition-colors">
                <Phone size={18} /> +91-7434094320
              </a>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 border border-cyber-gray rounded hover:border-cyber-blue hover:text-cyber-blue transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 border border-cyber-gray rounded hover:border-cyber-blue hover:text-cyber-blue transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-cyber-gray/10 border border-cyber-gray/50 p-6 rounded-lg">
            {status === 'idle' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-cyber-green mb-1">USER_ID (Name)</label>
                  <input type="text" required className="w-full bg-cyber-black border border-cyber-gray focus:border-cyber-green outline-none p-2 text-white text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-cyber-green mb-1">SOURCE_IP (Email)</label>
                  <input type="email" required className="w-full bg-cyber-black border border-cyber-gray focus:border-cyber-green outline-none p-2 text-white text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-cyber-green mb-1">PAYLOAD (Message)</label>
                  <textarea rows={4} required className="w-full bg-cyber-black border border-cyber-gray focus:border-cyber-green outline-none p-2 text-white text-sm transition-colors"></textarea>
                </div>
                <button type="submit" className="w-full bg-cyber-blue/10 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black font-mono py-2 text-sm transition-all flex items-center justify-center gap-2">
                  <Send size={16} /> TRANSMIT_DATA
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center font-mono text-center space-y-4">
                {status === 'encrypting' ? (
                   <>
                    <div className="text-cyber-green animate-pulse">Encrypting payload...</div>
                    <div className="w-full bg-cyber-black h-1 rounded-full overflow-hidden">
                        <div className="bg-cyber-green h-full w-1/2 animate-[scanline_1s_infinite]"></div>
                    </div>
                   </>
                ) : (
                   <>
                    <div className="text-cyber-blue">Message queued successfully.</div>
                    <p className="text-xs text-cyber-muted">(This is a demo environment)</p>
                    <button onClick={() => setStatus('idle')} className="text-xs underline hover:text-white mt-4">Send another</button>
                   </>
                )}
              </div>
            )}
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-cyber-gray/30 text-center text-xs text-cyber-muted font-mono">
          <p>ARPIT-OS v2.6.5 | © {new Date().getFullYear()} Arpit Sivakumar</p>
          <p className="mt-2 opacity-50">System Status: Optimal</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;