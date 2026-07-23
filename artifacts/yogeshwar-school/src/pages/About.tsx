import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Compass, Award } from 'lucide-react';

import imgBuilding from '@assets/image_1784784644604.png';

export default function About() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={imgBuilding} alt="School background" className="w-full h-full object-cover object-center grayscale mix-blend-overlay" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            About Our School
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-secondary mx-auto mb-6"
          />
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Rooted in tradition, reaching for the stars. Discover the story and mission behind Yogeshwar Sr. Sec. School.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 rounded-2xl shadow-sm border border-border relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-foreground/80 leading-relaxed">
                  To be an institution of excellence that nurtures holistic development, equipping students with critical thinking, ethical values, and the confidence to lead in a rapidly changing global society. We envision a community where every child's potential is recognized and celebrated.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-10 rounded-2xl shadow-sm border border-border relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <Compass className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed">
                  To provide a safe, inclusive, and stimulating learning environment that inspires academic excellence and character building. We strive to foster curiosity, instill a lifelong love for learning, and prepare our students to be responsible global citizens rooted in Indian values.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Affiliation & Details */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              CBSE Affiliated & Government Recognized
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Yogeshwar Sr. Sec. School is proudly affiliated with the Central Board of Secondary Education (CBSE), New Delhi, and is fully recognized by the Government of Haryana. We adhere strictly to national educational frameworks while innovating in our delivery.
            </p>
            <div className="inline-flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-border">
              <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-2">School Affiliation Code</span>
              <span className="text-4xl font-bold text-primary font-mono tracking-wider">1530656</span>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Placeholder */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center max-w-5xl mx-auto">
            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden border-8 border-white shadow-xl relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-serif text-2xl italic">
                Principal's Photo
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Principal's Message</h2>
              <div className="w-16 h-1 bg-secondary mb-8" />
              <div className="prose prose-lg prose-p:text-foreground/80 prose-p:leading-relaxed max-w-none">
                <p>
                  Welcome to Yogeshwar Sr. Sec. School. Education is not merely the accumulation of facts; it is the preparation of life itself. In our rapidly changing world, we must equip our students with the skills to navigate complex challenges with integrity and resilience.
                </p>
                <p>
                  Our dedicated faculty works tirelessly to ensure that every classroom is a space of discovery and encouragement. We believe that true academic excellence comes when a child feels safe, valued, and understood.
                </p>
                <p>
                  I invite you to explore our website and learn more about the vibrant community we have built here in Siwan. Together with parents and the community, we look forward to shaping the leaders of tomorrow.
                </p>
                <p className="font-serif font-bold text-xl text-primary mt-8">
                  — Principal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
