import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, ShieldCheck, CheckCircle2, Award, Clock, Users, Building, Activity, Calendar } from 'lucide-react';
import { hospitalInfo, doctorsData } from '../data/hospitalData';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';

export default function About({ onOpenAppointment }) {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <MotionReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            About Vedant Hospital
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Committed to Compassionate Healthcare & Motherhood in Modasa
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Providing high-standard obstetrics, gynecology, critical care, and general medicine services with state-of-the-art medical technology.
          </p>
        </MotionReveal>
      </section>

      {/* Hospital Overview */}
      <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <MotionReveal variant="fade-right" className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-100/80 text-purple-900 text-xs font-bold">
              <HeartPulse className="w-4 h-4 text-[#6B2C7E]" />
              <span>માતૃત્વસ્પર્શ એવમ્ શમનમ્</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              A Modern Healthcare Sanctuary for Modasa & Aravalli
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>Vedant Hospital</strong> was established with the noble vision to offer comprehensive, high-quality, and ethical healthcare services in Modasa. Led by <strong className="text-[#6B2C7E]">Dr. Happy Patel</strong> (Consultant Obstetrician & Gynecologist) and <strong className="text-[#1E3A5F]">Dr. Paras Patel</strong> (M.D. Physician, Consultant Diabetologist & Cardiac Physician), our hospital integrates clinical expertise with patient-centric care.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialize in <strong>Obstetrics & Gynecology</strong> (including Normal & Painless Epidural Deliveries, 3D/4D Sonography, and Stitchless Laparoscopic Surgeries) as well as <strong>General Medicine & Critical Care</strong> (including 24x7 Doctor-Supervised ICU, Cardiac Emergencies, Diabetes Management, and Inpatient Services).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                <span>24x7 Doctor-Supervised ICU</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Modern Modular Operation Theatre</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                <span>24x7 In-House Lab & Pharmacy</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Cashless Mediclaim Support</span>
              </div>
            </div>

          </MotionReveal>

          <MotionReveal variant="fade-left" delay={100} className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/hospital-reception.jpg"
                alt="Vedant Hospital Reception Lobby"
                className="w-full h-96 object-cover animate-ken-burns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Modasa, Aravalli
                </span>
                <h3 className="text-xl font-bold mt-1">Vedant Hospital Facility</h3>
                <p className="text-xs text-slate-300">Clean, air-conditioned, patient-friendly environment</p>
              </div>
            </div>
          </MotionReveal>

        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section id="mission" className="bg-slate-50 py-16 border-y border-slate-200/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MotionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Mission & Guiding Healthcare Values
            </h2>
          </MotionReveal>

          <StaggerGroup stagger={120} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#6B2C7E] flex items-center justify-center">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800">Safe Motherhood</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  "સુરક્ષિત માતૃત્વ સ્વસ્થ પરિવાર... સુખી જીવન..." Ensuring every expecting mother and newborn receives the safest, most comforting obstetric and neonatal medical attention.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#1E3A5F] flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800">Rapid Critical Care</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Providing 24x7 doctor-supervised ICU services, prompt cardiac resuscitation, diabetic crisis intervention, and acute poisoning/snake bite antidote administration.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-800">Ethical & Transparent</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Clear communication with patients and relatives, full assistance with cashless mediclaim, and standard evidence-based medical treatment protocols.
                </p>
              </div>
            </div>

          </StaggerGroup>

        </div>
      </section>

      {/* Leadership Doctors Section */}
      <section id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <MotionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Medical Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Consultant Physicians & Surgeons
          </h2>
        </MotionReveal>

        <StaggerGroup stagger={150} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:shadow-xl transition-shadow">
              <img
                src={doctor.image}
                alt={doctor.altText || doctor.name}
                className="w-32 h-32 rounded-2xl object-cover object-center border-2 border-purple-200 shrink-0"
              />
              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{doctor.name}</h3>
                  <p className="text-xs font-bold text-purple-700">{doctor.qualifications}</p>
                  <p className="text-xs text-slate-500">{doctor.designation}</p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {doctor.about}
                </p>
                <div className="pt-2">
                  <a
                    href={hospitalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#6B2C7E] hover:bg-[#582468] text-white text-xs font-bold rounded-xl transition-colors shadow-xs btn-lift"
                  >
                    <span>Contact via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </StaggerGroup>
      </section>

      {/* CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="scale-in" className="bg-gradient-to-r from-[#1E3A5F] to-[#6B2C7E] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Contact Vedant Hospital
          </h2>
          <p className="text-purple-100 text-sm sm:text-base max-w-xl mx-auto">
            Connect directly with our hospital reception and doctors on WhatsApp or visit us on Shamlaji Road, Modasa.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-2 btn-lift"
            >
              <span>Chat on WhatsApp: {hospitalInfo.contacts.whatsappDisplay}</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-white/15 border border-white/30 text-white font-bold rounded-xl hover:bg-white/25 transition-all btn-lift"
            >
              Get Location & Directions
            </Link>
          </div>
        </MotionReveal>
      </section>

    </div>
  );
}

