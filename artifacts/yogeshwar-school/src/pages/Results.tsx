import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';

import imgMerit from '@assets/image_1784784669429.png';

const class10Results = [
  { name: 'Sahil Moga', score: '92.5%' },
  { name: 'Prince Sharma', score: '90.33%' },
  { name: 'Vandana', score: '87.33%' },
  { name: 'Jasleen Kaur', score: '86%' },
  { name: 'Ganga', score: '83%' },
  { name: 'Kashish', score: '82%' },
  { name: 'Hanshika', score: '82%' },
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

export default function Results() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Trophy className="w-96 h-96" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-full text-sm font-bold tracking-widest uppercase mb-6 shadow-xl"
          >
            <Star className="w-4 h-4 fill-white" />
            Session 2023-24
            <Star className="w-4 h-4 fill-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
          >
            Academic Excellence
          </motion.h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Celebrating the outstanding achievements of our students in the CBSE Board Examinations. We are incredibly proud of their hard work and dedication.
          </p>
        </div>
      </section>

      {/* Poster Section */}
      <section className="py-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
            <img 
              src={imgMerit} 
              alt="Merit List 2023-24 Poster" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* 10th Class */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-secondary/30">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-serif text-2xl font-bold">
                  10
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary">Class 10th</h2>
                  <p className="text-secondary font-semibold">Merit List</p>
                </div>
              </div>

              <div className="space-y-4">
                {class10Results.map((student, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary font-bold">
                        {i + 1}
                      </div>
                      <span className="font-bold text-lg text-foreground">{student.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Medal className="w-5 h-5 text-secondary" />
                      <span className="font-bold text-xl text-primary font-mono">{student.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 12th Class */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-secondary/30">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-serif text-2xl font-bold">
                  12
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-primary">Class 12th</h2>
                  <p className="text-secondary font-semibold">Merit List</p>
                </div>
              </div>

              <div className="space-y-4">
                {class12Results.map((student, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <span className="block font-bold text-lg text-foreground leading-tight">{student.name}</span>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{student.stream}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {student.score !== 'Merit' && <Medal className="w-5 h-5 text-secondary" />}
                      <span className="font-bold text-xl text-primary font-mono">{student.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
