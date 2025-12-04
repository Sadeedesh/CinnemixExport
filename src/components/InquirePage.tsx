import { useState } from 'react';
import { ArrowLeft, Send, Package, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface InquirePageProps {
  onClose: () => void;
  productName?: string;
}

const InquirePage = ({ onClose, productName }: InquirePageProps) => {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: productName || '',
    quantity: '',
    message: '',
    budget: '',
    deliveryDate: '',
    destination: '',
    businessType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', formData);
    
    // Show success message with more details
    alert(`Thank you ${formData.name}! Your inquiry for ${formData.product} has been received. Our export team will contact you within 2 hours at ${formData.email}.`);
    
    // Reset form and close
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: '',
      quantity: '',
      message: '',
      budget: '',
      deliveryDate: '',
      destination: '',
      businessType: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4" style={{zIndex: 9999}}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div ref={headerRef as any} className={`bg-gradient-to-r from-amber-600 to-orange-600 p-6 rounded-t-2xl scroll-animate ${headerVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Package className="text-white" size={24} />
              <h2 className="text-2xl font-bold text-white">Product Inquiry</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-300"
            >
              <ArrowLeft size={24} />
            </button>
          </div>
        </div>

        <div ref={formRef as any} className={`p-8 scroll-animate ${formVisible ? 'visible' : ''}`}>
          <div className="mb-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-600">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Why Choose Cinnamix Export?</h3>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>• Authentic Ceylon cinnamon with international certifications</li>
              <li>• Competitive wholesale pricing for bulk orders</li>
              <li>• Fast global shipping with secure packaging</li>
              <li>• 24/7 customer support and quality guarantee</li>
            </ul>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 scroll-animate-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-black font-semibold mb-2">
                  <User size={16} />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-black font-semibold mb-2">
                  <Mail size={16} />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-black font-semibold mb-2">
                  <Phone size={16} />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="text-black font-semibold mb-2 block">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-black font-semibold mb-2 block">
                  Product of Interest *
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                >
                  <option value="">Select a product</option>
                  <option value="Ceylon Cinnamon Sticks">Ceylon Cinnamon Sticks - Premium Grade</option>
                  <option value="Organic Cinnamon Powder">Organic Cinnamon Powder - Food Grade</option>
                  <option value="Cinnamon Essential Oil">Cinnamon Essential Oil - Therapeutic Grade</option>
                  <option value="Cinnamon Quills (Alba)">Cinnamon Quills (Alba) - Export Quality</option>
                  <option value="Ground Cinnamon (Bulk)">Ground Cinnamon (Bulk) - Industrial Grade</option>
                  <option value="Cinnamon Leaf Oil">Cinnamon Leaf Oil - Pure Extract</option>
                  <option value="Custom Blend">Custom Blend - Tailored to Requirements</option>
                </select>
                {formData.product && (
                  <div className="mt-2 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      ✓ Excellent choice! This product is currently in stock and ready for export.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="text-black font-semibold mb-2 block">
                  Quantity Required
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                  placeholder="e.g., 100kg, 500 units, 1 container"
                />
                <div className="mt-2 text-sm text-gray-600">
                  <p>💡 <strong>Minimum Order:</strong> 50kg | <strong>Bulk Discounts:</strong> Available for 500kg+</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-black font-semibold mb-2 block">
                  Budget Range (USD)
                </label>
                <select
                  name="budget"
                  value={formData.budget || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="$500-$2,000">$500 - $2,000</option>
                  <option value="$2,000-$10,000">$2,000 - $10,000</option>
                  <option value="$10,000-$50,000">$10,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="text-black font-semibold mb-2 block">
                  Delivery Timeline
                </label>
                <select
                  name="deliveryDate"
                  value={formData.deliveryDate || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                >
                  <option value="">When do you need delivery?</option>
                  <option value="ASAP">ASAP (Rush Order)</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="3-4 weeks">3-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="Flexible">Flexible timeline</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-black font-semibold mb-2 block">
                  Destination Country
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                  placeholder="e.g., United States, Germany, Japan"
                />
              </div>

              <div>
                <label className="text-black font-semibold mb-2 block">
                  Business Type
                </label>
                <select
                  name="businessType"
                  value={formData.businessType || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                >
                  <option value="">Select your business type</option>
                  <option value="Wholesaler">Wholesaler/Distributor</option>
                  <option value="Retailer">Retailer</option>
                  <option value="Manufacturer">Food Manufacturer</option>
                  <option value="Restaurant">Restaurant/Food Service</option>
                  <option value="Pharmacy">Pharmacy/Health Store</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-black font-semibold mb-2">
                <MessageSquare size={16} />
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none resize-none"
                placeholder="Please specify: delivery timeline, packaging preferences, certifications needed, target market, or any special requirements..."
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">📋 What happens next?</h4>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. We'll review your inquiry within 2 hours</li>
                <li>2. Our export specialist will contact you with a detailed quote</li>
                <li>3. We'll provide product samples if requested</li>
                <li>4. Finalize terms and arrange secure payment & shipping</li>
              </ol>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Inquiry
              </button>
            </div>

            <div className="text-center text-sm text-black mt-4">
              <p>🔒 Your information is secure and will only be used to process your inquiry.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquirePage;