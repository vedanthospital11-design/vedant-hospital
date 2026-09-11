import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { HERO_SLIDES } from '../data/heroSlides';
import { hospitalInfo } from '../data/hospitalData';

const SLIDE_INTERVAL = 5500; // 5.5s per slide

export default function HeroSlideshow({ onOpenAppointment }) {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  // Preload all slides on initial mount to prevent any lag
  useEffect(() => {
    HERO_SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  // Preload next image dynamically
  useEffect(() => {
    const nextIndex = (current + 1) % HERO_SLIDES.length;
    const img = new Image();
    img.src = HERO_SLIDES[nextIndex].image;
  }, [current]);

  const goTo = useCallback(
    (idx) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimKey((k) => k + 1);
        setIsTransitioning(false);
      }, 150);
    },
    [isTransitioning]
  );

  const next = useCallback(
    () => goTo((current + 1) % HERO_SLIDES.length),
    [current, goTo]
  );

  const prev = useCallback(
    () => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
    [current, goTo]
  );

  // Auto-advance timer
  useEffect(() => {
    timerRef.current = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const pauseTimer = () => clearInterval(timerRef.current);
  const resumeTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, SLIDE_INTERVAL);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const slide = HERO_SLIDES[current];

  // Handler for primary CTA click
  const handleCtaClick = (e, s) => {
    if (s.ctaAction === 'appointment') {
      if (onOpenAppointment) {
        e.preventDefault();
        onOpenAppointment(s.doctor.includes('Happy') ? 'happy-patel' : 'paras-patel');
      }
    } else if (s.ctaAction === 'scroll') {
      e.preventDefault();
      const target = document.querySelector(s.ctaLink);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="relative overflow-hidden w-full select-none"
      style={{
        // Height calculated relative to viewport after header, giving a subtle hint of section below on large screens
        height: 'calc(100dvh - 96px)',
        minHeight: '560px',
        maxHeight: '780px',
      }}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Vedant Hospital Hero Slideshow"
      role="region"
    >
      {/* ── 1. BACKGROUND PHOTOGRAPHY (Stacked crossfade + subtle slow zoom) ── */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          aria-hidden={i !== current}
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'opacity 0.85s ease-in-out',
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            pointerEvents: 'none',
          }}
        >
          <img
            src={s.image}
            alt={s.headline}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className={i === current ? 'hero-slide-img-active' : ''}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: s.objectPosition || '75% center',
              display: 'block',
            }}
          />
        </div>
      ))}

      {/* ── 2. CINEMATIC GRADIENT OVERLAYS (Subtle contrast for text, luminous photo on right) ── */}
      {/* Soft top gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background:
            'linear-gradient(to bottom, rgba(4,6,14,0.32) 0%, rgba(4,6,14,0.10) 20%, transparent 40%)',
        }}
      />
      {/* Desktop/Tablet: Left-anchored contrast scrim leaving doctors on right luminous */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background:
            'linear-gradient(to right, rgba(4,6,14,0.82) 0%, rgba(4,6,14,0.55) 34%, rgba(4,6,14,0.12) 60%, transparent 80%)',
        }}
      />
      {/* Mobile-optimized vignette gradient */}
      <div
        className="block md:hidden"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          background:
            'linear-gradient(to top, rgba(4,6,14,0.90) 0%, rgba(4,6,14,0.58) 45%, rgba(4,6,14,0.18) 75%, transparent 100%)',
        }}
      />

      {/* ── 3. HERO CONTENT CONTAINER (Max-width 620px, occupying ~35-40% visual width) ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingLeft: 'clamp(20px, 4.5vw, 64px)',
          paddingRight: 'clamp(20px, 4vw, 48px)',
          paddingBottom: 'clamp(48px, 6vh, 68px)',
          maxWidth: '620px',
        }}
      >
        {/* Eyebrow: refined, 13–15px */}
        <div
          key={`eyebrow-${animKey}`}
          className="hero-text-enter flex items-center gap-2 mb-2"
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: 'clamp(12px, 1.1vw, 14px)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.88)',
              textTransform: 'uppercase',
              textShadow: '0 1px 8px rgba(0,0,0,0.8)',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor: slide.accent,
                display: 'inline-block',
                boxShadow: `0 0 6px ${slide.accent}`,
              }}
            />
            {slide.eyebrow}
          </span>
        </div>

        {/* Main Headline: reduced by ~25-30% (52-64px desktop, 42-50px tablet, 30-38px mobile) */}
        <h1
          key={`h1-${animKey}`}
          className="hero-text-enter-delay-1"
          style={{
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.12,
            marginBottom: '8px',
            fontSize: 'clamp(28px, 3.8vw, 54px)',
            color: '#FFFFFF',
            maxWidth: '560px',
            textShadow: '0 2px 20px rgba(0,0,0,0.65)',
          }}
        >
          {slide.headline}
        </h1>

        {/* Gujarati Sub-headline: 20-26px desktop, noticeably smaller supporting line */}
        <p
          key={`guj-${animKey}`}
          className="hero-text-enter-delay-1"
          style={{
            fontSize: 'clamp(15px, 1.5vw, 21px)',
            fontWeight: 500,
            color: slide.accent,
            marginBottom: '12px',
            textShadow: '0 1px 10px rgba(0,0,0,0.7)',
            letterSpacing: '0.01em',
          }}
        >
          {slide.subHeadline}
        </p>

        {/* Description: 18-20px desktop, 16-18px tablet, 15-16px mobile */}
        <p
          key={`desc-${animKey}`}
          className="hero-text-enter-delay-2"
          style={{
            fontSize: 'clamp(14.5px, 1.25vw, 17.5px)',
            fontWeight: 400,
            lineHeight: 1.55,
            color: 'rgba(255,255,255,0.86)',
            marginBottom: '20px',
            maxWidth: '460px',
            textShadow: '0 1px 8px rgba(0,0,0,0.6)',
          }}
        >
          {slide.description}
        </p>

        {/* CTAs: compact, elegant */}
        <div
          key={`cta-${animKey}`}
          className="hero-text-enter-delay-3 flex flex-wrap items-center gap-2.5"
        >
          {/* Slide-specific Primary CTA */}
          {slide.ctaAction === 'link' ? (
            <Link
              to={slide.ctaLink}
              className="btn-lift inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-white"
              style={{
                paddingLeft: '18px',
                paddingRight: '18px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: '#6B2C7E', // Vedant Purple
                boxShadow: '0 3px 14px rgba(107, 44, 126, 0.40)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{slide.ctaText}</span>
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </Link>
          ) : (
            <a
              href={slide.ctaLink}
              target={slide.ctaAction === 'emergency' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => handleCtaClick(e, slide)}
              className="btn-lift inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-white"
              style={{
                paddingLeft: '18px',
                paddingRight: '18px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor:
                  slide.ctaAction === 'emergency'
                    ? '#B91C1C' // Crimson emergency
                    : '#14532D', // WhatsApp green
                boxShadow: '0 3px 14px rgba(0,0,0,0.40)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {slide.ctaAction === 'emergency' ? (
                <Phone style={{ width: '15px', height: '15px', color: '#fca5a5' }} />
              ) : (
                <MessageCircle style={{ width: '16px', height: '16px', color: '#86efac' }} />
              )}
              <span>{slide.ctaText}</span>
            </a>
          )}

          {/* Secondary Quick Contact / Emergency */}
          {slide.ctaAction !== 'emergency' && (
            <a
              href={`tel:${hospitalInfo?.contacts?.emergency || '919979753737'}`}
              className="btn-lift inline-flex items-center gap-2 font-semibold text-xs sm:text-sm"
              style={{
                paddingLeft: '16px',
                paddingRight: '16px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: 'rgba(255,255,255,0.92)',
                border: '1px solid rgba(255,255,255,0.20)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                textShadow: '0 1px 6px rgba(0,0,0,0.4)',
              }}
            >
              <Phone style={{ width: '14px', height: '14px', color: '#fca5a5' }} />
              <span>24×7 Emergency</span>
            </a>
          )}
        </div>
      </div>

      {/* ── 4. SLIDE NAVIGATION: ELEGANT SMALL DOTS ── */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(14px, 2vh, 20px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}: ${s.headline}`}
            style={{
              position: 'relative',
              height: '3.5px',
              width: i === current ? '26px' : '10px',
              borderRadius: '9999px',
              backgroundColor:
                i === current ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.28)',
              transition: 'width 0.35s ease, background-color 0.35s ease',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            {i === current && (
              <span
                key={`prog-${animKey}`}
                className="hero-progress-bar"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(255,255,255,0.50)',
                  borderRadius: '9999px',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* ── 5. PREVIOUS & NEXT ARROWS (Refined: 40-46px circle, subtle transparency) ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '14px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: 'clamp(38px, 3vw, 44px)',
          height: 'clamp(38px, 3vw, 44px)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.18)',
          color: 'rgba(255,255,255,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.2s, transform 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.20)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <ChevronLeft style={{ width: '18px', height: '18px' }} />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '14px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: 'clamp(38px, 3vw, 44px)',
          height: 'clamp(38px, 3vw, 44px)',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.18)',
          color: 'rgba(255,255,255,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.2s, transform 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.20)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <ChevronRight style={{ width: '18px', height: '18px' }} />
      </button>
    </section>
  );
}
