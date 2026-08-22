import React from 'react';
import { Phone, Clock, MapPin, AlertCircle } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function EmergencyBar() {
  return (
    <div className="bg-slate-900 text-white text-xs md:text-sm py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Emergency Alert Tag */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-rose-600/90 text-white px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse">
            <AlertCircle className="w-3.5 h-3.5" />
            24x7 Emergency
          </span>
          <span className="hidden sm:inline text-slate-300">
            Emergency Helpline:
          </span>
          <a
            href={`tel:${hospitalInfo.contacts.emergency}`}
            className="font-bold text-amber-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            {hospitalInfo.contacts.emergencyDisplay}
          </a>
        </div>

        {/* Quick Info & Location */}
        <div className="flex items-center gap-4 text-slate-300 text-xs">
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-purple-300" />
            <span>OPD: 9:00 AM - 8:00 PM (Mon-Sat)</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-purple-300" />
            <span>Shamlaji Road, Modasa, Aravalli</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Appt:</span>
            <a
              href={`tel:${hospitalInfo.contacts.appointment1}`}
              className="text-white hover:text-purple-300 transition-colors font-medium"
            >
              {hospitalInfo.contacts.appointment1Display}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
