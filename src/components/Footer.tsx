import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative">
      <div className="section-divider" />
      <div className="glass-dark border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <Sparkles size={15} className="text-white" />
                </div>
                <span className="text-base font-extrabold text-white">Cinnamix <span className="text-amber-400">Export</span></span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed mb-5">
                Your trusted partner in premium Ceylon cinnamon exports. Delivering quality and authenticity worldwide since 2025.
              </p>
              <div className="flex gap-2">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-lg glass border border-white/10 hover:border-amber-500/40 flex items-center justify-center text-white/35 hover:text-amber-400 transition-all duration-200 hover:scale-110" aria-label="Social">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[['Home','home'],['About Us','about'],['Products','products'],['Services','services'],['Testimonials','testimonials'],['Contact','contact']].map(([label, id]) => (
                  <li key={id}>
                    <button onClick={() => scrollToSection(id)} className="text-white/35 hover:text-amber-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">Contact Info</h4>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <MapPin className="text-amber-500/60 shrink-0 mt-0.5" size={14} />
                  <span className="text-white/35 text-sm">Neraluwa, Akuressa,<br />Matara, Sri Lanka</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-amber-500/60 shrink-0" size={14} />
                  <span className="text-white/35 text-sm">+94 77 08 31 741</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-amber-500/60 shrink-0" size={14} />
                  <span className="text-white/35 text-sm">cinnamixexport@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">Newsletter</h4>
              <p className="text-white/35 text-sm mb-4">Subscribe for product updates and special offers.</p>
              <form className="space-y-2.5" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-2.5 rounded-xl glass border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-amber-500/50 transition-all" />
                <button type="submit" className="w-full bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-bold py-2.5 rounded-xl transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="section-divider mb-6" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/20 text-xs">© {new Date().getFullYear()} Cinnamix Export. All rights reserved.</p>
            <div className="flex gap-5 text-white/20 text-xs">
              {['Privacy Policy','Terms of Service','Sitemap'].map(l => (
                <a key={l} href="#" className="hover:text-amber-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 glass-amber border border-amber-500/30 text-amber-400 rounded-full flex items-center justify-center glow-amber transition-all duration-200 hover:scale-110 z-40"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
