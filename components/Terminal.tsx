import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [history, setHistory] = useState<Array<{text: string, type?: 'input' | 'output' | 'error'}>>([
    { text: 'ARPIT-OS Command Line Interface v1.0', type: 'output' },
    { text: 'Type "help" for available commands.', type: 'output' },
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
    const newHistory = [...history, { text: `arpit@os:~$ ${input}`, type: 'input' as const }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { text: 'Available commands:', type: 'output' },
          { text: '  about        - View system profile', type: 'output' },
          { text: '  skills       - List loaded modules', type: 'output' },
          { text: '  projects     - List installed applications', type: 'output' },
          { text: '  contact      - Initiate secure session', type: 'output' },
          { text: '  whoami       - Current user info', type: 'output' },
          { text: '  sudo         - Execute with root privileges', type: 'output' },
          { text: '  ls           - List directory contents', type: 'output' },
          { text: '  clear        - Clear terminal', type: 'output' },
          { text: '  exit         - Close terminal', type: 'output' }
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'about':
        onNavigate('about');
        newHistory.push({ text: 'Navigating to System Profile...', type: 'output' });
        break;
      case 'skills':
        onNavigate('skills');
        newHistory.push({ text: 'Navigating to Modules...', type: 'output' });
        break;
      case 'experience':
        onNavigate('experience');
        newHistory.push({ text: 'Navigating to Services...', type: 'output' });
        break;
      case 'projects':
        onNavigate('projects');
        newHistory.push({ text: 'Navigating to Applications...', type: 'output' });
        break;
      case 'contact':
        onNavigate('contact');
        newHistory.push({ text: 'Initializing secure session...', type: 'output' });
        break;
      case 'htb':
        newHistory.push(
          { text: '--- HackTheBox Status ---', type: 'output' },
          { text: 'Rank: Top 50 Globally', type: 'output' },
          { text: 'Class: Hacker', type: 'output' },
          { text: 'Status: Elite', type: 'output' }
        );
        break;
      case 'whoami':
        newHistory.push({ text: 'uid=1000(arpit) gid=1000(cyber) groups=1000(cyber),27(sudo),100(users)', type: 'output' });
        break;
      case 'sudo':
        newHistory.push({ text: 'arpit is not in the sudoers file. This incident will be reported.', type: 'error' });
        break;
      case 'ls':
        newHistory.push({ text: 'drwxr-xr-x  2 arpit  staff   64B Oct 24 10:00 about/', type: 'output' });
        newHistory.push({ text: 'drwxr-xr-x  2 arpit  staff   64B Oct 24 10:00 projects/', type: 'output' });
        newHistory.push({ text: 'drwxr-xr-x  2 arpit  staff   64B Oct 24 10:00 experience/', type: 'output' });
        newHistory.push({ text: '-rw-r--r--  1 arpit  staff  1.2K Oct 24 10:00 resume.pdf', type: 'output' });
        break;
      case 'exit':
        onClose();
        break;
      default:
        if (cmd !== '') {
          newHistory.push({ text: `Command not found: ${cmd}. Type "help" for assistance.`, type: 'error' });
        }
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in-95 duration-200">
      <div className="w-full max-w-3xl bg-cyber-black border border-cyber-green/50 shadow-[0_0_30px_rgba(0,255,65,0.2)] rounded-lg overflow-hidden flex flex-col h-[500px]">
        <div className="bg-cyber-gray px-4 py-2 flex justify-between items-center border-b border-cyber-green/30">
          <span className="text-cyber-green font-mono text-sm">root@arpit-os:~</span>
          <button onClick={onClose} className="text-cyber-muted hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 p-4 font-mono text-sm overflow-y-auto bg-opacity-90" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i} className={`mb-1 whitespace-pre-wrap ${
              line.type === 'error' ? 'text-red-500' : 
              line.type === 'input' ? 'text-cyber-text' : 'text-cyber-green'
            }`}>
              {line.text}
            </div>
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