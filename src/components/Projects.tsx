import React from 'react';
import { ExternalLink, Github, Search, Code, Palette } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website built with React and Node.js, featuring payment integration, inventory management, and SEO optimization.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Development'
    },
    {
      title: 'SEO Analytics Dashboard',
      description: 'A comprehensive SEO analytics dashboard that tracks keyword rankings, backlinks, and website performance metrics.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'Google Analytics API'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'SEO Tools'
    },
    {
      title: 'Restaurant Website',
      description: 'A modern restaurant website with online ordering system, reservation booking, and local SEO optimization.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Local SEO'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'WordPress'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website for a photographer, featuring image galleries, contact forms, and optimized loading speeds.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Lightbox'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Design'
    },
    {
      title: 'Blog Platform',
      description: 'A custom blog platform with content management system, SEO features, and social media integration.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack'
    },
    {
      title: 'Local Business Website',
      description: 'A local business website with Google My Business integration, local SEO optimization, and mobile-first design.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google APIs'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Local SEO'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'SEO Tools':
        return <Search className="w-4 h-4" />;
      case 'Web Development':
      case 'Full Stack':
        return <Code className="w-4 h-4" />;
      case 'Web Design':
        return <Palette className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeInUp stagger-1">
            Here are some of my recent projects that showcase my skills in web development, 
            SEO optimization, and digital marketing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fadeInUp stagger-${index % 6 + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
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