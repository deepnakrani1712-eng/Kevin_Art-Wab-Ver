import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, Recycle, Cog, Hammer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: Factory,
    title: 'Steel Manufacturing',
    description:
      'Ferrous feedstock for EAF and BOF operations. Consistent quality for steel production.',
  },
  {
    icon: Recycle,
    title: 'Metal Recycling Plants',
    description:
      'Bulk volumes, sorted and packed to spec. Supporting circular economy initiatives.',
  },
  {
    icon: Cog,
    title: 'Industrial Manufacturing',
    description:
      'By-offtake programs and just-in-time delivery for manufacturing facilities.',
  },
  {
    icon: Hammer,
    title: 'Metal Processing Plants',
    description:
      'Casting-grade scrap with consistent chemistry for foundry operations.',
  },
];

const Industries = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Grid items animation
      const items = grid.querySelectorAll('.industry-card');
      gsap.fromTo(
        items,
        { y: 50, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="w-full bg-arthx-light py-24 lg:py-32 z-40 relative"
    >
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-micro text-arthx-steel/60 mb-4 block">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-section text-arthx-blue mb-6">
            Industries Served
          </h2>
          <p className="text-subheading text-arthx-steel/70 max-w-2xl mx-auto">
            We supply scrap to the sectors that keep industry moving worldwide.
          </p>
        </div>

        {/* Industries Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card group bg-white p-8 border border-arthx-silver/20 card-hover"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-arthx-blue/5 rounded-sm flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-arthx-blue">
                <industry.icon
                  size={28}
                  className="text-arthx-blue transition-colors duration-300 group-hover:text-white"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-arthx-blue mb-3">
                {industry.title}
              </h3>
              <p className="text-body text-arthx-steel/70 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-arthx-steel/70 mb-6">
            Looking for a specific industry solution?
          </p>
          <a href="#contact" className="btn-secondary">
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
