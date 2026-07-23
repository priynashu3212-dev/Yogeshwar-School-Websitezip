import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form, no action needed as per requirements
    alert("Thank you for your enquiry. We will contact you soon.");
  };

  return (
    <Layout>
      <section className="bg-muted/50 py-16 md:py-24 border-b border-border text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
          >
            Get In Touch
          </motion.h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We welcome inquiries from parents and community members. Reach out to us for admissions, general questions, or feedback.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Campus Address</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Yogeshwar Sr. Sec. School<br/>
                      Siwan, Kaithal<br/>
                      Haryana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Phone</h3>
                    <p className="text-foreground/80">
                      +91 99999-99999<br/>
                      (Mon-Sat, 8:00 AM - 3:00 PM)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Email</h3>
                    <p className="text-foreground/80">
                      info@yogeshwarschool.edu<br/>
                      admissions@yogeshwarschool.edu
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-muted rounded-xl overflow-hidden border border-border h-64 relative flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="text-center relative z-10">
                  <MapPin className="w-10 h-10 text-secondary mx-auto mb-2 opacity-50" />
                  <span className="font-semibold text-primary/70">Interactive Map View</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border border-border"
            >
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Student / Parent Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="10-digit mobile"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="class" className="block text-sm font-semibold text-primary mb-2">Class (Admission seeking)</label>
                    <select 
                      id="class" 
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    >
                      <option value="">Select class</option>
                      <option value="playway">Playway / Nursery</option>
                      <option value="primary">Primary (1-5)</option>
                      <option value="middle">Middle (6-8)</option>
                      <option value="secondary">Secondary (9-10)</option>
                      <option value="srsecondary">Sr. Secondary (11-12)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-secondary text-secondary-foreground font-bold rounded-lg shadow-md hover:bg-secondary/90 transition-all active:scale-[0.98]"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
