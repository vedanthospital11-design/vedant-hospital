import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Building,
  Navigation
} from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Contact({ onOpenAppointment }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-16 py-8 sm:py-12">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Reach Out to Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact & Hospital Location in Modasa
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Conveniently located on Shamlaji Road above Bank of Baroda. 24x7 emergency admissions, consultations, and ambulance assistance.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24x7 Emergency Highlight Card */}
            <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-rose-950">24x7 Emergency Helpline</h3>
                  <p className="text-xs text-rose-800 font-medium">Immediate response for trauma & labor</p>
                </div>
              </div>
              <a
                href={`tel:${hospitalInfo.contacts.emergency}`}
                className="block text-2xl sm:text-3xl font-extrabold text-rose-700 hover:text-rose-900 transition-colors py-1"
              >
                {hospitalInfo.contacts.emergencyDisplay}
              </a>
              <p className="text-xs text-rose-700 mt-1">
                Doctor supervised ICU & Obstetric emergency admissions 24 hours a day.
              </p>
            </div>

            {/* Appointment Numbers Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1E3A5F] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">OPD Appointment Numbers</h3>
                  <p className="text-xs text-slate-500">Consultant OPD pre-booking</p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-600">Line 1:</span>
                  <a
                    href={`tel:${hospitalInfo.contacts.appointment1}`}
                    className="text-sm font-bold text-purple-800 hover:underline"
                  >
                    {hospitalInfo.contacts.appointment1Display}
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs font-bold text-slate-600">Line 2:</span>
                  <a
                    href={`tel:${hospitalInfo.contacts.appointment2}`}
                    className="text-sm font-bold text-purple-800 hover:underline"
                  >
                    {hospitalInfo.contacts.appointment2Display}
                  </a>
                </div>
              </div>

              <button
                onClick={() => onOpenAppointment()}
                className="w-full py-3 bg-[#6B2C7E] hover:bg-[#582468] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6B2C7E] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">Hospital Address</h3>
                  <p className="text-xs text-slate-500">Modasa, Aravalli District</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-1">
                {hospitalInfo.address}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-purple-700 shrink-0" />
                <span>OPD: 9:00 AM - 8:00 PM (Monday to Saturday)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            
            <div className="mb-6 space-y-1">
              <h2 className="text-2xl font-extrabold text-slate-900">Send an Inquiry or Message</h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Have a question about treatments, doctor availability, or insurance? Fill out the form below.
              </p>
            </div>

            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our hospital reception team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFormData({ name: '', phone: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#6B2C7E] text-white font-bold text-xs rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Subject / Concern
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white"
                  >
                    <option value="">General Consultation Inquiry</option>
                    <option value="Maternity & Pregnancy Care">Maternity & Pregnancy Care (Dr. Happy Patel)</option>
                    <option value="Gynecology / Laparoscopy / Sonography">Gynecology / Laparoscopy / Sonography</option>
                    <option value="ICU / Emergency Admission">ICU / Emergency Admission</option>
                    <option value="Cardiac / Diabetes Care">Cardiac / Diabetes Care (Dr. Paras Patel)</option>
                    <option value="Mediclaim / Insurance Cashless">Mediclaim / Insurance Cashless Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Health Query *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Write your health inquiry, questions regarding doctor consultation timings, or hospital admission..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#6B2C7E] to-[#1E3A5F] hover:from-[#582468] hover:to-[#162A45] text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Map / Location Guide Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6B2C7E] flex items-center justify-center">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900">How to Reach Vedant Hospital</h3>
                <p className="text-xs text-slate-500">Deep Area, Shamlaji Road, Modasa, Aravalli</p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Vedant Hospital Gajanand Complex Bank of Baroda Shamlaji Road Modasa')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-50 hover:bg-purple-100 text-[#6B2C7E] font-bold text-xs rounded-xl border border-purple-200 transition-colors flex items-center gap-1.5"
            >
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="font-bold text-slate-800 mb-1">Landmark</p>
              <p className="text-slate-600">Above Bank of Baroda, Gajanand Complex (3rd Floor), Deep Area.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="font-bold text-slate-800 mb-1">Accessibility</p>
              <p className="text-slate-600">Convenient elevator lift access to the 3rd floor with stretcher friendly entrance.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <p className="font-bold text-slate-800 mb-1">Emergency Arrivals</p>
              <p className="text-slate-600">24x7 immediate triage on arrival. Ambulance parking space available.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
