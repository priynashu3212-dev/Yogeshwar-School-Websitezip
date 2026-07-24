import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

import imgMerit from '@assets/image_1784784669429.png';
import imgResult2526 from '@assets/image_1784871127873.png';

const class10Results = [
  { name: 'Sahil Moga', score: '92.5%' },
  { name: 'Prince Sharma', score: '90.33%' },
  { name: 'Vandana', score: '87.33%' },
  { name: 'Jasleen Kaur', score: '86%' },
  { name: 'Ganga', score: '83%' },
  { name: 'Kashish', score: '82%' },
  { name: 'Hanshika', score: '82%' },
];

// Session 2025-26 Class 12 toppers (from official result poster)
const class12Results2526 = [
  { name: 'Nishu',   stream: 'Arts',        score: '93%' },
  { name: 'Vandana', stream: 'Commerce',    score: '90%' },
  { name: 'Sneha',   stream: 'Arts',        score: '85%' },
  { name: 'Sahil',   stream: 'Non-Medical', score: '80%' },
  { name: 'Sakshi',  stream: 'Arts',        score: '80%' },
];

const class12Results = [
  { name: 'Khushi Rana', stream: 'Commerce', score: '81.8%' },
  { name: 'Nitesh Singh', stream: 'Commerce', score: '84.6%' },
  { name: 'Purvi Rani', stream: 'Arts', score: '81.6%' },
  { name: 'Jatin Raheja', stream: 'Commerce', score: '81.6%' },
  { name: 'Pankaj Sharma', stream: 'Arts', score: 'Merit' },
  { name: 'Vaidehi', stream: 'Medical', score: '80.4%' },
  { name: 'Shavani', stream: 'Commerce', score: '80.8%' },
  { name: 'Muskan', stream: 'Commerce', score: '80.8%' },
  { name: 'Ajay', stream: 'Medical', score: '82%' },
  { name: 'Deepak', stream: 'Commerce', score: '82.6%' },
  { name: 'Gurpreet Singh', stream: 'Commerce', score: '80.6%' },
];

