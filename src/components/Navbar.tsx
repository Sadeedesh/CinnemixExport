import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'products', 'services', 'testimonials', 'contact'];
      const pos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-amber-900/5 border-b border-amber-100/60'
          : 'bg-white/70 backdrop-blur-md'
      }`}>

        {/* Top accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-[70px]">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 shrink-0 group"
            >
              {/* Animated logo icon */}
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-md shadow-amber-300 group-hover:shadow-amber-400 transition-shadow duration-300" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 scale-110 blur-sm transition-all duration-300" />
                <span className="relative z-10 flex items-center justify-center w-full h-full text-white font-black text-base">C</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-black text-gray-900 tracking-tight">Cinnamix</span>
                <span className="text-[10px] font-semibold text-amber-600 tracking-widest uppercase">Export</span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-amber-700'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {/* Hover/active background pill */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-amber-50'
                      : 'bg-transparent group-hover:bg-gray-50'
                  }`} />

                  <span className="relative z-10">{item.label}</span>

                  {/* Animated underline */}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 ${
                    activeSection === item.id ? 'w-5' : 'w-0 group-hover:w-3'
                  }`} />
                </button>
              ))}
            </div>

            {/* Right side — CTA + hamburger */}
            <div className="flex items-center gap-3">
              {/* CTA button — desktop */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-amber-200 hover:shadow-amber-300 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get Quote
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              </button>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-amber-50 transition-colors"
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-400 ease-in-out md:hidden flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black text-gray-900">Cinnamix</span>
              <span className="text-[9px] font-semibold text-amber-600 tracking-widest uppercase">Export</span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer nav items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{ transitionDelay: isOpen ? `${i * 40}ms` : '0ms' }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border border-amber-100'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {activeSection === item.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* Drawer footer CTA */}
        <div className="px-4 py-5 border-t border-gray-100">
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-md shadow-amber-200 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get a Quote
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">© 2025 Cinnamix Export</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
