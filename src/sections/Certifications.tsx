import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, FileCheck, Building2, TrendingDown, Award, Factory } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    number: '01',
    title: 'Ministry of Corporate Affairs',
    description: 'Officially registered under the Government of India, ensuring legal compliance and corporate transparency.',
    icon: Building2,
  },
  {
    number: '02',
    title: 'Directorate General of Foreign Trade',
    description: 'Certified for international trade operations and compliance with export-import regulations.',
    icon: FileCheck,
  },
  {
    number: '03',
    title: 'Goods and Service Tax',
    description: 'Registered taxpayer under the GST council, adhering to Indian indirect tax laws.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'TRACES & Income Tax Department',
    description: 'Maintains perfect compliance with direct tax filing and TDS reconciliation protocols.',
    icon: TrendingDown,
  },
  {
    number: '05',
    title: 'ISO 9001 Compliant',
    description: 'Adhering to international standards for quality management systems and operational excellence.',
    icon: Award,
  },
  {
    number: '06',
    title: 'Pollution Control Board',
    description: 'Committed to environmental sustainability and compliant with waste management regulations.',
    icon: Factory,
  },
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.cert-header',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.cert-header',
            start: 'top 85%',
          },
        }
      );

      // Cards animation
      const cards = grid.querySelectorAll('.cert-card');
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="w-full bg-white py-24 lg:py-32 z-30 relative overflow-hidden"
    >
      <div className="section-container relative">
        <div className="cert-header mb-16 lg:mb-20 max-w-2xl">
          <span className="text-micro text-arthx-blue mb-4 block">COMPLIANCE & TRUST</span>
          <h2 className="text-section text-arthx-blue mb-6">
            Our Certifications & Registrations
          </h2>
          <p className="text-body text-arthx-steel/70">
            We operate with complete transparency and adhere to all regulatory requirements 
            to ensure the highest standards of trust and reliability in the global scrap industry.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {certificates.map((cert) => (
            <div
              key={cert.number}
              className="cert-card bg-arthx-light/30 p-8 border border-arthx-silver/10 card-hover group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-arthx-blue/5 rounded-sm flex items-center justify-center transition-colors group-hover:bg-arthx-blue/10">
                  <cert.icon size={24} className="text-arthx-blue" />
                </div>
                <span className="font-mono text-xs font-semibold text-arthx-blue/30 group-hover:text-arthx-blue/60 transition-colors">
                  {cert.number}
                </span>
              </div>
              <h4 className="font-semibold text-arthx-blue mb-3 group-hover:text-arthx-accent transition-colors">
                {cert.title}
              </h4>
              <p className="text-sm text-arthx-steel/70 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
