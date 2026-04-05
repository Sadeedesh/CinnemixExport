import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: formRef,    isVisible: formVisible    } = useScrollAnimation();
  const { ref: infoRef,    isVisible: infoVisible    } = useScrollAnimation();
  const { ref: mapRef,     isVisible: mapVisible     } = useScrollAnimation();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      await emailjs.send(
        'service_cinnemon',
        'template_contact',
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_email: 'nevindisadeera@gmail.com' },
        'your_public_key'
      );
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    }
    setIsSubmitting(false);
  };

  const inputClass = 'w-full px-4 py-2.5 rounded-xl glass border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-amber-500/50 transition-all';
  const labelClass = 'block text-white/50 text-xs font-semibold mb-1.5 uppercase tracking-wide';

  return (
    <section ref={sectionRef as any} id="contact" className="py-16 sm:py-20 lg:py-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28">

        <div className={`text-center mb-14 lg:mb-20 scroll-animate ${sectionVisible ? 'visible' : ''}`}>
          <span className="inline-block text-xs font-bold tracking-widest text-amber-400/70 uppercase mb-3">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Get In <span className="shimmer-text">Touch</span>
          </h2>
          <div className="w-12 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent mx-auto mb-5" />
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto">
            Have questions about our products or services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Form */}
          <div ref={formRef as any} className={`scroll-animate-left ${formVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl border border-amber-500/10 p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Tell us about your requirements..." />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm glow-amber"
              >
                {isSubmitting ? 'Sending...' : <><Send size={16} /> Send Message</>}
              </button>
              {submitMessage && (
                <div className="glass-amber border border-amber-500/20 text-amber-300 px-4 py-3 rounded-xl text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div ref={infoRef as any} className={`space-y-5 scroll-animate-right ${infoVisible ? 'visible' : ''}`}>
            <div className="glass rounded-2xl border border-amber-500/10 p-6">
              <h3 className="text-sm font-extrabold text-white mb-5 uppercase tracking-wide">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Our Location', value: 'Neraluwa, Akuressa, Matara, Sri Lanka' },
                  { icon: Phone,  label: 'Phone',        value: '+94 77 08 31 741' },
                  { icon: Mail,   label: 'Email',        value: 'cinnamixexport@gmail.com' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl shrink-0">
                      <Icon className="text-amber-400" size={15} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-0.5">{label}</p>
                      <p className="text-white/70 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl border border-amber-500/10 p-6">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wide mb-4">Business Hours</h4>
              <div className="space-y-2">
                {[['Monday - Friday', '9:00 AM - 6:00 PM'], ['Saturday', '9:00 AM - 2:00 PM'], ['Sunday', 'Closed']].map(([day, hours]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-white/40">{day}</span>
                    <span className="text-white/60 font-semibold">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl border border-amber-500/10 p-6">
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wide mb-4">Follow Us</h4>
              <div className="flex gap-2">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 glass border border-white/10 hover:border-amber-500/40 text-white/40 hover:text-amber-400 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110" aria-label="Social media link">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={mapRef as any} className={`mt-10 rounded-2xl overflow-hidden border border-amber-500/10 h-72 scroll-animate ${mapVisible ? 'visible' : ''}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126738.56347862248!2d79.77380033359375!3d6.927078699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cinnamix Export Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
