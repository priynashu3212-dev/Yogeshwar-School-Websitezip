import { useEffect, useRef, useState } from 'react';

interface Props {
  onComplete: () => void;
}

type State = 'loading' | 'playing' | 'blocked' | 'error';

/* ── Opening chime (Web Audio API – no file needed) ── */
function playChime() {
  try {
    const ctx = new AudioContext();
    // C5 – E5 – G5 ascending arpeggio
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.18;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.22, t + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.4);
      osc.start(t);
      osc.stop(t + 1.5);
    });
    // Soft pad chord underneath
    [523.25, 659.25, 783.99].forEach((freq) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq / 2; // one octave lower
      const t = ctx.currentTime;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.07, t + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 2.4);
      osc.start(t);
      osc.stop(t + 2.5);
    });
  } catch {
    // AudioContext blocked — silent fallback
  }
}

export default function VideoIntro({ onComplete }: Props) {
  const videoRef  = useRef<HTMLVideoElement>(null);
  const [state, setState]           = useState<State>('loading');
  const [fading, setFading]         = useState(false);
  const [showSkip, setShowSkip]     = useState(false);
  const [titleVisible, setTitle]    = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setFading(true);
    setTimeout(onComplete, 700);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Chime + title animation on mount
    playChime();
    const titleTimer = setTimeout(() => setTitle(true), 300);
    const skipTimer  = setTimeout(() => setShowSkip(true), 2500);

    const onCanPlay = () => {
      video.play()
        .then(() => setState('playing'))
        .catch(() => { setState('blocked'); setShowSkip(true); });
    };
    const onEnded = () => finish();
    const onError = () => { setState('error'); finish(); };

    video.addEventListener('canplay', onCanPlay, { once: true });
    video.addEventListener('ended',   onEnded);
    video.addEventListener('error',   onError);
    video.load();

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('ended',   onEnded);
      video.removeEventListener('error',   onError);
      clearTimeout(titleTimer);
      clearTimeout(skipTimer);
    };
  }, []);

  const handleTapToPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setState('playing')).catch(() => finish());
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        /* Semi-transparent — blurred website shows through */
        background: 'rgba(10, 18, 40, 0.72)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        transition: 'opacity 0.7s ease',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* ── Title block (above the video) ─────────────────── */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '1.25rem',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(-16px)',
        }}
      >
        {/* Top accent line */}
        <div style={{
          width: titleVisible ? '60px' : '0',
          height: '2px',
          background: '#f97316',
          margin: '0 auto 0.65rem',
          transition: 'width 1s ease 0.2s',
        }} />

        <p style={{
          color: '#f97316',
          fontSize: 'clamp(0.6rem, 1.8vw, 0.75rem)',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          margin: '0 0 0.3rem',
          textShadow: '0 1px 8px rgba(0,0,0,0.9)',
          fontFamily: 'Georgia, serif',
        }}>
          Welcome to
        </p>

        <h1 style={{
          color: '#fff',
          fontSize: 'clamp(1.5rem, 5vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '0.08em',
          fontFamily: 'Georgia, serif',
          margin: '0 0 0.2rem',
          textShadow: '0 2px 20px rgba(0,0,0,0.95)',
          lineHeight: 1.15,
        }}>
          YOGESHWAR
        </h1>

        <h2 style={{
          color: '#d1d5db',
          fontSize: 'clamp(0.65rem, 2.4vw, 1rem)',
          fontWeight: 400,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          fontFamily: 'Georgia, serif',
          margin: '0 0 0.25rem',
          textShadow: '0 1px 10px rgba(0,0,0,0.9)',
        }}>
          Senior Secondary School
        </h2>

        <p style={{
          color: '#f97316',
          fontSize: 'clamp(0.5rem, 1.5vw, 0.65rem)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          margin: 0,
          textShadow: '0 1px 6px rgba(0,0,0,0.9)',
        }}>
          Siwan, Kaithal
        </p>

        {/* Bottom accent line */}
        <div style={{
          width: titleVisible ? '60px' : '0',
          height: '2px',
          background: '#f97316',
          margin: '0.65rem auto 0',
          transition: 'width 1s ease 0.2s',
        }} />
      </div>

      {/* ── Video card ─────────────────────────────────────── */}
      <div
        style={{
          width: '100%',
          maxWidth: 'min(700px, 92vw)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: '0 20px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)',
          background: '#000',
          /* 3:2 aspect keeps original proportions */
          aspectRatio: '3/2',
          position: 'relative',
          transition: 'opacity 0.9s ease 0.2s',
          opacity: titleVisible ? 1 : 0,
        }}
      >
        <video
          ref={videoRef}
          poster="/intro-poster.jpg"
          playsInline
          muted
          preload="auto"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/intro.mp4"  type="video/mp4" />
          <source src="/intro.mov"  type="video/quicktime" />
        </video>

        {/* Tap-to-play overlay */}
        {state === 'blocked' && (
          <button
            onClick={handleTapToPlay}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              background: 'rgba(0,0,0,0.45)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: '64px', height: '64px',
              borderRadius: '50%',
              background: 'rgba(249,115,22,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 0 14px rgba(249,115,22,0.18)',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span style={{ color: '#fff', fontSize: '0.85rem', letterSpacing: '0.08em' }}>
              Tap to Play
            </span>
          </button>
        )}
      </div>

      {/* ── Skip button ────────────────────────────────────── */}
      {showSkip && state !== 'blocked' && (
        <button
          onClick={finish}
          style={{
            marginTop: '1.1rem',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff',
            padding: '0.4rem 1.2rem',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '0.78rem',
            letterSpacing: '0.06em',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(249,115,22,0.5)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
        >
          Skip ▶
        </button>
      )}
    </div>
  );
}
