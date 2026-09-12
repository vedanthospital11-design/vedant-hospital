import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  HeartPulse,
  Activity,
  ShieldCheck,
  Eye,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { hospitalInfo, doctorsData, facilitiesData, galleryImages } from '../data/hospitalData';
import { getHospitalSchema, getWebSiteSchema } from '../data/schemaData';
import DoctorCard from '../components/DoctorCard';
import ImageModal from '../components/ImageModal';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';
import HeroSlideshow from '../components/HeroSlideshow';
import SEO from '../components/SEO';

export default function Home({ onOpenAppointment }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const homeSchema = [getHospitalSchema(), getWebSiteSchema()];

  return (
    <div className="overflow-x-hidden">
      <SEO
        title="Vedant Hospital Modasa | Maternity, Gynecology & General Medicine"
        description="Vedant Hospital in Modasa, Aravalli provides maternity, gynecology, general medicine, ICU and emergency care with doctor-supervised medical services."
        canonical="/"
        schema={homeSchema}
      />

      {/* Semantic Primary H1 for Search Engines & Accessibility */}
      <h1 className="sr-only">
        Vedant Hospital Modasa | Maternity, Gynecology &amp; General Medicine
      </h1>

      {/* ============================================================
          CINEMATIC HERO SLIDESHOW — 6 Real Doctor Photography Slides
      ============================================================ */}
      <HeroSlideshow onOpenAppointment={onOpenAppointment} />



      {/* ============================================================
          SPECIALIST DOCTORS
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <MotionReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Medical Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Specialist Doctors
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            Consultant physicians dedicated to compassionate maternity and 24×7 critical medical care in Modasa.
          </p>
        </MotionReveal>

        <StaggerGroup stagger={150} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {doctorsData.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={(docId) => onOpenAppointment(docId)}
            />
          ))}
        </StaggerGroup>
      </section>

      {/* ============================================================
          HOSPITAL FACILITIES
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <MotionReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Infrastructure &amp; Care
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hospital Facilities &amp; Amenities
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            Integrated medical amenities with dedicated operation theatres, HD sonography, in-house lab, and AC rooms.
          </p>
        </MotionReveal>

        <StaggerGroup stagger={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {facilitiesData.slice(0, 4).map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full w-full group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#6B2C7E] group-hover:bg-[#6B2C7E] group-hover:text-white transition-all flex items-center justify-center mb-4 shrink-0 shadow-inner">
                {facility.id === 'emergency' && <AlertCircle className="w-6 h-6" />}
                {facility.id === 'icu' && <Activity className="w-6 h-6" />}
                {facility.id === 'ot' && <Sparkles className="w-6 h-6" />}
                {facility.id === 'sonography' && <Eye className="w-6 h-6" />}
              </div>

              <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#6B2C7E] transition-colors mb-1 min-h-[3rem] flex items-start">
                {facility.title}
              </h3>

              {facility.subTitleGujarati && (
                <p className="text-xs font-semibold text-[#6B2C7E] mb-2 min-h-[1.25rem] flex items-center">
                  {facility.subTitleGujarati}
                </p>
              )}

              <p className="text-xs text-slate-600 leading-relaxed">
                {facility.description}
              </p>

              {/* Flexible spacer to ensure footer sits on identical baseline */}
              <div className="flex-1 min-h-4" />

              <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium shrink-0">
                <span>Vedant Assured</span>
                <span className="text-emerald-700 font-bold">24×7 Active</span>
              </div>
            </div>
          ))}
        </StaggerGroup>

        <div className="text-center pt-6">
          <Link to="/facilities" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#6B2C7E] font-bold text-xs sm:text-sm border border-purple-200 transition-colors btn-lift">
            <span>View All Hospital Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ============================================================
          CLINICAL MEDICAL SERVICES
      ============================================================ */}
      <section className="bg-gradient-to-b from-purple-50/50 via-white to-slate-50/70 py-12 sm:py-20 border-y border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              Clinical Care &amp; Specialties
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Medical Services at Vedant Hospital
            </h2>
            <p className="text-xs sm:text-base text-slate-600">
              Specialized maternity, advanced diagnostic ultrasound, stitchless surgery, and 24×7 critical ICU care in Modasa.
            </p>
          </MotionReveal>

          <StaggerGroup stagger={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {[
              {
                title: "Obstetrics & Gynecology",
                doctor: "Dr. Happy Patel",
                link: "/services#maternity",
                desc: "Compassionate pregnancy care, normal and painless delivery, and high-risk pregnancy management."
              },
              {
                title: "3D / 4D Ultrasound Sonography",
                doctor: "Dr. Happy Patel",
                link: "/services#sonography",
                desc: "High-definition fetal scanning and precision pelvic diagnostic sonography."
              },
              {
                title: "Stitchless Laparoscopy",
                doctor: "Dr. Happy Patel",
                link: "/services#laparoscopy",
                desc: "Minimally invasive gynecological surgeries with faster recovery and brief hospital stay."
              },
              {
                title: "24×7 Doctor-Supervised ICU",
                doctor: "Dr. Paras Patel",
                link: "/services#icu",
                desc: "Continuous critical care monitoring, ventilators, and emergency resuscitation."
              },
              {
                title: "Cardiac Care & Diabetes",
                doctor: "Dr. Paras Patel",
                link: "/services#cardiac-diabetes",
                desc: "Dedicated clinical consultation for hypertension, heart disease, diabetes, and thyroid care."
              },
              {
                title: "General Medicine & Fevers",
                doctor: "Dr. Paras Patel",
                link: "/services#general-medicine",
                desc: "Diagnostic treatment and inpatient admissions for infectious fevers and multi-system illness."
              }
            ].map((srv, idx) => (
              <Link
                key={idx}
                to={srv.link}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col h-full w-full justify-between group"
              >
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-xs text-purple-700 font-bold mb-1.5 shrink-0">
                    <span>{srv.doctor}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#6B2C7E] transition-colors mb-2 min-h-[3rem] flex items-start">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                
                <div className="pt-3 mt-auto border-t border-slate-100 text-[11px] font-bold text-[#6B2C7E] flex items-center justify-between shrink-0">
                  <span>Learn More →</span>
                  <span className="text-[10px] text-slate-400 font-normal">Vedant Hospital</span>
                </div>
              </Link>
            ))}
          </StaggerGroup>

          <div className="text-center pt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6B2C7E] hover:bg-[#582468] text-white font-bold text-xs sm:text-sm shadow-md transition-all btn-lift"
            >
              <span>Explore All Clinical Services &amp; Specialties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          REAL PHOTO GALLERY
      ============================================================ */}
      <section className="bg-slate-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal variant="fade-up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800/50">
                Hospital Infrastructure
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1.5">Real Photo Gallery Tour</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-300 hover:text-white transition-colors">
              <span>View Full Gallery ({galleryImages.length} Photos)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <StaggerGroup stagger={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.slice(0, 3).map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 group cursor-pointer hover:border-purple-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={img.image} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                  <div className="absolute top-3.5 right-3.5 bg-slate-950/80 p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-purple-300" />
                  </div>
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase text-purple-300 bg-purple-950/90 px-2 py-0.5 rounded">{img.category}</span>
                    <h4 className="text-sm font-extrabold mt-1 truncate">{img.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ============================================================
          EMERGENCY & CONTACT BANNER
      ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <MotionReveal variant="scale-in" duration={650} className="rounded-3xl bg-gradient-to-r from-[#6B2C7E] via-[#582468] to-[#1E3A5F] p-6 sm:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-bold backdrop-blur-md">
                <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
                24×7 Emergency &amp; Trauma Admissions
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">Need Urgent Medical Care in Modasa?</h2>
              <p className="text-purple-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Our emergency and ICU team is on standby 24 hours a day on Shamlaji Road, Modasa above Bank of Baroda.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <a href={`tel:${hospitalInfo.contacts.emergency}`} className="py-3 px-5 rounded-xl bg-white text-rose-800 hover:bg-rose-50 font-extrabold text-xs sm:text-sm text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 btn-lift">
                <Phone className="w-4 h-4 text-rose-700" />
                <span>Call Emergency: {hospitalInfo.contacts.emergencyDisplay}</span>
              </a>
              <a href={hospitalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 shadow-md btn-lift">
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </MotionReveal>
      </section>

      {/* Image Lightbox */}
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />

    </div>
  );
}