const getStreamColor = (stream: string) => {
  switch(stream) {
    case 'Commerce': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'Arts': return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'Medical': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getRankBadge = (index: number) => {
  if (index === 0) return 'bg-amber-400 text-white shadow-md border border-amber-300'; // Gold
  if (index === 1) return 'bg-slate-300 text-slate-800 shadow-sm border border-slate-200'; // Silver
  if (index === 2) return 'bg-amber-700/60 text-white shadow-sm border border-amber-800/20'; // Bronze
  return 'bg-muted text-foreground/50';
};

export default function Results() {
  return (
    <Layout>
      {/* 1. Page Hero */}
      <section className="bg-primary pt-32 pb-24 relative overflow-hidden">
        {/* Confetti/Stars pseudo elements using simple shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-[10%] w-4 h-4 rotate-45 bg-secondary" />
          <div className="absolute top-40 right-[20%] w-6 h-6 rounded-full border-4 border-amber-400" />
          <div className="absolute bottom-20 left-[30%] w-5 h-5 bg-white rotate-12" />
          <div className="absolute top-1/2 right-[10%] w-4 h-4 bg-secondary rotate-45" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <Trophy className="w-[800px] h-[800px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span>Results</span>
          </div>
          <br/>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_30px_rgba(249,115,22,0.4)]"
          >
            <Star className="w-4 h-4 fill-white" />
            Session 2023-24
            <Star className="w-4 h-4 fill-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-extrabold text-white mb-6 tracking-tight"
          >
            Academic Excellence
          </motion.h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Celebrating the outstanding achievements of our students in the CBSE Board Examinations. Their hard work has set a new benchmark.
          </p>
        </div>
      </section>

      {/* 2. Latest 2025-26 Result Poster */}
      <section className="py-20 -mt-10 relative z-20" style={{ background: 'linear-gradient(135deg,#0F2044 0%,#1a3470 100%)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#F97316] text-white rounded-full text-sm font-bold uppercase tracking-widest mb-5 shadow-lg">
                <Star className="w-4 h-4 fill-white" /> Latest Results — Session 2025-26
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Class 12th Bright Achievers</h2>
              <p className="text-white/60 mt-3 font-medium">Five Stars, One Legacy of Excellence!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Poster image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(249,115,22,0.3)] border-4 border-[#F97316]/40 hover:border-[#F97316] transition-colors duration-500 max-w-sm w-full">
                  <img
                    src={imgResult2526}
                    alt="Class 12th Result 2025-26"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              {/* Topper cards */}
              <div className="space-y-4">
                {class12Results2526.map((student, i) => {
                  const medals = ['🥇', '🥈', '🥉', '⭐', '⭐'];
                  const barColors = [
                    'bg-amber-400', 'bg-slate-300', 'bg-amber-700', 'bg-[#F97316]/60', 'bg-[#F97316]/60'
                  ];
                  const scoreNum = parseFloat(student.score);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F97316]/40 rounded-2xl p-5 transition-all group"
                    >
                      <span className="text-3xl shrink-0">{medals[i]}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-bold text-white text-lg leading-none">{student.name}</span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F97316]/20 text-[#F97316] border border-[#F97316]/30">
                            {student.stream}
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${barColors[i]} transition-all duration-1000`}
                            style={{ width: `${scoreNum}%` }}
                          />
                        </div>
                      </div>
                      <span className={`font-black text-2xl shrink-0 ${i === 0 ? 'text-amber-400' : 'text-white'}`}>
                        {student.score}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2b. Top Achievement Highlight (2023-24) */}
      <section className="py-20 bg-white border-b border-border relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-sm font-bold uppercase tracking-widest text-[#F97316] mb-8">Session 2023-24</p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-white rounded-[3rem] p-2 shadow-xl border border-amber-200"
            >
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-amber-100">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">
                    <Trophy className="w-5 h-5" /> School Topper
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold text-[#0F2044] mb-4 leading-tight">Sahil Moga</h2>
                  <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 tracking-tighter mb-6">
                    92.5%
                  </div>
                  <p className="text-lg text-gray-500 font-bold">Class 10th Board Examination</p>
                </div>
                <div className="flex-1 w-full max-w-sm">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src={imgMerit} alt="Merit List 2023-24" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Detailed Results Grids */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            
            {/* Class 10 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-10 pb-6 border-b border-border">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-serif text-3xl font-black shadow-lg">
                  10
                </div>
                <div>
                  <h2 className="text-4xl font-serif font-bold text-primary mb-1">Class 10th</h2>
                  <p className="text-secondary font-bold uppercase tracking-widest text-sm">Merit List</p>
                </div>
              </div>

              <div className="space-y-4">
                {class10Results.map((student, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    key={i} 
                    className="flex items-center justify-between p-5 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif text-lg ${getRankBadge(i)}`}>
                        {i + 1}
                      </div>
                      <span className="font-bold text-xl text-primary">{student.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {i === 0 && <Medal className="w-6 h-6 text-amber-500" />}
                      <span className={`font-black text-2xl tracking-tight ${i === 0 ? 'text-amber-600' : 'text-primary'}`}>
                        {student.score}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Class 12 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-10 pb-6 border-b border-border">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-serif text-3xl font-black shadow-lg">
                  12
                </div>
                <div>
                  <h2 className="text-4xl font-serif font-bold text-primary mb-1">Class 12th</h2>
                  <p className="text-secondary font-bold uppercase tracking-widest text-sm">Merit List</p>
                </div>
              </div>

              <div className="space-y-4">
                {class12Results.map((student, i) => (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    key={i} 
                    className="flex items-center justify-between p-5 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-serif text-lg ${getRankBadge(i)}`}>
                        {i + 1}
                      </div>
                      <div>
                        <span className="block font-bold text-xl text-primary leading-none mb-1.5">{student.name}</span>
                        <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getStreamColor(student.stream)}`}>
                          {student.stream}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {student.score !== 'Merit' && i < 3 && <Medal className="w-5 h-5 text-amber-500" />}
                      <span className={`font-black text-2xl tracking-tight ${i < 3 ? 'text-amber-600' : 'text-primary'}`}>
                        {student.score}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Motivational Closing Strip */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold italic opacity-90">
            "Inspiring the next generation of achievers."
          </h2>
        </div>
      </section>
    </Layout>
  );
}
