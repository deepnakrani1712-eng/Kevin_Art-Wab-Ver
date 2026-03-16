import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, Globe, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const values = [
  {
    icon: Target,
    title: 'Reliability',
    description: 'Consistent supply chains and on-time deliveries.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Long-term relationships built on trust.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'International network of suppliers and buyers.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'Rigorous inspection and certification.',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const valuesEl = valuesRef.current;

    if (!section || !content || !image || !valuesEl) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        content.children,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image animation
      gsap.fromTo(
        image,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );


      // Values animation
      const valueItems = valuesEl.querySelectorAll('.value-item');
      gsap.fromTo(
        valueItems,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: valuesEl,
            start: 'top 80%',
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
      id="about"
      className="w-full bg-arthx-light py-24 lg:py-32 z-30 relative"
    >
      <div className="section-container">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Content */}
          <div ref={contentRef}>
            <span className="text-micro text-arthx-steel/60 mb-4 block">
              ABOUT US
            </span>
            <h2 className="text-section text-arthx-blue mb-6">
              About ArthX (OPC) Private Limited
            </h2>
            <div className="w-16 h-1 bg-arthx-blue mb-8" />
            <p className="text-body text-arthx-steel/80 mb-6 leading-relaxed">
              ArthX (OPC) Private Limited is a global trading company specializing
              in sourcing and supplying high-quality metal scrap materials for
              recycling and industrial manufacturing sectors.
            </p>
            <p className="text-body text-arthx-steel/80 mb-6 leading-relaxed">
              We focus on reliability, transparency, and long-term partnerships
              with industries worldwide. Our goal is to support sustainable metal
              recycling while ensuring consistent raw material supply to steel
              plants and manufacturing industries.
            </p>
            <p className="text-body text-arthx-steel/80 mb-8 leading-relaxed">
              With operations spanning across multiple continents, we have built
              a reputation for excellence in the scrap metal trading industry.
            </p>


          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative">
            <div className="relative h-[400px] lg:h-full min-h-[400px]">
              <img
                src="/images/ferrous-pile.jpg"
                alt="Metal scrap materials"
                className="w-full h-full object-cover img-industrial"
              />

            </div>
          </div>
        </div>


        {/* Values Section */}
        <div>
          <h3 className="text-2xl font-semibold text-arthx-blue mb-10 text-center">
            Our Core Values
          </h3>
          <div
            ref={valuesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="value-item bg-white p-6 border border-arthx-silver/20 card-hover"
              >
                <div className="w-12 h-12 bg-arthx-blue/5 rounded-sm flex items-center justify-center mb-4">
                  <value.icon size={22} className="text-arthx-blue" />
                </div>
                <h4 className="font-semibold text-arthx-blue mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-arthx-steel/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
