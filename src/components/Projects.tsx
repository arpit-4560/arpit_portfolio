import { useRef, useEffect, useState } from 'react';
import { ExternalLink, Cpu, Globe, Layers, X, Github } from 'lucide-react';

const projects = [
  { title: 'Energy-Efficient Node Localization', subtitle: 'Wireless Sensor Networks', description: 'Developed an optimized algorithm for node localization in WSNs that significantly reduces energy consumption.', longDescription: 'This project focuses on reducing energy usage in Wireless Sensor Networks by implementing an optimized trilateration algorithm. Using RSSI-based distance estimation, the system achieves accurate indoor and outdoor node positioning while minimizing battery consumption.', tech: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Network Simulation'], icon: Cpu, color: '#00d4ff', gradient: 'linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.02) 100%)', github: 'https://github.com/arpit-4560', demo: '#' },
  { title: 'AI Hand Gesture Control', subtitle: 'Computer Vision & AI Project', description: 'An AI-based hand gesture recognition system that uses computer vision to detect and interpret human hand movements in real-time.', longDescription: 'Built using OpenCV and MediaPipe, this system detects and interprets human hand gestures in real-time. It enables touchless control of applications and devices. The model processes webcam input frame-by-frame and maps gestures to system commands.', tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning', 'Computer Vision'], icon: Globe, color: '#ff6b35', gradient: 'linear-gradient(135deg, rgba(255,107,53,0.12) 0%, rgba(255,107,53,0.02) 100%)', github: 'https://github.com/arpit-4560', demo: '#' },
  { title: 'Media Recommendation System', subtitle: 'AI-Based Intelligence', description: 'AI-powered recommendation engine that analyzes user behavior and collaborative filtering to suggest personalized media.', longDescription: 'This recommendation engine combines collaborative filtering and content-based filtering. It analyzes user watch history, ratings, and content metadata to deliver highly personalized suggestions. Built with Scikit-learn and Flask.', tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Flask'], icon: Layers, color: '#00ff88', gradient: 'linear-gradient(135deg, rgba(0,255,136,0.12) 0%, rgba(0,255,136,0.02) 100%)', github: 'https://github.com/arpit-4560', demo: '#' },
];

function useCardAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; observer.disconnect(); }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ProjectModal({ project, onClose }: { project: (typeof projects)[0] | null; onClose: () => void }) {
  if (!project) return null;
  const Icon = project.icon;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(6px)' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)', border: `1px solid ${project.color}30`, borderRadius: '20px', padding: '40px', maxWidth: '600px', width: '100%', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '6px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center' }}>
          <X size={18} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{ padding: '12px', borderRadius: '12px', background: `${project.color}15`, border: `1px solid ${project.color}25` }}>
            <Icon size={28} style={{ color: project.color }} />
          </div>
          <div>
            <h2 style={{ color: 'white', fontSize: '22px', fontWeight: 700, margin: 0 }}>{project.title}</h2>
            <p style={{ color: project.color, fontSize: '12px', fontWeight: 600, margin: 0 }}>{project.subtitle}</p>
          </div>
        </div>
        <div style={{ height: '1px', background: `${project.color}20`, marginBottom: '20px' }} />
        <p style={{ color: '#a0aec0', lineHeight: 1.8, marginBottom: '24px', fontSize: '15px' }}>{project.longDescription}</p>
        <div style={{ marginBottom: '28px' }}>
          <p style={{ color: 'white', fontWeight: 600, marginBottom: '10px', fontSize: '14px' }}>Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.tech.map((t) => (
              <span key={t} style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25`, borderRadius: '999px', padding: '4px 12px', fontSize: '12px' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none', fontSize: '14px' }}>
            <Github size={16} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', background: `${project.color}20`, border: `1px solid ${project.color}40`, color: project.color, textDecoration: 'none', fontSize: '14px' }}>
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }: { project: (typeof projects)[0]; index: number; onOpen: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const animRef = useCardAnimation();
  const Icon = project.icon;
  const setRefs = (el: HTMLDivElement | null) => {
    (cardRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    (animRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  };
  return (
    <div ref={setRefs} className="tilt-card" style={{ transitionDelay: `${index * 0.15}s` }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="glass rounded-2xl p-8 h-full" style={{ background: project.gradient, border: `1px solid ${project.color}20`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: `radial-gradient(circle, ${project.color}12 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div className="tilt-inner">
          <div className="flex items-start justify-between mb-6">
            <div className="p-3 rounded-xl" style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}>
              <Icon size={24} style={{ color: project.color }} />
            </div>
            <button onClick={onOpen} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center' }}>
              <ExternalLink size={16} />
            </button>
          </div>
          <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
          <p className="text-xs font-semibold mb-4" style={{ color: project.color }}>{project.subtitle}</p>
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25` }}>{t}</span>
            ))}
          </div>
          <button onClick={onOpen} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: `1px solid ${project.color}40`, background: 'transparent', color: project.color, cursor: 'pointer', fontSize: '14px', fontWeight: 600, letterSpacing: '0.08em' }}>
            VIEW PROJECT
          </button>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(255,107,53,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest mb-3" style={{ color: 'var(--cyan)', letterSpacing: '0.25em' }}>WHAT I'VE BUILT</p>
          <h2 className="section-title">Projects</h2>
          <div className="mx-auto mt-4" style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onOpen={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}