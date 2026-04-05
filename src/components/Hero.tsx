import { ArrowRight, Sparkles, Star, Globe, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const particles = Array.from({ length: 12 }, (_, i) => ({
    size: Math.random() * 8 + 4,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 15 + 10}s`,
    delay: `${Math.random() * 10}s`,
    color: i % 3 === 0 ? '#fde68a' : i % 3 === 1 ? '#fbbf24' : '#f59e0b',
  }));

  const stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '500+', label: 'Happy Clients' },
    { value: '20+', label: 'Years Experience' },
    { value: '100%', label: 'Organic Certified' },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden flex flex-col">

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              background: p.color,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text */}
            <div className="text-center lg:text-left">
              <div className="hero-badge inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <Sparkles size={14} />
                #1 Ceylon Cinnamon Exporter
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              </div>

              <h1 className="hero-title text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Premium{' '}
                <span className="shimmer-text">Ceylon</span>
                <br />
                Cinnamon
                <br />
                <span className="text-amber-600">for the World</span>
              </h1>

              <p className="hero-sub text-sm sm:text-base text-amber-700 font-semibold mb-3">
                Cinnamix Export — Sri Lanka's Finest
              </p>

              <p className="hero-desc text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
                Delivering authentic, organic Ceylon cinnamon from sustainable Sri Lankan plantations
                to global markets. Trusted by 500+ businesses across 50+ countries.
              </p>

              <div className="hero-btns flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('products')}
                  className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full shadow-lg shadow-amber-200 hover:shadow-amber-300 transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                >
                  Explore Products
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white border-2 border-amber-200 hover:border-amber-500 text-amber-700 font-semibold rounded-full transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
                >
                  Get a Quote
                </button>
              </div>

              {/* Trust badges */}
              <div className="hero-btns mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                {['ISO Certified', 'Organic', 'Fair Trade'].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    </span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — visual cards */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Main image card */}
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="float-card relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-100 border border-amber-100">
                  <img
                    src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=800&q=80"
                    alt="Ceylon Cinnamon Sticks and Powder"
                    className="w-full h-72 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />

                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Award className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Premium Grade A</p>
                      <p className="text-xs text-gray-500">Ceylon Cinnamon Sticks</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating stat cards */}
                <div className="float-card-delay absolute -top-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 sm:p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                    <Globe className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-extrabold text-gray-900 leading-none">50+</p>
                    <p className="text-xs text-gray-500">Countries</p>
                  </div>
                </div>

                <div className="float-card absolute -bottom-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 sm:p-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Sparkles className="text-amber-600" size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-extrabold text-gray-900 leading-none">100%</p>
                    <p className="text-xs text-gray-500">Organic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xl sm:text-2xl font-extrabold shimmer-text">{s.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-gray-400">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
