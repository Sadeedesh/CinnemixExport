import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        'service_cinnemon', // Replace with your EmailJS service ID
        'template_contact', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'nevindisadeera@gmail.com'
        },
        'your_public_key' // Replace with your EmailJS public key
      );
      
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section ref={sectionRef as any} id="contact" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 lg:mb-20 scroll-animate ${sectionVisible ? 'visible' : ''}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-amber-600 uppercase mb-3">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Get In <span className="text-amber-600">Touch</span></h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-5" />
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions about our products or services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div ref={formRef as any} className={`scroll-animate-left ${formVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all duration-300 outline-none text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all duration-300 outline-none text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all duration-300 outline-none resize-none text-sm"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={20} />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className="bg-amber-50 border border-amber-100 text-amber-800 px-4 py-3 rounded-xl text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div ref={infoRef as any} className={`space-y-8 scroll-animate-right ${infoVisible ? 'visible' : ''}`}>
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-xl">
                    <MapPin className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Our Location</h4>
                    <p className="text-gray-500 text-sm">
                      Neraluwa,Akuressa,Matara<br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-xl">
                    <Phone className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Phone</h4>
                    
                    <p className="text-gray-500 text-sm">+94 77 08 31 741</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-xl">
                    <Mail className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Email</h4>
                    <p className="text-gray-500 text-sm">cinnamixexport@gmail.com</p>
                   
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl">
              <h4 className="text-base font-extrabold text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-500 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base font-extrabold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-9 h-9 bg-gray-100 hover:bg-amber-600 hover:text-white text-gray-600 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                      aria-label="Social media link"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div ref={mapRef as any} className={`mt-16 rounded-2xl overflow-hidden shadow-2xl h-96 scroll-animate ${mapVisible ? 'visible' : ''}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126738.56347862248!2d79.77380033359375!3d6.927078699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cinnomen Export Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
