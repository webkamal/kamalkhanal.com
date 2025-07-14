import React from 'react';
import { Code, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Availability Badge */}
      <div className="relative z-10 text-center py-6 border-b border-white/10">
        <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 px-6 py-3 rounded-full">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-100 font-medium">Available for new opportunities</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Section - Personal Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white/10 rounded-lg mr-3 backdrop-blur-sm">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Kamal Khanal</h3>
                  <p className="text-blue-200">Web Developer & SEO Specialist</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                Creating exceptional digital experiences in Sydney, Australia. Specializing in modern web development and SEO optimization.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-blue-100">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span>Sydney, Australia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <a href="mailto:hello@kamalkhanal.com" className="text-blue-100 hover:text-white transition-colors duration-200">
                  hello@kamalkhanal.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <a href="tel:0415837036" className="text-blue-100 hover:text-white transition-colors duration-200">
                  0415 837 036
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-200 font-medium text-sm">Available for work</span>
              </div>
              <p className="text-blue-100 text-sm">
                Open to full-time, part-time, contract, and freelance opportunities
              </p>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3"></div>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'About', section: 'about' },
                { label: 'Skills', section: 'skills' },
                { label: 'Experience', section: 'experience' },
                { label: 'Projects', section: 'projects' },
                { label: 'Contact', section: 'contact' }
              ].map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-blue-200 hover:text-white transition-all duration-200 py-2 px-3 rounded-lg hover:bg-white/10 backdrop-blur-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Social & CTA */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-3"></div>
                Let's Connect
              </h4>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                <a 
                  href="https://github.com/webkamal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-white group-hover:text-blue-200" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/khanalkamal/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-white group-hover:text-blue-200" />
                </a>
                <a 
                  href="mailto:hello@kamalkhanal.com" 
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-white group-hover:text-blue-200" />
                </a>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-4 rounded-xl font-semibold hover:from-white/30 hover:to-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-blue-200">
                © 2024 Kamal Khanal. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-blue-200">
              <span>Made with ❤️ in Sydney</span>
              <span>•</span>
              <span>React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
    </footer>
  );
};

export default Footer;