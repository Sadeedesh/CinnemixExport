import { Package, Ship, Shield, Clock, FileCheck, Truck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef,    isVisible: gridVisible    } = useScrollAnimation();
  const { ref: ctaRef,     isVisible: ctaVisible     } = useScrollAnimation();

  const services = [
    { icon: Package,   title: 'Bulk Export Services',   description: 'Large-scale export solutions tailored to your business needs with competitive pricing and flexible order quantities.',   color: 'text-amber-400',  bg: 'bg-amber-500/10  border-amber-500/20'  },
    { icon: Ship,      title: 'International Shipping', description: 'Reliable worldwide delivery with experienced logistics partners ensuring your products arrive safely and on time.',       color: 'text-blue-400',   bg: 'bg-blue-500/10   border-blue-500/20'   },
    { icon: Shield,    title: 'Quality Assurance',      description: 'Rigorous testing and certification processes guaranteeing the highest standards for every shipment.',                     color: 'text-green-400',  bg: 'bg-green-500/10  border-green-500/20'  },
    { icon: Clock,     title: 'Fast Processing',        description: 'Efficient order fulfillment with streamlined processing to meet your urgent delivery requirements.',                      color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
    { icon: FileCheck, title: 'Documentation Support',  description: 'Complete assistance with export documentation, certifications, and customs compliance for hassle-free imports.',          color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
    { icon: Truck,     title: 'Custom Packaging',       description: 'Flexible packaging options including private labeling, custom sizes, and brand-specific requirements.',                   color: 'text-rose-400',   bg: 'bg-rose-500/10   border-rose-500/20'   },
  ];

  return (
    <section ref={sectionRef as any} id="services" className="relative py-16 sm:py-20 lg:py-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28">

        <div className={`text-center mb-14 lg:mb-20 reveal ${sectionVisible ? 'visible' : ''}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-amber-400/70 uppercase mb-3">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Our Export <span className="shimmer-text">Services</span>
          </h2>
          <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto">
            Comprehensive export solutions designed to make international trade seamless and efficient.
          </p>
        </div>

        <div ref={gridRef as any} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal ${gridVisible ? 'visible' : ''}`}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className={`card-hover group glass rounded-2xl p-6 sm:p-7 cursor-pointer border ${s.bg}`}>
                <div className={`w-11 h-11 rounded-xl border ${s.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className={s.color} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{s.description}</p>
                <div className={`mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${s.color}`}>
                  Learn more
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={ctaRef as any} className={`mt-14 lg:mt-20 reveal ${ctaVisible ? 'visible' : ''}`}>
          <div className="relative glass-amber rounded-3xl p-8 sm:p-12 text-center border border-amber-500/20 overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, rgba(251,191,36,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Start Your Export Journey?</h3>
              <p className="text-white/50 text-sm sm:text-base mb-7 max-w-xl mx-auto">Our team of export specialists is here to help you navigate every step of the process.</p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-3.5 rounded-full glow-amber transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
