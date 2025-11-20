import React, { useEffect, useState, useRef } from 'react';
import { BOOT_SEQUENCE } from '../constants';
import { BootLog } from '../types';

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<BootLog[]>([]);
  const [isBooted, setIsBooted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    let timeouts: ReturnType<typeof setTimeout>[] = [];
    let accumulatedDelay = 0;

    BOOT_SEQUENCE.forEach((log, index) => {
      accumulatedDelay += log.delay ? (log.delay - (index > 0 ? BOOT_SEQUENCE[index-1].delay : 0)) : 100;
      
      // Use the exact delays from constants if possible, or just accumulate
      const timeout = setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        if (index === BOOT_SEQUENCE.length - 1) {
          setIsBooted(true);
        }
      }, log.delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleInteraction = () => {
    if (isBooted && !isExiting) {
      setIsExiting(true);
      // Allow animation to play before unmounting
      setTimeout(() => {
        onComplete();
      }, 800);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleInteraction();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBooted, isExiting, onComplete]);

  return (
    // Hardcoded colors to preserve BIOS/Terminal look in both Light and Dark modes
    <div 
      className={`fixed inset-0 bg-[#050505] z-50 flex flex-col p-4 md:p-10 font-mono text-sm md:text-base overflow-hidden cursor-pointer transition-all duration-1000 ${isExiting ? 'opacity-0 scale-95 filter blur-sm' : 'opacity-100'}`}
      onClick={handleInteraction}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent opacity-50"></div>
      
      <div className="flex-1 overflow-y-auto crt p-4 max-w-4xl mx-auto w-full border border-[#1a1a1a] rounded shadow-[0_0_20px_rgba(0,255,65,0.1)] relative bg-[#0a0a0a]/90">
        <div className="absolute top-2 right-4 text-xs text-[#94a3b8]">BIO_OS_v2.6.5</div>
        
        {logs.map((log) => (
          <div key={log.id} className="mb-1 break-words font-mono tracking-tight">
            <span className="text-[#94a3b8] mr-3 text-xs select-none">
              [{new Date().toLocaleTimeString('en-US', { hour12: false })}]
            </span>
            <span className={`
              ${log.type === 'error' ? 'text-red-500 font-bold' : ''}
              ${log.type === 'warning' ? 'text-yellow-400' : ''}
              ${log.type === 'success' ? 'text-[#00ff41] font-semibold' : ''}
              ${log.type === 'info' ? 'text-[#e2e8f0]' : ''}
              ${log.type === 'system' ? 'text-[#0ea5e9] italic' : ''}
            `}>
              {log.text}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
        
        {isBooted && (
          <div className="mt-8 animate-blink border-l-2 border-[#00ff41] pl-2">
            <span className="text-white bg-[#00ff41]/20 px-2 py-1">
              SYSTEM READY
            </span>
            <p className="mt-2 text-[#e2e8f0]">
              Initializing graphical interface... <br/>
              <span className="text-[#94a3b8] text-xs">Press [ENTER] or Click to Launch</span>
            </p>
          </div>
        )}
      </div>
      
      <div className="text-center mt-4 text-xs text-[#94a3b8] opacity-50">
        ARPIT_OS // SECURE_BOOT_ENABLED
      </div>
    </div>
  );
};

export default BootScreen;