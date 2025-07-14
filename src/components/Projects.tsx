import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Kamal.cc - SaaS SEO Blog Generator',
      description: 'Modern SaaS platform for automated SEO blog generation built with React.js. Features advanced content optimization, keyword targeting, and automated publishing workflows.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'SaaS', 'SEO', 'Blog Generator'],
      liveUrl: 'https://kamal.cc',
      githubUrl: '#'
    },
    {
      title: 'SiteGuru - WordPress to NextJS Migration',
      description: 'Complete platform migration from WordPress to React, then to NextJS. Improved performance, SEO capabilities, and modern development workflow for enhanced user experience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['NextJS', 'React', 'WordPress Migration', 'Performance'],
      liveUrl: 'https://siteguru.com.au',
      githubUrl: '#'
    },
    {
      title: 'WebQuick - Web Development Platform',
      description: 'Founded and developed a comprehensive web development platform using WordPress and WHMCS. Provides end-to-end web solutions for businesses across Australia.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'WHMCS', 'Platform Development', 'Business Solutions'],
      liveUrl: 'https://webquick.com.au',
      githubUrl: '#'
    },
    {
      title: 'Cheapest Tiles - WooCommerce Optimization',
      description: 'Complete rebuild and optimization of WooCommerce e-commerce site. Enhanced product pages, improved conversion rates, and optimized for better search engine rankings.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WooCommerce', 'WordPress', 'E-commerce', 'SEO Optimization'],
      liveUrl: 'https://cheapestiles.com.au',
      githubUrl: '#'
    },
    {
      title: 'Bella Skin Clinic - Beauty Business Site',
      description: 'Professional beauty clinic website built in WordPress with custom design, appointment booking system, and optimized for local SEO to attract more clients.',
      image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'Beauty Industry', 'Local SEO', 'Booking System'],
      liveUrl: 'https://bellaskinclinic.com.au',
      githubUrl: '#'
    },
    {
      title: 'Skaff Legal - WordPress to React Migration',
      description: 'Migrated legal firm website from WordPress to React, achieving 50% speed improvement. Enhanced user experience with modern design and faster loading times.',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'WordPress Migration', 'Performance', 'Legal Industry'],
      liveUrl: 'https://skafflegal.com',
      githubUrl: '#'
    },
    {
      title: 'Quick Cleaners - Service Business Site',
      description: 'Professional cleaning business website built in WordPress with service booking, customer testimonials, and local SEO optimization for Sydney market.',
      image: 'https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'Service Business', 'Local SEO', 'Booking System'],
      liveUrl: 'https://quickcleaners.com.au',
      githubUrl: '#'
    },
    {
      title: 'Sydney Structural Steel - Joomla Migration',
      description: 'Successfully migrated construction company website from Joomla to WordPress, improving content management and SEO performance for better online visibility.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WordPress', 'Joomla Migration', 'Construction', 'CMS'],
      liveUrl: 'https://sydneystructuralsteel.com.au',
      githubUrl: '#'
    },
    {
      title: 'Get Tiles Online - SEO Performance',
      description: 'Comprehensive SEO and performance optimization for tile retailer. Improved page load speeds, search rankings, and overall user experience.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SEO Optimization', 'Performance', 'E-commerce', 'WordPress'],
      liveUrl: 'https://gettilesonline.com.au',
      githubUrl: '#'
    },
    {
      title: 'Andes MS - Security & Recovery',
      description: 'Restored and updated hacked website, implemented security measures, and successfully got the site approved by Google after malware removal and optimization.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Security', 'Malware Removal', 'WordPress', 'Google Approval'],
      liveUrl: 'https://andesms.com.au',
      githubUrl: '#'
    },
    {
      title: 'Show Tile - Category Page SEO',
      description: 'Specialized SEO optimization for e-commerce category pages, improving search visibility and organic traffic for tile retail business.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SEO', 'Category Optimization', 'E-commerce', 'Organic Traffic'],
      liveUrl: 'https://showtile.com.au',
      githubUrl: '#'
    },
    {
      title: 'Mint Fencing - Top 3 Google Rankings',
      description: 'Service page SEO optimization that achieved top 3 Google rankings for major keywords in the fencing industry, significantly increasing lead generation.',
      image: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['SEO', 'Keyword Ranking', 'Service Pages', 'Lead Generation'],
      liveUrl: 'https://mintfencing.com.au',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
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