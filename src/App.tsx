import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { 
  Database, 
  Globe, 
  Search, 
  Smartphone, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Code
} from 'lucide-react';

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const achievements = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Code, number: '100+', label: 'Projects Completed' },
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: TrendingUp, number: '200%', label: 'Average SEO Improvement' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      {/* Contact Section */}
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
                    <a href="mailto:kamal@example.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      kamal@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <a href="tel:+61234567890" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      +61 234 567 890
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
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      linkedin.com/in/kamalkhanal
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fadeInRight">
              <form className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">Kamal Khanal</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Web Developer & SEO Specialist creating beautiful, high-performing websites that drive results.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:kamal@example.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Kamal Khanal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;