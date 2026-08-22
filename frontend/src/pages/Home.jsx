import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Phone, 
  HeartPulse, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles,
  Users,
  Eye,
  AlertCircle
} from 'lucide-react';
import { hospitalInfo, doctorsData, departmentsData, facilitiesData, galleryImages } from '../data/hospitalData';
import DoctorCard from '../components/DoctorCard';
import ServiceCard from '../components/ServiceCard';
import FacilityCard from '../components/FacilityCard';
import ImageModal from '../components/ImageModal';

export default function Home({ onOpenAppointment }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeDeptTab, setActiveDeptTab] = useState('all');

  const filteredDepts = activeDeptTab === 'all' 
    ? departmentsData 
    : departmentsData.filter(d => d.id === activeDeptTab);

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-blue-50/40 to-slate-50 pt-10 pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-900 text-xs sm:text-sm font-bold shadow-xs">
                <HeartPulse className="w-4 h-4 text-[#6B2C7E]" />
                <span>માતૃત્વસ્પર્શ એવમ્ શમનમ્ • Vedant Hospital Modasa</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Safe Motherhood & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B2C7E] via-[#843B9F] to-[#1E3A5F]">
                  Compassionate Healing
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Advanced Obstetrics, Gynecology, Laparoscopy & Sonography by <strong className="text-slate-800">Dr. Happy Patel</strong>, and 24x7 Doctor-Supervised ICU, Cardiac, Diabetes & General Medicine care by <strong className="text-slate-800">Dr. Paras Patel</strong> in Modasa.
              </p>

              {/* Key Quick Bullets */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs sm:text-sm font-semibold text-slate-700 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-purple-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#6B2C7E] shrink-0" />
                  <span>24x7 ICU & Emergency</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-purple-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#6B2C7E] shrink-0" />
                  <span>3D / 4D Sonography</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-purple-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#6B2C7E] shrink-0" />
                  <span>Cashless Mediclaim</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 justify-center lg:justify-start">
                <button
                  onClick={() => onOpenAppointment()}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#6B2C7E] to-[#843B9F] hover:from-[#582468] hover:to-[#6B2C7E] text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-900/20 hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Doctor Appointment</span>
                </button>

                <a
                  href={`tel:${hospitalInfo.contacts.emergency}`}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency: {hospitalInfo.contacts.emergencyDisplay}</span>
                </a>
              </div>

              {/* Location Snippet */}
              <p className="text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-1.5 pt-2">
                <MapPin className="w-3.5 h-3.5 text-purple-700" />
                <span>3rd Floor, Gajanand Complex, Above Bank of Baroda, Deep Area, Shamlaji Road, Modasa</span>
              </p>

            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              
              {/* Main Reception Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="/images/hospital-reception.jpg"
                  alt="Vedant Hospital Modasa Reception Lounge"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 bg-purple-900/70 px-2 py-0.5 rounded-md">
                    Modasa, Aravalli
                  </span>
                  <h3 className="text-lg font-bold mt-1">Vedant Hospital Healthcare Campus</h3>
                  <p className="text-xs text-slate-300">Modern, hygienic, air-conditioned patient facilities</p>
                </div>
              </div>

              {/* Floating Badge 1: ICU 24x7 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-1000 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">24x7 ICU Care</p>
                  <p className="text-[11px] text-slate-500">Doctor Supervised</p>
                </div>
              </div>

              {/* Floating Badge 2: Advanced Sonography */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6B2C7E] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">3D/4D Sonography</p>
                  <p className="text-[11px] text-slate-500">Advanced Fetal Scans</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS & QUICK HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#6B2C7E]">24x7</div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Emergency & ICU</p>
            <p className="text-[11px] text-slate-500">Doctor Supervised</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#1E3A5F]">2 Specialized</div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Clinical Departments</p>
            <p className="text-[11px] text-slate-500">Gynecology & Medicine</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">Cashless Mediclaim</p>
            <p className="text-[11px] text-slate-500">TPA & Insurance Support</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">In-House</div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">24x7 Lab & Pharmacy</p>
            <p className="text-[11px] text-slate-500">Instant Diagnostic Reports</p>
          </div>

        </div>
      </section>

      {/* 3. DOCTORS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Expert Medical Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Specialist Doctors
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Experienced specialists dedicated to compassionate patient care, surgical excellence, and round-the-clock emergency support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctorsData.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={(docId) => onOpenAppointment(docId)}
            />
          ))}
        </div>
      </section>

      {/* 4. DEPARTMENTS & CLINICAL TREATMENTS */}
      <section className="bg-slate-100/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Complete Clinical Spectrum
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Medical Departments & Treatments
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Carefully organized services tailored to ensure safe childbirth, maternal well-being, and advanced physician & critical care.
            </p>
          </div>

          {/* Department Cards Grid */}
          <div className="space-y-12">
            {departmentsData.map((dept) => {
              const isJambu = dept.colorTheme === 'jambu';
              return (
                <div key={dept.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
                  
                  {/* Department Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isJambu ? 'bg-purple-100 text-[#6B2C7E]' : 'bg-blue-100 text-[#1E3A5F]'
                        }`}>
                          {dept.titleGujarati}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {dept.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Lead Specialist: <strong className="text-slate-800">{dept.headDoctor}</strong> ({dept.qualifications})
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenAppointment(dept.id === 'gynecology' ? 'dr-happy-patel' : 'dr-paras-patel')}
                      className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all shadow-sm ${
                        isJambu ? 'bg-[#6B2C7E] hover:bg-[#582468]' : 'bg-[#1E3A5F] hover:bg-[#162A45]'
                      }`}
                    >
                      Book OPD for {dept.title.split(' ')[0]}
                    </button>
                  </div>

                  {/* Services List Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                    {dept.services.map((service, idx) => (
                      <ServiceCard
                        key={idx}
                        title={service.title}
                        description={service.description}
                        colorTheme={dept.colorTheme}
                        onClick={() => onOpenAppointment(dept.id === 'gynecology' ? 'dr-happy-patel' : 'dr-paras-patel')}
                      />
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. HOSPITAL FACILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Infrastructure & Care
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hospital Facilities & Amenities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Equipped with modern medical infrastructure, clean air-conditioned wards, and round-the-clock emergency support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </section>

      {/* 6. PHOTO GALLERY PREVIEW */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800/50">
                Hospital Infrastructure
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                Photo Gallery & Virtual Tour
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Explore our modern operation theatres, 3D/4D ultrasound suites, 24x7 ICU, and deluxe recovery rooms.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition-colors"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group cursor-pointer hover:border-purple-500 transition-all duration-300"
              >
                <div className="relative aspect-16/9 overflow-hidden">
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  <div className="absolute top-3 right-3 bg-slate-950/70 p-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold uppercase text-purple-300 bg-purple-950/90 px-2 py-0.5 rounded">
                      {img.category}
                    </span>
                    <h4 className="text-sm font-bold mt-1 truncate">{img.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. EMERGENCY & LOCATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#6B2C7E] via-[#582468] to-[#1E3A5F] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-md">
                <AlertCircle className="w-4 h-4 text-amber-300" />
                24 x 7 Emergency & Trauma Admissions
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Need Urgent Medical Care in Modasa?
              </h2>
              <p className="text-purple-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                Our emergency and ICU team is on standby 24 hours a day. Located conveniently on Shamlaji Road, Modasa above Bank of Baroda.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-purple-300" />
                  <span>3rd Floor, Gajanand Complex, Deep Area, Shamlaji Road</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${hospitalInfo.contacts.emergency}`}
                className="py-3.5 px-6 rounded-xl bg-white text-[#6B2C7E] hover:bg-purple-50 font-extrabold text-sm sm:text-base text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#6B2C7E]" />
                <span>Call {hospitalInfo.contacts.emergencyDisplay}</span>
              </a>

              <button
                onClick={() => onOpenAppointment()}
                className="py-3.5 px-6 rounded-xl bg-purple-900/60 hover:bg-purple-900 border border-purple-300/40 text-white font-bold text-sm sm:text-base text-center transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book OPD Consultation</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Image Modal Lightbox */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

    </div>
  );
}
