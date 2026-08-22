import React from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/60 text-white hover:bg-rose-600 transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6" />
        </button>

        {/* High Res Image */}
        <div className="aspect-16/9 overflow-hidden bg-black flex items-center justify-center">
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-full object-cover max-h-[75vh]"
          />
        </div>

        {/* Caption & Category */}
        <div className="p-6 bg-slate-900 text-white">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-950/80 border border-purple-800/50 px-2.5 py-0.5 rounded-md">
              {image.category}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold">{image.title}</h3>
          <p className="text-sm text-slate-300 mt-1 leading-relaxed">{image.description}</p>
        </div>

      </div>
    </div>
  );
}
