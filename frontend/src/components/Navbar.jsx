import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, HeartPulse, ChevronRight } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Navbar({ onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'Departments', path: '/departments' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6B2C7E] to-[#1E3A5F] flex items-center justify-center text-white shadow-md shadow-purple-900/10 group-hover:scale-105 transition-transform duration-300">
              <HeartPulse className="w-7 h-7 text-purple-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl text-[#1E3A5F] tracking-tight">
                  VEDANT
                </span>
                <span className="font-bold text-xl sm:text-2xl text-[#6B2C7E] tracking-tight">
                  HOSPITAL
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="font-semibold text-purple-800">MODASA</span>
                <span>•</span>
                <span className="hidden sm:inline italic text-[11px] text-slate-500">{hospitalInfo.motto}</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                    : 'text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions: Direct Call & Appointment CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${hospitalInfo.contacts.emergency}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg text-[#1E3A5F] bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Us</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6B2C7E] to-[#843B9F] hover:from-[#582468] hover:to-[#6B2C7E] shadow-sm shadow-purple-900/20 hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-purple-900 hover:bg-purple-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-[#6B2C7E] hover:bg-[#582468] transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>

            <a
              href={`tel:${hospitalInfo.contacts.emergency}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#1E3A5F] bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Emergency: {hospitalInfo.contacts.emergencyDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
