import React from 'react';
import { Mail, Phone, MapPin, Linkedin, CheckCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Submit to Netlify
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      // Show success message
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after delay
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // You could add error handling here
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <a href="mailto:hello@kamalkhanal.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    hello@kamalkhanal.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <a href="tel:0415837036" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    0415 837 036
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-gray-600">Sydney, Australia</div>
                </div>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/khanalkamal/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    linkedin.com/in/khanalkamal
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeInRight">
            {/* Success Message Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg flex items-center justify-center z-10 animate-fadeInUp">
                <div className="text-center p-8">
                  <div className="relative mb-6">
                    {/* Animated success icon */}
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounceIn shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    {/* Ripple effect */}
                    <div className="absolute inset-0 w-20 h-20 bg-green-400 rounded-full mx-auto animate-ping opacity-20"></div>
                    <div className="absolute inset-0 w-20 h-20 bg-green-400 rounded-full mx-auto animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    Message Sent Successfully! 🎉
                  </h3>
                  <p className="text-gray-600 mb-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-green-600 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">Sent to hello@kamalkhanal.com</span>
                  </div>
                </div>
              </div>
            )}
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              className="bg-white p-8 rounded-xl shadow-lg relative"
              onSubmit={handleSubmit}
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your phone number"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;