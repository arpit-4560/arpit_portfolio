import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const phrases = [
  'AI / ML Developer',
  'Web Developer',
  'Python Engineer',
  'Problem Solver',
];

export function Hero() {
  const typed = useTypingEffect(phrases, 75, 2200);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX: x, clientY: y } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = (x - cx) / cx;
      const ry = (y - cy) / cy;

      const layers = heroRef.current.querySelectorAll<HTMLElement>('[data-parallax]');
      layers.forEach(layer => {
        const depth = parseFloat(layer.dataset.parallax || '1');
        layer.style.transform = `translate(${rx * depth * 20}px, ${ry * depth * 20}px)`;
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <div className="hero-glow" style={{ width: 600, height: 600, background: '#00d4ff', top: '20%', left: '60%' }} data-parallax="0.5" />
      <div className="hero-glow" style={{ width: 400, height: 400, background: '#ff6b35', top: '60%', left: '10%' }} data-parallax="0.8" />
      <div className="hero-glow" style={{ width: 300, height: 300, background: '#00ff88', top: '10%', left: '20%' }} data-parallax="0.3" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-16 py-20 relative z-10">
        <div className="flex-1 max-w-xl">
          <div
            className="mb-4 text-sm tracking-widest font-medium"
            style={{ color: 'var(--cyan)', letterSpacing: '0.25em', opacity: 0, animation: 'fadeInFromTop 0.8s ease 0.2s forwards' }}
            data-parallax="0.2"
          >
            WELCOME TO MY PORTFOLIO
          </div>

          <h1
            className="font-black mb-4 leading-none"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              letterSpacing: '-0.03em',
              opacity: 0,
              animation: 'fadeInFromTop 0.8s ease 0.4s forwards',
            }}
          >
            <span style={{ color: 'var(--text-primary)' }}>ARPIT</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              JADOUN
            </span>
          </h1>

          <div
            className="mb-6 flex items-center gap-2"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
              color: 'var(--text-secondary)',
              minHeight: '2em',
              opacity: 0,
              animation: 'fadeInFromTop 0.8s ease 0.6s forwards',
            }}
          >
            <span style={{ color: 'var(--orange)' }}>{'>'}</span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{typed}</span>
            <span className="typing-cursor" />
          </div>

          <p
            className="mb-10 leading-relaxed"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              maxWidth: 440,
              opacity: 0,
              animation: 'fadeInFromTop 0.8s ease 0.8s forwards',
            }}
          >
            Building intelligent systems and seamless web experiences. Passionate about AI/ML research and creating impactful software solutions.
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{ opacity: 0, animation: 'fadeInFromTop 0.8s ease 1s forwards' }}
          >
            <button className="btn-primary" onClick={scrollToProjects}>
              View Projects
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </div>

          <div
            className="flex items-center gap-6 mt-12"
            style={{ opacity: 0, animation: 'fadeInFromTop 0.8s ease 1.2s forwards' }}
          >
            {[
              { label: '3+', sub: 'Projects' },
              { label: '2+', sub: 'Years Coding' },
              { label: '4+', sub: 'Tech Stacks' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-xl font-bold neon-text">{stat.label}</div>
                <div className="text-xs" style={{ color: 'var(--text-secondary)', letterSpacing: '0.06em' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative" data-parallax="0.4" style={{ minHeight: 320 }}>
          <div style={{ position: 'relative', width: 320, height: 320 }}>
            <div
              className="orbit-ring"
              style={{ width: 280, height: 280, top: '50%', left: '50%', marginTop: -140, marginLeft: -140, animationDuration: '10s' }}
            >
              <div className="orbit-dot" />
            </div>
            <div
              className="orbit-ring"
              style={{ width: 360, height: 360, top: '50%', left: '50%', marginTop: -180, marginLeft: -180, animationDuration: '16s', animationDirection: 'reverse' }}
            >
              <div className="orbit-dot" style={{ background: 'var(--orange)' }} />
            </div>

            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="cube-wrapper">
                <div className="cube animate-rotate-cube">
                  <div className="cube-face front">🧠</div>
                  <div className="cube-face back">⚡</div>
                  <div className="cube-face left">🌐</div>
                  <div className="cube-face right">🔬</div>
                  <div className="cube-face top">💻</div>
                  <div className="cube-face bottom">🚀</div>
                </div>
              </div>
            </div>

            {[
              { label: 'AI/ML', color: '#00d4ff', x: -110, y: -80 },
              { label: 'Python', color: '#00ff88', x: 90, y: -100 },
              { label: 'React', color: '#ff6b35', x: -120, y: 80 },
              { label: 'ML', color: '#00d4ff', x: 100, y: 90 },
            ].map(tag => (
              <div
                key={tag.label}
                className="glass animate-float"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: tag.y,
                  marginLeft: tag.x,
                  padding: '6px 14px',
                  borderRadius: 20,
                  border: `1px solid ${tag.color}33`,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: tag.color,
                  whiteSpace: 'nowrap',
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {tag.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cyan)', opacity: 0.7 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>

      <style>{`
        @keyframes fadeInFromTop {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0,212,255,0.8);
          top: -4px;
          left: 50%;
          margin-left: -4px;
        }
      `}</style>
    </section>
  );
}
