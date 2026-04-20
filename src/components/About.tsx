import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'Python', level: 88 },
  { name: 'AI / Machine Learning', level: 82 },
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'React / Web Dev', level: 80 },
  { name: 'Data Structures & Algorithms', level: 78 },
  { name: 'SQL / Databases', level: 72 },
];

export function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 80% 50%, rgba(0,212,255,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest mb-3" style={{ color: 'var(--cyan)', letterSpacing: '0.25em' }}>
              WHO I AM
            </p>
            <h2 className="section-title">About Me</h2>
            <div className="mx-auto mt-4" style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-shrink-0 flex flex-col items-center gap-6">
              <div className="about-frame">
                <div className="about-frame-inner">
                  AJ
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-lg transition-all duration-300 hover:scale-110"
                  style={{ color: 'var(--cyan)', border: '1px solid rgba(0,212,255,0.2)' }}
                  aria-label="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-lg transition-all duration-300 hover:scale-110"
                  style={{ color: 'var(--cyan)', border: '1px solid rgba(0,212,255,0.2)' }}
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex-1">
              <div className="glass rounded-2xl p-8 mb-8" style={{ border: '1px solid rgba(0,212,255,0.12)' }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Student & Developer
                </h3>
                <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  Hi! I'm Arpit Jadoun, a passionate developer with a strong focus on Artificial Intelligence and Machine Learning. I combine deep technical knowledge with creative problem-solving to build impactful solutions.
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  From designing energy-efficient algorithms for wireless sensor networks to building AI-powered recommendation systems, I love tackling complex challenges at the intersection of data, intelligence, and technology.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {['AI/ML', 'Python', 'JavaScript', 'React', 'Node.js', 'NumPy', 'TensorFlow', 'SQL'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-widest mb-6" style={{ color: 'var(--text-secondary)', letterSpacing: '0.15em' }}>
                  CORE SKILLS
                </h3>
                <div className="flex flex-col gap-4">
                  {skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                        <span className="text-sm" style={{ color: 'var(--cyan)' }}>{skill.level}%</span>
                      </div>
                      <div
                        style={{
                          height: 6,
                          background: 'rgba(255,255,255,0.06)',
                          borderRadius: 4,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          className="progress-fill"
                          data-width={`${skill.level}%`}
                          style={{ transitionDelay: `${i * 0.1}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
