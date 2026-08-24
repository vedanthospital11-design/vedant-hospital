import React from 'react';
import { Award, CheckCircle2, Calendar, Phone, ArrowRight } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function DoctorCard({ doctor, onBookAppointment }) {
  const isGynecologist = doctor.department.includes('Obstetrics');

  return (
    <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 group">
      
      {/* Top Banner / Image Area - Equal aspect ratio on both cards */}
      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-slate-900">
        <img
          src={doctor.image}
          alt={doctor.altText || doctor.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            isGynecologist ? 'object-[center_30%]' : 'object-[center_28%]'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
        
        {/* Department Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm backdrop-blur-md ${
            isGynecologist ? 'bg-[#6B2C7E]/95' : 'bg-[#1E3A5F]/95'
          }`}>
            {doctor.department}
          </span>
        </div>

        {/* Doctor Name & Qualifications Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">{doctor.name}</h3>
          <p className="text-xs sm:text-sm font-semibold text-purple-200">{doctor.qualifications}</p>
          <p className="text-xs text-slate-300 font-light mt-0.5">{doctor.designation}</p>
        </div>
      </div>

      {/* Content Area with Flex 1 and mt-auto for CTA alignment */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        
        {/* Top Content (Credentials + Clinical Focus) */}
        <div className="space-y-5 flex-1 flex flex-col">
          {/* Credentials & Clinical Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-purple-700" />
              Credentials & Clinical Experience
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {doctor.experience.map((exp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5"></span>
                  <span className="leading-snug">{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Clinical Focus & Treatments */}
          <div className="flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              Clinical Focus & Treatments
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {doctor.specialties.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 border border-slate-200 text-slate-700 hover:bg-purple-50/50 hover:border-purple-200 transition-colors"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Row - Perfectly pinned to bottom across both cards */}
        <div className="mt-auto pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 shrink-0">
          <a
            href={hospitalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 btn-lift ${
              isGynecologist
                ? 'bg-[#6B2C7E] hover:bg-[#582468]'
                : 'bg-[#1E3A5F] hover:bg-[#162A45]'
            }`}
          >
            <span>Consult {doctor.name.split(' ')[1]} on WhatsApp</span>
          </a>

          <a
            href={`tel:${hospitalInfo.contacts.appointment1}`}
            className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shrink-0 btn-lift"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>Call OPD</span>
          </a>
        </div>

      </div>
    </div>
  );
}

