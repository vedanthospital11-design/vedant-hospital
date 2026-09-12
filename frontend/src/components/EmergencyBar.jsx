import React from 'react';
import { Phone, Clock, MapPin, AlertCircle, MessageCircle } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';
import { useLocation } from 'react-router-dom';

export default function EmergencyBar() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className={`text-white text-[11px] sm:text-xs py-1 sm:py-1.5 px-3 sm:px-4 border-b transition-colors ${
      isHomepage
        ? 'bg-slate-950/90 backdrop-blur-sm border-slate-800/60 lg:bg-slate-950 lg:border-slate-800/80'
        : 'bg-slate-950 border-slate-800/80'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Mobile View: Compact Emergency & WhatsApp Strip */}
        <div className="flex sm:hidden w-full items-center justify-between text-[11px]">
          <a
            href={`tel:${hospitalInfo.contacts.emergency}`}
            className="flex items-center gap-1.5 font-bold text-rose-300 hover:text-white transition-colors whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0"></span>
            <span className="text-[10px] uppercase font-extrabold text-rose-400">24×7:</span>
            <span className="whitespace-nowrap">{hospitalInfo.contacts.emergencyDisplay}</span>
          </a>

          <a
            href={hospitalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Desktop View: Full Emergency & Quick Info */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-rose-600/90 text-white px-2 py-0.5 rounded-full text-[10.5px] font-semibold uppercase tracking-wider animate-pulse shrink-0">
            <AlertCircle className="w-3 h-3" />
            24×7 Emergency
          </span>
          <span className="text-slate-400 text-[11px] shrink-0">
            Helpline:
          </span>
          <a
            href={`tel:${hospitalInfo.contacts.emergency}`}
            className="font-bold text-amber-300 hover:text-white transition-colors flex items-center gap-1 text-xs whitespace-nowrap"
          >
            <Phone className="w-3 h-3 shrink-0" />
            <span>{hospitalInfo.contacts.emergencyDisplay}</span>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-slate-300 text-[11px]">
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-purple-300" />
            <span>OPD: 9:00 AM - 8:00 PM (Mon-Sat)</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3 h-3 text-purple-300" />
            <span>Shamlaji Road, Modasa, Aravalli</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">WhatsApp / Inquiries:</span>
            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-200 transition-colors font-semibold"
            >
              {hospitalInfo.contacts.whatsappDisplay}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
