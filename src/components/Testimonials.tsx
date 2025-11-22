import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Purchasing Manager',
      company: 'Global Spice Distributors, USA',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Cinnomen Export has been our trusted partner for over 5 years. Their Ceylon cinnamon is consistently excellent, and their customer service is unmatched. The quality speaks for itself!',
      rating: 5,
    },
    {
      name: 'James Chen',
      role: 'Head of Procurement',
      company: 'Premium Tea & Spices, Singapore',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Working with Cinnomen Export has transformed our business. Their attention to detail and commitment to quality ensure we receive only the finest cinnamon for our premium product line.',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'CEO',
      company: 'Organic Foods Europe, Spain',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'The authenticity and purity of their Ceylon cinnamon is remarkable. Our customers can taste the difference, and our sales have increased significantly since partnering with them.',
      rating: 5,
    },
    {
      name: 'Ahmed Al-Mansouri',
      role: 'Import Director',
      company: 'Middle East Trading Co., UAE',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Exceptional quality and reliable delivery. Cinnomen Export understands the importance of consistency in international trade, and they deliver every single time.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef as any} id="testimonials" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-animate ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">What Our Partners Say</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses worldwide, our commitment to quality and service has earned us lasting partnerships.
          </p>
        </div>

        <div ref={cardRef as any} className={`relative max-w-4xl mx-auto scroll-animate ${cardVisible ? 'visible' : ''}`}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <Quote className="absolute top-8 left-8 text-amber-200 opacity-50" size={64} />
            <Quote className="absolute bottom-8 right-8 text-amber-200 opacity-50 transform rotate-180" size={64} />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-amber-200 hover:ring-amber-300 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                />

                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">{testimonials[activeIndex].name}</h3>
                  <p className="text-amber-700 font-semibold">{testimonials[activeIndex].role}</p>
                  <p className="text-gray-600">{testimonials[activeIndex].company}</p>

                  <div className="flex items-center justify-center md:justify-start mt-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-amber-500 fill-amber-500" size={20} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed italic">
                "{testimonials[activeIndex].text}"
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-amber-600' : 'w-3 bg-gray-300 hover:bg-amber-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
