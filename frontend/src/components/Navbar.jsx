import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  MessageCircle, 
  Phone, 
  HeartPulse, 
  Activity, 
  Sparkles, 
  ArrowRight,
  Stethoscope,
  Building2,
  ShieldAlert
} from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const [mobileDeptsExpanded, setMobileDeptsExpanded] = useState(false);
  const [mobileFacsExpanded, setMobileFacsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const dropdownTimeoutRef = useRef(null);
  const navContainerRef = useRef(null);

  // Detect scroll to dynamically adjust navbar padding/shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route or anchor change
  useEffect(() => {
    setAboutMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isHomepage = location.pathname === '/';
  // Whether the navbar should use the transparent hero overlay treatment (mobile only)
  const isMobileHeroMode = isHomepage && !isScrolled;

  // Handle outside click to close desktop mega menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target)) {
        setAboutMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setAboutMenuOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutMenuOpen(false);
    }, 180);
  };

  // Active check: "About Us" is active if on /about, /departments, or /facilities
  const isAboutActive = () => {
    return (
      location.pathname.startsWith('/about') ||
      location.pathname.startsWith('/departments') ||
      location.pathname.startsWith('/facilities')
    );
  };

  const isNavActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // 3 Category Cards for the Compact Mega Menu
  const categoryCards = [
    {
      badge: "ABOUT US",
      badgeClass: "text-[#6B2C7E] bg-purple-50 border-purple-200/70",
      title: "About Vedant Hospital",
      description: "Learn about Vedant Hospital, our story, doctors and approach to compassionate healthcare.",
      icon: HeartPulse,
      iconBg: "bg-purple-100 text-[#6B2C7E] group-hover:bg-[#6B2C7E] group-hover:text-white",
      link: "/about",
      cta: "Explore About Us",
      borderHover: "hover:border-purple-300 hover:shadow-purple-900/10",
      ctaClass: "text-[#6B2C7E] group-hover:text-[#582468]"
    },
    {
      badge: "DEPARTMENTS",
      badgeClass: "text-[#1E3A5F] bg-blue-50 border-blue-200/70",
      title: "Medical Departments & Specialists",
      description: "Explore our medical specialties and the doctors providing specialized care.",
      icon: Stethoscope,
      iconBg: "bg-blue-100 text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white",
      link: "/departments",
      cta: "View Departments",
      borderHover: "hover:border-blue-300 hover:shadow-blue-900/10",
      ctaClass: "text-[#1E3A5F] group-hover:text-[#162A45]"
    },
    {
      badge: "FACILITIES",
      badgeClass: "text-slate-800 bg-slate-100 border-slate-200",
      title: "Hospital Infrastructure & Amenities",
      description: "Explore the hospital's emergency, ICU, diagnostic and surgical facilities.",
      icon: Sparkles,
      iconBg: "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white",
      link: "/facilities",
      cta: "View Facilities",
      borderHover: "hover:border-indigo-300 hover:shadow-indigo-900/10",
      ctaClass: "text-indigo-700 group-hover:text-indigo-900"
    }
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 bg-white border-b ${
        isScrolled 
          ? 'border-slate-200/80 shadow-md shadow-slate-900/5 backdrop-blur-xl' 
          : 'border-slate-100 shadow-xs'
      }`} 
      ref={navContainerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'
        }`}>
          
          {/* 1. Logo + Hospital Name — mobile brand identity */}
          <Link to="/" className="flex items-center gap-2.5 py-1 group shrink-0 min-w-0" aria-label="Vedant Hospital">
            {/* Official logo mark */}
            <img
              src="/vedant-hospital-logo.png"
              alt="Vedant Hospital"
              className={`w-auto object-contain shrink-0 transition-all duration-300 group-hover:scale-[1.02] ${
                isScrolled ? 'h-11 sm:h-12 lg:h-14' : 'h-13 sm:h-14 lg:h-16'
              }`}
            />

            {/* Hospital name — mobile only, always dark for readability */}
            <div className="lg:hidden flex flex-col justify-center leading-tight min-w-0">
              <span
                className="text-[13.5px] font-extrabold text-[#1E3A5F] truncate"
                style={{ letterSpacing: '0.035em' }}
              >
                VEDANT HOSPITAL
              </span>
              <span
                className="text-[10.5px] font-bold text-[#6B2C7E] mt-0.5"
                style={{ letterSpacing: '0.10em' }}
              >
                MODASA
              </span>
            </div>
          </Link>

          {/* 2. Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2">
            
            {/* Home */}
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isNavActive('/') && location.pathname === '/'
                  ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                  : 'text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50/50'
              }`}
            >
              Home
            </Link>

            {/* About Us (Compact 3-Category Mega-Menu) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isAboutActive() || aboutMenuOpen
                    ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                    : 'text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50/50'
                }`}
                aria-expanded={aboutMenuOpen}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutMenuOpen ? 'rotate-180 text-[#6B2C7E]' : 'text-slate-400'}`} />
              </button>

              {/* Compact 3-Card Category Mega Menu */}
              {aboutMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[840px] max-w-[95vw] animate-in fade-in-0 slide-in-from-top-2 duration-200 z-50">
                  <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6">
                    
                    {/* Header Slogan */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 text-xs">
                      <span className="font-extrabold tracking-wider uppercase text-slate-400">
                        Explore Vedant Hospital
                      </span>
                      <span className="font-semibold text-purple-700">
                        માતૃત્વસ્પર્શ એવમ્ શમનમ્
                      </span>
                    </div>

                    {/* 3 Large Category Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      {categoryCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                          <Link
                            key={idx}
                            to={card.link}
                            onClick={() => setAboutMenuOpen(false)}
                            className={`rounded-2xl p-5 border border-slate-200/80 bg-white hover:bg-slate-50/60 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${card.borderHover}`}
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border ${card.badgeClass}`}>
                                  {card.badge}
                                </span>
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors shrink-0 ${card.iconBg}`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                              </div>

                              <div>
                                <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#6B2C7E] transition-colors leading-snug">
                                  {card.title}
                                </h3>
                                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                            </div>

                            <div className="pt-4 mt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold transition-all">
                              <span className={card.ctaClass}>{card.cta}</span>
                              <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${card.ctaClass}`} />
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Our Doctors */}
            <Link
              to="/doctors"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isNavActive('/doctors')
                  ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                  : 'text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50/50'
              }`}
            >
              Our Doctors
            </Link>

            {/* Photo Gallery */}
            <Link
              to="/gallery"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isNavActive('/gallery')
                  ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                  : 'text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50/50'
              }`}
            >
              Photo Gallery
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isNavActive('/contact')
                  ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                  : 'text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50/50'
              }`}
            >
              Contact Us
            </Link>

          </nav>

          {/* 3. Primary WhatsApp CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-sm shadow-emerald-900/20 hover:shadow-md transition-all duration-200 active:scale-95 group/wa"
            >
              <MessageCircle className="w-4 h-4 group-hover/wa:scale-110 transition-transform" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* 4. Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-purple-50 hover:text-purple-900 border border-slate-200 transition-all cursor-pointer shadow-2xs"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <nav className="space-y-1">
            
            {/* 1. Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isNavActive('/') && location.pathname === '/'
                  ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
            </Link>

            {/* 2. About Us Accordion */}
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50/60">
              <button
                onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                className={`w-full flex items-center justify-between px-4 py-3.5 text-sm font-bold transition-colors cursor-pointer ${
                  isAboutActive() || mobileAboutExpanded
                    ? 'text-[#6B2C7E] bg-purple-50/80'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${mobileAboutExpanded ? 'rotate-180 text-[#6B2C7E]' : ''}`} />
              </button>
              
              {mobileAboutExpanded && (
                <div className="px-3 py-2 space-y-1 border-t border-slate-100 bg-white">
                  
                  {/* Category 1: About Us */}
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-slate-800 hover:text-[#6B2C7E] hover:bg-purple-50"
                  >
                    <span>About Vedant Hospital</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </Link>

                  {/* Category 2: Departments (Expandable) */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/50 overflow-hidden">
                    <button
                      onClick={() => setMobileDeptsExpanded(!mobileDeptsExpanded)}
                      className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100 cursor-pointer"
                    >
                      <span>Departments</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${mobileDeptsExpanded ? 'rotate-180 text-[#6B2C7E]' : ''}`} />
                    </button>
                    {mobileDeptsExpanded && (
                      <div className="px-3 pb-2 pt-1 space-y-1 bg-white border-t border-slate-100">
                        <Link
                          to="/departments#gynecology"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50"
                        >
                          • Obstetrics & Gynecology
                        </Link>
                        <Link
                          to="/departments#medicine"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50"
                        >
                          • General Medicine & Critical Care
                        </Link>
                        <Link
                          to="/departments"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#1E3A5F] hover:bg-blue-50"
                        >
                          View All Departments →
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Category 3: Facilities (Expandable) */}
                  <div className="rounded-xl border border-slate-100 bg-slate-50/50 overflow-hidden">
                    <button
                      onClick={() => setMobileFacsExpanded(!mobileFacsExpanded)}
                      className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100 cursor-pointer"
                    >
                      <span>Facilities</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${mobileFacsExpanded ? 'rotate-180 text-[#6B2C7E]' : ''}`} />
                    </button>
                    {mobileFacsExpanded && (
                      <div className="px-3 pb-2 pt-1 space-y-1 bg-white border-t border-slate-100">
                        <Link
                          to="/facilities#emergency"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50"
                        >
                          • 24×7 Emergency Treatment
                        </Link>
                        <Link
                          to="/facilities#icu"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50"
                        >
                          • 24×7 Doctor-Supervised ICU
                        </Link>
                        <Link
                          to="/facilities#ot"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50"
                        >
                          • Modern Modular OT & Labour Room
                        </Link>
                        <Link
                          to="/facilities#sonography"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50"
                        >
                          • 3D / 4D Sonography Suite
                        </Link>
                        <Link
                          to="/facilities#laboratory"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50"
                        >
                          • 24×7 Pathology Laboratory
                        </Link>
                        <Link
                          to="/facilities#pharmacy"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-[#6B2C7E] hover:bg-purple-50"
                        >
                          • 24×7 In-House Pharmacy
                        </Link>
                        <Link
                          to="/facilities"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg text-xs font-bold text-indigo-700 hover:bg-indigo-50"
                        >
                          View All Facilities →
                        </Link>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

            {/* 3. Our Doctors */}
            <Link
              to="/doctors"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isNavActive('/doctors')
                  ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Our Doctors</span>
            </Link>

            {/* 4. Photo Gallery */}
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isNavActive('/gallery')
                  ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Photo Gallery</span>
            </Link>

            {/* 5. Contact Us */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isNavActive('/contact')
                  ? 'text-[#6B2C7E] bg-purple-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>Contact & Location</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

          </nav>

          {/* Mobile Bottom Contact & Emergency Buttons */}
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Us on WhatsApp</span>
            </a>

            <a
              href={`tel:${hospitalInfo.contacts.emergency}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-rose-600" />
              <span>24x7 Emergency: {hospitalInfo.contacts.emergencyDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



