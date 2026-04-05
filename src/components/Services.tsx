import { Package, Ship, Shield, Clock, FileCheck, Truck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const services = [
    { icon: Package, title: 'Bulk Export Services', description: 'Large-scale export solutions tailored to your business needs with competitive pricing and flexible order quantities.', accent: 'bg-amber-50 text-amber-600 border-amber-100' },
    { icon: Ship, title: 'International Shipping', description: 'Reliable worldwide delivery with experienced logistics partners ensuring your products arrive safely and on time.', accent: 'bg-blue-50 text-blue-600 border-blue-100' },
    { icon: Shield, title: 'Quality Assurance', description: 'Rigorous testing and certification processes guaranteeing the highest standards for every shipment.', accent: 'bg-green-50 text-green-600 border-green-100' },
    { icon: Clock, title: 'Fast Processing', description: 'Efficient order fulfillment with streamlined processing to meet your urgent delivery requirements.', accent: 'bg-purple-50 text-purple-600 border-purple-100' },
    { icon: FileCheck, title: 'Documentation Support', description: 'Complete assistance with export documentation, certifications, and customs compliance for hassle-free imports.', accent: 'bg-orange-50 text-orange-600 border-orange-100' },
    { icon: Truck, title: 'Custom Packaging', description: 'Flexible packaging options including private labeling, custom sizes, and brand-specific requirements.', accent: 'bg-rose-50 text-rose-600 border-rose-100' },
  ];

  return (
    <section ref={sectionRef as any} id="services" className="py-16 sm:py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`text-center mb-14 lg:mb-20 reveal ${sectionVisible ? 'visible' : ''}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-amber-600 uppercase mb-3">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Our Export <span className="text-amber-600">Services</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-5" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Comprehensive export solutions designed to make international trade seamless and efficient for your business.
          </p>
        </div>

        <div ref={gridRef as any} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 reveal ${gridVisible ? 'visible' : ''}`}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="card-hover group bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-100 cursor-pointer"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={`w-12 h-12 rounded-xl border ${s.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                <div className="mt-4 flex items-center gap-1 text-amber-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div ref={ctaRef as any} className={`mt-14 lg:mt-20 reveal ${ctaVisible ? 'visible' : ''}`}>
          <div className="relative bg-amber-600 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Start Your Export Journey?</h3>
              <p className="text-amber-100 text-sm sm:text-base mb-7 max-w-xl mx-auto">
                Our team of export specialists is here to help you navigate every step of the process.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-8 py-3.5 rounded-full hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-lg"
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
