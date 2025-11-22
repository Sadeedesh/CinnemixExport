import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef as any} className="bg-amber-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 scroll-animate ${footerVisible ? 'visible' : ''}`}>
          <div>
            <h3 className="text-2xl font-bold mb-4">Cinnamix Export</h3>
            <p className="text-amber-200 mb-6 leading-relaxed">
              Your trusted partner in premium Ceylon cinnamix exports. Delivering quality and authenticity worldwide since 2025.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-amber-800 hover:bg-amber-700 p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                    aria-label="Social media link"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Products', id: 'products' },
                { label: 'Services', id: 'services' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-amber-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-400 shrink-0 mt-1" size={20} />
                <span className="text-amber-200">
                  Neraluwa,Akuressa,<br />
                  Matara, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-400 shrink-0" size={20} />
                <span className="text-amber-200">+94 77 08 31 741</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-400 shrink-0" size={20} />
                <span className="text-amber-200">cinnamixexport@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-amber-200 mb-4">
              Subscribe to receive updates on our latest products and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-amber-800/50 border border-amber-700 text-white placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-200 text-center md:text-left">
              &copy; {new Date().getFullYear()} Cinnamix Export. All rights reserved.
            </p>
            <div className="flex gap-6 text-amber-200">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
