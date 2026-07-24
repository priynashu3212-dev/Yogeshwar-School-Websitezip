import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  MonitorPlay, Monitor, Library, 
  FlaskConical, Calculator, Droplets, 
  Wind, Users, Bus, MessagesSquare, Music,
  ChevronRight
} from 'lucide-react';
import { Link } from 'wouter';

import imgLibrary from '@assets/image_1784784678674.png';
import imgMusicRoom from '@assets/image_1784784692373.png';
import imgPhysicsLab from '@assets/image_1784871279419.png';
import imgChemLab from '@assets/image_1784871296800.png';
import imgBioLab from '@assets/image_1784871308616.png';
import imgLibraryReal from '@assets/image_1784871323347.png';

const facilities = [
  {
    icon: MonitorPlay,
    title: 'Smart Class Rooms',
    desc: 'Fully equipped digital classrooms that make learning interactive, visual, and highly engaging.',
    size: 'lg'
  },
  {
    icon: FlaskConical,
    title: 'Science Labs',
    desc: 'Dedicated safe laboratories for Physics, Chemistry, and Biology.',
    size: 'md'
  },
  {
    icon: Monitor,
    title: 'Computer Labs',
    desc: 'State-of-the-art IT infrastructure.',
    size: 'sm'
  },
  {
    icon: Library,
    title: 'Library',
    desc: 'A vast collection of academic texts and periodicals.',
    size: 'sm'
  },
  {
    icon: Music,
    title: 'Dance & Music',
    desc: 'Fostering creativity through performing arts.',
    size: 'md'
  },
  {
    icon: Calculator,
    title: 'Math Lab',
    desc: 'Practical learning of abstract mathematical concepts.',
    size: 'sm'
  },
  {
    icon: Wind,
    title: 'A.C. Playway',
    desc: 'Comfortable climate-controlled space for young learners.',
    size: 'lg'
  },
  {
    icon: Bus,
    title: 'Transport',
    desc: 'Safe school-owned transport network.',
    size: 'sm'
  },
  {
    icon: MessagesSquare,
    title: 'Spoken English',
    desc: 'Focus on communication skills and fluency.',
    size: 'sm'
  },
  {
    icon: Droplets,
    title: 'RO Water',
    desc: 'Purified drinking water stations.',
    size: 'sm'
  },
  {
    icon: Users,
    title: 'Expert Staff',
    desc: 'Highly qualified and dedicated educators.',
    size: 'md'
  }
];

