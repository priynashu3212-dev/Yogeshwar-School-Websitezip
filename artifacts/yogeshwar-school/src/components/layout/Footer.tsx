import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-8 relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-secondary via-amber-400 to-secondary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h3 className="font-serif font-extrabold text-3xl mb-4 tracking-tight">YOGESHWAR</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
              Empowering minds and shaping futures through excellence in education, rooted in traditional values.
            </p>
            <div className="inline-flex flex-col bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">CBSE Affiliation</span>
              <span className="font-mono text-xl font-bold tracking-wider">1530656</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { href: '/about', label: 'About Our School' },
                { href: '/facilities', label: 'Campus Facilities' },
                { href: '/results', label: 'Academic Results' },
                { href: '/gallery', label: 'Photo Gallery' },
                { href: '/contact', label: 'Contact & Admissions' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-secondary flex items-center gap-2 group text-sm font-medium transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Get in Touch
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-white/70 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <span className="mt-1 leading-relaxed">Yogeshwar Sr. Sec. School<br/>Siwan, Kaithal<br/>Haryana</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-medium">+91 99999-99999</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <span className="font-medium">info@yogeshwarschool.edu</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              School Hours
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white/70">Summer Timings</span>
                <span className="bg-white/10 px-2 py-1 rounded text-xs">8:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-white/70">Winter Timings</span>
                <span className="bg-white/10 px-2 py-1 rounded text-xs">9:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-secondary pt-1">
                <span>Sunday</span>
                <span className="text-xs uppercase tracking-wider font-bold">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/50 font-medium">
            &copy; {new Date().getFullYear()} Yogeshwar Sr. Sec. School, Siwan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40 font-medium">Crafted with precision.</span>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-secondary flex items-center justify-center text-white transition-all hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
