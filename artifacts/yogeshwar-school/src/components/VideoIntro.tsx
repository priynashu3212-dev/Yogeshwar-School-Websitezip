import { useEffect, useRef, useState } from 'react';

export default function VideoIntro({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);

  const finish = () => {
    setFading(true);
    setTimeout(onComplete, 600);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay blocked — skip intro
      finish();
    });

    const handleEnded = () => finish();
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s ease',
        opacity: fading ? 0 : 1,
      }}
    >
      <video
        ref={videoRef}
        src="/intro.mov"
        playsInline
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
      {/* Skip button */}
      <button
        onClick={finish}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.4)',
          color: '#fff',
          padding: '0.5rem 1.25rem',
          borderRadius: '999px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          backdropFilter: 'blur(4px)',
        }}
      >
        Skip ▶
      </button>
    </div>
  );
}
