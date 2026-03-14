import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const microLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;
    const microLabel = microLabelRef.current;

    if (!section || !image || !headline || !subheadline || !cta || !microLabel) return;

    const ctx = gsap.context(() => {
      // Initial state (hidden)
      gsap.set([image, headline, subheadline, cta, microLabel], { opacity: 0 });
      gsap.set(image, { scale: 1.06 });
      gsap.set(headline, { y: 24 });
      gsap.set(subheadline, { y: 16 });
      gsap.set(cta, { y: 12 });
      gsap.set(microLabel, { y: 8 });

      // Auto-play entrance animation on load
      const loadTl = gsap.timeline({ delay: 0.2 });

      loadTl
        .to(image, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
        })
        .to(
          microLabel,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.6'
        )
        .to(
          headline,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .to(
          subheadline,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .to(
          cta,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.3'
        );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.to([image, headline, subheadline, cta, microLabel], {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.3,
            });
          },
        },
      });

      // ENTRANCE (0-30%): Hold - elements already visible from load
      // Just subtle parallax on image
      scrollTl.fromTo(
        image,
        { y: 0 },
        { y: '-2vh', ease: 'none' },
        0
      );

      // SETTLE (30-70%): Static

      // EXIT (70-100%): Elements exit
      scrollTl.fromTo(
        headline,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [subheadline, cta, microLabel],
        { x: 0, opacity: 1 },
        { x: '-12vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        image,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="section-pinned bg-arthx-light z-10"
    >
      {/* Hero Image (Right Side) */}
      <div
        ref={imageRef}
        className="absolute right-0 top-0 w-full lg:w-[48vw] h-full"
      >
        <img
          src="/images/hero-scrap-yard.jpg"
          alt="Industrial scrap metal processing facility"
          className="w-full h-full object-cover img-industrial"
        />
        {/* Gradient Overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-arthx-light via-arthx-light/80 to-transparent lg:hidden" />
      </div>

      {/* Content (Left Side) */}
      <div className="absolute left-0 top-0 w-full lg:w-[52vw] h-full flex flex-col justify-center px-6 sm:px-8 lg:px-16 xl:px-24">
        {/* Micro Label */}
        <span
          ref={microLabelRef}
          className="text-micro text-arthx-steel/70 mb-6"
        >
          INDUSTRIAL RAW MATERIALS
        </span>

        {/* Headline */}
        <div ref={headlineRef} className="mb-8">
          <h1 className="text-hero text-arthx-blue uppercase leading-[0.9]">
            <span className="block">Global</span>
            <span className="block">Scrap</span>
          </h1>
          <div className="w-16 h-1 bg-arthx-blue mt-6 mb-4" />
          <h2 className="text-section text-arthx-steel uppercase leading-[1.1]">
            <span className="block">Refined</span>
            <span className="block">Supply</span>
          </h2>
        </div>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-body text-arthx-steel/80 max-w-md mb-10 leading-relaxed"
        >
          ArthX (OPC) Private Limited sources, inspects, and delivers ferrous
          and non-ferrous scrap to steelmakers and foundries worldwide.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollToSection('#products')}
            className="btn-primary group"
          >
            Explore Products
            <ArrowRight
              size={16}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-secondary"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Decorative Corner Bracket */}
      <div className="absolute bottom-12 left-6 sm:left-8 lg:left-16 xl:left-24 hidden lg:block">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="text-arthx-silver"
        >
          <path
            d="M0 40V20H4V36H20V40H0Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
