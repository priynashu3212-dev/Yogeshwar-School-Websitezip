import { useEffect, useRef, useState } from 'react';

interface Props {
  onComplete: () => void;
}

type State = 'loading' | 'playing' | 'blocked' | 'error';

export default function VideoIntro({ onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<State>('loading');
  const [fading, setFading] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
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

    const titleTimer = setTimeout(() => setTitleVisible(true), 400);
    const skipTimer  = setTimeout(() => setShowSkip(true), 2500);

    const onCanPlay = () => {
      video.play()
        .then(() => setState('playing'))
        .catch(() => {
          // Autoplay blocked (common on low-end Android / data-saver mode)
          setState('blocked');
          setShowSkip(true);
        });
    };

    const onEnded = () => finish();

    const onError = () => {
      // Format not supported or network failure — skip gracefully
      setState('error');
      finish();
    };

    video.addEventListener('canplay', onCanPlay, { once: true });
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);

    // Kick off load
    video.load();

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
      clearTimeout(titleTimer);
      clearTimeout(skipTimer);
    };
  }, []);

  const handleTapToPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play()
      .then(() => setState('playing'))
      .catch(() => finish()); // still blocked — just skip
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden',
        background: '#000',
        transition: 'opacity 0.7s ease',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* ── Video ─────────────────────────────────────────── */}
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
        {/* MP4 first — universal support on all modern devices */}
        <source src="/intro.mp4" type="video/mp4" />
        {/* MOV fallback for Safari desktop */}
        <source src="/intro.mov" type="video/quicktime" />
      </video>

      {/* ── Vignette overlay ───────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.65) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── School title ───────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '7.5rem 1.5rem 0',
          transition: 'opacity 1s ease, transform 1s ease',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: 'none',
        }}
      >
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
            fontSize: 'clamp(0.65rem, 2.2vw, 0.85rem)',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            margin: '0 0 0.4rem',
            textShadow: '0 1px 8px rgba(0,0,0,0.9)',
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
            textShadow: '0 2px 18px rgba(0,0,0,0.95)',
            lineHeight: 1.2,
          }}
        >
          YOGESHWAR
        </h1>
        <h2
          style={{
            color: '#e5e7eb',
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(0.7rem, 2.8vw, 1.15rem)',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textAlign: 'center',
            textTransform: 'uppercase',
            margin: '0 0 0.6rem',
            textShadow: '0 2px 12px rgba(0,0,0,0.95)',
          }}
        >
          Senior Secondary School
        </h2>
        <p
          style={{
            color: '#f97316',
            fontSize: 'clamp(0.55rem, 1.8vw, 0.75rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            textShadow: '0 1px 6px rgba(0,0,0,0.9)',
            margin: 0,
          }}
        >
          Siwan, Kaithal — Est. Since 2009
        </p>
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

      {/* ── Tap-to-play overlay (autoplay blocked) ─────────── */}
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
            gap: '1rem',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(249,115,22,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 0 12px rgba(249,115,22,0.2)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span
            style={{
              color: '#fff',
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textShadow: '0 1px 6px rgba(0,0,0,0.8)',
            }}
          >
            Tap to Play
          </span>
        </button>
      )}

      {/* ── Skip button ────────────────────────────────────── */}
      {showSkip && state !== 'blocked' && (
        <button
          onClick={finish}
          style={{
            position: 'absolute',
            bottom: '1.75rem',
            right: '1.25rem',
            background: 'rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            padding: '0.4rem 1rem',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '0.78rem',
            letterSpacing: '0.04em',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        >
          Skip ▶
        </button>
      )}
    </div>
  );
}
