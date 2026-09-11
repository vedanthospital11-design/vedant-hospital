import React from 'react';
import { 
  ShieldAlert, 
  Activity, 
  Sparkles, 
  Eye, 
  FlaskConical, 
  Pill, 
  Bed, 
  CreditCard,
  CheckCircle2,
  Calendar,
  Phone
} from 'lucide-react';
import { facilitiesData, hospitalInfo } from '../data/hospitalData';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';

export default function Facilities({ onOpenAppointment }) {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <MotionReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Hospital Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Facilities, Diagnostic Services & Inpatient Care
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Vedant Hospital offers fully integrated healthcare infrastructure under one roof in Modasa, ensuring safety, hygiene, and rapid clinical intervention.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-[#6B2C7E]">
            આધુનિક સારવાર, 24×7 ઇમરજન્સી અને શ્રેષ્ઠ સુવિધાઓ
          </p>
        </MotionReveal>
      </section>

      {/* Facilities Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGroup stagger={80} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility) => (
            <div
              key={facility.id}
              id={facility.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 scroll-mt-28"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-100 text-[#6B2C7E] group-hover:bg-[#6B2C7E] group-hover:text-white transition-all flex items-center justify-center mb-6 shadow-inner">
                  {facility.id === 'emergency' && <ShieldAlert className="w-7 h-7" />}
                  {facility.id === 'icu' && <Activity className="w-7 h-7" />}
                  {facility.id === 'ot' && <Sparkles className="w-7 h-7" />}
                  {facility.id === 'sonography' && <Eye className="w-7 h-7" />}
                  {facility.id === 'laboratory' && <FlaskConical className="w-7 h-7" />}
                  {facility.id === 'pharmacy' && <Pill className="w-7 h-7" />}
                  {facility.id === 'rooms' && <Bed className="w-7 h-7" />}
                  {facility.id === 'mediclaim' && <CreditCard className="w-7 h-7" />}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#6B2C7E] transition-colors mb-1">
                  {facility.title}
                </h3>
                {facility.subTitleGujarati && (
                  <p className="text-xs font-semibold text-[#6B2C7E] mb-2.5">
                    {facility.subTitleGujarati}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-purple-800">Vedant Quality Assured</span>
                <span className="bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full text-[11px]">
                  Active 24x7
                </span>
              </div>
            </div>
          ))}
        </StaggerGroup>
      </section>

      {/* Hospital Rooms & Accommodations Section */}
      <section id="rooms-section" className="bg-slate-50 py-16 border-y border-slate-200/70 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <MotionReveal variant="fade-right" className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Patient Comfort &amp; Hygiene
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Deluxe, Semi-Special &amp; General Inpatient Rooms
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We understand that recovery requires peace of mind and comfort. Vedant Hospital provides hygienic, air-conditioned patient accommodations with dedicated nursing call systems and seating for family attendants.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#1E3A5F]">
                દર્દી અને પરિવારની સુવિધા માટે શાંત, સ્વચ્છ અને અનુકૂળ વાતાવરણ.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <span><strong>Deluxe Private Rooms:</strong> Fully air-conditioned, motorized beds, attendant sofa, TV, attached private bathroom.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <span><strong>Semi-Special Rooms:</strong> Twin-sharing air-conditioned rooms with partition curtains and attendant chairs.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <span><strong>General Ward:</strong> Spacious, clean, well-ventilated general wards with round-the-clock nursing supervision.</span>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal variant="fade-left" delay={100} className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/patient-room.jpg"
                  alt="Deluxe Patient Room at Vedant Hospital"
                  className="w-full h-80 sm:h-96 object-cover animate-ken-burns"
                />
              </div>
            </MotionReveal>
          </div>

        </div>
      </section>

      {/* Mediclaim & Cashless Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal variant="scale-in" className="bg-gradient-to-r from-[#1E3A5F] to-[#6B2C7E] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Mediclaim & Cashless Hospitalization</h3>
            <p className="text-purple-200 text-xs font-semibold">સરળ અને કેશલેસ મેડિક્લેમ સુવિધા</p>
            <p className="text-purple-100 text-sm max-w-xl">
              We facilitate hassle-free cashless claims and reimbursement paperwork for all major health insurance providers and Third Party Administrators (TPAs).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={hospitalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 font-bold rounded-xl text-sm transition-all shadow-md text-white btn-lift"
            >
              WhatsApp Insurance Desk
            </a>
            <a
              href={`tel:${hospitalInfo.contacts.emergency}`}
              className="px-5 py-3.5 bg-white text-[#1E3A5F] hover:bg-blue-50 font-bold rounded-xl text-sm transition-all shadow-md btn-lift"
            >
              Emergency: {hospitalInfo.contacts.emergencyDisplay}
            </a>
          </div>
        </MotionReveal>
      </section>

    </div>
  );
}

