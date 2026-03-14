import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const form = formRef.current;
    const info = infoRef.current;
    const map = mapRef.current;

    if (!section || !header || !form || !info || !map) return;

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

      // Form animation
      gsap.fromTo(
        form,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: form,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Info animation
      gsap.fromTo(
        info.children,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: info,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Map animation
      gsap.fromTo(
        map,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: map,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-arthx-light py-24 lg:py-32 z-60 relative"
    >
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-micro text-arthx-steel/60 mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-section text-arthx-blue mb-6">
            Let’s Handle Your Next Shipment
          </h2>
          <p className="text-subheading text-arthx-steel/70 max-w-2xl mx-auto">
            Tell us what you need. We'll reply with grades, availability, and
            shipping options.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white p-8 lg:p-10 border border-arthx-silver/20"
          >
            <h3 className="text-xl font-semibold text-arthx-blue mb-6">
              Send Inquiry
            </h3>

            <div className="space-y-5">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-arthx-steel mb-2 block"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full border-arthx-silver/30 focus:border-arthx-blue focus:ring-arthx-blue/20"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-arthx-steel mb-2 block"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full border-arthx-silver/30 focus:border-arthx-blue focus:ring-arthx-blue/20"
                />
              </div>

              <div>
                <Label
                  htmlFor="company"
                  className="text-sm font-medium text-arthx-steel mb-2 block"
                >
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  required
                  className="w-full border-arthx-silver/30 focus:border-arthx-blue focus:ring-arthx-blue/20"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-arthx-steel mb-2 block"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                  rows={4}
                  className="w-full border-arthx-silver/30 focus:border-arthx-blue focus:ring-arthx-blue/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitted}
                className="w-full btn-primary disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={18} className="mr-2" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            {/* Office Address */}
            <div className="bg-white p-8 border border-arthx-silver/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-arthx-blue/5 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-arthx-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-arthx-blue mb-2">
                    Office Address
                  </h4>
                  <address className="not-italic text-arthx-steel/70 leading-relaxed">
                    606 BLUE POINT
                    <br />
                    SARTHANA JAKATNAKA
                    <br />
                    SURAT - 395006
                    <br />
                    GUJARAT - INDIA
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-8 border border-arthx-silver/20">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-arthx-blue/5 rounded-sm flex items-center justify-center">
                    <Phone size={22} className="text-arthx-blue" />
                  </div>
                  <div>
                    <span className="text-micro text-arthx-steel/60 block mb-1">
                      Phone
                    </span>
                    <a
                      href="tel:+919824037485"
                      className="text-arthx-blue font-medium hover:underline"
                    >
                      +91 98249 37485
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-arthx-blue/5 rounded-sm flex items-center justify-center">
                    <Mail size={22} className="text-arthx-blue" />
                  </div>
                  <div>
                    <span className="text-micro text-arthx-steel/60 block mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:info@arthx.com"
                      className="text-arthx-blue font-medium hover:underline"
                    >
                      info@arthx.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-arthx-blue/5 p-6 border-l-4 border-arthx-blue">
              <h4 className="font-semibold text-arthx-blue mb-2">
                Business Hours
              </h4>
              <p className="text-sm text-arthx-steel/70">
                Monday - Saturday: 9:00 AM - 6:00 PM IST
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div ref={mapRef} className="w-full h-[400px] bg-arthx-silver/20 rounded-sm overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=21.2320045,72.9029216&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ArthX Office Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
