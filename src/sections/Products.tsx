import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Shield, Scale, FileCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Shredded Scrap',
    category: 'Ferrous',
    description: 'High-density shredded steel scrap, ideal for electric arc furnaces.',
    image: '/images/shredded-scrap.jpg',
  },
  {
    id: 2,
    name: 'HMS (Heavy Melting Steel)',
    category: 'Ferrous',
    description: 'Grade 1 and 2 heavy melting steel for steel mill operations.',
    image: '/images/hms-scrap.jpg',
  },
  {
    id: 3,
    name: 'Aluminum Scrap',
    category: 'Non-Ferrous',
    description: 'Clean aluminum materials for casting and extrusion processes.',
    image: '/images/aluminum-scrap.jpg',
  },
  {
    id: 4,
    name: 'Copper Scrap',
    category: 'Non-Ferrous',
    description: 'High-purity copper scrap for electrical and industrial applications.',
    image: '/images/copper-scrap.jpg',
  },
  {
    id: 5,
    name: 'Brass Scrap',
    category: 'Non-Ferrous',
    description: 'Quality brass materials for manufacturing and foundry use.',
    image: '/images/brass-scrap.jpg',
  },
];

const trustIndicators = [
  {
    icon: Shield,
    title: 'Reliable Global Trading',
    description: 'Trusted supply chain across continents',
  },
  {
    icon: Scale,
    title: 'Industrial Supply Expertise',
    description: 'Decades of metal trading experience',
  },
  {
    icon: FileCheck,
    title: 'Trusted Scrap Sourcing',
    description: 'Certified and inspected materials',
  },
];

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;
    const trust = trustRef.current;

    if (!section || !header || !cards || !trust) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cardElements = cards.querySelectorAll('.product-card');
      gsap.fromTo(
        cardElements,
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Trust indicators animation
      const trustItems = trust.querySelectorAll('.trust-item');
      gsap.fromTo(
        trustItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: trust,
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
      id="products"
      className="w-full bg-arthx-light py-24 lg:py-32 z-20 relative"
    >
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16">
          <span className="text-micro text-arthx-steel/60 mb-4 block">
            OUR PRODUCTS
          </span>
          <h2 className="text-section text-arthx-blue mb-6">
            Metal Scrap
          </h2>
          <p className="text-subheading text-arthx-steel/70 max-w-2xl">
            Ferrous & Non-Ferrous materials — graded, packed, and documented to
            meet your exact specifications.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group bg-white rounded-sm overflow-hidden card-hover border border-arthx-silver/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 img-industrial"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-arthx-blue text-white text-micro">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-arthx-blue mb-2">
                  {product.name}
                </h3>
                <p className="text-body text-arthx-steel/70 mb-4">
                  {product.description}
                </p>
                <button className="inline-flex items-center text-sm font-medium text-arthx-blue group/btn">
                  Inquiry
                  <ArrowRight
                    size={14}
                    className="ml-2 transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          ref={trustRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-arthx-silver/30"
        >
          {trustIndicators.map((item, index) => (
            <div key={index} className="trust-item flex items-start gap-4">
              <div className="w-12 h-12 bg-arthx-blue/5 rounded-sm flex items-center justify-center flex-shrink-0">
                <item.icon size={22} className="text-arthx-blue" />
              </div>
              <div>
                <h4 className="font-semibold text-arthx-blue mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-arthx-steel/60">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
