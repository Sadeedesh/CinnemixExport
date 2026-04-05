import { Award, Globe, Leaf, Heart } from 'lucide-react';
import CINNAMIX from '../assets/CINNAMIX.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  const values = [
    { icon: Award, title: 'Premium Quality', description: 'We source only the finest Ceylon cinnamon, ensuring exceptional quality in every shipment.', color: 'bg-amber-50 text-amber-600' },
    { icon: Globe, title: 'Global Reach', description: 'Trusted export partner delivering to over 50 countries worldwide with reliable logistics.', color: 'bg-blue-50 text-blue-600' },
    { icon: Leaf, title: 'Sustainability', description: 'Committed to eco-friendly farming practices that protect our environment for future generations.', color: 'bg-green-50 text-green-600' },
    { icon: Heart, title: 'Fair Trade', description: 'Supporting local farmers with fair prices and building lasting partnerships in our communities.', color: 'bg-rose-50 text-rose-600' },
  ];

  return (
    <section ref={sectionRef as any} id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className={`text-center mb-14 lg:mb-20 reveal ${sectionVisible ? 'visible' : ''}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-amber-600 uppercase mb-3">Our Story</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-amber-600">Cinnamix Export</span>
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-5" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            With over two decades of expertise, we've built our reputation on quality, reliability,
            and authentic Ceylon cinnamon that captures the true essence of this precious spice.
          </p>
        </div>

        {/* Story + image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          <div className={`space-y-5 reveal-left ${storyVisible ? 'visible' : ''}`} ref={storyRef as any}>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              From Sri Lanka's Plantations<br />
              <span className="text-amber-600">to Your Doorstep</span>
            </h3>
            {[
              'Founded in 2025, Cinnamix Export began as a small family business with a passion for sharing the world\'s finest cinnamon. Today, we\'re proud to be one of the leading exporters of premium Ceylon cinnamon, trusted by wholesalers, retailers, and food manufacturers globally.',
              'Our journey started in the lush cinnamon plantations of Sri Lanka, where we learned the art of selecting and processing the highest quality cinnamon. We work directly with experienced farmers who have perfected their craft over generations.',
              'What sets us apart is our unwavering commitment to authenticity. True Ceylon cinnamon is not just a spice — it\'s a tradition, a heritage, and a symbol of quality that we\'re honored to share with the world.',
            ].map((text, i) => (
              <p key={i} className="text-gray-500 leading-relaxed text-sm sm:text-base">{text}</p>
            ))}

            <div className="flex flex-wrap gap-4 pt-2">
              {[['20+', 'Years Experience'], ['500+', 'Happy Clients'], ['50+', 'Countries']].map(([val, label]) => (
                <div key={label} className="bg-amber-50 rounded-2xl px-5 py-3 text-center">
                  <p className="text-2xl font-extrabold text-amber-600">{val}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative reveal-right ${imageVisible ? 'visible' : ''}`} ref={imageRef as any}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-100">
              <img src={CINNAMIX} alt="Cinnamon plantation" className="w-full h-72 sm:h-80 lg:h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-amber-100 rounded-3xl -z-10" />
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-orange-100 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Values grid */}
        <div ref={valuesRef as any} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 reveal ${valuesVisible ? 'visible' : ''}`}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="card-hover bg-white border border-gray-100 rounded-2xl p-6 shadow-sm cursor-pointer"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
