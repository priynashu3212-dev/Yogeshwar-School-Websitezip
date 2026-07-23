import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[6px] border-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif font-bold text-2xl mb-4">Yogeshwar</h3>
            <p className="font-sans text-sm text-primary-foreground/80 leading-relaxed mb-6">
              A proud, community-rooted institution combining traditional educational values with modern facilities. Government Recognized & CBSE Affiliated.
            </p>
            <div className="inline-block bg-white/10 px-4 py-2 rounded border border-white/20">
              <span className="block text-xs uppercase tracking-wider text-secondary mb-1">Affiliation No.</span>
              <span className="font-bold">1530656</span>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About School' },
                { href: '/facilities', label: 'Our Facilities' },
                { href: '/results', label: 'Academic Results' },
                { href: '/gallery', label: 'Photo Gallery' },
                { href: '/contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-white flex items-center gap-2 group text-sm">
                    <ChevronRight className="w-3 h-3 text-secondary group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-secondary">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Yogeshwar Sr. Sec. School<br/>Siwan, Kaithal<br/>Haryana</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>+91 99999-99999</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>info@yogeshwarschool.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 text-secondary">School Hours</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Summer</span>
                <span>8:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Winter</span>
                <span>9:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2 text-secondary">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} Yogeshwar Sr. Sec. School, Siwan. All rights reserved.
          </p>
          <div className="text-xs text-primary-foreground/60">
            Designed with excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
