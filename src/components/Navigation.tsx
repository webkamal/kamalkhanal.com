import React, { useState } from 'react';
import { Menu, X, Code, User, Briefcase, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 safe-area-inset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 pt-safe">
            {/* Logo */}
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">Kamal Khanal</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Get In Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20 mr-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-8 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-6 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Menu Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 animate-slideInFromTop">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-12 animate-fadeInUp">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Kamal Khanal
              </h2>
              <p className="text-gray-300 text-lg">Web Developer & SEO Specialist</p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6 w-full max-w-sm">
              {[
                { icon: User, label: 'About', section: 'about', delay: '0.1s' },
                { icon: Code, label: 'Skills', section: 'skills', delay: '0.2s' },
                { icon: Briefcase, label: 'Experience', section: 'experience', delay: '0.3s' },
                { icon: Briefcase, label: 'Projects', section: 'projects', delay: '0.4s' },
                { icon: Mail, label: 'Contact', section: 'contact', delay: '0.5s' }
              ].map(({ icon: Icon, label, section, delay }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="w-full flex items-center justify-center space-x-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 hover:scale-105 transform transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: delay }}
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-lg font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 animate-fadeInUp backdrop-blur-sm border border-white/20"
              style={{ animationDelay: '0.6s' }}
            >
              Get In Touch
            </button>

            {/* Social Links */}
            <div className="mt-8 flex space-x-4 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
              {/* Add your social media icons here if needed */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;