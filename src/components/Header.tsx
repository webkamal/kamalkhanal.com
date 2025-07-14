import React, { useState } from 'react';
import { Menu, X, Code, User, Briefcase, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 animate-slideInFromTop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-600 animate-pulse-custom" />
            <span className="text-xl font-bold text-gray-900">Kamal Khanal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover-scale"
            >
              <User className="w-4 h-4" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover-scale"
            >
              <Briefcase className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-300 hover-scale"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 animate-fadeInUp">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <User className="w-6 h-6" />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <Briefcase className="w-6 h-6" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;