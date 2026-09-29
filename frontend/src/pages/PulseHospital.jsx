import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Activity, 
  ShieldAlert, 
  Scissors, 
  Waves, 
  Stethoscope, 
  Building, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { hospitalsNetwork } from '../data/hospitalsData';
import { getBreadcrumbSchema } from '../data/schemaData';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';

export default function PulseHospital({ onOpenAppointment }) {
  // Dynamically get Pulse Hospital details from the extensible network model
  const pulseHospital = hospitalsNetwork.find(h => h.id === 'pulse-hospital') || hospitalsNetwork[1];
  const { sections, highlights, fullAddress } = pulseHospital;

  const pulseSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Hospital",
      "name": "Pulse Hospital & I.C.U.",
      "description": "Pulse Hospital & I.C.U. in Modasa, Aravalli providing 24x7 Emergency & Trauma Care, ICU / MICU / SICU, Dialysis, Diagnostics, 2D Echo, and Surgical Care.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4th Floor, A-Block, City Centre, Shamlaji Road",
        "addressLocality": "Modasa",
        "addressRegion": "Gujarat",
        "postalCode": "383315",
        "addressCountry": "IN"
      },
      "slogan": "Caring for Life",
      "openingHours": "Mo-Su 00:00-23:59"
    },
    getBreadcrumbSchema([
      { name: 'Our Hospitals', url: '/#hospitals-network' },
      { name: 'Pulse Hospital & I.C.U.', url: '/pulse-hospital' }
    ])
  ];

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      <SEO
        title="Pulse Hospital & I.C.U. Modasa | Caring for Life | 24×7 Emergency & Critical Care"
        description="Pulse Hospital & I.C.U. in Modasa, Aravalli. 24×7 Emergency & Trauma Care, ICU/MICU/SICU, 24×7 Dialysis, 2D Echo, Sonography, Operation Theatre, and Surgical Services."
        canonical="/pulse-hospital"
        schema={pulseSchema}
      />

      <Breadcrumbs 
        items={[
          { name: 'Our Hospitals', url: '/#hospitals-network' },
          { name: 'Pulse Hospital & I.C.U.', url: '/pulse-hospital' }
        ]} 
      />

      {/* ============================================================
          1. HERO SECTION (Subtle Teal / Emerald Identity)
      ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-950 text-white py-14 sm:py-20 border-b border-teal-800/40">
        {/* Subtle background glow circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <MotionReveal variant="fade-up" className="max-w-3xl space-y-5">
            
            {/* Top Tags */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-teal-300 bg-teal-950/80 px-3.5 py-1.5 rounded-full border border-teal-700/60 shadow-inner">
                <HeartPulse className="w-3.5 h-3.5 text-teal-400" />
                <span>Hospital Centre</span>
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 px-3 py-1.5 rounded-full border border-emerald-700/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24×7 Emergency Active</span>
              </span>
            </div>

            {/* Hospital Name & Tagline */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Pulse Hospital &amp; I.C.U.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-teal-300 mt-2 font-serif italic">
                “Caring for Life”
              </p>
              <p className="text-sm sm:text-base font-semibold text-emerald-200/90 mt-1">
                સર્વાંગી અને તાત્કાલિક આરોગ્યસેવા
              </p>
            </div>

            {/* Prominent Emergency Headline Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-teal-950/60 border border-teal-500/40 backdrop-blur-md shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-300">
                <ShieldAlert className="w-6 h-6 text-teal-300" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-300">
                  Critical Care Response
                </span>
                <p className="text-base sm:text-lg font-black text-white leading-snug">
                  24×7 Emergency &amp; Trauma Care
                </p>
                <p className="text-xs text-teal-200/80 mt-0.5">
                  Round-the-clock emergency medical response and critical patient intervention in Modasa.
                </p>
              </div>
            </div>

            {/* Location Pill */}
            <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>{fullAddress}</span>
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact-location"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-950/50 transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>View Hospital Location</span>
              </a>

              <a
                href="#critical-care"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-teal-200 font-bold text-xs sm:text-sm border border-teal-700/40 transition-all"
              >
                <span>Explore Facilities &amp; Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </MotionReveal>
        </div>
      </section>

      {/* ============================================================
          2. CORE HIGHLIGHTS BAR
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xl grid grid-cols-2 md:grid-cols-5 gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-teal-50/60 border border-teal-100/80">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          3. EMERGENCY & CRITICAL CARE / ICU SECTION
      ============================================================ */}
      <section id="critical-care" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <MotionReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
            Emergency &amp; Intensive Care
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Critical Care &amp; Emergency Units
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-teal-700">
            સતત મોનિટરિંગ અને તાત્કાલિક જીવનરક્ષક સેવાઓ
          </p>
        </MotionReveal>

        <StaggerGroup stagger={90} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: 24x7 Emergency & Trauma Care */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
            <div className="flex-1 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                  24×7 Available
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {sections.emergency.title}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-0.5">
                  {sections.emergency.titleGujarati}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {sections.emergency.description}
                </p>
              </div>

              <div className="flex-1 min-h-2" />

              <div className="pt-4 border-t border-slate-100 space-y-3">
                {sections.emergency.items.map((it, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{it.name}</span>
                      <p className="text-xs text-slate-500 mt-0.5 leading-normal">{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold shrink-0">
              <span>Emergency Desk</span>
              <span className="text-emerald-700 font-bold">Modasa, Aravalli</span>
            </div>
          </div>

          {/* Card 2: Critical Care & ICU */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
            <div className="flex-1 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Intensive Care
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {sections.criticalCare.title}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-0.5">
                  {sections.criticalCare.titleGujarati}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {sections.criticalCare.description}
                </p>
              </div>

              <div className="flex-1 min-h-2" />

              <div className="pt-4 border-t border-slate-100 space-y-3">
                {sections.criticalCare.items.map((it, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{it.name}</span>
                      <p className="text-xs text-slate-500 mt-0.5 leading-normal">{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold shrink-0">
              <span>Vital Life Support</span>
              <span className="text-teal-700 font-bold">Continuous Monitoring</span>
            </div>
          </div>

        </StaggerGroup>
      </section>

      {/* ============================================================
          4. DIAGNOSTICS & SURGICAL SERVICES
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <MotionReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
            Clinical Care &amp; Operations
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Diagnostics &amp; Surgical Services
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-teal-700">
            ચોક્કસ નિદાન અને સલામત સર્જિકલ વ્યવસ્થાપન
          </p>
        </MotionReveal>

        <StaggerGroup stagger={90} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Diagnostics Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
            <div className="flex-1 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Waves className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Imaging &amp; Echo
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {sections.diagnostics.title}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-0.5">
                  {sections.diagnostics.titleGujarati}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {sections.diagnostics.description}
                </p>
              </div>

              <div className="flex-1 min-h-2" />

              <div className="pt-4 border-t border-slate-100 space-y-3">
                {sections.diagnostics.items.map((it, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{it.name}</span>
                      <p className="text-xs text-slate-500 mt-0.5 leading-normal">{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold shrink-0">
              <span>Cardiology &amp; Sonography</span>
              <span className="text-teal-700 font-bold">Diagnostic Precision</span>
            </div>
          </div>

          {/* Surgical Services Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
            <div className="flex-1 flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Scissors className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  Operative Suites
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-teal-800 transition-colors">
                  {sections.surgical.title}
                </h3>
                <p className="text-xs font-semibold text-teal-700 mt-0.5">
                  {sections.surgical.titleGujarati}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {sections.surgical.description}
                </p>
              </div>

              <div className="flex-1 min-h-2" />

              <div className="pt-4 border-t border-slate-100 space-y-3">
                {sections.surgical.items.map((it, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{it.name}</span>
                      <p className="text-xs text-slate-500 mt-0.5 leading-normal">{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold shrink-0">
              <span>Surgical Care</span>
              <span className="text-teal-700 font-bold">Equipped OT</span>
            </div>
          </div>

        </StaggerGroup>
      </section>

      {/* ============================================================
          5. MEDICAL SPECIALTIES & HOSPITAL FACILITIES
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <MotionReveal variant="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
            Clinical Departments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Medical Specialties &amp; Hospital Facilities
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-teal-700">
            તબીબી વિભાગો અને સારવાર સંશાધનો
          </p>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Medical Specialties Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
            <div className="flex-1 flex flex-col space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-teal-800 transition-colors">
                      {sections.specialties.title}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700">
                      {sections.specialties.titleGujarati}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  5 Specialties
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {sections.specialties.description}
              </p>

              {/* 5 Specialty Items in clean vertical list */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100 flex-1 flex flex-col justify-between">
                {sections.specialties.items.map((spec, i) => (
                  <div 
                    key={i} 
                    className="p-3 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-teal-50/50 hover:border-teal-200 transition-all flex items-start gap-3 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-teal-700 group-hover/item:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover/item:text-teal-800 transition-colors">
                          {spec.name}
                        </h4>
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-teal-700 bg-teal-100/60 px-1.5 py-0.5 rounded shrink-0">
                          Specialty
                        </span>
                      </div>
                      <p className="text-[11.5px] text-slate-500 mt-0.5 leading-snug">
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold shrink-0">
              <span>Clinical Consultations</span>
              <span className="text-teal-700 font-bold">Comprehensive Care</span>
            </div>
          </div>

          {/* Hospital Facilities Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
            <div className="flex-1 flex flex-col space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {sections.facilities.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">
                      {sections.facilities.titleGujarati}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  4 Facilities
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {sections.facilities.description}
              </p>

              {/* 4 Facility Items in matching vertical list */}
              <div className="space-y-3 pt-2 border-t border-slate-100 flex-1 flex flex-col justify-between">
                {sections.facilities.items.map((fac, i) => (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/70 hover:bg-emerald-50/50 hover:border-emerald-200 transition-all flex items-start gap-3 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover/item:text-emerald-800 transition-colors">
                          {fac.name}
                        </h4>
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-1.5 py-0.5 rounded shrink-0">
                          Facility
                        </span>
                      </div>
                      <p className="text-[11.5px] text-slate-500 mt-0.5 leading-snug">
                        {fac.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold shrink-0">
              <span>Infrastructure</span>
              <span className="text-emerald-700 font-bold">24×7 Available Units</span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          6. CONTACT & LOCATION CARD
      ============================================================ */}
      <section id="contact-location" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-teal-800/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950 px-3 py-1 rounded-full border border-teal-700/60">
                Hospital Centre Location
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Pulse Hospital &amp; I.C.U.
              </h2>
              <p className="text-base text-teal-200 italic font-serif">
                “Caring for Life”
              </p>
              
              <div className="pt-2 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-1" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-teal-400">Address</span>
                  <p className="text-sm sm:text-base text-slate-200 mt-0.5 leading-relaxed font-medium">
                    {fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-emerald-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>24×7 Emergency &amp; Trauma Care Available</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-teal-950/80 rounded-2xl p-6 border border-teal-700/50 backdrop-blur-md space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Modasa Healthcare Centre</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Located on the 4th Floor of A-Block, City Centre, Shamlaji Road in Modasa, serving patients across Aravalli district.
              </p>
              <div className="pt-2">
                <Link
                  to="/#hospitals-network"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs transition-colors"
                >
                  <span>View Healthcare Network</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </MotionReveal>
      </section>

      {/* ============================================================
          7. NETWORK CROSS-PROMOTION STRIP (Preserves separate identities)
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
              Healthcare Network
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Looking for Maternity, Obstetrics &amp; Gynecology Services?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore <strong>Vedant Hospital</strong> on Shamlaji Road, Modasa for safe childbirth, advanced 3D/4D sonography, and in-house laboratory.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6B2C7E] hover:bg-[#582468] text-white font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-xs"
          >
            <span>Visit Vedant Hospital →</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
