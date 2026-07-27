import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion, animate, useInView, type Variants } from 'framer-motion';
import { ArrowRight, ArrowDown, BookOpen, Users, Trophy, MonitorPlay, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { Link } from 'wouter';

import imgBuilding from '@assets/image_1784784644604.png';
import imgLibrary from '@assets/image_1784784678674.png';
import imgDance from '@assets/image_1784784658855.png';
import imgAdd2 from '@assets/image_1784784713330.png';
import imgMusicRoom from '@assets/image_1784784692373.png';
import imgStaff from '@assets/image_1784870708131.png';
import imgSchoolFront from '@assets/yss_1784870965611.jpg';
import imgPhysicsLab from '@assets/image_1784871279419.png';
import imgChemLab from '@assets/image_1784871296800.png';
import imgBioLab from '@assets/image_1784871308616.png';
import imgLibraryStudents from '@assets/image_1784871323347.png';

/* ── Animated counter ────────────────────────────────── */
const Counter = ({
  from = 0,
  to,
  duration = 2.2,
  suffix = '',
  prefix = '',
}: {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) => {
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-80px' });

  React.useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate(value) {
        if (!nodeRef.current) return;
        const formatted =
          to % 1 !== 0 ? value.toFixed(1) : Math.floor(value).toString();
        nodeRef.current.textContent = prefix + formatted + suffix;
      },
    });
    return () => controls.stop();
  }, [isInView, from, to, duration, suffix, prefix]);

  return (
    <span ref={nodeRef}>
      {prefix}
      {from}
      {suffix}
    </span>
  );
};

/* ── Hero slideshow images ───────────────────────────── */
const heroSlides = [
  { src: imgSchoolFront,     label: 'Yogeshwar School' },
  { src: imgBuilding,        label: 'Our Campus'       },
  { src: imgPhysicsLab,      label: 'Physics Lab'      },
  { src: imgChemLab,         label: 'Chemistry Lab'    },
  { src: imgBioLab,          label: 'Biology Lab'      },
  { src: imgLibraryStudents, label: 'Library'          },
  { src: imgStaff,           label: 'Our Team'         },
];

/* ── Stagger variants ────────────────────────────────── */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

