import React from 'react';
import { Download, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fadeInLeft">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse-custom">
                Kamal Khanal
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fadeInLeft stagger-1">
              Web Developer & SEO Specialist
            </p>
            
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6 animate-fadeInLeft stagger-2">
              <div className="flex items-center space-x-1 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Sydney, Australia</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>Available for work</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-fadeInLeft stagger-3">
              Passionate about creating beautiful, functional websites and optimizing them for search engines. 
              I combine technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInLeft stagger-4">
              <a
                href="/kamal_khanal_cv copy.pdf"
                download="Kamal_Khanal_CV.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover-lift hover-glow"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover-lift"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6 mt-8 animate-fadeInLeft stagger-5">
              <a
                href="https://github.com/kamalkhanal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover-scale"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/kamalkhanal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover-scale"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:kamal@example.com"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover-scale"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl hover-lift">
                <img
                  src="/IMG_0351.jpeg"
                  alt="Kamal Khanal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;