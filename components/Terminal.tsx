import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [history, setHistory] = useState<string[]>([
    'ARPIT-OS Command Line Interface v1.0',
    'Type "help" for available commands.',
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `arpit@os:~$ ${input}`];

    switch (cmd) {
      case 'help':
        newHistory.push(
          'Available commands:',
          '  about        - View system profile',
          '  skills       - List loaded modules',
          '  experience   - View active services',
          '  projects     - List installed applications',
          '  htb          - HackTheBox status',
          '  pqc          - Research paper info',
          '  contact      - Initiate secure session',
          '  clear        - Clear terminal',
          '  exit         - Close terminal'
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'about':
        onNavigate('about');
        newHistory.push('Navigating to System Profile...');
        break;
      case 'skills':
        onNavigate('skills');
        newHistory.push('Navigating to Modules...');
        break;
      case 'experience':
        onNavigate('experience');
        newHistory.push('Navigating to Services...');
        break;
      case 'projects':
        onNavigate('projects');
        newHistory.push('Navigating to Applications...');
        break;
      case 'contact':
        onNavigate('contact');
        newHistory.push('Initializing secure session...');
        break;
      case 'htb':
        newHistory.push(
          '--- HackTheBox Status ---',
          'Rank: Top 50 Globally',
          'Class: Hacker',
          'Status: Elite',
          'Skills: Penetration Testing, CTF, Recon'
        );
        break;
      case 'pqc':
        newHistory.push(
          '--- Research: Post-Quantum Cryptography ---',
          'Publication: IEEE',
          'Role: Lead Author',
          'Achievement: 57.4% performance improvement in PQC algorithms',
          'Status: Published'
        );
        break;
      case 'exit':
        onClose();
        break;
      default:
        if (cmd !== '') {
          newHistory.push(`Command not found: ${cmd}. Type "help" for assistance.`);
        }
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-cyber-black border border-cyber-green/50 shadow-[0_0_30px_rgba(0,255,65,0.2)] rounded-lg overflow-hidden flex flex-col h-[500px]">
        <div className="bg-cyber-gray px-4 py-2 flex justify-between items-center border-b border-cyber-green/30">
          <span className="text-cyber-green font-mono text-sm">root@arpit-os:~</span>
          <button onClick={onClose} className="text-cyber-muted hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-opacity-90" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i} className="mb-1 text-cyber-text whitespace-pre-wrap">{line}</div>
          ))}
          <div ref={bottomRef} />
          <form onSubmit={handleCommand} className="flex mt-2">
            <span className="text-cyber-green mr-2">arpit@os:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0"
              autoFocus
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;