/* ══════════════════════════════════════════════════════ */
export default function Home() {
  const [slideIndex, setSlideIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* ── 1. HERO ──────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0F2044] pt-20">
        {/* Background slideshow */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{ opacity: i === slideIndex ? 1 : 0 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            >
              <img
                src={slide.src}
                alt={slide.label}
                className="w-full h-full object-cover object-center scale-105"
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-[#0F2044]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2044]/90 via-[#0F2044]/20 to-transparent" />
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === slideIndex
                  ? 'w-8 h-2.5 bg-[#F97316]'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Noise overlay */}
        <div className="absolute inset-0 z-0 opacity-30 [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.4%22/%3E%3C/svg%3E')] mix-blend-overlay" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={item} className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                Admissions Open 2024-25
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 tracking-tight"
            >
              Empowering Minds,{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(90deg,#F97316,#FBBF24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Shaping Futures.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto font-medium leading-relaxed"
            >
              Yogeshwar Sr. Sec. School, Siwan — where Indian values meet
              world-class modern education.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F97316] text-white font-bold rounded-full shadow-[0_0_40px_-10px_rgba(249,115,22,0.7)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.9)] hover:scale-105 transition-all duration-300"
              >
                Enquire Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/25 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <ArrowDown className="w-7 h-7" />
        </motion.div>
      </section>

      {/* ── 2. ANIMATED STATS ─────────────────────────────── */}
      <section className="py-0 bg-white relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {[
            {
              icon: Award,
              value: 100,
              suffix: '%',
              label: 'CBSE Affiliated',
              color: '#F97316',
            },
            {
              icon: Users,
              value: 30,
              suffix: '+',
              label: 'Experienced Staff',
              color: '#0F2044',
            },
            {
              icon: Trophy,
              value: 92.5,
              suffix: '%',
              label: 'Top Board Merit',
              color: '#F97316',
            },
            {
              icon: MonitorPlay,
              value: 100,
              suffix: '%',
              label: 'Smart Classes',
              color: '#0F2044',
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center py-14 px-6 group hover:bg-[#0F2044] transition-colors duration-500"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-500 group-hover:bg-white/10"
                style={{ background: `${stat.color}18` }}
              >
                <stat.icon
                  className="w-7 h-7 transition-colors duration-500 group-hover:text-[#F97316]"
                  style={{ color: stat.color }}
                />
              </div>
              <p
                className="text-5xl md:text-6xl font-extrabold leading-none mb-3 transition-colors duration-500 group-hover:text-white"
                style={{ color: stat.color }}
              >
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-500 group-hover:text-white/70 transition-colors duration-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. ABOUT TEASER ──────────────────────────────── */}
      <section className="py-32 md:py-44 bg-[#FAFAF7] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={container}
            >
              <motion.div variants={item} className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#F97316]" />
                <span className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-sm">
                  Our Heritage
                </span>
              </motion.div>
              <motion.h2
                variants={item}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F2044] mb-8 leading-[1.05]"
              >
                A Legacy of{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg,#F97316,#FBBF24)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  True Excellence.
                </span>
              </motion.h2>
              <motion.p
                variants={item}
                className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium"
              >
                At Yogeshwar Sr. Sec. School, education goes beyond textbooks.
                We craft an environment where academic rigor meets character
                building — ensuring every student develops into a confident,
                responsible global citizen.
              </motion.p>
              <motion.ul variants={container} className="space-y-5 mb-12">
                {[
                  'Nurturing environment for all-round development',
                  'State-of-the-art infrastructure & science labs',
                  'Deep focus on moral values and cultural heritage',
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="flex items-start gap-4 text-gray-700 font-semibold text-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#F97316] shrink-0 mt-0.5" />
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={item}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-[#0F2044] font-bold hover:text-[#F97316] transition-colors text-xl"
                >
                  Read Principal's Message
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Image collage */}
            <div className="relative h-[640px] hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-[80%] h-[68%] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={imgLibrary}
                  alt="Library"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 w-[62%] h-[58%] rounded-3xl overflow-hidden shadow-2xl border-8 border-[#FAFAF7]"
              >
                <img
                  src={imgDance}
                  alt="Cultural activities"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#F97316] rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FACILITIES BENTO ───────────────────────────── */}
      <section className="py-32 md:py-44 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#F97316]" />
              <span className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-sm">
                Infrastructure
              </span>
              <div className="h-px w-10 bg-[#F97316]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0F2044] mb-6 leading-[1.05]">
              World-Class Facilities
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium">
              An ecosystem built to inspire creativity, support critical
              thinking, and build excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[220px]">
            {/* Large Smart Classroom card */}
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(249,115,22,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="md:col-span-2 row-span-2 bg-[#FAFAF7] rounded-3xl p-10 border border-gray-100 group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#F97316]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 group-hover:bg-[#F97316]/20 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-[#F97316] text-white flex items-center justify-center mb-6">
                  <MonitorPlay className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0F2044] mb-4 group-hover:text-[#F97316] transition-colors">
                    Smart Classrooms
                  </h3>
                  <p className="text-gray-500 font-medium text-lg leading-relaxed">
                    Fully equipped digital classrooms that make learning
                    interactive, visual, and highly engaging for modern students.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Library */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-[#0F2044] rounded-3xl p-8 group overflow-hidden relative cursor-pointer"
            >
              <BookOpen className="w-9 h-9 text-[#F97316] mb-5" />
              <h3 className="text-xl font-bold text-white mb-2">Rich Library</h3>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                Vast collection of academic texts and literature.
              </p>
            </motion.div>

            {/* Campus photo card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={imgAdd2}
                alt="Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2044]/90 via-[#0F2044]/20 to-transparent" />
              <div className="absolute bottom-7 left-6 right-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Spacious Campus
                </h3>
                <p className="text-white/65 text-sm font-medium">
                  Safe and inspiring.
                </p>
              </div>
            </motion.div>

            {/* A.C. Playway */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-[#FAFAF7] rounded-3xl p-8 border border-gray-100 group cursor-pointer"
            >
              <Users className="w-9 h-9 text-[#0F2044] mb-5 group-hover:text-[#F97316] transition-colors" />
              <h3 className="text-xl font-bold text-[#0F2044] mb-2">
                A.C. Playway
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                Climate-controlled comfort for early learners.
              </p>
            </motion.div>

            {/* Science Labs wide card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="md:col-span-3 lg:col-span-2 bg-[#FAFAF7] rounded-3xl p-8 border border-gray-100 group flex items-center gap-8 cursor-pointer"
            >
              <div className="w-[72px] h-[72px] rounded-2xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0 group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300">
                <Trophy className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F2044] mb-3 group-hover:text-[#F97316] transition-colors">
                  Advanced Science Labs
                </h3>
                <p className="text-gray-500 font-medium text-lg leading-relaxed">
                  Dedicated labs for Physics, Chemistry, and Biology — enabling
                  hands-on practical excellence.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-14">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-3 text-[#0F2044] font-bold hover:text-[#F97316] transition-colors group text-xl"
            >
              Explore All Facilities
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. ACHIEVEMENT BANNER ────────────────────────── */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F97316 0%, #FBBF24 50%, #F97316 100%)',
        }}
      >
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20 [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.4%22/%3E%3C/svg%3E')] mix-blend-overlay" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white/80 font-bold uppercase tracking-[0.25em] text-sm mb-16"
          >
            Our Achievements in Numbers
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/25 text-center">
            {[
              { value: 92.5, suffix: '%', label: 'Top Board Score', sub: 'CBSE 2023-24' },
              { value: 30, suffix: '+', label: 'Expert Faculty', sub: 'Experienced Educators' },
              { value: 11, suffix: '', label: 'Modern Facilities', sub: 'World-Class Infrastructure' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="py-10 md:py-6 px-8"
              >
                <h3 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-none mb-4 tracking-tighter drop-shadow-lg">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-white font-bold uppercase tracking-[0.15em] text-base mb-1">
                  {stat.label}
                </p>
                <p className="text-white/65 font-medium text-sm">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GALLERY PREVIEW ───────────────────────────── */}
      <section className="py-32 md:py-44 bg-[#FAFAF7]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#F97316]" />
                <span className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-sm">
                  Gallery
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2044] leading-[1.05]">
                Life at Yogeshwar
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium mt-4">
                Moments of discovery, joy, and achievement.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0F2044] text-[#0F2044] font-bold rounded-full hover:bg-[#0F2044] hover:text-white transition-all text-lg shrink-0"
            >
              View Full Gallery
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
            {[
              { src: imgBuilding, span: 'col-span-2 row-span-2', label: 'Our Campus' },
              { src: imgPhysicsLab, span: 'col-span-1', label: 'Physics Lab' },
              { src: imgBioLab, span: 'col-span-1', label: 'Biology Lab' },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0F2044]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-xl md:text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA BANNER ────────────────────────────────── */}
      <section className="py-36 bg-[#0F2044] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#F97316]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <GraduationCap className="w-6 h-6 text-[#F97316]" />
            <span className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-sm">
              Admissions 2024-25
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]"
          >
            Secure Your Child's{' '}
            <span
              style={{
                background: 'linear-gradient(90deg,#F97316,#FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Future Today.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/70 mb-12 font-medium leading-relaxed"
          >
            Give your child the foundation they need to succeed. Join the
            Yogeshwar family and unlock a world of possibilities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#F97316] text-white text-lg font-bold rounded-full shadow-xl hover:bg-white hover:text-[#0F2044] transition-colors"
            >
              Enquire Now
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white/30 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Learn About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
