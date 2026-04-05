import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  const testimonials = [
    { name: 'Sarah Mitchell', role: 'Purchasing Manager', company: 'Global Spice Distributors, USA', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400', text: 'Cinnamix Export has been our trusted partner for over 5 years. Their Ceylon cinnamon is consistently excellent, and their customer service is unmatched. The quality speaks for itself!', rating: 5 },
    { name: 'James Chen', role: 'Head of Procurement', company: 'Premium Tea & Spices, Singapore', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', text: 'Working with Cinnamix Export has transformed our business. Their attention to detail and commitment to quality ensure we receive only the finest cinnamon for our premium product line.', rating: 5 },
    { name: 'Maria Rodriguez', role: 'CEO', company: 'Organic Foods Europe, Spain', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400', text: 'The authenticity and purity of their Ceylon cinnamon is remarkable. Our customers can taste the difference, and our sales have increased significantly since partnering with them.', rating: 5 },
    { name: 'Ahmed Al-Mansouri', role: 'Import Director', company: 'Middle East Trading Co., UAE', image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400', text: 'Exceptional quality and reliable delivery. Cinnamix Export understands the importance of consistency in international trade, and they deliver every single time.', rating: 5 },
  ];

  const go = (dir: 'next' | 'prev') => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(prev =>
        dir === 'next' ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length
      );
      setAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const timer = setInterval(() => go('next'), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[activeIndex];

  return (
    <section ref={sectionRef as any} id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`text-center mb-14 lg:mb-20 reveal ${sectionVisible ? 'visible' : ''}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-amber-600 uppercase mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            What Our <span className="text-amber-600">Partners Say</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-5" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Trusted by businesses worldwide, our commitment to quality has earned us lasting partnerships.
          </p>
        </div>

        <div ref={cardRef as any} className={`max-w-4xl mx-auto reveal ${cardVisible ? 'visible' : ''}`}>

          {/* Card */}
          <div className={`bg-white border border-gray-100 rounded-3xl shadow-xl p-6 sm:p-10 relative overflow-hidden transition-opacity duration-250 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            <Quote className="absolute top-6 left-6 text-amber-100" size={56} />
            <Quote className="absolute bottom-6 right-6 text-amber-100 rotate-180" size={56} />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-md ring-4 ring-amber-100 shrink-0"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-extrabold text-gray-900">{t.name}</h3>
                  <p className="text-amber-600 font-semibold text-sm">{t.role}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.company}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-0.5 mt-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed italic">
                "{t.text}"
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={() => go('prev')} className="w-10 h-10 rounded-full border-2 border-amber-200 hover:border-amber-500 hover:bg-amber-50 flex items-center justify-center text-amber-600 transition-all duration-200 hover:scale-110">
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-amber-600' : 'w-2 bg-gray-200 hover:bg-amber-300'}`}
                />
              ))}
            </div>

            <button onClick={() => go('next')} className="w-10 h-10 rounded-full border-2 border-amber-200 hover:border-amber-500 hover:bg-amber-50 flex items-center justify-center text-amber-600 transition-all duration-200 hover:scale-110">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
