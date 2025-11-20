
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
    { id: 'about', label: 'PROFILE' },
    { id: 'skills', label: 'MODULES' },
    { id: 'experience', label: 'SERVICES' },
    { id: 'projects', label: 'APPS' },
    { id: 'achievements', label: 'METRICS' },
    { id: 'education', label: 'BUILD' },
    { id: 'languages', label: 'LANG' },
    { id: 'contact', label: 'CONNECT' },
  ];

  const scrollToSection = (id: string) => {
    setIsNavOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-cyber-green selection:text-black">
      
      {/* Top Status Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-cyber-black/95 backdrop-blur-sm border-b border-cyber-gray h-10 flex items-center justify-between px-4 font-mono text-xs transition-colors duration-300">
        <div className="flex items-center gap-4">
          <span className="text-cyber-green font-bold hidden md:inline">arpit@arpit-os:~</span>
          <button 
             onClick={() => setIsTerminalOpen(true)}
             className="flex items-center gap-2 hover:text-cyber-green transition-colors text-cyber-text"
             title="Open Command Palette (Ctrl+K)"
          >
            <TerminalIcon size={14} /> 
            <span className="hidden sm:inline">_CMD</span>
          </button>
        </div>
        
        <div className="flex items-center gap-6">
           <span className="hidden md:inline text-cyber-muted">LOCATION: Bhopal, IN</span>
           <button 
              onClick={toggleTheme}
              className="flex items-center gap-2 text-cyber-text hover:text-cyber-green transition-colors"
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
           <button className="md:hidden text-cyber-heading" onClick={() => setIsNavOpen(!isNavOpen)}>
             {isNavOpen ? <X size={18} /> : <Menu size={18} />}
           </button>
        </div>
      </header>

      {/* Sidebar (Desktop) */}
      <nav className="hidden md:flex fixed left-0 top-10 bottom-0 w-16 flex-col items-center py-8 border-r border-cyber-gray bg-cyber-black/50 z-30 transition-colors duration-300">
        <div className="flex-1 w-full flex flex-col gap-2">
           {navItems.map((item) => (
             <button
               key={item.id}
               onClick={() => scrollToSection(item.id)}
               className="w-full py-3 relative group flex justify-center"
               title={item.label}
             >
               <div className="w-2 h-2 bg-cyber-gray rounded-full group-hover:bg-cyber-green transition-colors"></div>
               <span className="absolute left-14 bg-cyber-gray text-cyber-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-cyber-gray">
                 {item.label}
               </span>
             </button>
           ))}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 bg-cyber-black/95 z-30 md:hidden flex flex-col items-center justify-center transition-transform duration-300 ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {navItems.map((item) => (
           <button
             key={item.id}
             onClick={() => scrollToSection(item.id)}
             className="py-4 text-xl font-mono text-cyber-text hover:text-cyber-green tracking-widest"
           >
             [{item.label}]
           </button>
         ))}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 mt-10 md:pl-16 relative z-10">
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

      {/* Back to Top */}
      <button 
        onClick={handleScrollTop}
        className="fixed bottom-8 right-8 p-3 bg-cyber-black border border-cyber-green text-cyber-green rounded-full hover:bg-cyber-green hover:text-cyber-black transition-all shadow-[0_0_15px_rgba(0,255,65,0.2)] z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

    </div>
  );
};

export default Layout;
