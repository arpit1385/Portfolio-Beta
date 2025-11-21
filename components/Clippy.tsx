import React, { useState, useEffect } from 'react';

interface ClippyProps {
  onOpenTerminal: () => void;
}

const Clippy: React.FC<ClippyProps> = ({ onOpenTerminal }) => {
  const [msg, setMsg] = useState("Hi! I'm Clippy.");
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    const msgs = [
      "It looks like you're trying to hack the mainframe.",
      "Double-click me to open the command line!",
      "Need help? I bet you want to run some commands.",
      "Try typing 'sl' in the terminal for a surprise!",
      "Try typing 'cow <message>' in the terminal!",
      "I see you're checking out the portfolio. Good choice!",
      "Did you know? You can double-click me to launch the terminal.",
    ];
    
    // Initial hello
    setTimeout(() => setShowMsg(true), 2000);
    setTimeout(() => setShowMsg(false), 6000);

    const interval = setInterval(() => {
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
      setMsg(randomMsg);
      setShowMsg(true);
      setTimeout(() => setShowMsg(false), 5000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-auto group">
      {/* Speech Bubble */}
      <div className={`mb-2 mr-2 bg-[#FFFFE1] text-black px-4 py-3 rounded-lg shadow-[2px_2px_5px_rgba(0,0,0,0.2)] border border-gray-400 text-xs md:text-sm font-sans max-w-[200px] relative transition-all duration-300 ${showMsg ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {msg}
        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-[#FFFFE1] border-b border-r border-gray-400 transform rotate-45"></div>
      </div>

      {/* Clippy Character */}
      <div 
        onDoubleClick={() => {
          setMsg("Launching Terminal...");
          setShowMsg(true);
          setTimeout(() => {
            onOpenTerminal();
            setShowMsg(false);
          }, 500);
        }}
        className="w-20 h-20 relative cursor-pointer hover:scale-110 transition-transform active:scale-95"
        title="Double-click to open Terminal"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          {/* Body Shadow */}
          <path d="M 32 62 L 32 32 A 18 18 0 0 1 68 32 L 68 68 A 8 8 0 0 1 52 68 L 52 42" 
                fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="6" strokeLinecap="round" />
          
          {/* Paperclip Body */}
          <path d="M 30 60 L 30 30 A 20 20 0 0 1 70 30 L 70 70 A 10 10 0 0 1 50 70 L 50 40" 
                fill="none" stroke="#C7C7C7" strokeWidth="5" strokeLinecap="round" />
          
          {/* Eyebrows */}
          <path d="M 35 25 Q 40 22 45 25" stroke="black" strokeWidth="2" fill="none" className="group-hover:-translate-y-1 transition-transform" />
          <path d="M 55 25 Q 60 22 65 25" stroke="black" strokeWidth="2" fill="none" className="group-hover:-translate-y-1 transition-transform" />

          {/* Eyes */}
          <g className="group-hover:animate-[blink_3s_infinite]">
             <circle cx="40" cy="32" r="4" fill="white" stroke="black" strokeWidth="1" />
             <circle cx="40" cy="32" r="1.5" fill="black" />
             
             <circle cx="60" cy="32" r="4" fill="white" stroke="black" strokeWidth="1" />
             <circle cx="60" cy="32" r="1.5" fill="black" />
          </g>

          {/* Hands/Wire overlay to look 3D */}
          <path d="M 30 60 L 30 30" stroke="#C7C7C7" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default Clippy;
