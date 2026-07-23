import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  MonitorPlay, Monitor, Library, 
  FlaskConical, Calculator, Droplets, 
  Wind, Users, Bus, MessagesSquare, Music 
} from 'lucide-react';

const facilities = [
  {
    icon: MonitorPlay,
    title: 'Smart Class Rooms',
    desc: 'Fully equipped digital classrooms that make learning interactive, visual, and highly engaging for modern students.'
  },
  {
    icon: Monitor,
    title: 'Computer Labs',
    desc: 'State-of-the-art computer labs with high-speed internet to prepare students for the digital future.'
  },
  {
    icon: Library,
    title: 'Library',
    desc: 'A vast collection of academic texts, reference materials, fiction, and periodicals in a quiet, focused environment.'
  },
  {
    icon: FlaskConical,
    title: 'Science Labs',
    desc: 'Dedicated and safe laboratories for Physics, Chemistry, and Biology, enabling hands-on practical learning.'
  },
  {
    icon: Calculator,
    title: 'Math Lab',
    desc: 'A unique space where abstract mathematical concepts are taught using models and practical activities.'
  },
  {
    icon: Music,
    title: 'Dance & Music Room',
    desc: 'Fostering creativity and cultural connection through well-equipped performing arts facilities.'
  },
  {
    icon: Wind,
    title: 'A.C. Playway Section',
    desc: 'A comfortable, climate-controlled environment tailored specifically for our youngest learners.'
  },
  {
    icon: MessagesSquare,
    title: 'English Speaking Classes',
    desc: 'Specialized focus on communication skills and fluency to prepare students for global opportunities.'
  },
  {
    icon: Bus,
    title: 'Self Transportation Facility',
    desc: 'Safe, reliable, and school-owned transport network covering Siwan and surrounding areas.'
  },
  {
    icon: Droplets,
    title: 'RO Drinking Water',
    desc: 'Ensuring the health and hygiene of our students with purified drinking water stations across campus.'
  },
  {
    icon: Users,
    title: 'Experienced Staff',
    desc: 'A team of highly qualified, dedicated educators committed to nurturing every student\'s potential.'
  }
];

export default function Facilities() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-muted py-20 text-center border-b border-border">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            Our Facilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            We provide a comprehensive infrastructure designed to support both academic excellence and holistic student development.
          </motion.p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, i) => (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg hover:border-secondary/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-6">
                  <fac.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary mb-3">{fac.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {fac.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
