import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on devices with fine pointers (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Move dot immediately
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Move follower with slight delay/interpolation
      if (followerRef.current) {
        // We use a simple timeout-less approach for direct following in React for simplicity,
        // or we can animate it. For smoothness without a loop, CSS transition is often easiest 
        // for the 'lag' if we update coordinates. 
        // However, purely JS based lerp is smoother. Let's use direct update with CSS transition.
        followerRef.current.animate({
          transform: `translate3d(${clientX}px, ${clientY}px, 0)`
        }, {
          duration: 500,
          fill: 'forwards',
          easing: 'ease-out'
        });
      }

      // Check hover target
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('button') ||
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isClickable);
    };

    const onMouseDown = () => {
      if (followerRef.current) {
        followerRef.current.style.width = '20px';
        followerRef.current.style.height = '20px';
        followerRef.current.style.backgroundColor = 'var(--cyber-green)';
        followerRef.current.style.opacity = '0.5';
      }
    };

    const onMouseUp = () => {
      if (followerRef.current) {
        followerRef.current.style.width = ''; // Reset to CSS class
        followerRef.current.style.height = '';
        followerRef.current.style.backgroundColor = '';
        followerRef.current.style.opacity = '';
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        body, a, button, input, textarea, [role="button"] {
          cursor: none !important;
        }
      `}</style>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-green rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      <div 
        ref={followerRef} 
        className={`fixed top-0 left-0 border border-cyber-green rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center ${
          isHovering ? 'w-12 h-12 border-cyber-blue bg-cyber-blue/10' : 'w-8 h-8 opacity-50'
        }`}
        style={{ willChange: 'transform' }}
      >
        {isHovering && <div className="w-1 h-1 bg-cyber-blue rounded-full animate-ping" />}
      </div>
    </>
  );
};

export default CustomCursor;