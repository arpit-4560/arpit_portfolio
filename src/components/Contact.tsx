import { useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="section-animate">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest mb-3" style={{ color: 'var(--cyan)', letterSpacing: '0.25em' }}>
              GET IN TOUCH
            </p>
            <h2 className="section-title">Contact Me</h2>
            <div className="mx-auto mt-4" style={{ width: 60, height: 2, background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Let's work together
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  Whether you have a project idea, a research collaboration, or just want to connect — I'm always open to interesting conversations.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { icon: Mail, label: 'Email', value: 'arpitjadoun55@email.com', color: '#00d4ff' },
                  { icon: MapPin, label: 'Location', value: 'India', color: '#ff6b35' },
                ].map(item => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div
                        className="p-3 rounded-xl glass"
                        style={{ border: `1px solid ${item.color}25` }}
                      >
                        <Icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <div className="text-xs" style={{ color: 'var(--text-secondary)', letterSpacing: '0.08em' }}>
                          {item.label}
                        </div>
                        <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <p className="text-xs tracking-widest mb-4" style={{ color: 'var(--text-secondary)', letterSpacing: '0.15em' }}>
                  FIND ME ON
                </p>
                <div className="flex gap-4">
                  {[
                    {
                      href: 'https://github.com/arpit-4560',
                      Icon: Github,
                      label: 'GitHub',
                      color: '#00d4ff',
                    },
                    {
                      href: 'https://www.linkedin.com/in/arpit-singh-2663902b3',
                      Icon: Linkedin,
                      label: 'LinkedIn',
                      color: '#ff6b35',
                    },
                  ].map(({ href, Icon, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 glass px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        color,
                        border: `1px solid ${color}25`,
                        fontSize: '0.85rem',
                        fontWeight: 500,
                      }}
                      aria-label={label}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div
                className="glass rounded-2xl p-8 relative overflow-hidden"
                style={{ border: '1px solid rgba(0,212,255,0.12)' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 250,
                    height: 250,
                    background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />

                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-xl font-semibold mb-2 neon-text">Message Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs tracking-widest mb-2" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
                          NAME
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest mb-2" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
                          EMAIL
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-widest mb-2" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
                        MESSAGE
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="Tell me about your project or idea..."
                        rows={5}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary flex items-center justify-center gap-2"
                      disabled={sending}
                      style={{ opacity: sending ? 0.7 : 1 }}
                    >
                      {sending ? (
                        <>
                          <div
                            style={{
                              width: 14,
                              height: 14,
                              border: '2px solid rgba(0,212,255,0.3)',
                              borderTopColor: 'var(--cyan)',
                              borderRadius: '50%',
                              animation: 'spinSlow 0.6s linear infinite',
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 text-center" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
        <div
          className="mx-auto mb-8"
          style={{ width: '100%', maxWidth: 400, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }}
        />
        <p>
          Designed & built by{' '}
          <span className="neon-text font-semibold">Arpit Jadoun</span>
        </p>
        <p className="mt-2 text-xs" style={{ color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
          {new Date().getFullYear()} · All rights reserved
        </p>
      </footer>
    </section>
  );
}
