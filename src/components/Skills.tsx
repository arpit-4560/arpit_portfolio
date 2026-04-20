import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillGroups = [
  {
    category: 'AI & Machine Learning',
    color: '#00d4ff',
    skills: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'Scikit-learn', icon: '📊' },
      { name: 'OpenCV', icon: '👁' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'Matplotlib', icon: '📈' },
    ],
  },
  {
    category: 'Web Development',
    color: '#ff6b35',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟩' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'HTML/CSS', icon: '🎨' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'Tailwind', icon: '💨' },
    ],
  },
  {
    category: 'Languages & Tools',
    color: '#00ff88',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '🟡' },
      { name: 'Git / GitHub', icon: '🔀' },
      { name: 'SQL', icon: '🗄️' },
      { name: 'Linux', icon: '🐧' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
];

export function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="relative py-32 overflow-hidden grid-bg">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest mb-3" style={{ color: 'var(--cyan)', letterSpacing: '0.25em' }}>
              WHAT I KNOW
            </p>
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="mx-auto mt-4" style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
          </div>

          <div className="flex flex-col gap-12">
            {skillGroups.map((group, gi) => (
              <div key={group.category} className="section-animate" style={{ transitionDelay: `${gi * 0.15}s` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div style={{ width: 3, height: 24, background: group.color, borderRadius: 2, boxShadow: `0 0 8px ${group.color}` }} />
                  <h3
                    className="text-sm font-semibold tracking-widest"
                    style={{ color: group.color, letterSpacing: '0.15em' }}
                  >
                    {group.category.toUpperCase()}
                  </h3>
                  <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${group.color}30, transparent)` }} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {group.skills.map((skill, si) => (
                    <div
                      key={skill.name}
                      className="skill-card glass rounded-xl p-4 text-center section-animate"
                      style={{
                        border: `1px solid ${group.color}18`,
                        transitionDelay: `${gi * 0.1 + si * 0.05}s`,
                        cursor: 'default',
                      }}
                      data-hover
                    >
                      <div className="text-3xl mb-3">{skill.icon}</div>
                      <div
                        className="text-xs font-medium"
                        style={{ color: 'var(--text-secondary)', letterSpacing: '0.04em', lineHeight: 1.3 }}
                      >
                        {skill.name}
                      </div>

                      <div
                        className="mx-auto mt-3"
                        style={{
                          width: 20,
                          height: 2,
                          borderRadius: 1,
                          background: group.color,
                          boxShadow: `0 0 6px ${group.color}`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 glass rounded-2xl p-8" style={{ border: '1px solid rgba(0,212,255,0.12)' }}>
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Currently Exploring
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['Large Language Models', 'Computer Vision', 'Deep Reinforcement Learning', 'WebAssembly', 'Rust', 'Cloud ML (AWS/GCP)'].map(item => (
                <span
                  key={item}
                  className="tag"
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