export default function Facilities() {
  return (
    <Layout>
      {/* 1. Page Hero */}
      <section className="bg-primary pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span>Facilities</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-extrabold text-white mb-6"
          >
            Our Facilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            A comprehensive infrastructure designed to support academic excellence and holistic student development.
          </motion.p>
        </div>
        {/* Diagonal bottom divider */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
      </section>

      {/* 2. Bento Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
            {facilities.map((fac, i) => {
              // Determine span classes based on custom size property to create a bento look
              let spanClass = 'md:col-span-1 md:row-span-1';
              if (fac.size === 'lg') spanClass = 'md:col-span-2 md:row-span-1';
              if (fac.size === 'md') spanClass = 'md:col-span-1 md:row-span-2';

              return (
                <motion.div
                  key={fac.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 5) * 0.1 }}
                  className={`bg-card border border-border p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${spanClass} hover:shadow-xl`}
                >
                  <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-colors duration-300 mb-6">
                      <fac.icon className="w-7 h-7" />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-serif text-primary group-hover:text-white transition-colors duration-300 mb-2">{fac.title}</h3>
                    <p className="text-foreground/70 text-sm font-medium group-hover:text-white/80 transition-colors duration-300 line-clamp-3">
                      {fac.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Photo Feature Rows */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

          {/* Physics Lab */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative"
            >
              <img src={imgPhysicsLab} alt="Physics Lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#0F2044] text-white text-xs font-bold uppercase tracking-widest rounded-full">Physics Lab</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-4 py-1.5 bg-[#F97316]/10 text-[#F97316] rounded-full text-xs font-bold uppercase tracking-wider mb-5">Science Labs</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2044] mb-5 leading-tight">Physics Laboratory</h2>
              <p className="text-lg text-gray-500 font-medium mb-8 leading-relaxed">
                Our Physics lab is fully equipped for CBSE practical experiments — from electrical circuits to optics. Students get hands-on experience that bridges classroom theory with real-world science.
              </p>
              <ul className="space-y-4">
                {['Complete electrical experiment setups', 'Optics & wave apparatus', 'Modern measuring instruments', 'Safe, supervised environment'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-[#0F2044]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Chemistry Lab (reversed) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-[#F97316]/10 text-[#F97316] rounded-full text-xs font-bold uppercase tracking-wider mb-5">Science Labs</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2044] mb-5 leading-tight">Chemistry Laboratory</h2>
              <p className="text-lg text-gray-500 font-medium mb-8 leading-relaxed">
                Stocked with reagents, glassware, and safety equipment, our Chemistry lab gives students a complete practical science experience — from titrations to organic reactions.
              </p>
              <ul className="space-y-4">
                {['Full reagent & chemical inventory', 'Safety-first design', 'Fume hoods & ventilation', 'Periodic table & reference charts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-[#0F2044]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative order-1 lg:order-2"
            >
              <img src={imgChemLab} alt="Chemistry Lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#0F2044] text-white text-xs font-bold uppercase tracking-widest rounded-full">Chemistry Lab</span>
              </div>
            </motion.div>
          </div>

          {/* Biology Lab */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative"
            >
              <img src={imgBioLab} alt="Biology Lab" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#0F2044] text-white text-xs font-bold uppercase tracking-widest rounded-full">Biology Lab</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-4 py-1.5 bg-[#F97316]/10 text-[#F97316] rounded-full text-xs font-bold uppercase tracking-wider mb-5">Science Labs</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2044] mb-5 leading-tight">Biology Laboratory</h2>
              <p className="text-lg text-gray-500 font-medium mb-8 leading-relaxed">
                Featuring anatomical models, dissection tools, and detailed biological charts, our Biology lab makes the study of life science vivid and memorable for every student.
              </p>
              <ul className="space-y-4">
                {['Human anatomy 3D models', 'Botanical & zoological specimens', 'Microscopes for cell study', 'Detailed biology wall charts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-[#0F2044]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Library (reversed) */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-[#0F2044]/10 text-[#0F2044] rounded-full text-xs font-bold uppercase tracking-wider mb-5">Knowledge Hub</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2044] mb-5 leading-tight">Extensive Library</h2>
              <p className="text-lg text-gray-500 font-medium mb-8 leading-relaxed">
                Our library is the quiet heartbeat of the school. Stocked with thousands of volumes — academic references, literature, and periodicals — it fosters a lifelong love of reading and deep focus.
              </p>
              <ul className="space-y-4">
                {['Quiet reading zones for all classes', 'Physics, Chemistry & Biology textbooks', 'Dedicated reference sections', 'Regular new arrivals'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-[#0F2044]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative order-1 lg:order-2"
            >
              <img src={imgLibraryReal} alt="Library students reading" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#0F2044] text-white text-xs font-bold uppercase tracking-widest rounded-full">Library</span>
              </div>
            </motion.div>
          </div>

          {/* Dance & Music */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] relative"
            >
              <img src={imgMusicRoom} alt="Music and Dance Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#F97316] text-white text-xs font-bold uppercase tracking-widest rounded-full">Dance & Music</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-4 py-1.5 bg-[#F97316]/10 text-[#F97316] rounded-full text-xs font-bold uppercase tracking-wider mb-5">Creative Arts</div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2044] mb-5 leading-tight">Dance & Music Studios</h2>
              <p className="text-lg text-gray-500 font-medium mb-8 leading-relaxed">
                Education is incomplete without expression. Our performing arts facilities allow students to explore classical and modern disciplines, building confidence, coordination, and cultural appreciation.
              </p>
              <ul className="space-y-4">
                {['Acoustically treated rooms', 'Traditional & modern instruments', 'Expert instructors', 'Spacious floors for dance practice'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-[#0F2044]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. Bottom CTA Strip */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 noise-overlay opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 drop-shadow-md">Curious about our campus?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary font-black uppercase tracking-wider rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
            Come Visit Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}
