import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  AlertCircle,
  Navigation,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';

export default function Contact() {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <MotionReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Contact Vedant Hospital
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect Directly with Vedant Hospital
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Reach out directly to our hospital team on WhatsApp for appointment inquiries and consultation details, or call our 24x7 emergency team for urgent medical admissions in Modasa.
          </p>
        </MotionReveal>
      </section>

      {/* Main Direct Action Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGroup stagger={120} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Primary Action: WhatsApp Direct Chat */}
          <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageCircle className="w-36 h-36" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-bold border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Primary Contact Channel</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Chat on WhatsApp
                </h2>
                <p className="text-emerald-100 text-sm mt-2 leading-relaxed">
                  Fastest way to inquire about doctor OPD schedules, pregnancy care, surgery details, and book consultations.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-emerald-200 font-semibold">WhatsApp Number</p>
                <p className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
                  {hospitalInfo.contacts.whatsappDisplay}
                </p>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <a
                href={hospitalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 font-extrabold text-base transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2.5 group/btn btn-lift"
              >
                <MessageCircle className="w-5 h-5 text-emerald-700 group-hover/btn:scale-110 transition-transform" />
                <span>Open WhatsApp Chat Now</span>
              </a>
            </div>
          </div>

          {/* Emergency 24x7 Action Card */}
          <div className="bg-gradient-to-br from-rose-900 via-rose-800 to-red-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertCircle className="w-36 h-36" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-700/60 text-rose-200 text-xs font-bold border border-rose-500/30">
                <span className="w-2 h-2 rounded-full bg-rose-300 animate-ping"></span>
                <span>24x7 Emergency Helpline</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Medical & ICU Emergency
                </h2>
                <p className="text-rose-100 text-sm mt-2 leading-relaxed">
                  Immediate triage and emergency admissions for acute medical emergencies, labor/delivery, cardiac events, and trauma care.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-rose-200 font-semibold">24x7 Helpline</p>
                <a
                  href={`tel:${hospitalInfo.contacts.emergency}`}
                  className="text-2xl sm:text-3xl font-black text-amber-300 hover:underline tracking-tight mt-0.5 block"
                >
                  {hospitalInfo.contacts.emergencyDisplay}
                </a>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <a
                href={`tel:${hospitalInfo.contacts.emergency}`}
                className="w-full py-4 px-6 rounded-2xl bg-white text-rose-900 hover:bg-rose-50 font-extrabold text-base transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2.5 group/btn btn-lift"
              >
                <Phone className="w-5 h-5 text-rose-700 group-hover/btn:scale-110 transition-transform" />
                <span>Call Emergency ({hospitalInfo.contacts.emergencyDisplay})</span>
              </a>
            </div>
          </div>

        </StaggerGroup>
      </section>

      {/* Hospital Location & Timings Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Address & Timings Card */}
          <MotionReveal variant="fade-right" className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#6B2C7E] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Hospital Address</h3>
                  <p className="text-xs text-slate-500 font-medium">Modasa, Dist. Aravalli, Gujarat</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                  {hospitalInfo.address}
                </p>
                <div className="flex items-center gap-2 text-xs text-purple-700 font-bold pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>3rd Floor, Gajanand Complex (Lift Available)</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <Clock className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">OPD Consultation Timings:</strong>
                    <p className="text-slate-600 mt-0.5">Monday to Saturday: 09:00 AM – 08:00 PM</p>
                    <p className="text-slate-600">Sunday: 09:00 AM – 01:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">ICU & Emergency Care:</strong>
                    <p className="text-slate-600 mt-0.5">24 Hours / 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Vedant Hospital Gajanand Complex Bank of Baroda Shamlaji Road Modasa')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-purple-50 hover:bg-purple-100 text-[#6B2C7E] font-bold text-sm rounded-xl border border-purple-200 transition-colors flex items-center justify-center gap-2 btn-lift"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </MotionReveal>

          {/* Landmarks & Accessibility Guide */}
          <MotionReveal variant="fade-left" delay={100} className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#1E3A5F] flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">How to Reach & Hospital Guide</h3>
                  <p className="text-xs text-slate-500 font-medium">Important landmark and accessibility information</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">Prominent Landmark</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Located on main Shamlaji Road, Deep Area, directly above Bank of Baroda in Gajanand Complex.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">Elevator & Accessibility</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dedicated wide elevator lift access directly to the 3rd floor, with wheelchair and stretcher access.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">Emergency & Ambulance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designated parking space for ambulances and swift transfer facilities to ICU and Labour Room.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">In-House Pharmacy & Lab</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    24x7 pathology laboratory and pharmacy available inside the hospital premises for instant tests and medicines.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center justify-between gap-4">
              <div className="text-xs text-slate-700">
                <p className="font-bold text-[#6B2C7E]">Need assistance right now?</p>
                <p className="text-slate-500">Our reception is active on WhatsApp during working hours.</p>
              </div>
              <a
                href={hospitalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#6B2C7E] hover:bg-[#582468] text-white text-xs font-bold rounded-xl transition-all shrink-0 shadow-xs btn-lift"
              >
                Chat on WhatsApp
              </a>
            </div>
          </MotionReveal>

        </div>
      </section>

    </div>
  );
}

