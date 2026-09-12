import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Activity,
  Baby,
  Waves,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  ArrowRight,
  HelpCircle,
  Calendar,
  Building2
} from 'lucide-react';
import { hospitalInfo, doctorsData } from '../data/hospitalData';
import { getHospitalSchema, getBreadcrumbSchema, BASE_URL } from '../data/schemaData';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';

export default function Services({ onOpenAppointment }) {
  const [activeTab, setActiveTab] = useState('all');

  const drHappy = doctorsData.find((d) => d.id === 'dr-happy-patel');
  const drParas = doctorsData.find((d) => d.id === 'dr-paras-patel');

  const servicesList = [
    {
      id: 'maternity',
      category: 'gynecology',
      icon: Baby,
      iconBg: 'bg-purple-100 text-[#6B2C7E]',
      title: 'Normal & Painless Child Delivery',
      titleGujarati: 'સામાન્ય અને પેઇનલેસ ડિલિવરી (એપિડ્યુરલ સુવિધા)',
      description:
        'Comprehensive maternity care supporting mothers through prenatal care, labor, and delivery. Offering modern pain relief options including epidural analgesia for a calmer childbirth experience.',
      features: [
        'Normal delivery with continuous fetal monitoring',
        'Painless labor (Epidural analgesia support)',
        'Emergency Caesarean Section (C-Section) capability',
        'Postnatal mother and newborn care'
      ],
      doctor: drHappy,
      facilityLink: '/facilities#ot',
      facilityName: 'Modular Labour Room'
    },
    {
      id: 'sonography',
      category: 'diagnostics',
      icon: Waves,
      iconBg: 'bg-blue-100 text-blue-700',
      title: 'Advanced 3D / 4D Ultrasound & Fetal Sonography',
      titleGujarati: 'અદ્યતન 3D / 4D સોનોગ્રાફી અને ગર્ભસ્થ શિશુ તપાસ',
      description:
        'High-resolution sonography suite providing precise anatomical imaging, fetal anomaly screening, growth scans, and complete pelvic ultrasound diagnostics.',
      features: [
        'Routine obstetric pregnancy scans & NT scan',
        '3D / 4D real-time fetal imaging',
        'Fetal Doppler & placenta assessment',
        'Pelvic & gynecological ultrasound'
      ],
      doctor: drHappy,
      facilityLink: '/facilities#sonography',
      facilityName: '3D/4D Sonography Suite'
    },
    {
      id: 'laparoscopy',
      category: 'surgery',
      icon: Sparkles,
      iconBg: 'bg-indigo-100 text-indigo-700',
      title: 'Stitchless Laparoscopic Surgery',
      titleGujarati: 'ટાંકા વગરની લેપ્રોસ્કોપિક ગાયનેક સર્જરી',
      description:
        'Minimally invasive laparoscopic procedures ensuring faster healing, minimal pain, and brief hospital stay for gynecological conditions.',
      features: [
        'Laparoscopic hysterectomy (uterus removal)',
        'Ovarian cystectomy & endometriosis treatment',
        'Fibroid removal (myomectomy)',
        'Diagnostic laparoscopy & hysteroscopy for infertility'
      ],
      doctor: drHappy,
      facilityLink: '/facilities#ot',
      facilityName: 'Modular Operation Theatre'
    },
    {
      id: 'icu',
      category: 'critical-care',
      icon: Activity,
      iconBg: 'bg-amber-100 text-amber-800',
      title: '24×7 Doctor-Supervised Intensive Care (ICU)',
      titleGujarati: '૨૪ કલાક ડોક્ટર દેખરેખ હેઠળ આઇસીયુ સારવાર',
      description:
        'Fully equipped intensive care unit with advanced multi-channel monitors, ventilator backup, and round-the-clock doctor supervision for critical medical emergencies.',
      features: [
        'Continuous multipara vital signs monitoring',
        'Advanced invasive & non-invasive ventilator support',
        'Central oxygen pipeline & defibrillator setup',
        'Cardiac emergencies & multi-organ stabilization'
      ],
      doctor: drParas,
      facilityLink: '/facilities#icu',
      facilityName: '24x7 Doctor-Supervised ICU'
    },
    {
      id: 'cardiac-diabetes',
      category: 'medicine',
      icon: HeartPulse,
      iconBg: 'bg-rose-100 text-rose-700',
      title: 'Cardiac Physician & Diabetes Management',
      titleGujarati: 'હૃદયરોગ, બ્લડ પ્રેશર અને ડાયાબિટીસની વિશેષ સારવાર',
      description:
        'Consultation and long-term therapeutic management for hypertension, coronary heart disease, diabetes mellitus, thyroid conditions, and metabolic health.',
      features: [
        'Heart attack evaluation & emergency ECG',
        'Hypertension (high blood pressure) management',
        'Type 1 & Type 2 diabetes comprehensive care',
        'Endocrine, thyroid, and cholesterol disorders'
      ],
      doctor: drParas,
      facilityLink: '/facilities#laboratory',
      facilityName: 'Pathology Lab & Diagnostic Support'
    },
    {
      id: 'general-medicine',
      category: 'medicine',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-100 text-emerald-800',
      title: 'General Medicine & Infectious Diseases',
      titleGujarati: 'તાવ, ઇન્ફેક્શન અને જનરલ મેડિસિન સારવાર',
      description:
        'Accurate clinical diagnosis and inpatient hospitalization for infectious fevers, seasonal epidemics, respiratory conditions, kidney, and gastrointestinal illnesses.',
      features: [
        'Infectious fevers: Malaria, Dengue, Typhoid, Chikungunya',
        'Asthma, Pneumonia & Chest infections',
        'Gastrointestinal diseases, jaundice & liver disorders',
        'Emergency snake bite & poisoning resuscitation'
      ],
      doctor: drParas,
      facilityLink: '/facilities#emergency',
      facilityName: '24x7 Emergency Service'
    }
  ];

  const filteredServices =
    activeTab === 'all'
      ? servicesList
      : servicesList.filter((s) => s.category === activeTab);

  const faqs = [
    {
      q: 'How can I schedule an OPD consultation at Vedant Hospital?',
      a: 'You can book an appointment by calling our OPD desk at +91 63525 90491 or messaging us directly on WhatsApp. Daily OPD is open Monday to Saturday from 09:00 AM to 08:00 PM.'
    },
    {
      q: 'Is painless delivery (epidural analgesia) available at Vedant Hospital?',
      a: 'Yes. Dr. Happy Patel provides painless normal delivery support with epidural analgesia in a sterile, modern labour room designed for maternal comfort and fetal safety.'
    },
    {
      q: 'Are 24x7 Emergency and ICU admissions available in Modasa?',
      a: 'Yes. Vedant Hospital operates a round-the-clock 24x7 emergency and doctor-supervised ICU on Shamlaji Road, Modasa, equipped for cardiac, trauma, medical, and obstetric emergencies.'
    },
    {
      q: 'Does Vedant Hospital have cashless mediclaim health insurance facilities?',
      a: 'Yes. We support cashless hospitalization and reimbursement documentation assistance across major health insurance providers and TPAs.'
    }
  ];

  // Schema generation
  const pageSchema = [
    getHospitalSchema(),
    getBreadcrumbSchema([
      { name: 'Medical Services', url: '/services' }
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a
        }
      }))
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      <SEO
        title="Medical Services | Vedant Hospital Modasa"
        description="Explore specialized medical services at Vedant Hospital in Modasa: Obstetrics & Gynecology, Maternity & Painless Delivery, 3D/4D Sonography, Stitchless Laparoscopy, General Medicine, and 24×7 ICU."
        canonical="/services"
        schema={pageSchema}
      />

      <Breadcrumbs items={[{ name: 'Medical Services', url: '/services' }]} />

      {/* 1. Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <MotionReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3.5 py-1 rounded-full border border-purple-200">
            Clinical Departments &amp; Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Medical Services | Vedant Hospital Modasa
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Integrated obstetrics, gynecology, critical care, and general medicine services at Vedant Hospital in Modasa. Dedicated to patient safety, ethical healthcare, and compassionate treatment.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-[#6B2C7E]">
            માતૃત્વ સુરક્ષા, અદ્યતન નિદાન અને ૨૪ કલાક ઇમરજન્સી મેડિકલ કેર.
          </p>
        </MotionReveal>
      </section>

      {/* 2. Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'gynecology', label: 'Maternity & Gynecology' },
            { id: 'diagnostics', label: '3D/4D Sonography' },
            { id: 'surgery', label: 'Laparoscopic Surgery' },
            { id: 'critical-care', label: '24×7 ICU Care' },
            { id: 'medicine', label: 'General Medicine & Cardiac' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#6B2C7E] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGroup stagger={120} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full w-full group scroll-mt-28"
              >
                <div className="space-y-4 flex-1 flex flex-col">
                  {/* Top Row: Icon & Doctor Reference */}
                  <div className="flex items-start justify-between gap-4 shrink-0">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner ${service.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.doctor && (
                      <Link
                        to={`/doctors/${service.doctor.slug}`}
                        className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-slate-50 border border-slate-200 hover:border-purple-300 transition-colors group/doc shrink-0"
                      >
                        <img
                          src={service.doctor.image}
                          alt={service.doctor.name}
                          className="w-7 h-7 rounded-full object-cover shrink-0"
                        />
                        <div className="text-left">
                          <span className="block text-[11px] font-bold text-slate-800 group-hover/doc:text-[#6B2C7E]">
                            {service.doctor.name}
                          </span>
                        </div>
                      </Link>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-[#6B2C7E] transition-colors min-h-[3.75rem] flex items-start">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#6B2C7E] mt-1 min-h-[1.5rem] flex items-center">
                      {service.titleGujarati}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[4rem]">
                    {service.description}
                  </p>

                  {/* Key Features List */}
                  <div className="pt-3 space-y-2 border-t border-slate-100 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Clinical Scope:
                    </p>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#6B2C7E] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Flexible spacer */}
                  <div className="flex-1" />
                </div>

                {/* Bottom Footer: Facility Link & Action */}
                <div className="pt-6 mt-auto border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 shrink-0">
                  <Link
                    to={service.facilityLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#6B2C7E] transition-colors"
                  >
                    <Building2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>Facility: {service.facilityName}</span>
                  </Link>

                  <button
                    onClick={() => onOpenAppointment && onOpenAppointment(service.doctor?.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6B2C7E] hover:bg-[#582468] text-white text-xs font-bold transition-all shadow-xs btn-lift cursor-pointer shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Consult Doctor</span>
                  </button>
                </div>
              </div>
            );
          })}
        </StaggerGroup>
      </section>

      {/* 4. Frequently Asked Questions (FAQ) Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-lg space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              Helpful Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#6B2C7E]" />
              Patient Inquiries &amp; Medical FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers regarding our appointments, maternity services, 24×7 ICU, and admissions in Modasa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Emergency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-3xl bg-gradient-to-r from-[#6B2C7E] via-[#582468] to-[#1E3A5F] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
              24×7 Critical &amp; Maternity Emergency
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold">
              Need Immediate Medical Assistance?
            </h3>
            <p className="text-xs sm:text-sm text-purple-100 max-w-xl">
              Our emergency admissions and ICU team are on standby 24 hours a day on Shamlaji Road, Modasa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${hospitalInfo.contacts.emergency}`}
              className="py-3 px-6 rounded-xl bg-white text-rose-800 hover:bg-rose-50 font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all btn-lift"
            >
              <Phone className="w-4 h-4 text-rose-700" />
              <span>Call Emergency: {hospitalInfo.contacts.emergencyDisplay}</span>
            </a>
            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all btn-lift"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
