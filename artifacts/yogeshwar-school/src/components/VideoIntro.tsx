import { useEffect, useRef, useState } from 'react';

interface Props {
  onComplete: () => void;
}

export default function VideoIntro({ onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const finish = () => {
    if (fading) return;
    setFading(true);
    setTimeout(onComplete, 800);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Show title after a short delay
    const titleTimer = setTimeout(() => setTitleVisible(true), 400);
    // Show skip button after 2.5 s
    const skipTimer = setTimeout(() => setShowSkip(true), 2500);

    video.play().catch(() => finish());

    const handleEnded = () => finish();
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
      clearTimeout(titleTimer);
      clearTimeout(skipTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        transition: 'opacity 0.8s ease',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* ── Video fills the screen ─────────────────────── */}
      <video
        ref={videoRef}
        src="/intro.mov"
        playsInline
        muted
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* ── Dark vignette overlay ──────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* ── School name title ──────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2.5rem 1.5rem 0',
          transition: 'opacity 1s ease, transform 1s ease',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        {/* Decorative top line */}
        <div
          style={{
            width: titleVisible ? '80px' : '0px',
            height: '2px',
            background: '#f97316',
            marginBottom: '0.9rem',
            transition: 'width 1.2s ease 0.3s',
          }}
        />
        <p
          style={{
            color: '#f97316',
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(0.7rem, 2.2vw, 0.85rem)',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            margin: '0 0 0.4rem',
            textShadow: '0 1px 6px rgba(0,0,0,0.8)',
          }}
        >
          Welcome to
        </p>
        <h1
          style={{
            color: '#ffffff',
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.3rem, 4.5vw, 2.6rem)',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textAlign: 'center',
            margin: '0 0 0.3rem',
            textShadow: '0 2px 16px rgba(0,0,0,0.9)',
            lineHeight: 1.2,
          }}
        >
          YOGESHWAR
        </h1>
        <h2
          style={{
            color: '#e5e7eb',
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(0.75rem, 2.8vw, 1.15rem)',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textAlign: 'center',
            textTransform: 'uppercase',
            margin: '0 0 0.6rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.9)',
          }}
        >
          Senior Secondary School
        </h2>
        <p
          style={{
            color: '#f97316',
            fontSize: 'clamp(0.6rem, 1.8vw, 0.75rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            textShadow: '0 1px 6px rgba(0,0,0,0.8)',
            margin: 0,
          }}
        >
          Siwan, Kaithal — Est. Since 2009
        </p>
        {/* Decorative bottom line */}
        <div
          style={{
            width: titleVisible ? '80px' : '0px',
            height: '2px',
            background: '#f97316',
            marginTop: '0.9rem',
            transition: 'width 1.2s ease 0.3s',
          }}
        />
      </div>

      {/* ── Skip button ────────────────────────────────── */}
      {showSkip && (
        <button
          onClick={finish}
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '1.5rem',
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.35)',
            color: '#fff',
            padding: '0.45rem 1.1rem',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
            backdropFilter: 'blur(6px)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e =>
            ((e.target as HTMLButtonElement).style.background =
              'rgba(249,115,22,0.6)')
          }
          onMouseLeave={e =>
            ((e.target as HTMLButtonElement).style.background =
              'rgba(0,0,0,0.45)')
          }
        >
          Skip ▶
        </button>
      )}
    </div>
  );
}
