import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy, MonitorPlay } from 'lucide-react';
import { Link } from 'wouter';

import imgBuilding from '@assets/image_1784784644604.png';
import imgLibrary from '@assets/image_1784784678674.png';
import imgDance from '@assets/image_1784784658855.png';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgBuilding} 
            alt="Yogeshwar School Building" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/90 text-secondary-foreground text-sm font-semibold tracking-wider uppercase mb-6 shadow-lg">
              Admissions Open 2024-25
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Empowering Minds, <br className="hidden md:block"/>
              <span className="text-secondary italic">Shaping Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
              Welcome to Yogeshwar Sr. Sec. School, Siwan. A community where traditional values meet modern excellence to nurture tomorrow's leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded shadow-lg hover:bg-secondary/90 transition-all hover:-translate-y-1">
                Discover Our Vision
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-1">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlights Bar */}
      <section className="bg-white py-12 border-b border-border shadow-sm relative z-20 -mt-8 mx-4 md:mx-12 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            {[
              { label: 'CBSE Affiliated', value: '100%', icon: BookOpen },
              { label: 'Experienced Staff', value: '30+', icon: Users },
              { label: 'Board Merit', value: '92.5%', icon: Trophy },
              { label: 'Smart Classes', value: '100%', icon: MonitorPlay },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col items-center text-center px-4"
              >
                <stat.icon className="w-8 h-8 text-secondary mb-3 opacity-80" />
                <h3 className="text-3xl font-serif font-bold text-primary mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                A Legacy of <br/><span className="text-secondary">Excellence.</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                At Yogeshwar Sr. Sec. School, we believe in providing a holistic educational experience. Our carefully crafted curriculum balances rigorous academics with rich extracurricular programs, ensuring every student develops into a well-rounded individual ready to face global challenges.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Nurturing environment for all-round development',
                  'State-of-the-art infrastructure & labs',
                  'Focus on moral values and cultural heritage'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
                Read Principal's Message 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={imgLibrary} alt="Students studying in library" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden border-8 border-background shadow-xl hidden md:block">
                <img src={imgDance} alt="Cultural activities" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Quick View */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Modern Facilities</h2>
            <p className="text-primary-foreground/80 text-lg">Everything your child needs to succeed in the 21st century, housed within a safe, inspiring campus.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Smart Class Rooms', desc: 'Interactive digital learning' },
              { title: 'Science Labs', desc: 'Physics, Chemistry, Biology' },
              { title: 'Computer Labs', desc: 'Modern IT infrastructure' },
              { title: 'A.C. Playway', desc: 'Comfortable early education' }
            ].map((facility, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="font-bold text-xl text-secondary mb-2">{facility.title}</h3>
                <p className="text-sm text-primary-foreground/70">{facility.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/facilities" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white/30 text-white font-medium rounded hover:bg-white hover:text-primary transition-all">
              View All Facilities
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
