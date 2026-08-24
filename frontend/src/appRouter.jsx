import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyBar from './components/EmergencyBar';
import AppointmentModal from './components/AppointmentModal';

import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Departments from './pages/Departments';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top or anchor helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const elem = document.querySelector(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Main Layout Component
function MainLayout({ onOpenAppointment }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-purple-200 selection:text-purple-950 font-sans">
      <ScrollToTop />
      <EmergencyBar />
      <Navbar onOpenAppointment={() => onOpenAppointment()} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer onOpenAppointment={() => onOpenAppointment()} />
    </div>
  );
}

// App Router Component
export default function AppRouter() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [preselectedDoctorId, setPreselectedDoctorId] = useState(null);

  const handleOpenAppointment = (doctorId = null) => {
    setPreselectedDoctorId(doctorId);
    setAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setAppointmentModalOpen(false);
    setPreselectedDoctorId(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<MainLayout onOpenAppointment={handleOpenAppointment} />}
        >
          <Route path="/" element={<Home onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/about" element={<About onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/doctors" element={<Doctors onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/departments" element={<Departments onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/facilities" element={<Facilities onOpenAppointment={handleOpenAppointment} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact onOpenAppointment={handleOpenAppointment} />} />
          <Route path="*" element={<Home onOpenAppointment={handleOpenAppointment} />} />
        </Route>
      </Routes>

      {/* Global Appointment Booking Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={handleCloseAppointment}
        preselectedDoctorId={preselectedDoctorId}
      />
    </BrowserRouter>
  );
}
