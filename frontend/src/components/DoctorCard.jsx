import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Stethoscope, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function DoctorCard({ doctor }) {
  const isGynecologist = doctor.department.includes('Obstetrics');

  return (
    <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 group">
      
      {/* Top Banner / Image Area - Equal aspect ratio on both cards */}
      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-slate-900">
        <img
          src={doctor.image}
          alt={doctor.altText || doctor.name}
          className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>
        
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

      {/* Concise, Scannable Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
        
        <div className="space-y-4 flex-1 flex flex-col">
          
          {/* Key Credentials (3 concise points) */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-purple-700" />
              Key Credentials
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
              {(doctor.keyCredentials || doctor.experience.slice(0, 3)).map((cred, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5"></span>
                  <span className="leading-snug">{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Specialties (3-4 concise items) */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Stethoscope className="w-3.5 h-3.5 text-blue-700" />
              Key Specialties
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-700">
              {(doctor.keySpecialties || doctor.specialties.slice(0, 4)).map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                  <span className="leading-snug">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* View Full Profile Link */}
          <div className="pt-1">
            <Link
              to={`/doctors/${doctor.slug || doctor.id.replace('dr-', '')}`}
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-colors group/link ${
                isGynecologist ? 'text-[#6B2C7E] hover:text-[#582468]' : 'text-[#1E3A5F] hover:text-[#162A45]'
              }`}
            >
              <span>View Full Profile</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </div>

        </div>

        {/* Compact, Premium Action Buttons */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 shrink-0">
          <a
            href={hospitalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-2.5 px-4 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 btn-lift ${
              isGynecologist
                ? 'bg-[#6B2C7E] hover:bg-[#582468]'
                : 'bg-[#1E3A5F] hover:bg-[#162A45]'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consult on WhatsApp</span>
          </a>

          <a
            href={`tel:${hospitalInfo.contacts.appointment1}`}
            className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shrink-0 btn-lift"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>Call OPD</span>
          </a>
        </div>

      </div>
    </div>
  );
}
