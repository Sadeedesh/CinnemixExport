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
    <section ref={sectionRef as any} id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 lg:mb-16 scroll-animate ${sectionVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-4">Our Premium Products</h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-600 mx-auto mb-4 lg:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Discover our carefully curated selection of Ceylon cinnamon products, each crafted to deliver
            exceptional quality and authentic flavor.
          </p>
        </div>

        <div ref={gridRef as any} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 scroll-animate ${gridVisible ? 'visible' : ''}`}>
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:scale-105 cursor-pointer relative"
            >
              {product.popular && (
                <div className="absolute top-3 right-3 z-10 bg-amber-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
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

              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-2 sm:mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-500 fill-amber-500" size={14} />
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>

                <button 
                  onClick={() => handleInquireClick(product.name)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors duration-300 flex items-center justify-center group text-sm sm:text-base"
                >
                  <ShoppingCart className="mr-2 group-hover:scale-110 transition-transform" size={18} />
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
