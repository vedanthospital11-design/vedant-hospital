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
  MapPin,
  GraduationCap,
  Building2,
  Baby,
  Waves,
  Sparkles
} from 'lucide-react';
import { doctorsData, hospitalInfo } from '../data/hospitalData';
import { getHospitalSchema, getBreadcrumbSchema, getPhysicianSchema } from '../data/schemaData';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';
import SEO from '../components/SEO';

export default function DoctorProfile({ specifiedSlug }) {
  const { doctorSlug } = useParams();
  const slug = specifiedSlug || doctorSlug;

  // Match doctor by slug or id
  const doctor = doctorsData.find(
    (d) => d.slug === slug || d.id === slug || d.slug === slug?.replace('dr-', '') || d.id === `dr-${slug}`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  const isGynecologist = doctor.department.includes('Obstetrics');

  const profile = doctor.professionalProfile || {
    intro: doctor.about ? doctor.about.split('\n\n')[0] : doctor.cardIntro,
    trainingCard: {
      title: "Medical Training",
      primary: doctor.keyCredentials?.[0] || "Advanced Medical Training",
      secondary: "પ્રતિષ્ઠિત Institutesમાંથી તાલીમ"
    },
    expertiseCard: {
      title: "Clinical Focus",
      primary: doctor.department,
      secondary: "વ્યક્તિગત સારવાર અને વિશેષ કાળજી"
    },
    expertisePills: (doctor.cardHighlights || []).map((h) => ({
      label: h,
      icon: 'sparkles'
    }))
  };

  const getPillIcon = (iconName) => {
    const iconClass = `w-3.5 h-3.5 shrink-0 ${isGynecologist ? 'text-[#6B2C7E]' : 'text-[#1E3A5F]'}`;
    switch (iconName) {
      case 'waves':
        return <Waves className={iconClass} />;
      case 'sparkles':
        return <Sparkles className={iconClass} />;
      case 'baby':
        return <Baby className={iconClass} />;
      case 'activity':
        return <Activity className={iconClass} />;
      case 'heart-pulse':
        return <HeartPulse className={iconClass} />;
      case 'shield-check':
        return <ShieldCheck className={iconClass} />;
      case 'building':
        return <Building2 className={iconClass} />;
      default:
        return <CheckCircle2 className={iconClass} />;
    }
  };

  const pageTitle = isGynecologist
    ? `Dr. Happy Patel | Obstetrician & Gynecologist | Vedant Hospital`
    : `Dr. Paras Patel | General Medicine & ICU | Vedant Hospital`;

  const pageDescription = isGynecologist
    ? `Dr. Happy Patel (M.B.D.G.O, DNB) is a Consultant Obstetrician & Gynecologist at Vedant Hospital, Modasa. Specialist in Sonography, Laparoscopy & Maternity Care.`
    : `Dr. Paras Patel (M.D. Physician) is a Consultant Diabetologist & Cardiac Physician at Vedant Hospital, Modasa, specializing in 24×7 Critical Care & Emergency Medicine.`;

  const doctorSchema = [
    getHospitalSchema(),
    getBreadcrumbSchema([
      { name: 'Our Doctors', url: '/doctors' },
      { name: doctor.name, url: `/doctors/${doctor.slug}` }
    ]),
    getPhysicianSchema(doctor)
  ].filter(Boolean);

  return (
    <div className="py-6 sm:py-10 space-y-10 sm:space-y-14">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`/doctors/${doctor.slug}`}
        ogImage={doctor.image}
        ogType="profile"
        schema={doctorSchema}
      />
      
      {/* 1. Breadcrumbs & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          
          {/* Breadcrumb path with Schema microdata */}
          <nav aria-label="Breadcrumb">
            <ol
              className="flex items-center gap-1.5 text-slate-500 font-medium"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" className="hover:text-[#6B2C7E] transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/doctors" className="hover:text-[#6B2C7E] transition-colors" itemProp="item">
                  <span itemProp="name">Our Doctors</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="font-bold text-slate-900" aria-current="page" itemProp="name">
                  {doctor.name}
                </span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
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
              <div className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 space-y-3.5 ${
                isGynecologist
                  ? 'bg-gradient-to-br from-[#FAF7FC] via-white to-[#F6EEFA] border-purple-100/90 shadow-[0_2px_12px_rgba(107,44,126,0.04)]'
                  : 'bg-gradient-to-br from-[#F4F8FC] via-white to-[#EDF4FA] border-blue-100/90 shadow-[0_2px_12px_rgba(30,58,95,0.04)]'
              }`}>
                {/* Header */}
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                    isGynecologist ? 'bg-purple-100/80 text-[#6B2C7E]' : 'bg-blue-100/80 text-[#1E3A5F]'
                  }`}>
                    <Stethoscope className="w-3 h-3" />
                  </div>
                  <h3 className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${
                    isGynecologist ? 'text-[#6B2C7E]' : 'text-[#1E3A5F]'
                  }`}>
                    Professional Background
                  </h3>
                </div>

                {/* Vertical Accent with Gujarati Intro */}
                <div className="relative pl-3.5 sm:pl-4">
                  <div className={`absolute left-0 top-0.5 bottom-0.5 w-[2.5px] rounded-full ${
                    isGynecologist ? 'bg-[#6B2C7E]' : 'bg-[#1E3A5F]'
                  }`} />
                  <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed">
                    {profile.intro}
                  </p>
                </div>

                {/* Structured Training & Clinical Focus Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Training Card */}
                  <div className={`p-2.5 sm:p-3 rounded-xl bg-white/95 border transition-all duration-200 flex items-start gap-2.5 group shadow-[0_1px_3px_rgba(0,0,0,0.02)] ${
                    isGynecologist 
                      ? 'border-purple-100/80 hover:border-purple-200 hover:shadow-xs' 
                      : 'border-blue-100/80 hover:border-blue-200 hover:shadow-xs'
                  }`}>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform ${
                      isGynecologist ? 'bg-purple-50 text-[#6B2C7E]' : 'bg-blue-50 text-[#1E3A5F]'
                    }`}>
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {profile.trainingCard.title}
                      </span>
                      <span className="block text-xs font-bold text-slate-800 leading-snug" title={profile.trainingCard.primary}>
                        {profile.trainingCard.primary}
                      </span>
                      <span className="block text-[11px] text-slate-500 leading-tight mt-0.5">
                        {profile.trainingCard.secondary}
                      </span>
                    </div>
                  </div>

                  {/* Clinical Focus Card */}
                  <div className={`p-2.5 sm:p-3 rounded-xl bg-white/95 border transition-all duration-200 flex items-start gap-2.5 group shadow-[0_1px_3px_rgba(0,0,0,0.02)] ${
                    isGynecologist 
                      ? 'border-purple-100/80 hover:border-purple-200 hover:shadow-xs' 
                      : 'border-blue-100/80 hover:border-blue-200 hover:shadow-xs'
                  }`}>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform ${
                      isGynecologist ? 'bg-purple-50 text-[#6B2C7E]' : 'bg-blue-50 text-[#1E3A5F]'
                    }`}>
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {profile.expertiseCard.title}
                      </span>
                      <span className="block text-xs font-bold text-slate-800 leading-snug" title={profile.expertiseCard.primary}>
                        {profile.expertiseCard.primary}
                      </span>
                      <span className="block text-[11px] text-slate-500 leading-tight mt-0.5">
                        {profile.expertiseCard.secondary}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Expertise Pills */}
                <div className={`pt-2.5 border-t flex flex-wrap items-center gap-1.5 sm:gap-2 ${
                  isGynecologist ? 'border-purple-100/70' : 'border-blue-100/70'
                }`}>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-0.5 shrink-0">
                    Key Focus:
                  </span>
                  {profile.expertisePills.map((pill, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold bg-white/95 border shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 cursor-default ${
                        isGynecologist
                          ? 'border-purple-100/90 text-slate-700 hover:text-[#6B2C7E] hover:border-purple-200 hover:bg-purple-50/50 hover:shadow-xs'
                          : 'border-blue-100/90 text-slate-700 hover:text-[#1E3A5F] hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-xs'
                      }`}
                    >
                      {getPillIcon(pill.icon)}
                      <span>{pill.label}</span>
                    </span>
                  ))}
                </div>
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
