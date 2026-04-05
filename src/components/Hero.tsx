import { ArrowRight, Sparkles, Star, Globe, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '50+',  label: 'Countries Served'  },
    { value: '500+', label: 'Happy Clients'      },
    { value: '20+',  label: 'Years Experience'   },
    { value: '100%', label: 'Organic Certified'  },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-10 flex-1 flex items-center pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div className="text-center lg:text-left">
              <div className="hero-badge inline-flex items-center gap-2 glass-amber text-amber-300 text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-wide">
                <Sparkles size={13} />
                #1 Ceylon Cinnamon Exporter
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              </div>

              <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4">
                Premium{' '}
                <span className="shimmer-text">Ceylon</span>
                <br />Cinnamon
                <br /><span className="text-amber-400">for the World</span>
              </h1>

              <p className="hero-sub text-sm sm:text-base text-amber-300/80 font-semibold mb-3">
                Cinnamix Export — Sri Lanka's Finest
              </p>

              <p className="hero-desc text-xs sm:text-sm text-white/55 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Delivering authentic, organic Ceylon cinnamon from sustainable Sri Lankan plantations
                to global markets. Trusted by 500+ businesses across 50+ countries.
              </p>

              <div className="hero-btns flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('products')}
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-full glow-amber transition-all duration-300 hover:scale-105 text-sm"
                >
                  Explore Products
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center gap-2 px-6 py-3 glass text-amber-300 font-bold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 text-sm border border-amber-500/30"
                >
                  Get a Quote
                </button>
              </div>

              <div className="hero-btns mt-7 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                {['ISO Certified', 'Organic', 'Fair Trade'].map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                    <span className="w-3.5 h-3.5 rounded-full bg-green-900/60 border border-green-500/40 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </span>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="float-card relative rounded-3xl overflow-hidden shadow-2xl border border-amber-500/20">
                  <img
                    src="https://images.pexels.com/photos/6929478/pexels-photo-6929478.jpeg"
                    alt="Ceylon Cinnamon Sticks"
                    className="w-full h-72 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="hero-img-overlay" />
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0">
                      <Award className="text-amber-400" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Premium Grade A</p>
                      <p className="text-xs text-white/50">Ceylon Cinnamon Powder</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => <Star key={i} size={9} className="text-amber-400 fill-amber-400" />)}
                    </div>
                  </div>
                </div>

                <div className="float-card-delay absolute -top-4 -left-4 sm:-left-8 glass rounded-2xl p-3 sm:p-4 flex items-center gap-3 border border-amber-500/20">
                  <div className="w-8 h-8 rounded-xl bg-green-500/15 border border-green-400/20 flex items-center justify-center">
                    <Globe className="text-green-400" size={16} />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-white leading-none">50+</p>
                    <p className="text-xs text-white/40">Countries</p>
                  </div>
                </div>

                <div className="float-card absolute -bottom-4 -right-4 sm:-right-8 glass rounded-2xl p-3 sm:p-4 flex items-center gap-3 border border-amber-500/20">
                  <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-400/20 flex items-center justify-center">
                    <Sparkles className="text-amber-400" size={16} />
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-white leading-none">100%</p>
                    <p className="text-xs text-white/40">Organic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 section-divider" />
      <div className="relative z-10 glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-xl sm:text-2xl font-extrabold shimmer-text">{s.value}</p>
                <p className="text-xs text-white/35 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-white/25">Scroll</span>
        <div className="w-5 h-8 border border-white/15 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-amber-400/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
