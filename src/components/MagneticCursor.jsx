import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MagneticCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Smooth cursor follow
    const animate = () => {
      // Lerp for smooth following
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

      gsap.set(cursor, {
        x: cursorPos.current.x,
        y: cursorPos.current.y,
      });

      gsap.set(cursorDot, {
        x: mousePos.current.x,
        y: mousePos.current.y,
      });

      requestAnimationFrame(animate);
    };

    // Magnetic effect on hover
    const handleMagneticHover = (e) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      gsap.to(target, {
        x: (mousePos.current.x - centerX) * 0.3,
        y: (mousePos.current.y - centerY) * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
      });
    };

    const handleMagneticLeave = (e) => {
      const target = e.currentTarget;

      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    // Add magnetic effect to all buttons and links
    const magneticElements = document.querySelectorAll('button, a, .magnetic');

    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMagneticHover);
      el.addEventListener('mousemove', handleMagneticHover);
      el.addEventListener('mouseleave', handleMagneticLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      magneticElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMagneticHover);
        el.removeEventListener('mousemove', handleMagneticHover);
        el.removeEventListener('mouseleave', handleMagneticLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full border-2 border-cyan-400 rounded-full" />
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] bg-cyan-400 rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}