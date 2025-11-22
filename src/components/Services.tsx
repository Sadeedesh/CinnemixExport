import { Package, Ship, Shield, Clock, FileCheck, Truck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const services = [
    {
      icon: Package,
      title: 'Bulk Export Services',
      description: 'Large-scale export solutions tailored to your business needs with competitive pricing and flexible order quantities.',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: Ship,
      title: 'International Shipping',
      description: 'Reliable worldwide delivery with experienced logistics partners ensuring your products arrive safely and on time.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification processes guaranteeing the highest standards for every shipment.',
      gradient: 'from-amber-600 to-amber-700',
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Efficient order fulfillment with streamlined processing to meet your urgent delivery requirements.',
      gradient: 'from-yellow-600 to-amber-600',
    },
    {
      icon: FileCheck,
      title: 'Documentation Support',
      description: 'Complete assistance with export documentation, certifications, and customs compliance for hassle-free imports.',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      icon: Truck,
      title: 'Custom Packaging',
      description: 'Flexible packaging options including private labeling, custom sizes, and brand-specific requirements.',
      gradient: 'from-amber-700 to-orange-700',
    },
  ];

  return (
    <section ref={sectionRef as any} id="services" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-animate ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Our Export Services</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive export solutions designed to make international trade seamless and efficient for your business.
          </p>
        </div>

        <div ref={gridRef as any} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate ${gridVisible ? 'visible' : ''}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden cursor-pointer"
              >
                <div className={`absolute top-0 left-0 w-2 h-full bg-linear-to-b ${service.gradient} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top`}></div>

                <div className={`bg-linear-to-br ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="mt-6 text-amber-700 font-semibold flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={ctaRef as any} className={`mt-16 bg-linear-to-r from-amber-700 to-amber-900 rounded-2xl p-12 text-center text-white scroll-animate ${ctaVisible ? 'visible' : ''}`}>
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Export Journey?</h3>
          <p className="text-xl mb-8 text-amber-100">
            Our team of export specialists is here to help you navigate every step of the process.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-amber-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
