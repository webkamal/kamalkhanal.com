import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Kamal AI - AI Blog Generator',
      description: 'AI-powered blog article generator built with React.js and Supabase. Integrated OpenAI APIs and real-time DB sync with minimal UI design using Tailwind CSS.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Supabase', 'OpenAI API', 'Tailwind CSS', 'Real-time DB'],
      liveUrl: 'https://kamalkhanal.com',
      githubUrl: '#'
    },
    {
      title: 'Link Vault - Tab Manager',
      description: 'Hacker News-style tab manager built with Next.js and Supabase. Features authentication, voting, and real-time updates with plans to integrate Chrome Extension.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Supabase', 'Authentication', 'Real-time Updates', 'Chrome Extension'],
      liveUrl: 'https://link-vault-alpha.lovable.app',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Custom-built portfolio using React.js + Bolt.new. Showcases personal projects, skills, and resume. Deployed on Netlify with custom domain and performance optimizations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Bolt.new', 'Netlify', 'Performance Optimization', 'Custom Domain'],
      liveUrl: 'https://kamalkhanal.com',
      githubUrl: '#'
    },
    {
      title: 'WebQuick - SaaS Website Builder',
      description: 'SaaS website builder for tradespeople built with Next.js 15, Tailwind, and Stripe. Features onboarding automation and responsive UI components.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js 15', 'Tailwind CSS', 'Stripe', 'SaaS', 'Automation'],
      liveUrl: 'https://webquick.com.au',
      githubUrl: '#'
    },
    {
      title: 'Show Tile - React Frontend Rebuild',
      description: 'Rebuilt WooCommerce frontend using React.js + WordPress REST API. Boosted Core Web Vitals scores and automated inventory syncing with improved SEO.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'WordPress REST API', 'WooCommerce', 'Core Web Vitals', 'SEO'],
      liveUrl: 'https://showtile.com.au',
      githubUrl: '#'
    },
    {
      title: 'SiteGuru - WordPress Platform',
      description: 'Built and managed 20+ WordPress websites with Elementor and WooCommerce. Implemented SEO strategies and tracked campaigns via GA4 + Tag Manager.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'Elementor', 'WooCommerce', 'GA4', 'Tag Manager'],
      liveUrl: 'https://siteguru.com.au',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent projects showcasing my frontend engineering and full-stack development skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;