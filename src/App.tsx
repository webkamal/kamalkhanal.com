import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
  Linkedin,
  Code,
  Mail
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

      <Contact />

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
                    onClick={() => scrollToSection('experience')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Experience
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
                <a href="https://github.com/webkamal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/khanalkamal/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:hello@kamalkhanal.com" className="text-gray-400 hover:text-white transition-colors duration-200">
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