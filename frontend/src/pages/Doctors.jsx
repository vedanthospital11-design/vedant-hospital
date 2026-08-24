import React from 'react';
import { Calendar, Phone, Award, CheckCircle2, Stethoscope, Clock, ShieldCheck, HeartPulse, Activity } from 'lucide-react';
import { doctorsData, hospitalInfo } from '../data/hospitalData';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';

export default function Doctors({ onOpenAppointment }) {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <MotionReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Medical Faculty
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Consultant Doctors & Specialists
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Experienced medical professionals offering specialized care in Obstetrics, Gynecology, Laparoscopy, 3D/4D Sonography, General Medicine, Cardiac & Critical ICU Care.
          </p>
        </MotionReveal>
      </section>

      {/* Detailed Doctor Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {doctorsData.map((doctor, index) => {
          const isGynecologist = doctor.department.includes('Obstetrics');
          const isReversed = index % 2 === 1;

          return (
            <MotionReveal
              key={doctor.id}
              variant="fade-up"
              delay={index * 100}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Doctor Portrait Col */}
                <div className={`lg:col-span-5 relative bg-slate-900 min-h-[360px] lg:min-h-[460px] ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={doctor.image}
                    alt={doctor.altText || doctor.name}
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm backdrop-blur-md ${
                      isGynecologist ? 'bg-[#6B2C7E]/95' : 'bg-[#1E3A5F]/95'
                    }`}>
                      {isGynecologist ? <HeartPulse className="w-3.5 h-3.5" /> : <Activity className="w-3.5 h-3.5" />}
                      {doctor.department}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h2 className="text-2xl sm:text-3xl font-extrabold">{doctor.name}</h2>
                    <p className="text-sm font-bold text-purple-200">{doctor.qualifications}</p>
                    <p className="text-xs text-slate-300 mt-0.5">{doctor.designation}</p>
                  </div>
                </div>

                {/* Doctor Details Col */}
                <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8 ${isReversed ? 'lg:order-1' : ''}`}>
                  
                  <div className="space-y-6">
                    {/* About summary */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2">
                        Professional Background
                      </h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {doctor.about}
                      </p>
                    </div>

                    {/* Qualifications and Experience List */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-purple-700" />
                        Clinical Training & Experience
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {doctor.experience.map((exp, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#6B2C7E] shrink-0 mt-0.5" />
                            <span>{exp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clinical Specialties */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                        <Stethoscope className="w-4 h-4 text-blue-700" />
                        Key Treatments & Procedures
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.specialties.map((spec, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-50 text-purple-900 border border-purple-100"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* OPD Hours */}
                    <div className="flex items-center gap-2 text-xs text-slate-600 bg-blue-50/70 p-3 rounded-xl border border-blue-100">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>
                        <strong>OPD Timings:</strong> Monday to Saturday (09:00 AM - 08:00 PM) | Emergency: 24x7 Available
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <a
                      href={hospitalInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3.5 px-6 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 btn-lift ${
                        isGynecologist
                          ? 'bg-[#6B2C7E] hover:bg-[#582468]'
                          : 'bg-[#1E3A5F] hover:bg-[#162A45]'
                      }`}
                    >
                      <span>Consult on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${hospitalInfo.contacts.appointment1}`}
                      className="py-3.5 px-6 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm flex items-center justify-center gap-2 transition-colors btn-lift"
                    >
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>Call OPD: {hospitalInfo.contacts.appointment1Display}</span>
                    </a>
                  </div>

                </div>

              </div>
            </MotionReveal>
          );
        })}
      </section>

    </div>
  );
}

