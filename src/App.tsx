import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
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

      <Footer />
    </div>
  );
};

export default App;