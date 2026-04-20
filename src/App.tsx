import { useState, useCallback } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [lightMode, setLightMode] = useState(false);

  const handleLoadDone = useCallback(() => {
    setLoading(false);
  }, []);

  const toggleLight = useCallback(() => {
    setLightMode(prev => {
      const next = !prev;
      document.body.classList.toggle('light-mode', next);
      return next;
    });
  }, []);

  return (
    <>
      {loading && <LoadingScreen onDone={handleLoadDone} />}

      {!loading && (
        <div
          className={lightMode ? 'light-mode' : ''}
          style={{
            minHeight: '100vh',
            background: lightMode
              ? 'linear-gradient(180deg, #f0f4ff 0%, #e8efff 100%)'
              : 'linear-gradient(180deg, #000010 0%, #000820 40%, #000515 100%)',
          }}
        >
          <Cursor />
          <ParticleCanvas />
          <Navbar lightMode={lightMode} onToggleLight={toggleLight} />

          <main style={{ position: 'relative', zIndex: 1 }}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
