import { useEffect, useState } from 'react';

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFade(true);
            setTimeout(onDone, 600);
          }, 200);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #000010 0%, #000820 100%)',
        opacity: fade ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: fade ? 'none' : 'all',
      }}
    >
      <div className="flex flex-col items-center gap-10">
        <div style={{ position: 'relative', width: 120, height: 120 }}>
          <div
            className="cube-wrapper"
            style={{ width: 120, height: 120 }}
          >
            <div className="cube" style={{ animationDuration: '4s' }}>
              <div className="cube-face front" style={{ width: 120, height: 120, transform: 'rotateY(0deg) translateZ(60px)', fontSize: '2rem' }}>⬡</div>
              <div className="cube-face back" style={{ width: 120, height: 120, transform: 'rotateY(180deg) translateZ(60px)', fontSize: '2rem' }}>⬡</div>
              <div className="cube-face left" style={{ width: 120, height: 120, transform: 'rotateY(-90deg) translateZ(60px)', fontSize: '2rem' }}>⬡</div>
              <div className="cube-face right" style={{ width: 120, height: 120, transform: 'rotateY(90deg) translateZ(60px)', fontSize: '2rem' }}>⬡</div>
              <div className="cube-face top" style={{ width: 120, height: 120, transform: 'rotateX(90deg) translateZ(60px)', fontSize: '2rem' }}>⬡</div>
              <div className="cube-face bottom" style={{ width: 120, height: 120, transform: 'rotateX(-90deg) translateZ(60px)', fontSize: '2rem' }}>⬡</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div
            className="text-2xl font-bold tracking-widest mb-2"
            style={{ color: 'rgba(0,212,255,0.9)', letterSpacing: '0.3em' }}
          >
            ARPIT JADOUN
          </div>
          <div
            className="text-xs tracking-widest"
            style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.25em' }}
          >
            PORTFOLIO
          </div>
        </div>

        <div className="flex gap-2 items-end" style={{ height: 50 }}>
          {[0, 0.1, 0.2, 0.3, 0.4].map((delay, i) => (
            <div
              key={i}
              className="loading-bar"
              style={{ animationDelay: `${delay}s`, animationName: 'loadingPulse', animationDuration: '1s', animationIterationCount: 'infinite' }}
            />
          ))}
        </div>

        <div style={{ width: 240 }}>
          <div
            style={{
              height: 2,
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${Math.min(progress, 100)}%`,
                background: 'linear-gradient(90deg, #00d4ff, #00ff88)',
                boxShadow: '0 0 10px rgba(0,212,255,0.6)',
                borderRadius: 2,
                transition: 'width 0.1s ease',
              }}
            />
          </div>
          <div
            className="text-right mt-2 text-xs"
            style={{ color: 'rgba(0,212,255,0.7)', letterSpacing: '0.08em' }}
          >
            {Math.min(Math.round(progress), 100)}%
          </div>
        </div>
      </div>
    </div>
  );
}
