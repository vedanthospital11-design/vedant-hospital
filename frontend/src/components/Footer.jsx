import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Clock, Mail, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Footer({ onOpenAppointment }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About Hospital */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group" aria-label="Vedant Hospital">
              <div className="bg-white p-2.5 rounded-2xl inline-flex items-center shadow-md shadow-black/20 group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/vedant-hospital-logo.png"
                  alt="Vedant Hospital"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated to compassionate, high-quality medical healthcare, safe motherhood, 24x7 ICU, and advanced clinical services for Modasa and surrounding communities.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-purple-400" />
                <span>માતૃત્વસ્પર્શ એવમ્ શમનમ્</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  About Hospital
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Our Specialist Doctors
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Hospital Facilities & ICU
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialist Doctors */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Specialist Doctors
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="font-semibold text-white">Dr. Happy Patel</p>
                <p className="text-xs text-purple-300 font-medium">M.B.D.G.O, DNB</p>
                <p className="text-xs text-slate-400 mt-1">Obstetrics & Gynecologist, Laparoscopic Surgeon</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="font-semibold text-white">Dr. Paras Patel</p>
                <p className="text-xs text-blue-300 font-medium">M.D. Physician</p>
                <p className="text-xs text-slate-400 mt-1">Consultant Diabetologist & Cardiac Physician</p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Hospital Address */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              Hospital Contact
            </h4>
            
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                3rd Floor, Gajanand Complex, Above Bank of Baroda, Deep Area, Shamlaji Road, Modasa, Dist. Aravalli, Gujarat
              </span>
            </div>

            <div className="space-y-2 text-sm pt-1">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="text-xs text-slate-400">24x7 Emergency:</span>
                <a href={`tel:${hospitalInfo.contacts.emergency}`} className="text-xs sm:text-sm font-bold text-white hover:text-purple-300">
                  {hospitalInfo.contacts.emergencyDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-400">WhatsApp:</span>
                <div className="text-xs sm:text-sm font-semibold text-white space-x-2">
                  <a 
                    href={hospitalInfo.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-300 hover:text-emerald-200"
                  >
                    {hospitalInfo.contacts.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-400">OPD: Mon - Sat (9 AM - 8 PM)</span>
              </div>
            </div>

            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white rounded-xl text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Vedant Hospital, Modasa. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>24x7 Emergency & ICU Care</span>
            <span>•</span>
            <span>Cashless Mediclaim Accepted</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
