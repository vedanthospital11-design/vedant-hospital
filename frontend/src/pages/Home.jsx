import React, { useState, useRef, useEffect } from 'react';
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
  Sparkles
} from 'lucide-react';
import { hospitalInfo, doctorsData, facilitiesData, galleryImages } from '../data/hospitalData';
import DoctorCard from '../components/DoctorCard';
import ImageModal from '../components/ImageModal';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';

export default function Home({ onOpenAppointment }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const heroImgWrapRef = useRef(null);

  // Subtle parallax: image moves at 25% of scroll speed (GPU-safe)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const el = heroImgWrapRef.current;
        if (el) {
          const scrollY = window.scrollY;
          const heroH = el.parentElement?.offsetHeight ?? window.innerHeight;
          if (scrollY <= heroH * 1.2) {
            // translateY positive = moves image down (parallax: content scrolls faster)
            el.style.transform = `translateY(${scrollY * 0.22}px)`;
          }
        }
        raf = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* ============================================================
          MOBILE FULL-BLEED HERO
          Architecture: hero is `height: 100dvh` with negative margin-top
          so it slides up visually behind the EmergencyBar (glass) and
          Navbar (glass). Inner content has padding-top to clear them.
      ============================================================ */}
      <section
        className="lg:hidden relative overflow-hidden"
        style={{
          // Pull section up behind EmergencyBar (~28px) + Navbar (64px)
          marginTop: '-92px',
          height: '100dvh',
          // Fallback for browsers without dvh support
          minHeight: '100vh',
        }}
      >
        {/* ---- BACKGROUND IMAGE LAYER (with parallax wrapper) ---- */}
        <div
          ref={heroImgWrapRef}
          className="absolute inset-0 will-change-transform"
          // Extra height so parallax downward movement doesn't expose white
          style={{ top: '-5%', height: '115%' }}
        >
          <img
            src="/images/hospital-reception.jpg"
            alt="Vedant Hospital Healthcare Campus — Modasa, Aravalli"
            className="w-full h-full object-cover object-center animate-hero-breathe"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* ---- GRADIENT OVERLAY — layered, not a solid blanket ---- */}
        {/* TOP: subtle dark gradient for status/utility bar area */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{ height: '140px', background: 'linear-gradient(to bottom, rgba(4,6,14,0.75) 0%, rgba(4,6,14,0.30) 55%, transparent 100%)' }}
        />
        {/* MID-BOTTOM: dedicated rich dark scrim for crystal-clear text readability */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '82%', background: 'linear-gradient(to top, rgba(4,6,14,0.96) 0%, rgba(4,6,14,0.82) 28%, rgba(4,6,14,0.48) 55%, rgba(4,6,14,0.10) 78%, transparent 100%)' }}
        />
        {/* Brand warmth — subtle deep purple glow at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '45%', background: 'linear-gradient(to top, rgba(75,18,92,0.28) 0%, transparent 100%)' }}
        />

        {/* ---- HERO CONTENT — strictly structured, controlled width, left-aligned ---- */}
        <div
          className="relative z-10 h-full flex flex-col justify-end"
          style={{ paddingTop: '88px', paddingBottom: '32px', paddingLeft: '22px', paddingRight: '22px' }}
        >

          {/* 1. Location Eyebrow */}
          <MotionReveal variant="fade-up" duration={550} delay={30}>
            <div className="mb-2.5">
              <p
                className="text-[11px] font-bold uppercase text-white/90 tracking-[0.20em]"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
              >
                MODASA &nbsp;·&nbsp; ARAVALLI &nbsp;·&nbsp; GUJARAT
              </p>
            </div>
          </MotionReveal>

          {/* 2. Main Headline */}
          <MotionReveal variant="fade-up" duration={650} delay={70}>
            <h1
              className="font-extrabold tracking-tight mb-3.5"
              style={{
                fontSize: 'clamp(32px, 8.8vw, 42px)',
                lineHeight: 1.1,
              }}
            >
              <span
                style={{
                  color: '#FFFFFF',
                  textShadow: '0 2px 16px rgba(0,0,0,0.6)',
                  display: 'block',
                }}
              >
                Safe Motherhood
              </span>
              <span
                style={{
                  color: '#D8A4E8',
                  textShadow: '0 2px 16px rgba(0,0,0,0.6)',
                  display: 'block',
                }}
              >
                &amp; Compassionate Healing
              </span>
            </h1>
          </MotionReveal>

          {/* 3. Structured Supporting Copy — Two Deliberate Statements (Controlled max-width: 330px) */}
          <MotionReveal variant="fade-up" duration={600} delay={120}>
            <div
              className="mb-5 space-y-2 text-left"
              style={{
                maxWidth: '330px',
                color: 'rgba(255, 255, 255, 0.94)',
                fontSize: 'clamp(13px, 3.7vw, 14.5px)',
                lineHeight: 1.45,
                textShadow: '0 1px 8px rgba(0,0,0,0.5)',
              }}
            >
              <p>
                Advanced Obstetrics, Gynecology &amp; Sonography by{' '}
                <strong className="font-bold text-white tracking-wide" style={{ color: '#F5D0FE' }}>
                  Dr. Happy Patel
                </strong>.
              </p>
              <p>
                24×7 Critical Care &amp; General Medicine by{' '}
                <strong className="font-bold text-white tracking-wide" style={{ color: '#BFDBFE' }}>
                  Dr. Paras Patel
                </strong>.
              </p>
            </div>
          </MotionReveal>

          {/* 4. Action CTAs */}
          <MotionReveal variant="fade-up" duration={600} delay={170}>
            <div className="space-y-2.5 mb-4">

              {/* Primary: WhatsApp */}
              <a
                href={hospitalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full text-white font-bold rounded-[14px] transition-all duration-150 active:scale-[0.97]"
                style={{
                  height: '52px',
                  fontSize: '14.5px',
                  backgroundColor: '#14532D',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.50), 0 1px 4px rgba(0,0,0,0.30)',
                  letterSpacing: '0.01em',
                }}
              >
                <MessageCircle className="w-[18px] h-[18px]" style={{ color: '#86efac' }} />
                <span>Contact Us on WhatsApp</span>
              </a>

              {/* Secondary: 24x7 Emergency */}
              <a
                href={`tel:${hospitalInfo.contacts.emergency}`}
                className="flex items-center justify-center gap-2 w-full font-semibold rounded-[14px] transition-all duration-150 active:scale-[0.97]"
                style={{
                  height: '48px',
                  fontSize: '13.5px',
                  color: 'rgba(255,255,255,0.95)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  backgroundColor: 'rgba(255,255,255,0.10)',
                  backdropFilter: 'blur(10px)',
                  textShadow: '0 1px 6px rgba(0,0,0,0.4)',
                }}
              >
                <Phone className="w-[15px] h-[15px]" style={{ color: '#fca5a5' }} />
                <span>24×7 Emergency &ensp;{hospitalInfo.contacts.emergencyDisplay}</span>
              </a>

            </div>
          </MotionReveal>

          {/* 5. Trust Line */}
          <MotionReveal variant="fade-up" duration={500} delay={210}>
            <p
              className="text-center select-none"
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.72)',
                letterSpacing: '0.08em',
                textShadow: '0 1px 6px rgba(0,0,0,0.6)',
              }}
            >
              24×7 ICU &ensp;·&ensp; 3D / 4D Sonography &ensp;·&ensp; Cashless Care
            </p>
          </MotionReveal>

        </div>

        {/* Tiny location credit — bottom-right corner */}
        <div className="absolute bottom-2.5 right-3.5 z-10 pointer-events-none">
          <p className="text-[9px] font-medium tracking-[0.15em] uppercase text-white/25">
            Vedant Hospital Campus
          </p>
        </div>

      </section>

      {/* ============================================================
          "WHY VEDANT" — Mobile-only editorial trust section
          Immediately after the full-bleed hero
      ============================================================ */}
      <section className="lg:hidden bg-white px-5 pt-10 pb-10">
        <MotionReveal variant="fade-up" duration={550}>
          <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-slate-400 mb-2">
            Trusted By Families Across Aravalli
          </p>
          <h2 className="text-[21px] font-extrabold text-slate-900 leading-snug mb-7">
            Why Choose Vedant Hospital
          </h2>
        </MotionReveal>

        <div className="space-y-6">
          {[
            {
              icon: HeartPulse, color: 'text-[#6B2C7E]', bg: 'bg-purple-50',
              title: 'Safe Maternity & Delivery',
              desc: 'Normal & painless delivery, high-risk pregnancy care, and 3D/4D fetal sonography by Dr. Happy Patel.',
            },
            {
              icon: Activity, color: 'text-rose-600', bg: 'bg-rose-50',
              title: '24×7 Doctor-Supervised ICU',
              desc: 'Round-the-clock intensive care with on-site physician, cardiac monitoring, and emergency resuscitation.',
            },
            {
              icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50',
              title: 'Cashless Hospitalization',
              desc: 'Hassle-free insurance claims with all major TPAs. Transparent billing — no hidden charges.',
            },
            {
              icon: Sparkles, color: 'text-indigo-600', bg: 'bg-indigo-50',
              title: 'Advanced Diagnostics',
              desc: 'Samsung HD 3D/4D sonography, in-house 24×7 pathology lab, and same-day diagnostic reporting.',
            },
          ].map(({ icon: Icon, color, bg, title, desc }, i) => (
            <MotionReveal key={i} variant="fade-up" duration={550} delay={i * 60}>
              <div className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-xl ${bg} ${color} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-slate-900 mb-0.5">{title}</h3>
                  <p className="text-[13px] text-slate-500 leading-[1.65]">{desc}</p>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>


      {/* ============================================================
          DESKTOP HERO — preserved two-column editorial composition
      ============================================================ */}
      <section className="hidden lg:block relative py-20 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-white to-blue-50/40 -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-48 -left-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">

            {/* Left: Typography */}
            <div className="lg:col-span-7 space-y-6">
              <MotionReveal variant="fade-down" duration={500}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-200 text-purple-900 text-xs font-extrabold shadow-2xs">
                  <HeartPulse className="w-4 h-4 text-[#6B2C7E]" />
                  <span>માતૃત્વસ્પર્શ એવમ્ શમનમ્ · Vedant Hospital Modasa</span>
                </div>
              </MotionReveal>

              <MotionReveal variant="fade-up" duration={650} delay={60}>
                <h1 className="text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                  Safe Motherhood &<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B2C7E] via-[#843B9F] to-[#1E3A5F]">
                    Compassionate Healing
                  </span>
                </h1>
              </MotionReveal>

              <MotionReveal variant="fade-up" duration={650} delay={120} className="space-y-3">
                <p className="text-base xl:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Modasa's dedicated healthcare sanctuary for comprehensive maternity, painless childbirth, 3D/4D diagnostics, laparoscopic surgery, and 24×7 doctor-supervised ICU care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-700 font-medium pt-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6B2C7E]" />
                    <span>Obstetrics &amp; Gynecology: <strong>Dr. Happy Patel</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1E3A5F]" />
                    <span>General Medicine &amp; ICU: <strong>Dr. Paras Patel</strong></span>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal variant="fade-up" duration={650} delay={180} className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={hospitalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-sm shadow-lg shadow-emerald-900/20 active:scale-95 transition-all flex items-center gap-2.5 btn-lift"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Us on WhatsApp</span>
                </a>
                <a
                  href={`tel:${hospitalInfo.contacts.emergency}`}
                  className="px-6 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 font-bold text-sm shadow-xs flex items-center gap-2 transition-all btn-lift"
                >
                  <Phone className="w-4 h-4 text-rose-600" />
                  <span>24×7 Emergency: {hospitalInfo.contacts.emergencyDisplay}</span>
                </a>
              </MotionReveal>

              <MotionReveal variant="fade-up" duration={650} delay={240} className="pt-2">
                <div className="inline-flex items-center gap-4 text-xs font-semibold text-slate-600 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <span className="flex items-center gap-1.5 text-rose-700">
                    <Activity className="w-4 h-4" /> 24×7 Doctor-Supervised ICU
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 text-purple-800">
                    <Sparkles className="w-4 h-4 text-[#6B2C7E]" /> 3D/4D HD Sonography
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1.5 text-blue-800">
                    <ShieldCheck className="w-4 h-4 text-blue-600" /> Cashless Mediclaim
                  </span>
                </div>
              </MotionReveal>
            </div>

            {/* Right: Hero visual + floating badges */}
            <MotionReveal variant="fade-left" duration={700} delay={100} className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 group">
                <img
                  src="/images/hospital-reception.jpg"
                  alt="Vedant Hospital Modasa Reception Lounge"
                  className="w-full h-96 xl:h-[440px] object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-purple-300 bg-purple-950/90 px-2.5 py-0.5 rounded border border-purple-800/60">
                    MODASA · ARAVALLI
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-1">Vedant Hospital Healthcare Campus</h3>
                  <p className="text-xs text-slate-300 font-light mt-0.5">3rd Floor, Gajanand Complex, Shamlaji Road</p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-gentle-float">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">24×7 ICU Care</p>
                  <p className="text-[11px] text-slate-500">Doctor Supervised</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-5 -right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-gentle-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6B2C7E] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">3D/4D Sonography</p>
                  <p className="text-[11px] text-slate-500">HD Fetal Diagnostics</p>
                </div>
              </div>
            </MotionReveal>

          </div>
        </div>
      </section>


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

        <StaggerGroup stagger={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilitiesData.slice(0, 4).map((facility) => (
            <div key={facility.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#6B2C7E] group-hover:bg-[#6B2C7E] group-hover:text-white transition-all flex items-center justify-center mb-4">
                  {facility.id === 'emergency' && <AlertCircle className="w-6 h-6" />}
                  {facility.id === 'icu' && <Activity className="w-6 h-6" />}
                  {facility.id === 'ot' && <Sparkles className="w-6 h-6" />}
                  {facility.id === 'sonography' && <Eye className="w-6 h-6" />}
                </div>
                <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#6B2C7E] transition-colors mb-2">{facility.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{facility.description}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
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
