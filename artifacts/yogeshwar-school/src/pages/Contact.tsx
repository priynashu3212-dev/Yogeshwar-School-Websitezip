import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ChevronRight, Clock } from 'lucide-react';
import imgMap from '@assets/image_1784871140845.png';
import { Link } from 'wouter';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We will contact you soon.");
  };

  return (
    <Layout>
      {/* 1. Page Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex items-center">
        {/* Split Background */}
        <div className="absolute inset-0 flex w-full">
          <div className="w-full lg:w-1/2 bg-primary relative h-full">
            <div className="absolute inset-0 noise-overlay opacity-20" />
          </div>
          <div className="w-full lg:w-1/2 bg-background hidden lg:block h-full relative">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs mb-6">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span>Contact</span>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-black mb-6 tracking-tight"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 font-medium"
            >
              Whether you're looking for admissions, general questions, or feedback — our doors and lines are always open.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Info + Form Grid */}
      <section className="py-20 lg:-mt-32 relative z-20 bg-background lg:bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[4fr_6fr] gap-12 lg:gap-8 max-w-7xl mx-auto items-start">
            
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-card p-8 rounded-3xl shadow-xl border border-border group hover:border-secondary/30 transition-colors">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Campus Location</h3>
                <p className="text-foreground/70 font-medium leading-relaxed">
                  Yogeshwar Sr. Sec. School<br/>
                  Siwan, Kaithal<br/>
                  Haryana
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="bg-card p-8 rounded-3xl shadow-sm border border-border group hover:border-secondary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">Phone</h3>
                  <p className="text-foreground/70 font-medium">+91 99999-99999</p>
                </div>

                <div className="bg-card p-8 rounded-3xl shadow-sm border border-border group hover:border-secondary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
                  <p className="text-foreground/70 font-medium text-sm break-all">info@yogeshwarschool.edu</p>
                </div>
                
                <div className="bg-card p-8 rounded-3xl shadow-sm border border-border sm:col-span-2 lg:col-span-1 group hover:border-secondary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">Office Hours</h3>
                  <p className="text-foreground/70 font-medium text-sm">Mon-Sat: 8:00 AM - 3:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-border lg:ml-8"
            >
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">Send an Enquiry</h2>
                <p className="text-foreground/60 font-medium">Fill out the form below and our admissions team will get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Floating label inputs */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="peer w-full px-5 py-4 pt-6 rounded-2xl border-2 border-input bg-background focus:outline-none focus:border-secondary focus:ring-0 transition-all font-medium placeholder-transparent"
                    placeholder="Full Name"
                    required
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-5 top-2 text-xs font-bold uppercase tracking-wider text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-secondary"
                  >
                    Student / Parent Name
                  </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="tel" 
                      id="phone" 
                      className="peer w-full px-5 py-4 pt-6 rounded-2xl border-2 border-input bg-background focus:outline-none focus:border-secondary focus:ring-0 transition-all font-medium placeholder-transparent"
                      placeholder="Phone"
                      required
                    />
                    <label 
                      htmlFor="phone" 
                      className="absolute left-5 top-2 text-xs font-bold uppercase tracking-wider text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-secondary"
                    >
                      Phone Number
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      className="peer w-full px-5 py-4 pt-6 rounded-2xl border-2 border-input bg-background focus:outline-none focus:border-secondary focus:ring-0 transition-all font-medium placeholder-transparent"
                      placeholder="Email"
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-5 top-2 text-xs font-bold uppercase tracking-wider text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-secondary"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <select 
                    id="class" 
                    className="peer w-full px-5 py-4 pt-6 rounded-2xl border-2 border-input bg-background focus:outline-none focus:border-secondary focus:ring-0 transition-all font-medium text-foreground appearance-none"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled hidden>Select class</option>
                    <option value="playway">Playway / Nursery</option>
                    <option value="primary">Primary (1-5)</option>
                    <option value="middle">Middle (6-8)</option>
                    <option value="secondary">Secondary (9-10)</option>
                    <option value="srsecondary">Sr. Secondary (11-12)</option>
                  </select>
                  <label 
                    htmlFor="class" 
                    className="absolute left-5 top-2 text-xs font-bold uppercase tracking-wider text-secondary transition-all"
                  >
                    Admission Class
                  </label>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50">
                    <ChevronRight className="w-5 h-5 rotate-90" />
                  </div>
                </div>

                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={4}
                    className="peer w-full px-5 py-4 pt-6 rounded-2xl border-2 border-input bg-background focus:outline-none focus:border-secondary focus:ring-0 transition-all font-medium placeholder-transparent resize-none"
                    placeholder="Message"
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-5 top-2 text-xs font-bold uppercase tracking-wider text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-secondary"
                  >
                    Your Message
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-5 bg-secondary text-white text-lg font-black uppercase tracking-wider rounded-2xl shadow-lg hover:shadow-xl hover:bg-secondary/90 transition-all active:scale-[0.98]"
                >
                  <span>Send Enquiry</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Map */}
      <section className="pb-24 pt-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
            <img
              src={imgMap}
              alt="Yogeshwar Sr. Sec. School Location Map"
              className="w-full h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Pin label overlay */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white rounded-2xl shadow-xl px-5 py-3 border border-gray-100">
              <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0F2044] text-sm leading-none mb-0.5">Yogeshwar Sr. Sec. School</p>
                <p className="text-gray-400 text-xs font-medium">Siwan, Kaithal, Haryana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
