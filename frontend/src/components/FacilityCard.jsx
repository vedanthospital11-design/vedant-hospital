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
  CheckCircle 
} from 'lucide-react';

const iconMap = {
  ShieldAlert,
  Activity,
  Sparkles,
  Eye,
  FlaskConical,
  Pill,
  Bed,
  CreditCard
};

export default function FacilityCard({ facility }) {
  const IconComponent = iconMap[facility.icon] || CheckCircle;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between">
      <div>
        {/* Icon Circle */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-[#6B2C7E] group-hover:to-[#1E3A5F] flex items-center justify-center text-[#6B2C7E] group-hover:text-white transition-all duration-300 mb-5 shadow-inner">
          <IconComponent className="w-7 h-7" />
        </div>

        {/* Title */}
        <h3 className="font-extrabold text-lg text-slate-800 group-hover:text-[#6B2C7E] transition-colors mb-1 leading-snug">
          {facility.title}
        </h3>

        {/* Gujarati Subtitle */}
        {facility.subTitleGujarati && (
          <p className="text-xs font-semibold text-[#6B2C7E] mb-2">
            {facility.subTitleGujarati}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {facility.description}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold text-purple-700">Vedant Facility</span>
        <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded-full font-medium">Available 24x7</span>
      </div>
    </div>
  );
}
