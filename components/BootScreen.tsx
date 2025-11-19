import React, { useEffect, useState, useRef } from 'react';
import { BOOT_SEQUENCE } from '../constants';
import { BootLog } from '../types';

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<BootLog[]>([]);
  const [isBooted, setIsBooted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    let timeouts: ReturnType<typeof setTimeout>[] = [];

    BOOT_SEQUENCE.forEach((log, index) => {
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

  const handleEnter = () => {
    if (isBooted) {
      onComplete();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isBooted) {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBooted, onComplete]);

  return (
    <div 
      className="fixed inset-0 bg-cyber-black z-50 flex flex-col p-4 md:p-10 font-mono text-cyber-green text-sm md:text-base overflow-hidden cursor-pointer"
      onClick={handleEnter}
    >
      <div className="flex-1 overflow-y-auto crt p-4 max-w-4xl mx-auto w-full border border-cyber-gray/50 rounded shadow-[0_0_20px_rgba(0,255,65,0.1)]">
        {logs.map((log) => (
          <div key={log.id} className="mb-2 break-words">
            <span className="opacity-50 mr-2">
              [{new Date().toLocaleTimeString('en-US', { hour12: false })}]
            </span>
            <span className={`
              ${log.type === 'error' ? 'text-red-500' : ''}
              ${log.type === 'warning' ? 'text-yellow-500' : ''}
              ${log.type === 'success' ? 'text-cyber-blue' : ''}
            `}>
              {log.text}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
        
        {isBooted && (
          <div className="mt-8 animate-blink">
            <span className="text-white bg-cyber-green/20 px-2 py-1">
              _ SYSTEM READY
            </span>
            <p className="mt-2 text-cyber-muted">Press [ENTER] or Click to Initialize GUI...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BootScreen;