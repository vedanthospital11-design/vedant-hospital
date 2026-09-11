import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  Stethoscope, 
  Clock, 
  Phone, 
  MessageCircle, 
  ArrowLeft, 
  ChevronRight, 
  HeartPulse, 
  Activity, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';
import { doctorsData, hospitalInfo } from '../data/hospitalData';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';

export default function DoctorProfile({ specifiedSlug }) {
  const { doctorSlug } = useParams();
  const slug = specifiedSlug || doctorSlug;

  // Match doctor by slug or id
  const doctor = doctorsData.find(
    (d) => d.slug === slug || d.id === slug || d.slug === slug?.replace('dr-', '') || d.id === `dr-${slug}`
  );

  useEffect(() => {
    if (doctor) {
      document.title = `${doctor.name} | Vedant Hospital Modasa`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          `${doctor.name} (${doctor.qualifications}) - ${doctor.designation} at Vedant Hospital, Modasa. ${doctor.about}`
        );
      }
      window.scrollTo(0, 0);
    }
  }, [doctor]);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  const isGynecologist = doctor.department.includes('Obstetrics');

  return (
    <div className="py-6 sm:py-10 space-y-10 sm:space-y-14">
      
      {/* 1. Breadcrumbs & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          
          {/* Breadcrumb path */}
          <nav className="flex items-center gap-1.5 text-slate-500 font-medium" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#6B2C7E] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/doctors" className="hover:text-[#6B2C7E] transition-colors">Our Doctors</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">{doctor.name}</span>
          </nav>

          {/* Back link */}
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-[#6B2C7E] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Our Doctors</span>
          </Link>

        </div>
      </div>

      {/* 2. Hero Section: Doctor Profile Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Real Photograph */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
                <img
                  src={doctor.image}
                  alt={doctor.altText || doctor.name}
                  className="w-full h-full object-cover object-[center_28%] group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                
                {/* Department Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-sm backdrop-blur-md ${
                    isGynecologist ? 'bg-[#6B2C7E]/95' : 'bg-[#1E3A5F]/95'
                  }`}>
                    {isGynecologist ? <HeartPulse className="w-3.5 h-3.5" /> : <Activity className="w-3.5 h-3.5" />}
                    {doctor.department}
                  </span>
                </div>
              </div>
            </div>

            {/* Doctor Info & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className={`inline-block text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${
                  isGynecologist ? 'text-[#6B2C7E] bg-purple-50 border-purple-200' : 'text-[#1E3A5F] bg-blue-50 border-blue-200'
                }`}>
                  Consultant Specialist
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {doctor.name}
                </h1>
                <p className="text-base sm:text-xl font-bold text-[#6B2C7E]">
                  {doctor.qualifications}
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-medium">
                  {doctor.designation}
                </p>
              </div>

              {/* Professional Background */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Professional Background
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {doctor.about}
                </p>
              </div>

              {/* OPD Schedule Box */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100 text-xs sm:text-sm text-slate-700">
                <Clock className="w-4 h-4 text-[#6B2C7E] shrink-0" />
                <span>
                  <strong>OPD Consultation:</strong> Monday to Saturday (09:00 AM - 08:00 PM) | <strong>Emergency:</strong> 24×7 Available
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={hospitalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-3.5 px-6 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 btn-lift ${
                    isGynecologist ? 'bg-[#6B2C7E] hover:bg-[#582468]' : 'bg-[#1E3A5F] hover:bg-[#162A45]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consult on WhatsApp</span>
                </a>

                <a
                  href={`tel:${hospitalInfo.contacts.appointment1}`}
                  className="py-3.5 px-6 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm flex items-center justify-center gap-2 transition-colors btn-lift"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call OPD · {hospitalInfo.contacts.appointment1Display}</span>
                </a>
              </div>

            </div>

          </div>
        </MotionReveal>
      </section>

      {/* 3. Clinical Credentials & Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Qualifications & Training
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#6B2C7E]" />
              Clinical Training & Experience
            </h2>
            <p className="text-xs font-semibold text-[#6B2C7E] mt-1">અદ્યતન સારવાર અને નિષ્ણાત તબીબી અનુભવ સાથે દર્દીકેન્દ્રિત સેવા.</p>
          </div>

          <StaggerGroup stagger={100} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctor.experience.map((exp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-purple-50/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#6B2C7E] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                  {exp}
                </span>
              </div>
            ))}
          </StaggerGroup>
        </MotionReveal>
      </section>

      {/* 4. Key Treatments & Procedures */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Specialized Care
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-blue-700" />
              Key Treatments & Clinical Procedures
            </h2>
            <p className="text-xs font-semibold text-[#1E3A5F] mt-1">એકીકૃત અભિગમ દ્વારા દર્દીને શ્રેષ્ઠ અને સંપૂર્ણ સારવાર પૂરી પાડવામાં સક્ષમ.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {doctor.specialties.map((treatment, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-purple-100 bg-purple-50/30 hover:bg-purple-50/70 transition-colors flex items-start gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#6B2C7E] shrink-0 mt-1.5"></span>
                <span className="text-xs sm:text-sm font-semibold text-slate-800">
                  {treatment}
                </span>
              </div>
            ))}
          </div>
        </MotionReveal>
      </section>

      {/* 5. Hospital Consultation Location & Direct Helpline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="rounded-3xl bg-gradient-to-br from-slate-900 to-purple-950 p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Vedant Hospital, Modasa</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Need Consultation with {doctor.name}?
            </h3>
            <p className="text-xs font-semibold text-purple-200">સલાહ અને સારવાર માટે સીધો સંપર્ક કરો</p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Visit our modern hospital campus on Malpur Road, Modasa or connect directly with our desk for appointments.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>
            <a
              href={`tel:${hospitalInfo.contacts.appointment1}`}
              className="py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-purple-300" />
              <span>Call: {hospitalInfo.contacts.appointment1Display}</span>
            </a>
          </div>
        </MotionReveal>
      </section>

    </div>
  );
}
