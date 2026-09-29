import React from 'react';
import { 
  FlaskConical, 
  Home, 
  Clock, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Droplets, 
  Activity, 
  ShieldCheck, 
  HeartPulse, 
  Award, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { hospitalInfo, laboratoryInfo } from '../data/hospitalData';
import { getHospitalSchema, getBreadcrumbSchema } from '../data/schemaData';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Laboratory({ onOpenAppointment }) {
  const labSchema = [
    getHospitalSchema(),
    getBreadcrumbSchema([
      { name: 'In-House Laboratory', url: '/laboratory' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: `${laboratoryInfo.name} - In-House Laboratory at Vedant Hospital`,
      alternateName: 'Shri Ram Laboratory Modasa',
      description: laboratoryInfo.description,
      telephone: `+91-${laboratoryInfo.contacts.phone1}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3rd Floor, Gajanand Complex, Above Bank of Baroda, Deep Area, Samlaji Road',
        addressLocality: 'Modasa',
        addressRegion: 'Gujarat',
        postalCode: '383315',
        addressCountry: 'IN'
      },
      openingHours: 'Mo-Su 00:00-23:59',
      parentOrganization: {
        '@type': 'Hospital',
        name: hospitalInfo.name,
        url: hospitalInfo.websiteUrl
      }
    }
  ];

  const getCategoryIcon = (iconName) => {
    const iconClasses = "w-6 h-6";
    switch (iconName) {
      case 'Droplets':
        return <Droplets className={iconClasses} />;
      case 'Activity':
        return <Activity className={iconClasses} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClasses} />;
      case 'HeartPulse':
        return <HeartPulse className={iconClasses} />;
      case 'FlaskConical':
        return <FlaskConical className={iconClasses} />;
      case 'Sparkles':
        return <Sparkles className={iconClasses} />;
      case 'Award':
        return <Award className={iconClasses} />;
      default:
        return <FlaskConical className={iconClasses} />;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      <SEO
        title="In-House Laboratory – Shri Ram Laboratory | Vedant Hospital Modasa"
        description="Reliable diagnostic testing, blood tests and pathology laboratory services conveniently available within Vedant Hospital premises by Shri Ram Laboratory. 24×7 emergency services and free home collection in Modasa."
        canonical="/laboratory"
        schema={labSchema}
      />

      <Breadcrumbs items={[{ name: 'In-House Laboratory', url: '/laboratory' }]} />

      {/* ============================================================
          1. HERO SECTION
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#1E3A5F] to-[#6B2C7E] p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden border border-slate-700/50">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-200 bg-purple-950/80 px-3.5 py-1.5 rounded-full border border-purple-400/30 backdrop-blur-md">
                <FlaskConical className="w-3.5 h-3.5 text-purple-300" />
                Vedant Hospital Campus
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-400/30 backdrop-blur-md">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                24×7 Emergency Services
              </span>
            </div>

            {/* Headings */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                In-House Laboratory
              </h1>
              <h2 className="text-xl sm:text-3xl font-bold text-purple-200">
                {laboratoryInfo.name}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-purple-300/90 pt-1">
                {laboratoryInfo.taglineGujarati}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              {laboratoryInfo.description} Equipped with automated clinical analyzers, providing high-precision diagnostic results for hospital inpatients, outpatients, and home testing.
            </p>

            {/* Key Value Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm text-slate-100">
                <Home className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Home Collection Available</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm text-slate-100">
                <Clock className="w-4 h-4 text-blue-300 shrink-0" />
                <span>24×7 Emergency Services</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm text-slate-100">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Accurate Automated Analyzers</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={laboratoryInfo.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg flex items-center gap-2.5 btn-lift"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Lab Desk</span>
              </a>

              <a
                href={`tel:${laboratoryInfo.contacts.phone1}`}
                className="px-6 py-3.5 bg-white text-slate-900 hover:bg-purple-50 font-bold text-sm rounded-xl transition-all shadow-lg flex items-center gap-2 btn-lift"
              >
                <Phone className="w-4 h-4 text-[#6B2C7E]" />
                <span>Call: {laboratoryInfo.contacts.phone1Display}</span>
              </a>

              <a
                href={`tel:${laboratoryInfo.contacts.phone2}`}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm rounded-xl transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-purple-300" />
                <span>Call: {laboratoryInfo.contacts.phone2Display}</span>
              </a>
            </div>

          </div>
        </MotionReveal>
      </section>

      {/* ============================================================
          2. THREE CORE ADVANTAGES STRIP
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGroup stagger={120} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Free Home Collection */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Home className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Doorstep Service
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Free Home Collection
                </h3>
                <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                  ઘરે બેઠા મફત સેમ્પલ કલેક્શનની સુવિધા
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Convenient diagnostic sample collection right from your doorstep across Modasa at no extra charge. Ideal for seniors, expectant mothers, and recovering patients.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={laboratoryInfo.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <span>Book Home Sample Collection</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: 24x7 Emergency Services */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#6B2C7E] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  Always Active
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#6B2C7E] transition-colors">
                  24×7 Emergency Services
                </h3>
                <p className="text-xs font-semibold text-[#6B2C7E] mt-0.5">
                  ઈમરજન્સી અને આઈ.સી.યુ. માટે 24 કલાક સેવા
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Continuous diagnostic availability for high-risk obstetric cases, trauma, cardiac emergencies, critical infections, and ICU monitoring at all hours of day and night.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href={`tel:${laboratoryInfo.contacts.phone1}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
              >
                <span>Contact 24×7 Lab Helpline</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3: Modern Automated Diagnostics */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#1E3A5F] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  High Precision
                </span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                  Modern Automated Diagnostics
                </h3>
                <p className="text-xs font-semibold text-[#1E3A5F] mt-0.5">
                  અદ્યતન મશીનરી અને સચોટ રિપોર્ટ
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Calibrated automated analyzers and strict quality control standards delivering verified, doctor-ready diagnostic reports with rapid turnaround.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Diagnostic Standards</span>
              </span>
            </div>
          </div>

        </StaggerGroup>
      </section>

      {/* ============================================================
          3. LABORATORY SERVICES (8 CATEGORIES)
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200">
            Diagnostic Test Categories
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Laboratory Services
          </h2>
          <p className="text-xs font-semibold text-[#6B2C7E]">
            સચોટ અને વિશ્વસનીય નિદાન માટે સંપૂર્ણ લેબોરેટરી તપાસ
          </p>
          <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
            Shri Ram Laboratory provides specialized testing across hematology, biochemistry, endocrine, renal, and vital organ screening.
          </p>
        </MotionReveal>

        <StaggerGroup stagger={90} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {laboratoryInfo.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
              {/* Top content area — grows to fill */}
              <div className="flex-1 flex flex-col">
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#6B2C7E] group-hover:bg-[#6B2C7E] group-hover:text-white transition-all flex items-center justify-center shadow-inner shrink-0">
                    {getCategoryIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50/80 px-2.5 py-0.5 rounded-md border border-purple-100">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#6B2C7E] transition-colors leading-snug">
                  {service.category}
                </h3>
                {service.categoryGujarati && (
                  <p className="text-xs font-semibold text-[#6B2C7E] mt-0.5">
                    {service.categoryGujarati}
                  </p>
                )}

                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Spacer to push test list toward bottom of content area */}
                <div className="flex-1 min-h-3" />

                {/* Test Items List */}
                <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Included Tests:
                  </span>
                  <ul className="space-y-1.5">
                    {service.tests.map((test, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span className="leading-snug break-words">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom footer — always pinned to bottom */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 shrink-0">
                <span>Shri Ram Lab</span>
                <span className="text-emerald-700 font-bold">Available 24×7</span>
              </div>

            </div>
          ))}
        </StaggerGroup>
      </section>

      {/* ============================================================
          4. LABORATORY INFORMATION & DIRECT CONTACT CARD
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="fade-up" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
          
          <div className="border-b border-slate-100 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Official Laboratory Information
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                {laboratoryInfo.name}
              </h2>
              <p className="text-xs font-semibold text-[#6B2C7E] mt-0.5">
                સંપૂર્ણ વિગતો અને સીધો સંપર્ક
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                24×7 Emergency Active
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Main Hospital Laboratory Address */}
            <div className="p-5 rounded-2xl bg-purple-50/40 border border-purple-100 space-y-3">
              <div className="flex items-center gap-2 text-[#6B2C7E] font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Primary Location</span>
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">
                Vedant Hospital Campus
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {laboratoryInfo.address}
              </p>
              <div className="pt-2 text-[11px] font-semibold text-purple-800">
                Located on 3rd Floor with elevator access
              </div>
            </div>

            {/* 2. Branch Information */}
            <div className="p-5 rounded-2xl bg-blue-50/40 border border-blue-100 space-y-3">
              <div className="flex items-center gap-2 text-[#1E3A5F] font-bold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Laboratory Branch</span>
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">
                {laboratoryInfo.branch}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Serving patients with sample collection and routine diagnostic services at Rellavada branch.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-blue-800">
                Branch Network of Shri Ram Laboratory
              </div>
            </div>

            {/* 3. Direct Phone Contacts */}
            <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Direct Contact Numbers</span>
              </div>
              <h4 className="font-extrabold text-slate-900 text-base">
                Lab Helpline &amp; Home Visits
              </h4>
              
              <div className="space-y-2 pt-1">
                <a
                  href={`tel:${laboratoryInfo.contacts.phone1}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-200/80 text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{laboratoryInfo.contacts.phone1Display}</span>
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Call Now →</span>
                </a>

                <a
                  href={`tel:${laboratoryInfo.contacts.phone2}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-emerald-200/80 text-xs sm:text-sm font-bold text-slate-800 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-2xs"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{laboratoryInfo.contacts.phone2Display}</span>
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Call Now →</span>
                </a>
              </div>
            </div>

          </div>

          {/* Quick CTA Action Bar */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-0.5">
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Need Blood Testing or Free Home Collection?
              </p>
              <p className="text-xs text-slate-500">
                Connect directly with Shri Ram Laboratory technicians for fast sample collection.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={laboratoryInfo.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all btn-lift"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Laboratory</span>
              </a>

              <a
                href={`tel:${laboratoryInfo.contacts.phone1}`}
                className="px-5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#6B2C7E] border border-purple-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all btn-lift"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {laboratoryInfo.contacts.phone1Display}</span>
              </a>
            </div>
          </div>

        </MotionReveal>
      </section>

      {/* ============================================================
          5. HOSPITAL EMERGENCY STRIP
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="scale-in" className="rounded-3xl bg-gradient-to-r from-[#1E3A5F] to-[#6B2C7E] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
              Vedant Hospital Modasa
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Need Hospital Consultation or Emergency Admission?
            </h3>
            <p className="text-purple-200 text-xs font-semibold">
              માતૃત્વસ્પર્શ એવમ્ શમનમ્ — દર્દીકેન્દ્રિત સેવા 24 કલાક
            </p>
            <p className="text-purple-100 text-xs sm:text-sm max-w-xl">
              Along with our in-house pathology laboratory, Vedant Hospital provides 24×7 emergency, ICU care, maternity, and physician OPD services.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${hospitalInfo.contacts.emergency}`}
              className="px-6 py-3.5 bg-white text-[#1E3A5F] hover:bg-blue-50 font-bold rounded-xl text-sm transition-all shadow-md flex items-center gap-2 btn-lift"
            >
              <Phone className="w-4 h-4 text-rose-600" />
              <span>Emergency: {hospitalInfo.contacts.emergencyDisplay}</span>
            </a>

            <a
              href={`tel:${hospitalInfo.contacts.appointment1}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-purple-300" />
              <span>OPD: {hospitalInfo.contacts.appointment1Display}</span>
            </a>
          </div>
        </MotionReveal>
      </section>

    </div>
  );
}
