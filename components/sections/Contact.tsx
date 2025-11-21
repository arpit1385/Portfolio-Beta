import React, { useState, useRef } from 'react';
import { Send, Mail, Phone, Github, Linkedin, Terminal as TerminalIcon } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'encrypting' | 'sent'>('idle');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('encrypting');
    setTimeout(() => {
      setStatus('sent');
      setFormState({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-cyber-gray/30 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-cyber-green text-2xl">07.</span>
          <h2 className="text-3xl font-bold text-cyber-heading">Secure Session Init</h2>
          <div className="h-[1px] flex-1 bg-cyber-gray/50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-cyber-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse"></span>
                Establish Connection
              </h3>
              <p className="text-cyber-muted leading-relaxed">
                My inbox is always open for cybersecurity opportunities, CTF collaborations, or just a friendly chat about the latest CVEs. 
                Initiate a secure handshake below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-cyber-gray/10 border border-cyber-gray/50 rounded hover:border-cyber-green/30 transition-colors group">
                 <div className="text-xs font-mono text-cyber-muted mb-1">COMM_CHANNEL_01</div>
                 <a href="mailto:arpit30770@gmail.com" className="flex items-center gap-3 text-cyber-text group-hover:text-cyber-green transition-colors">
                   <Mail size={18} /> <span className="font-mono">arpit30770@gmail.com</span>
                 </a>
              </div>
              
              <div className="p-4 bg-cyber-gray/10 border border-cyber-gray/50 rounded hover:border-cyber-green/30 transition-colors group">
                 <div className="text-xs font-mono text-cyber-muted mb-1">COMM_CHANNEL_02</div>
                 <a href="tel:+917434094320" className="flex items-center gap-3 text-cyber-text group-hover:text-cyber-green transition-colors">
                   <Phone size={18} /> <span className="font-mono">+91-7434094320</span>
                 </a>
              </div>

              <div className="flex gap-4 pt-2">
                <a href="#" className="p-3 bg-cyber-black border border-cyber-gray rounded hover:border-cyber-blue hover:text-cyber-blue hover:-translate-y-1 transition-all shadow-lg">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-cyber-black border border-cyber-gray rounded hover:border-cyber-blue hover:text-cyber-blue hover:-translate-y-1 transition-all shadow-lg">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Terminal Style Form */}
          <div className="bg-cyber-black border border-cyber-gray rounded-lg overflow-hidden shadow-2xl flex flex-col h-full min-h-[400px]">
            <div className="bg-cyber-gray/20 px-4 py-2 border-b border-cyber-gray flex justify-between items-center">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
               </div>
               <div className="text-xs font-mono text-cyber-muted flex items-center gap-1">
                 <TerminalIcon size={12} /> secure_msg.sh
               </div>
            </div>

            <div className="p-6 flex-1 font-mono text-sm relative overflow-hidden">
               {status === 'idle' ? (
                 <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                   <div className="text-cyber-muted mb-4">
                     # Enter credentials to transmit payload<br/>
                     # Fields marked with * are required
                   </div>

                   {/* Name Input */}
                   <div className={`group ${activeField === 'name' ? 'opacity-100' : 'opacity-80'}`}>
                     <label className="block text-cyber-green mb-1 text-xs">
                        user@arpit-os:~/auth$ <span className="text-cyber-text">enter_name</span>
                     </label>
                     <div className="flex items-center gap-2">
                        <span className="text-cyber-blue">❯</span>
                        <input 
                          type="text" 
                          required 
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-transparent border-b border-cyber-gray focus:border-cyber-green outline-none py-1 text-cyber-text placeholder-cyber-gray/30 transition-colors"
                          placeholder="John Doe"
                        />
                     </div>
                   </div>

                   {/* Email Input */}
                   <div className={`group ${activeField === 'email' ? 'opacity-100' : 'opacity-80'}`}>
                     <label className="block text-cyber-green mb-1 text-xs mt-4">
                        user@arpit-os:~/auth$ <span className="text-cyber-text">enter_source_ip</span>
                     </label>
                     <div className="flex items-center gap-2">
                        <span className="text-cyber-blue">❯</span>
                        <input 
                          type="email" 
                          required 
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-transparent border-b border-cyber-gray focus:border-cyber-green outline-none py-1 text-cyber-text placeholder-cyber-gray/30 transition-colors"
                          placeholder="sender@example.com"
                        />
                     </div>
                   </div>

                   {/* Message Input */}
                   <div className={`group ${activeField === 'message' ? 'opacity-100' : 'opacity-80'}`}>
                     <label className="block text-cyber-green mb-1 text-xs mt-4">
                        user@arpit-os:~/msg$ <span className="text-cyber-text">inject_payload</span>
                     </label>
                     <div className="flex items-start gap-2">
                        <span className="text-cyber-blue mt-1">❯</span>
                        <textarea 
                          rows={3} 
                          required 
                          value={formState.message}
                          onChange={e => setFormState({...formState, message: e.target.value})}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          className="w-full bg-transparent border-b border-cyber-gray focus:border-cyber-green outline-none py-1 text-cyber-text placeholder-cyber-gray/30 transition-colors resize-none"
                          placeholder="Write your message here..."
                        ></textarea>
                     </div>
                   </div>

                   <button type="submit" className="mt-6 w-full bg-cyber-green/10 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black font-bold py-3 text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
                     <Send size={14} className="group-hover:translate-x-1 transition-transform" /> EXECUTE_TRANSMISSION
                   </button>
                 </form>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    {status === 'encrypting' ? (
                       <>
                        <div className="text-cyber-green font-bold text-lg animate-pulse">ENCRYPTING_DATA_PACKETS...</div>
                        <div className="w-64 bg-cyber-gray/30 h-2 rounded-full overflow-hidden">
                            <div className="bg-cyber-green h-full w-1/2 animate-[scanline_1s_infinite]"></div>
                        </div>
                        <div className="text-xs text-cyber-muted font-mono">
                           Hashing: SHA-256<br/>
                           Handshake: ESTABLISHED
                        </div>
                       </>
                    ) : (
                       <div className="animate-fade-in-up">
                        <div className="w-16 h-16 bg-cyber-green/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyber-green">
                           <Send size={32} className="text-cyber-green" />
                        </div>
                        <h4 className="text-xl text-cyber-heading font-bold mb-2">TRANSMISSION SUCCESSFUL</h4>
                        <p className="text-cyber-muted text-xs mb-6 max-w-xs mx-auto">
                          Your message has been securely logged in the system. I will respond to the source IP shortly.
                        </p>
                        <button onClick={() => setStatus('idle')} className="text-xs text-cyber-blue hover:text-white underline decoration-cyber-blue/50 underline-offset-4">
                           Initialize New Session
                        </button>
                       </div>
                    )}
                 </div>
               )}
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-cyber-gray/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cyber-muted font-mono">
          <p>ARPIT-OS v2.6.5 | © {new Date().getFullYear()} Arpit Sivakumar</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></span>
            System Status: <span className="text-cyber-green">OPTIMAL</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;