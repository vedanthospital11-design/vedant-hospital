import React, { useState } from 'react';
import { Eye, Sparkles, ZoomIn } from 'lucide-react';
import { galleryImages } from '../data/hospitalData';
import { getHospitalSchema, getBreadcrumbSchema } from '../data/schemaData';
import ImageModal from '../components/ImageModal';
import MotionReveal, { StaggerGroup } from '../components/MotionReveal';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Lobby & Reception', 'Surgical Suites', 'Diagnostics', 'Critical Care', 'Patient Rooms'];

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const gallerySchema = [
    getHospitalSchema(),
    getBreadcrumbSchema([{ name: 'Photo Gallery', url: '/gallery' }])
  ];

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-10">
      <SEO
        title="Vedant Hospital Photo Gallery | Modasa"
        description="View photos of Vedant Hospital Modasa, including the hospital, facilities, doctors and healthcare environment."
        canonical="/gallery"
        schema={gallerySchema}
      />

      <Breadcrumbs items={[{ name: 'Photo Gallery', url: '/gallery' }]} />

      {/* Header */}
      <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-slate-50 py-12 border-b border-purple-100/60">
        <MotionReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
            Hospital Infrastructure &amp; Campus Tour
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Vedant Hospital Photo Gallery | Modasa
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Take a virtual tour of our modern operation theatres, 3D/4D ultrasound suites, 24x7 ICU, reception lounge, and patient care rooms in Modasa.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-[#6B2C7E]">
            અદ્યતન સારવાર અને શ્રેષ્ઠ હોસ્પિટલ સુવિધાઓની ઝાંખી
          </p>
        </MotionReveal>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filters */}
        <MotionReveal variant="fade-up" className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#6B2C7E] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </MotionReveal>

        {/* Images Grid */}
        <StaggerGroup stagger={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                <img
                  src={img.image}
                  alt={`${img.title} - Vedant Hospital Modasa`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute top-4 right-4 bg-slate-900/80 p-2.5 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-5 h-5 text-purple-300" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 bg-[#6B2C7E]/90 px-2 py-0.5 rounded-md">
                    {img.category}
                  </span>
                  <h3 className="text-base font-bold mt-1 leading-snug">{img.title}</h3>
                </div>
              </div>

              <div className="p-5 bg-white">
                {img.subTitleGujarati && (
                  <p className="text-xs font-semibold text-[#6B2C7E] mb-1.5">{img.subTitleGujarati}</p>
                )}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerGroup>

        {/* Cross-link Navigation Strip */}
        <div className="pt-6 text-center flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/facilities"
            className="px-5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#6B2C7E] font-bold text-xs sm:text-sm border border-purple-200 transition-colors"
          >
            Explore Hospital Facilities →
          </Link>
          <Link
            to="/services"
            className="px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1E3A5F] font-bold text-xs sm:text-sm border border-blue-200 transition-colors"
          >
            View Clinical Services →
          </Link>
          <Link
            to="/doctors"
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors"
          >
            Meet Our Doctors →
          </Link>
        </div>

      </section>

      {/* Lightbox Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

    </div>
  );
}

