import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Compass, Award, ShieldCheck, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

import imgBuilding from '@assets/image_1784784644604.png';

export default function About() {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      {/* 1. Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={imgBuilding} alt="School background" className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-6">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span>About</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-extrabold text-white mb-6 tracking-tight"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-medium"
          >
            Rooted in tradition, reaching for the stars. Building character and excellence since inception.
          </motion.p>
        </div>
        
        {/* Decorative SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      {/* 2. Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Vision Card */}
            <motion.div variants={fadeUp} className="group relative bg-card p-10 md:p-12 rounded-[2rem] shadow-sm border border-border hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/50" />
              <div className="absolute -right-8 -top-8 text-primary/5 group-hover:scale-110 group-hover:text-primary/10 transition-all duration-700 pointer-events-none">
                <Target className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-foreground/70 text-lg leading-relaxed font-medium">
                  To be an institution of excellence that nurtures holistic development, equipping students with critical thinking, ethical values, and the confidence to lead in a rapidly changing global society. We envision a community where every child's unique potential is recognized, celebrated, and fully realized.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={fadeUp} className="group relative bg-card p-10 md:p-12 rounded-[2rem] shadow-sm border border-border hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-amber-400" />
              <div className="absolute -right-8 -top-8 text-secondary/5 group-hover:scale-110 group-hover:text-secondary/10 transition-all duration-700 pointer-events-none">
                <Compass className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-foreground/70 text-lg leading-relaxed font-medium">
                  To provide a safe, inclusive, and stimulating learning environment that inspires academic excellence and character building. We strive to foster curiosity, instill a lifelong love for learning, and prepare our students to be responsible global citizens rooted deeply in Indian values.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Why Yogeshwar */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">The Yogeshwar Advantage</h2>
            <p className="text-foreground/70 font-medium">Pillars of our educational philosophy</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            {[
              { icon: Award, title: "Founded on Values", desc: "Decades of trust" },
              { icon: ShieldCheck, title: "CBSE Affiliated", desc: "National curriculum" },
              { icon: BookOpen, title: "Govt. Recognized", desc: "Approved institution" },
              { icon: Target, title: "Code: 1530656", desc: "Official registry" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <stat.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{stat.title}</h3>
                <p className="text-sm text-foreground/60 font-semibold uppercase tracking-wider">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Affiliation Block */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 z-0" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-8 shadow-lg">
                <Award className="w-12 h-12 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Proudly CBSE Affiliated & <br/>Government Recognized
              </h2>
              <p className="text-lg text-white/80 mb-10 leading-relaxed font-medium">
                Yogeshwar Sr. Sec. School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi, and fully recognized by the Government of Haryana. We adhere strictly to national educational frameworks while innovating in our delivery.
              </p>
              <div className="inline-flex flex-col items-center justify-center px-10 py-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-2">School Affiliation Code</span>
                <span className="text-5xl font-black text-white font-mono tracking-widest drop-shadow-md">1530656</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Principal's Message */}
      <section className="py-24 bg-muted relative overflow-hidden">
        {/* Diagonal top divider */}
        <div className="absolute top-0 left-0 w-full h-16 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-center max-w-6xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-primary rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-primary to-primary/80 text-white/30 font-serif text-3xl italic p-8 text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold not-italic">YS</span>
                  </div>
                  Principal's<br/>Portrait
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full mix-blend-multiply blur-2xl opacity-40" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">From the Principal's Desk</h2>
              <div className="w-20 h-1.5 bg-secondary mb-10 rounded-full" />
              
              <div className="relative">
                <span className="absolute -top-12 -left-8 text-8xl text-secondary/20 font-serif leading-none select-none">"</span>
                <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-medium relative z-10">
                  <p>
                    Welcome to Yogeshwar Sr. Sec. School. Education is not merely the accumulation of facts; it is the preparation of life itself. In our rapidly changing world, we must equip our students with the skills to navigate complex challenges with integrity, critical thinking, and resilience.
                  </p>
                  <p>
                    Our dedicated faculty works tirelessly to ensure that every classroom is a space of discovery and encouragement. We believe that true academic excellence is achieved only when a child feels safe, valued, and understood.
                  </p>
                  <p>
                    I invite you to explore our website and learn more about the vibrant community we have built here in Siwan. Together with parents and the community, we look forward to shaping the ethical leaders of tomorrow.
                  </p>
                  <div className="pt-8">
                    <p className="font-serif font-bold text-2xl text-primary">Principal Name</p>
                    <p className="text-secondary font-bold uppercase tracking-wider text-sm mt-1">Principal, Yogeshwar Sr. Sec. School</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
