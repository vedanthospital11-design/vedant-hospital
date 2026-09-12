import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Building2, Phone, ArrowLeft, Stethoscope } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Page Not Found | Vedant Hospital Modasa"
        description="The page you are looking for does not exist on Vedant Hospital website. Explore our doctors, facilities, and medical services in Modasa."
        canonical="/404"
        noindex={true}
      />

      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
        <div className="space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200">
            Error 404 · Page Not Found
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800">
            Looking for Medical Care or Doctor Information?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            The page you requested could not be found or has moved. Please use the navigation below to find doctor profiles, hospital facilities, and emergency care.
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <Link
            to="/"
            className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col items-center gap-2 group"
          >
            <Home className="w-5 h-5 text-[#6B2C7E] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800">Home</span>
          </Link>

          <Link
            to="/doctors"
            className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col items-center gap-2 group"
          >
            <Users className="w-5 h-5 text-[#6B2C7E] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800">Our Doctors</span>
          </Link>

          <Link
            to="/facilities"
            className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col items-center gap-2 group"
          >
            <Building2 className="w-5 h-5 text-[#6B2C7E] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800">Facilities</span>
          </Link>

          <Link
            to="/services"
            className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50 border border-slate-200 hover:border-purple-200 transition-all flex flex-col items-center gap-2 group"
          >
            <Stethoscope className="w-5 h-5 text-[#6B2C7E] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-slate-800">Services</span>
          </Link>
        </div>

        {/* Emergency Assistance */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>Need 24×7 Emergency Assistance in Modasa?</span>
          <a
            href={`tel:${hospitalInfo.contacts.emergency}`}
            className="font-bold text-rose-700 hover:underline flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{hospitalInfo.contacts.emergencyDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
