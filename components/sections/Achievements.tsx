import React, { useEffect, useState, useRef } from 'react';
import { ACHIEVEMENTS } from '../../constants';

const AnimatedCounter = ({ value, title }: { value: string, title: string }) => {
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
      <h3 className="text-3xl font-bold text-white mb-1 font-mono">{displayValue}</h3>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-cyber-gray/5 border-y border-cyber-gray/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((ach) => (
            <div key={ach.id} className="text-center p-4 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-cyber-gray/20 rounded-full flex items-center justify-center border border-cyber-gray group-hover:border-cyber-green group-hover:bg-cyber-green/10 transition-all duration-500">
                <ach.icon className="text-cyber-muted group-hover:text-cyber-green" size={28} />
              </div>
              <AnimatedCounter value={ach.value} title={ach.title} />
              <p className="text-cyber-blue text-sm font-bold uppercase tracking-wider mb-2">{ach.title}</p>
              <p className="text-xs text-cyber-muted">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;