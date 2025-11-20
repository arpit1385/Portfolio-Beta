
import React, { useState, useEffect } from 'react';
import BootScreen from './components/BootScreen';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Languages from './components/sections/Languages';

const App: React.FC = () => {
  const [bootStatus, setBootStatus] = useState<'booting' | 'complete'>('booting');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Trigger command palette via custom event if needed
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {bootStatus === 'booting' && (
        <BootScreen onComplete={() => setBootStatus('complete')} />
      )}
      
      {/* 
        We render the layout always but hide it or show it under the boot screen. 
        When bootStatus is complete, the boot screen fades out (handled inside BootScreen) 
        and unmounts, revealing this layer.
      */}
      <div className={`transition-opacity duration-1000 ${bootStatus === 'complete' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        <Layout>
          <Hero />
          <Achievements />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Languages />
          <Contact />
        </Layout>
      </div>
    </>
  );
};

export default App;
