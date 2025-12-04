import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2691E' fill-opacity='0.4'%3E%3Cpath d='M30 30l15-8.66v17.32L30 30zm0 0L15 21.34v17.32L30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-amber-400/30 transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-orange-300/40 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div ref={contentRef as any} className={`text-center lg:text-left scroll-animate-left ${contentVisible ? 'visible' : ''}`}>
            <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-6">
              <div className="flex items-center mb-2">
                <Sparkles className="text-amber-300 mr-2 lg:mr-3" size={20} />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  Cinnamix Export
                </h1>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-100 mb-4 lg:mb-6 font-light text-center lg:text-left">
              Premium Ceylon Cinnamon for Global Markets
            </p>

            <p className="text-base sm:text-lg text-gray-200 mb-6 lg:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Delivering the finest quality cinnamon from sustainable plantations to your doorstep.
              Experience the authentic taste and aroma of true Ceylon cinnamon.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('products')}
                className="group px-6 lg:px-8 py-3 lg:py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center text-sm lg:text-base"
              >
                Explore Our Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-white/30 text-sm lg:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div ref={featuresRef as any} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6 mt-8 lg:mt-0 scroll-animate-right ${featuresVisible ? 'visible' : ''}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 text-center hover-lift animate-float">
              <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">🌿</div>
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">100% Organic</h3>
              <p className="text-amber-100 text-sm lg:text-base">Naturally grown without chemicals or pesticides</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 text-center hover-lift animate-float" style={{animationDelay: '1s'}}>
              <div className="text-3xl lg:text-4xl mb-3 lg:mb-4">⭐</div>
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3">Premium Quality</h3>
              <p className="text-amber-100 text-sm lg:text-base">Certified Ceylon cinnamon with authentic flavor</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
