import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About School' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/results', label: 'Results' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="bg-primary/95 text-white/90 backdrop-blur-md py-1.5 text-xs md:text-sm fixed top-0 w-full z-50 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-secondary" /> +91 99999-99999</span>
            <span className="hidden sm:flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-secondary" /> info@yogeshwarschool.edu</span>
          </div>
          <div className="flex items-center gap-3 font-medium">
            <span className="hidden md:inline-block">Affiliated to CBSE</span>
            <span className="bg-secondary/20 text-secondary px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold border border-secondary/30">Code: 1530656</span>
          </div>
        </div>
      </div>

      <header 
        className={`fixed top-[32px] md:top-[34px] w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-primary shadow-xl border-b border-primary/20 py-2' 
            : 'bg-primary/40 backdrop-blur-md border-b border-white/10 py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex flex-col group">
              <span className="font-serif font-extrabold text-2xl md:text-3xl text-white tracking-tight group-hover:text-white/90 transition-colors">
                YOGESHWAR
              </span>
              <span className="font-sans text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-secondary">
                Sr. Sec. School, Siwan
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-bold uppercase tracking-widest transition-all relative py-2 ${
                      isActive ? 'text-secondary' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span 
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary"
                      />
                    )}
                  </Link>
                );
              })}
              <Link href="/contact" className="ml-4 flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors shadow-lg shadow-secondary/20">
                <GraduationCap className="w-4 h-4" />
                Admissions Open
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white hover:text-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 pt-24 bg-primary"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navLinks.map((link, i) => {
                const isActive = location === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block text-2xl font-serif font-bold ${
                        isActive ? 'text-secondary' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Link href="/contact" onClick={closeMenu} className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-xl text-lg font-bold w-full">
                  <GraduationCap className="w-6 h-6" />
                  Apply for Admission
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
