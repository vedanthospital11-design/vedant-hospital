import React, { useState } from 'react';
import { X, Calendar, User, Phone, CheckCircle, Clock, HeartPulse, Stethoscope, AlertCircle } from 'lucide-react';
import { doctorsData, hospitalInfo } from '../data/hospitalData';

export default function AppointmentModal({ isOpen, onClose, preselectedDoctorId = null }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    doctorId: preselectedDoctorId || doctorsData[0].id,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'Morning (09:00 AM - 01:00 PM)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedDoctor = doctorsData.find((doc) => doc.id === formData.doctorId) || doctorsData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-purple-100 relative">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#6B2C7E] to-[#1E3A5F] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-snug">Book an Appointment</h3>
              <p className="text-xs text-purple-200">Vedant Hospital, Modasa</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Appointment Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{formData.patientName}</strong>. Your appointment request with <strong className="text-[#6B2C7E]">{selectedDoctor.name}</strong> for <strong className="text-slate-800">{formData.date}</strong> has been registered.
              </p>

              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 text-xs text-slate-700 text-left space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-semibold text-slate-800">{selectedDoctor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Department:</span>
                  <span className="font-semibold text-slate-800">{selectedDoctor.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <span className="font-semibold text-slate-800">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Hospital Contact:</span>
                  <span className="font-semibold text-purple-700">{hospitalInfo.contacts.appointment1Display}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="w-full py-3 bg-[#6B2C7E] hover:bg-[#582468] text-white font-bold rounded-xl transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Doctor Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Select Specialist Doctor *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {doctorsData.map((doctor) => {
                    const isSelected = formData.doctorId === doctor.id;
                    return (
                      <div
                        key={doctor.id}
                        onClick={() => setFormData({ ...formData, doctorId: doctor.id })}
                        className={`cursor-pointer p-3 rounded-xl border transition-all text-left flex items-center gap-2.5 ${
                          isSelected
                            ? 'border-purple-600 bg-purple-50 ring-2 ring-purple-600/20'
                            : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-900 truncate">{doctor.name}</p>
                          <p className="text-[11px] text-purple-700 truncate">{doctor.qualifications}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 bg-white"
                  >
                    <option value="Morning (09:00 AM - 01:00 PM)">Morning (9 AM - 1 PM)</option>
                    <option value="Evening (04:00 PM - 08:00 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              {/* Consultation Reason / Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Reason for Visit / Symptoms (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Describe your health concern or maternity checkup..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 resize-none"
                ></textarea>
              </div>

              {/* Emergency reminder banner */}
              <div className="flex items-start gap-2 p-2.5 bg-amber-50 rounded-xl border border-amber-200/70 text-[11px] text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  For urgent emergency or critical care, please directly call our 24x7 helpline: <a href={`tel:${hospitalInfo.contacts.emergency}`} className="font-bold underline text-amber-900">{hospitalInfo.contacts.emergencyDisplay}</a>.
                </span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#6B2C7E] to-[#1E3A5F] hover:from-[#582468] hover:to-[#162A45] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
                >
                  Confirm Appointment Request
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
