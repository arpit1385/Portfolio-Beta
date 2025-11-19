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

const App: React.FC = () => {
  // Check if session storage has "booted" to skip animation on refresh if desired
  // For this demo, we default to false to show the effect.
  const [bootStatus, setBootStatus] = useState<'booting' | 'complete'>('booting');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // The command palette toggle is handled inside Layout via a custom event or prop drilling.
        // Since the Layout controls the state, we'd typically use Context. 
        // However, for simplicity, the Layout component listens to the button click.
        // If we wanted global shortcut, we'd lift the state here.
        // We will rely on the button in the header for now to keep it simple, 
        // or let the user discover the button.
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (bootStatus === 'booting') {
    return <BootScreen onComplete={() => setBootStatus('complete')} />;
  }

  return (
    <Layout>
      <Hero />
      <Achievements />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  );
};

export default App;