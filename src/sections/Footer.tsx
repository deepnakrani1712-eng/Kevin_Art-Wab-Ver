import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Global Trade', href: '#global-trade' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-arthx-dark text-white z-70 relative">
      {/* Main Footer */}
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="ArthX Logo"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-arthx-silver/70 mb-5 max-w-md text-sm leading-relaxed">
              ArthX (OPC) Private Limited is a global trading company
              specializing in metal scrap sourcing and supply for recycling and
              industrial manufacturing sectors.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/5 rounded-sm flex items-center justify-center hover:bg-arthx-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:info@arthx.com"
                className="w-9 h-9 bg-white/5 rounded-sm flex items-center justify-center hover:bg-arthx-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+919824037485"
                className="w-9 h-9 bg-white/5 rounded-sm flex items-center justify-center hover:bg-arthx-blue transition-colors"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-arthx-silver/70 hover:text-white transition-colors text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4 text-sm">Contact</h4>
            <address className="not-italic text-arthx-silver/70 text-xs leading-relaxed space-y-2">
              <p>
                606 BLUE POINT, SARTHANA JAKATNAKA,
                <br />
                SURAT - 395006, GUJARAT - INDIA
              </p>
              <div className="space-y-1">
                <p>
                  <a href="tel:+919999999999" className="hover:text-white transition-colors">
                    +91 99999 99999
                  </a>
                </p>
                <p>
                  <a href="mailto:info@arthx.com" className="hover:text-white transition-colors">
                    info@arthx.com
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-arthx-silver/50 text-xs text-center md:text-left">
              © 2026 ArthX (OPC) Private Limited.
            </p>
            <div className="hidden md:block w-px h-3 bg-white/10" />
            <p className="text-arthx-silver/50 text-xs">
              Design and developed by{' '}
              <a
                href="https://nakranitechno.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-arthx-silver/80 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-white/20"
              >
                Nakrani techno & Solution
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-arthx-silver/40 hover:text-white text-[11px] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-arthx-silver/40 hover:text-white text-[11px] transition-colors"
            >
              Terms
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-white/5 rounded-sm flex items-center justify-center hover:bg-arthx-blue transition-colors ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
