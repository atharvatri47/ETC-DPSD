import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Fade in from bottom
    gsap.utils.toArray('.scroll-fade-up').forEach((element) => {
      gsap.fromTo(
        element,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Slide in from left
    gsap.utils.toArray('.scroll-slide-left').forEach((element) => {
      gsap.fromTo(
        element,
        {
          x: -150,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Slide in from right
    gsap.utils.toArray('.scroll-slide-right').forEach((element) => {
      gsap.fromTo(
        element,
        {
          x: 150,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Scale up on scroll
    gsap.utils.toArray('.scroll-scale').forEach((element) => {
      gsap.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Rotate in
    gsap.utils.toArray('.scroll-rotate').forEach((element) => {
      gsap.fromTo(
        element,
        {
          rotation: -10,
          opacity: 0,
          scale: 0.9,
        },
        {
          rotation: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Stagger children animation
    gsap.utils.toArray('.scroll-stagger-container').forEach((container) => {
      const children = container.querySelectorAll('.scroll-stagger-item');
      
      gsap.fromTo(
        children,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Parallax effect
    gsap.utils.toArray('.scroll-parallax').forEach((element) => {
      gsap.to(element, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // Text reveal (word by word)
    gsap.utils.toArray('.scroll-text-reveal').forEach((element) => {
      const words = element.textContent.split(' ');
      element.innerHTML = words
        .map((word) => `<span class="inline-block">${word}&nbsp;</span>`)
        .join('');

      gsap.fromTo(
        element.querySelectorAll('span'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

// Specific animation for cards/projects
export const useCardHoverAnimation = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.hover-card');

    cards.forEach((card) => {
      const handleMouseEnter = (e) => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });

        // Tilt effect
        card.addEventListener('mousemove', handleMouseMove);
      };

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
        card.removeEventListener('mousemove', handleMouseMove);
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }, []);
};