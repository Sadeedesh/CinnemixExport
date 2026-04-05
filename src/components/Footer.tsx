import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <span className="text-lg font-extrabold">Cinnamix <span className="text-amber-500">Export</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted partner in premium Ceylon cinnamon exports. Delivering quality and authenticity worldwide since 2025.
            </p>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-amber-600 flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Social">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[['Home','home'],['About Us','about'],['Products','products'],['Services','services'],['Testimonials','testimonials'],['Contact','contact']].map(([label, id]) => (
                <li key={id}>
                  <button onClick={() => scrollToSection(id)} className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">Contact Info</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-500 shrink-0 mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">Neraluwa, Akuressa,<br />Matara, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-500 shrink-0" size={16} />
                <span className="text-gray-400 text-sm">+94 77 08 31 741</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-500 shrink-0" size={16} />
                <span className="text-gray-400 text-sm">cinnamixexport@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for product updates and special offers.</p>
            <form className="space-y-2.5" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Cinnamix Export. All rights reserved.
          </p>
          <div className="flex gap-5 text-gray-500 text-xs">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
              <a key={l} href="#" className="hover:text-amber-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-11 h-11 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg shadow-amber-900/30 flex items-center justify-center transition-all duration-200 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
