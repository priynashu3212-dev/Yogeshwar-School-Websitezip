import React from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About School' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/results', label: 'Academic Results' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card shadow-sm border-b border-border">
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +91 99999-99999</span>
            <span className="hidden sm:flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> info@yogeshwarschool.edu</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-sm">School Code: 1530656</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex flex-col">
            <span className="font-serif font-bold text-2xl md:text-3xl text-primary leading-none">Yogeshwar</span>
            <span className="font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase text-secondary mt-1">
              Sr. Sec. School, Siwan
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary relative py-2 ${
                    isActive ? 'text-secondary' : 'text-foreground'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-t-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-primary/5 text-secondary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
