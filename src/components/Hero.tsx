import React from 'react';
import { Eye, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Yellow Circle */}
        <div className="absolute top-32 right-32 w-16 h-16 bg-yellow-400 rounded-full animate-float opacity-90"></div>
        
        {/* Green Circle */}
        <div className="absolute top-48 right-16 w-8 h-8 bg-green-400 rounded-full animate-float opacity-90" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-pink-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-blue-400 rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-40 w-6 h-6 bg-orange-400 rounded-full animate-float opacity-70" style={{ animationDelay: '4s' }}></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-purple-800/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16">
          {/* Left Content */}
          <div className="text-left animate-fadeInLeft mt-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="block text-white">
                Kamal Khanal
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-purple-200 mb-6 font-light">
              Frontend Engineer – React / Next.js
            </h2>
            
            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed">
              Frontend-focused engineer building high-performance, user-centric web applications using React, Next.js, and Tailwind CSS.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-purple-50"
              >
                <Eye className="w-5 h-5" />
                <span>View My Work</span>
              </button>
              <a
                href="/kamalkhanal--cv.pdf"
                download="kamalkhanal--cv.pdf"
                className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="https://github.com/webkamal" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/khanalkamal/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:kamalkhanal@gmail.com" className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:0415837036" className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative">
              {/* Animated border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-green-400 animate-spin-slow p-1">
                <div className="w-full h-full rounded-full bg-purple-700"></div>
              </div>
              
              {/* Photo container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 mt-12">
                <img
                  src="/IMG_0351.jpeg"
                  alt="Kamal Khanal"
                  className="w-full h-full object-cover animate-pulse-subtle object-top"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>
              
              {/* Floating elements around photo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-pink-400 rounded-full animate-float opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;