import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, HeartPulse, Activity, Sparkles, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { doctorsData, hospitalInfo } from '../data/hospitalData';
import { getHospitalSchema, getBreadcrumbSchema, getPhysicianSchema } from '../data/schemaData';
import DoctorCard from '../components/DoctorCard';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Doctors({ onOpenAppointment }) {
  const doctorsSchema = [
    getHospitalSchema(),
    getBreadcrumbSchema([{ name: 'Our Doctors', url: '/doctors' }]),
    ...doctorsData.map(getPhysicianSchema).filter(Boolean)
  ];

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      <SEO
        title="Our Doctors | Vedant Hospital Modasa"
        description="Meet the doctors at Vedant Hospital Modasa, including Dr. Happy Patel and Dr. Paras Patel and their respective medical specialties."
        canonical="/doctors"
        schema={doctorsSchema}
      />

      <Breadcrumbs items={[{ name: 'Our Doctors', url: '/doctors' }]} />

      {/* 1. Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <MotionReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3.5 py-1 rounded-full border border-purple-200">
            Medical Faculty Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Doctors | Vedant Hospital Modasa
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Consultant physicians providing compassionate maternity, advanced 3D/4D sonography, stitchless laparoscopy, and 24×7 critical ICU care in Modasa. <strong>દરેક જીવન માટે વિશેષ કાળજી.</strong>
          </p>
        </MotionReveal>
      </section>

      {/* 2. Doctor Directory Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGroup stagger={150} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {doctorsData.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={(docId) => onOpenAppointment && onOpenAppointment(docId)}
            />
          ))}
        </StaggerGroup>
      </section>

      {/* 3. Hospital Care Slogan & Direct Appointment Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="bg-gradient-to-br from-slate-900 to-[#1E3A5F] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
              માતૃત્વસ્પર્શ એવમ્ શમનમ્
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Personalized Consultations &amp; Round-the-Clock Emergency
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Our hospital faculty is available for daily OPD consultations and immediate emergency admissions with in-house ICU and diagnostic facilities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>

            <a
              href={`tel:${hospitalInfo.contacts.appointment1}`}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-purple-300" />
              <span>Call OPD Helpline</span>
            </a>
          </div>
        </MotionReveal>
      </section>

    </div>
  );
}
