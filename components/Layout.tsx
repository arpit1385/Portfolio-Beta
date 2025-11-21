import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Menu, X, ArrowUp, Wifi, Battery, Sun, Moon } from 'lucide-react';
import Terminal from './Terminal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      // Show/Hide Scroll Top Button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Active Section Tracker
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Offset for header

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const navItems = [
    { id: 'hero', label: 'KERNEL' },
    { id: 'achievements', label: 'METRICS' },
    { id: 'about', label: 'PROFILE' },
    { id: 'skills', label: 'MODULES' },
    { id: 'experience', label: 'SERVICES' },
    { id: 'projects', label: 'APPS' },
    { id: 'education', label: 'BUILD' },
    { id: 'languages', label: 'LANG' },
    { id: 'contact', label: 'CONNECT' },
  ];

  const scrollToSection = (id: string) => {
    setIsNavOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 60;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-cyber-green selection:text-black">
      
      {/* Top Status Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-cyber-black/90 backdrop-blur-md border-b border-cyber-gray h-12 flex items-center justify-between px-6 font-mono text-xs transition-colors duration-300 shadow-lg">
        <div className="flex items-center gap-4">
          <span className="text-cyber-green font-bold hidden md:inline">arpit@arpit-os:~</span>
          <button 
             onClick={() => setIsTerminalOpen(!isTerminalOpen)}
             className="flex items-center gap-2 hover:text-cyber-green transition-colors text-cyber-text px-2 py-1 rounded hover:bg-cyber-gray/30"
             title="Toggle Command Palette (Ctrl+K)"
          >
            <TerminalIcon size={14} /> 
            <span className="hidden sm:inline font-bold">_CMD</span>
          </button>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
           <span className="hidden lg:inline text-cyber-muted">LOCATION: Bhopal, IN</span>
           <div className="h-4 w-[1px] bg-cyber-gray hidden sm:block"></div>
           
           <button 
              onClick={toggleTheme}
              className="flex items-center gap-2 text-cyber-text hover:text-cyber-green transition-colors p-1"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
           >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
           </button>
           
           <div className="flex items-center gap-2 text-cyber-blue">
              <Wifi size={14} />
              <span className="hidden sm:inline">CONNECTED</span>
           </div>
           <div className="flex items-center gap-2 text-cyber-green">
              <Battery size={14} />
              <span className="hidden sm:inline">100%</span>
           </div>
           
           <button className="md:hidden text-cyber-heading p-1 hover:bg-cyber-gray/20 rounded" onClick={() => setIsNavOpen(!isNavOpen)}>
             {isNavOpen ? <X size={18} /> : <Menu size={18} />}
           </button>
        </div>
      </header>

      {/* Sidebar (Desktop) */}
      <nav className="hidden md:flex fixed left-0 top-12 bottom-0 w-20 flex-col items-center py-8 border-r border-cyber-gray bg-cyber-black/80 backdrop-blur-sm z-30 transition-colors duration-300">
        <div className="flex-1 w-full flex flex-col gap-4 items-center">
           {navItems.map((item) => (
             <button
               key={item.id}
               onClick={() => scrollToSection(item.id)}
               className="relative group flex justify-center items-center w-full h-8"
               title={item.label}
             >
               <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                 activeSection === item.id 
                  ? 'bg-cyber-green shadow-[0_0_8px_rgba(0,255,65,0.6)] scale-125' 
                  : 'bg-cyber-gray group-hover:bg-cyber-green/50'
               }`}></div>
               
               {/* Connectors */}
               <div className={`absolute top-full w-[1px] h-4 bg-cyber-gray/30 -z-10 ${
                 item.id === 'contact' ? 'hidden' : 'block'
               }`}></div>

               {/* Tooltip Label */}
               <span className="absolute left-14 bg-cyber-black border border-cyber-gray text-cyber-green text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl font-mono translate-x-[-5px] group-hover:translate-x-0">
                 {item.label}
               </span>
             </button>
           ))}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-cyber-black/95 backdrop-blur-xl z-30 md:hidden flex flex-col items-center justify-center transition-all duration-300 ${isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
         <div className="flex flex-col gap-6 items-center">
           {navItems.map((item, idx) => (
             <button
               key={item.id}
               onClick={() => scrollToSection(item.id)}
               className={`text-xl font-mono tracking-widest transition-all duration-300 transform ${
                 isNavOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
               } ${activeSection === item.id ? 'text-cyber-green font-bold' : 'text-cyber-muted hover:text-white'}`}
               style={{ transitionDelay: `${idx * 50}ms` }}
             >
               <span className="text-cyber-blue/50 mr-2 text-sm">{`0${idx + 1}`}</span>
               [{item.label}]
             </button>
           ))}
         </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 mt-12 md:pl-20 relative z-10">
        {children}
      </main>

      {/* Terminal Overlay */}
      <Terminal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
        onNavigate={(id) => {
          scrollToSection(id);
          setIsTerminalOpen(false);
        }}
      />
      
      {/* Floating CMD Button */}
      <button
        onClick={() => setIsTerminalOpen(!isTerminalOpen)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-cyber-black/50 backdrop-blur-md border border-cyber-blue text-cyber-blue shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:bg-cyber-blue hover:text-white hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all duration-300 group hover:scale-105 active:scale-95 ${isTerminalOpen ? 'bg-cyber-blue/20 ring-2 ring-cyber-blue' : 'animate-pulse-slow'}`}
        aria-label={isTerminalOpen ? "Close Terminal" : "Open Terminal"}
        title={isTerminalOpen ? "Close Terminal" : "Launch Terminal"}
      >
        {isTerminalOpen ? <X size={24} /> : <TerminalIcon size={24} />}
        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-cyber-black/90 border border-cyber-blue text-cyber-blue text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none font-mono shadow-lg translate-x-2 group-hover:translate-x-0">
          {isTerminalOpen ? 'CLOSE_CMD_' : 'LAUNCH_CMD_'}
        </span>
      </button>

      {/* Back to Top */}
      <button 
        onClick={handleScrollTop}
        className={`fixed bottom-8 left-8 p-3 bg-cyber-black/80 backdrop-blur-sm border border-cyber-green/50 text-cyber-green rounded-full hover:bg-cyber-green hover:text-cyber-black transition-all duration-500 shadow-[0_0_15px_rgba(0,255,65,0.2)] z-40 group ${showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

    </div>
  );
};

export default Layout;