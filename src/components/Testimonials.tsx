import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: cardRef,    isVisible: cardVisible    } = useScrollAnimation();

  const testimonials = [
    { name: 'Sarah Mitchell',    role: 'Purchasing Manager',  company: 'Global Spice Distributors, USA',  image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',  text: 'Cinnamix Export has been our trusted partner for over 5 years. Their Ceylon cinnamon is consistently excellent, and their customer service is unmatched. The quality speaks for itself!', rating: 5 },
    { name: 'James Chen',        role: 'Head of Procurement', company: 'Premium Tea & Spices, Singapore', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400', text: 'Working with Cinnamix Export has transformed our business. Their attention to detail and commitment to quality ensure we receive only the finest cinnamon for our premium product line.', rating: 5 },
    { name: 'Maria Rodriguez',   role: 'CEO',                 company: 'Organic Foods Europe, Spain',     image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',  text: 'The authenticity and purity of their Ceylon cinnamon is remarkable. Our customers can taste the difference, and our sales have increased significantly since partnering with them.', rating: 5 },
    { name: 'Ahmed Al-Mansouri', role: 'Import Director',     company: 'Middle East Trading Co., UAE',    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400', text: 'Exceptional quality and reliable delivery. Cinnamix Export understands the importance of consistency in international trade, and they deliver every single time.', rating: 5 },
  ];

  const go = (dir: 'next' | 'prev') => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(prev => dir === 'next' ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const t = setInterval(() => go('next'), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[activeIndex];

  return (
    <section ref={sectionRef as any} id="testimonials" className="relative py-16 sm:py-20 lg:py-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28">

        <div className={`text-center mb-14 lg:mb-20 reveal ${sectionVisible ? 'visible' : ''}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-amber-400/70 uppercase mb-3">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            What Our <span className="shimmer-text">Partners Say</span>
          </h2>
          <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto">
            Trusted by businesses worldwide, our commitment to quality has earned us lasting partnerships.
          </p>
        </div>

        <div ref={cardRef as any} className={`max-w-4xl mx-auto reveal ${cardVisible ? 'visible' : ''}`}>
          <div className={`glass rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-amber-500/15 transition-opacity duration-250 ${animating ? 'opacity-0' : 'opacity-100'}`}>
            <Quote className="absolute top-6 left-6 text-amber-500/10" size={64} />
            <Quote className="absolute bottom-6 right-6 text-amber-500/10 rotate-180" size={64} />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg ring-2 ring-amber-500/30 shrink-0" />
                <div className="text-center sm:text-left">
                  <h3 className="text-base font-extrabold text-white">{t.name}</h3>
                  <p className="text-amber-400 font-semibold text-sm">{t.role}</p>
                  <p className="text-white/30 text-xs mt-0.5">{t.company}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-0.5 mt-2">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed italic">"{t.text}"</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={() => go('prev')} className="w-10 h-10 rounded-full glass border border-amber-500/20 hover:border-amber-400/50 flex items-center justify-center text-amber-400 transition-all duration-200 hover:scale-110">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-amber-500' : 'w-1.5 bg-white/20 hover:bg-amber-400/50'}`} />
              ))}
            </div>
            <button onClick={() => go('next')} className="w-10 h-10 rounded-full glass border border-amber-500/20 hover:border-amber-400/50 flex items-center justify-center text-amber-400 transition-all duration-200 hover:scale-110">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
