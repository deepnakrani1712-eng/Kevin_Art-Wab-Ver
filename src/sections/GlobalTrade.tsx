import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ship, Plane, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const logistics = [
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Container and bulk shipping worldwide',
  },
  {
    icon: Plane,
    title: 'Air Cargo',
    description: 'Express delivery for urgent shipments',
  },
  {
    icon: Truck,
    title: 'Land Transport',
    description: 'Road and rail connectivity',
  },
];

const GlobalTrade = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const logisticsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const logisticsEl = logisticsRef.current;

    if (!section || !header || !logisticsEl) return;

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

      // Logistics animation
      const logItems = logisticsEl.querySelectorAll('.logistics-item');
      gsap.fromTo(
        logItems,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: logisticsEl,
            start: 'top 85%',
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
      id="global-trade"
      className="w-full bg-arthx-light py-24 lg:py-32 z-50 relative"
    >
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-micro text-arthx-steel/60 mb-4 block">
            GLOBAL PRESENCE
          </span>
          <h2 className="text-section text-arthx-blue mb-6">Global Reach</h2>
          <p className="text-subheading text-arthx-steel/70 max-w-3xl mx-auto">
            ArthX (OPC) Private Limited facilitates international scrap metal
            trading by connecting suppliers and manufacturers across global
            markets.
          </p>
        </div>

        {/* Logistics Section */}
        <div
          ref={logisticsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {logistics.map((item, index) => (
            <div
              key={index}
              className="logistics-item flex items-start gap-4 bg-white p-6 border border-arthx-silver/20"
            >
              <div className="w-12 h-12 bg-arthx-blue/5 rounded-sm flex items-center justify-center flex-shrink-0">
                <item.icon size={22} className="text-arthx-blue" />
              </div>
              <div>
                <h4 className="font-semibold text-arthx-blue mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-arthx-steel/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="text-3xl font-bold text-arthx-blue block mb-1">
              4
            </span>
            <span className="text-micro text-arthx-steel/60">Continents</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-arthx-blue block mb-1">
              25+
            </span>
            <span className="text-micro text-arthx-steel/60">Countries</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-arthx-blue block mb-1">
              50+
            </span>
            <span className="text-micro text-arthx-steel/60">Port Partners</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-arthx-blue block mb-1">
              48h
            </span>
            <span className="text-micro text-arthx-steel/60">Avg. Load Time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTrade;
