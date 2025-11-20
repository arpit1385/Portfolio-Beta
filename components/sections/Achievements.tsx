import React, { useEffect, useState, useRef } from 'react';
import { ACHIEVEMENTS } from '../../constants';

const AnimatedCounter = ({ value, title, colorClass }: { value: string, title: string, colorClass: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        // Basic parsing for numbers in string (e.g., "43%")
        const num = parseInt(value.replace(/\D/g, ''));
        if (isNaN(num)) {
          setDisplayValue(value);
          return;
        }
        
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / num));
        const suffix = value.replace(/[0-9]/g, '');
        const prefix = value.match(/^[^\d]*/) || "";

        const timer = setInterval(() => {
          start += 1;
          setDisplayValue(`${prefix}${start}${suffix}`);
          if (start >= num) {
            clearInterval(timer);
            setDisplayValue(value); // Ensure final value is exact string
          }
        }, Math.max(stepTime, 20));
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref}>
      <h3 className={`text-3xl font-bold mb-1 font-mono ${colorClass}`}>{displayValue}</h3>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-cyber-gray/5 border-y border-cyber-gray/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div 
              key={ach.id} 
              className={`text-center p-6 rounded-lg border transition-all duration-500 group ${ach.bg || 'bg-transparent'} ${ach.border || 'border-transparent'} hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border transition-all duration-500 ${ach.border || 'border-cyber-gray'} bg-cyber-black/50`}>
                <ach.icon className={`transition-colors duration-300 ${ach.color || 'text-cyber-muted'}`} size={28} />
              </div>
              <AnimatedCounter value={ach.value} title={ach.title} colorClass={ach.color || 'text-cyber-heading'} />
              <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${ach.color || 'text-cyber-blue'}`}>{ach.title}</p>
              <p className="text-xs text-cyber-muted">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
