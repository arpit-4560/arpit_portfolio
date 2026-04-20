import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  lightMode: boolean;
  onToggleLight: () => void;
}

const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

export function Navbar({ lightMode, onToggleLight }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (section: string) => {
    const id = section.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled
            ? lightMode
              ? 'rgba(240,244,255,0.85)'
              : 'rgba(0,0,16,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-glass)' : 'none',
          paddingTop: scrolled ? '0' : '0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="text-lg font-bold tracking-widest neon-text"
            style={{ letterSpacing: '0.2em', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            AJ
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onToggleLight}
              className="p-2 rounded-full glass transition-all duration-300 hover:scale-110"
              style={{ color: 'var(--cyan)', border: '1px solid var(--border-glass)', cursor: 'pointer' }}
              aria-label="Toggle theme"
            >
              {lightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden glass px-6 py-4 flex flex-col gap-4"
            style={{ borderTop: '1px solid var(--border-glass)' }}
          >
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="nav-link text-left py-2"
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
