import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-semibold">Kamal Khanal</span>
          </div>
          <p className="text-gray-400 mb-4">
            Web Developer & SEO Specialist based in Sydney, Australia
          </p>
          <div className="flex items-center justify-center space-x-1 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse-custom" />
            <span>by Kamal Khanal</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;