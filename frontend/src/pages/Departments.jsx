import React from 'react';
import { 
  HeartPulse, 
  Activity, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Baby, 
  Stethoscope 
} from 'lucide-react';
import { departmentsData, hospitalInfo } from '../data/hospitalData';

export default function Departments({ onOpenAppointment }) {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Specialized Medical Divisions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Clinical Departments & Comprehensive Treatments
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            From modern maternity and painless childbirth to 24x7 doctor-supervised ICU and cardiac care, explore our hospital services in Modasa.
          </p>
        </div>
      </section>

      {/* Departments Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {departmentsData.map((dept) => {
          const isGynecology = dept.id === 'gynecology';
          
          return (
            <div
              key={dept.id}
              id={dept.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8"
            >
              
              {/* Department Title & Header Strip */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-slate-100 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isGynecology ? 'bg-purple-100 text-[#6B2C7E]' : 'bg-blue-100 text-[#1E3A5F]'
                    }`}>
                      {dept.titleGujarati}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">• Vedant Modasa</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
                    {isGynecology ? (
                      <HeartPulse className="w-8 h-8 text-[#6B2C7E]" />
                    ) : (
                      <Activity className="w-8 h-8 text-[#1E3A5F]" />
                    )}
                    {dept.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
                    {dept.summary}
                  </p>

                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    Lead Consultant: <strong className={isGynecology ? 'text-[#6B2C7E]' : 'text-[#1E3A5F]'}>{dept.headDoctor}</strong> ({dept.qualifications})
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenAppointment(isGynecology ? 'dr-happy-patel' : 'dr-paras-patel')}
                    className={`py-3 px-5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 ${
                      isGynecology ? 'bg-[#6B2C7E] hover:bg-[#582468]' : 'bg-[#1E3A5F] hover:bg-[#162A45]'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book OPD Appointment</span>
                  </button>

                  <a
                    href={`tel:${hospitalInfo.contacts.emergency}`}
                    className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-rose-600" />
                    <span>24x7 Helpline</span>
                  </a>
                </div>
              </div>

              {/* Grid of Treatments / Services */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Clinical Treatments & Diagnostic Capabilities
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dept.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/70 hover:bg-white hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <span className={`w-2 h-2 rounded-full ${isGynecology ? 'bg-[#6B2C7E]' : 'bg-[#1E3A5F]'}`}></span>
                          <h4 className="font-bold text-base text-slate-900 leading-snug">
                            {srv.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {srv.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                        <span>Available at Vedant Hospital</span>
                        <span className="text-emerald-700 font-bold">OPD & IPD</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
}
