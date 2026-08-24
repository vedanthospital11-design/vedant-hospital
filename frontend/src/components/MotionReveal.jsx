import React, { useEffect, useRef, useState } from 'react';

/**
 * MotionReveal Component
 * High-performance, GPU-accelerated scroll reveal component.
 * Retriggers animations when scrolling down AND scrolling up (once: false).
 * Respects prefers-reduced-motion.
 */
export default function MotionReveal({
  children,
  variant = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in' | 'blur-in' | 'fade'
  delay = 0, // delay in ms
  duration = 650, // duration in ms
  threshold = 0.12,
  className = '',
  as: Component = 'div',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Retrigger in both directions: when entering, set visible; when leaving, set hidden
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // If the element has moved out of viewport, reset so it re-animates when scrolling back
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [threshold]);

  // Variant class maps for hidden vs visible states
  const getVariantStyles = () => {
    switch (variant) {
      case 'fade-up':
        return isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8';
      case 'fade-down':
        return isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8';
      case 'fade-left':
        return isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8';
      case 'fade-right':
        return isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-8';
      case 'scale-in':
        return isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-94';
      case 'blur-in':
        return isVisible
          ? 'opacity-100 blur-0 scale-100'
          : 'opacity-0 blur-xs scale-96';
      case 'fade':
      default:
        return isVisible
          ? 'opacity-100'
          : 'opacity-0';
    }
  };

  return (
    <Component
      ref={elementRef}
      className={`transform-gpu transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform] ${getVariantStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * StaggerGroup Helper
 * Wraps children with staggered delays and preserves grid stretch
 */
export function StaggerGroup({
  children,
  stagger = 100,
  variant = 'fade-up',
  duration = 600,
  className = '',
  itemClassName = 'h-full flex flex-col',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <MotionReveal
            key={index}
            variant={variant}
            delay={index * stagger}
            duration={duration}
            className={itemClassName}
          >
            {child}
          </MotionReveal>
        );
      })}
    </Component>
  );
}
