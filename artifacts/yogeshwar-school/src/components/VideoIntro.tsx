import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// School photos used as rotating backgrounds
import imgFront    from '@assets/yss_1784870965611.jpg';
import imgBuilding from '@assets/image_1785389592438.png';
import imgCampus   from '@assets/image_1784784644604.png';

interface Props {
  onComplete: () => void;
}

/* ── Opening chime ────────────────────────────────────── */
function playChime() {
  try {
    const ctx = new AudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.2;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.6);
      osc.start(t); osc.stop(t + 1.7);
    });
    // Soft pad
    [261.63, 329.63, 392].forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = freq;
      const t = ctx.currentTime;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.06, t + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 3);
      osc.start(t); osc.stop(t + 3.1);
    });
  } catch { /* silent fallback */ }
}

const BG_IMAGES = [imgFront, imgBuilding, imgCampus];
const LETTERS   = 'YOGESHWAR'.split('');

export default function VideoIntro({ onComplete }: Props) {
  const [phase, setPhase]     = useState(0);   // 0=mount 1=bg 2=logo 3=name 4=sub 5=btn
  const [bgIdx, setBgIdx]     = useState(0);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const t = (fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timerRef.current.push(id);
    return id;
  };

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setLeaving(true);
    setTimeout(onComplete, 900);
  };

  useEffect(() => {
    playChime();
    t(() => setPhase(1), 100);
    t(() => setPhase(2), 700);
    t(() => setPhase(3), 1300);
    t(() => setPhase(4), 2200);
    t(() => setPhase(5), 3200);
    // Auto-dismiss after 7 s
    t(finish, 7000);

    // Rotate background every 3 s
    const bgInterval = setInterval(() =>
      setBgIdx(i => (i + 1) % BG_IMAGES.length), 3000);

    return () => {
      timerRef.current.forEach(clearTimeout);
      clearInterval(bgInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: leaving ? 0 : 1 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', background: '#060d1f',
      }}
    >
      {/* ── Rotating background photos ──────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIdx}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${BG_IMAGES[bgIdx]})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Gradient overlay — deep navy at bottom, transparent center */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(6,13,31,0.82) 0%, rgba(6,13,31,0.55) 40%, rgba(6,13,31,0.75) 75%, rgba(6,13,31,0.96) 100%)',
      }} />

      {/* ── Main content card ────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center',
        padding: '0 1.5rem',
        gap: 0,
      }}>

        {/* School emblem / logo */}
        {phase >= 2 && (
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ marginBottom: '1.6rem', position: 'relative' }}
          >
            {/* Outer pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', inset: '-14px',
                borderRadius: '50%',
                border: '2px solid rgba(249,115,22,0.5)',
              }}
            />
            {/* Inner ring */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.2, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              style={{
                position: 'absolute', inset: '-6px',
                borderRadius: '50%',
                border: '1.5px solid rgba(249,115,22,0.4)',
              }}
            />
            {/* Logo circle */}
            <div style={{
              width: 90, height: 90,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.96)',
              boxShadow: '0 0 40px rgba(249,115,22,0.35), 0 8px 32px rgba(0,0,0,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img src="/favicon.png" alt="Yogeshwar School" style={{ width: 76, height: 76, objectFit: 'contain' }} />
            </div>
          </motion.div>
        )}

        {/* "YOGESHWAR" letter by letter */}
        {phase >= 3 && (
          <div style={{ display: 'flex', gap: 'clamp(2px, 0.8vw, 10px)', marginBottom: '0.5rem' }}>
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  textShadow: '0 4px 24px rgba(0,0,0,0.8)',
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        )}

        {/* Extending accent lines + subtitle */}
        {phase >= 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.55rem' }}
          >
            {/* Lines + tagline row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', width: '100%', justifyContent: 'center' }}>
              <motion.div
                initial={{ width: 0 }} animate={{ width: 'clamp(30px, 8vw, 80px)' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ height: 1.5, background: '#f97316', flexShrink: 0 }}
              />
              <motion.p
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 'clamp(0.7rem, 2.2vw, 1.05rem)',
                  color: '#d1d5db',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                  margin: 0,
                }}
              >
                Senior Secondary School
              </motion.p>
              <motion.div
                initial={{ width: 0 }} animate={{ width: 'clamp(30px, 8vw, 80px)' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ height: 1.5, background: '#f97316', flexShrink: 0 }}
              />
            </div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                color: '#f97316',
                fontSize: 'clamp(0.6rem, 1.8vw, 0.78rem)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                textShadow: '0 1px 6px rgba(0,0,0,0.8)',
                margin: '0.1rem 0 0',
              }}
            >
              Siwan, Kaithal &nbsp;·&nbsp; Est. 2009 &nbsp;·&nbsp; CBSE Affiliated
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.65)',
                fontSize: 'clamp(0.7rem, 2vw, 0.95rem)',
                letterSpacing: '0.05em',
                margin: '0.3rem 0 0',
                textShadow: '0 2px 8px rgba(0,0,0,0.7)',
              }}
            >
              "Empowering Minds, Shaping Futures"
            </motion.p>
          </motion.div>
        )}

        {/* Enter button */}
        {phase >= 5 && (
          <motion.button
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onClick={finish}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginTop: '2.2rem',
              padding: '0.75rem 2.4rem',
              background: 'transparent',
              border: '1.5px solid rgba(249,115,22,0.8)',
              borderRadius: '999px',
              color: '#fff',
              fontSize: 'clamp(0.75rem, 2vw, 0.88rem)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'Georgia, serif',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 0 24px rgba(249,115,22,0.15)',
              transition: 'background 0.25s, box-shadow 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(249,115,22,0.22)';
              e.currentTarget.style.boxShadow = '0 0 36px rgba(249,115,22,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(249,115,22,0.15)';
            }}
          >
            Enter Site &nbsp;›
          </motion.button>
        )}
      </div>

      {/* ── Bottom bar ───────────────────────────────────── */}
      {phase >= 4 && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            position: 'absolute', bottom: '1.5rem',
            left: 0, right: 0, zIndex: 2,
            display: 'flex', justifyContent: 'center',
          }}
        >
          <p style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: 'clamp(0.5rem, 1.4vw, 0.62rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            Code: 1530656 &nbsp;·&nbsp; Affiliated to CBSE, New Delhi
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
