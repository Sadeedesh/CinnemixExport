import { ShoppingCart, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import InquirePage from './InquirePage';

const Products = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();
  const [showInquiry, setShowInquiry] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleInquireClick = (productName: string) => {
    console.log('Inquiry clicked for:', productName);
    setSelectedProduct(productName);
    setShowInquiry(true);
    console.log('showInquiry set to:', true);
  };

  const products = [
    {
      name: 'Ceylon Cinnamon Sticks',
      description: 'Premium quality whole cinnamon sticks, perfect for teas, desserts, and culinary applications.',
      image: 'https://images.pexels.com/photos/8450138/pexels-photo-8450138.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: true,
    },
    {
      name: 'Organic Cinnamon Powder',
      description: 'Finely ground Ceylon cinnamon powder with rich aroma, ideal for baking and cooking.',
      image: 'https://images.pexels.com/photos/11314158/pexels-photo-11314158.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: true,
    },
    {
      name: 'Cinnamon Essential Oil',
      description: 'Pure, steam-distilled cinnamon oil for aromatherapy, wellness, and natural remedies.',
      image: 'https://images.pexels.com/photos/7796457/pexels-photo-7796457.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
    },
    {
      name: 'Cinnamon Quills (Alba)',
      description: 'The finest grade of Ceylon cinnamon quills with thin bark and delicate flavor profile.',
      image: 'https://images.pexels.com/photos/10369972/pexels-photo-10369972.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
    },
    {
      name: 'Ground Cinnamon (Bulk)',
      description: 'Industrial-grade ground cinnamon for manufacturers and large-scale food production.',
      image: 'https://images.pexels.com/photos/31665461/pexels-photo-31665461.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
    },
    {
      name: 'Cinnamon Leaf Oil',
      description: 'Concentrated cinnamon leaf oil with powerful antioxidant and antimicrobial properties.',
      image: 'https://images.pexels.com/photos/8490099/pexels-photo-8490099.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      popular: false,
    },
  ];

  return (
    <section ref={sectionRef as any} id="products" className="py-16 sm:py-20 lg:py-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28">
        <div className={`text-center mb-14 lg:mb-20 reveal ${sectionVisible ? 'visible' : ''}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-amber-400/70 uppercase mb-3">Our Products</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Premium <span className="shimmer-text">Cinnamon</span> Products</h2>
          <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto">
            Discover our carefully curated selection of Ceylon cinnamon products, each crafted to deliver
            exceptional quality and authentic flavor.
          </p>
        </div>

        <div ref={gridRef as any} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 reveal ${gridVisible ? 'visible' : ''}`}>
          {products.map((product, index) => (
            <div
              key={index}
              className="card-hover group glass rounded-2xl border border-amber-500/10 hover:border-amber-500/25 overflow-hidden cursor-pointer relative"
            >
              {product.popular && (
                <div className="absolute top-3 right-3 z-10 bg-amber-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}

              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={12} />
                  ))}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/40 mb-4 leading-relaxed text-xs sm:text-sm">{product.description}</p>
                <button
                  onClick={() => handleInquireClick(product.name)}
                  className="w-full bg-amber-500/80 hover:bg-amber-500 text-white font-bold py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm hover:scale-105"
                >
                  <ShoppingCart size={15} />
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {showInquiry && (
        <InquirePage 
          onClose={() => setShowInquiry(false)}
          productName={selectedProduct}
        />
      )}
    </section>
  );
};

export default Products;
