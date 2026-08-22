import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, colorTheme = 'jambu', onClick }) {
  const isJambu = colorTheme === 'jambu';

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer"
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              isJambu
                ? 'bg-purple-100 text-[#6B2C7E] group-hover:bg-[#6B2C7E] group-hover:text-white'
                : 'bg-blue-100 text-[#1E3A5F] group-hover:bg-[#1E3A5F] group-hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-base text-slate-800 group-hover:text-[#6B2C7E] transition-colors leading-snug">
            {title}
          </h4>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12">
          {description}
        </p>
      </div>

      <div className="pt-4 mt-2 border-t border-slate-50 flex items-center justify-end text-xs font-semibold text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
