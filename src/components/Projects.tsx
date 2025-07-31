import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Kamal AI - AI Blog Generator',
      description: 'AI-powered content creation tool generating SEO-optimized blog articles from topic input. Built using React and TailwindCSS with real-time data storage in Supabase. Users can generate, save, and manage articles from their dashboard.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'AI Integration', 'Supabase', 'TailwindCSS', 'SEO Optimization'],
      liveUrl: 'https://kamal.cc',
      githubUrl: '#'
    },
    {
      title: 'Faceless AI - Viral Video Creator',
      description: 'AI-powered platform designed to automate the creation of viral faceless videos. It generates engaging scripts from user topics, integrates AI voiceovers, selects relevant stock footage, and applies dynamic text overlays, all optimized for various social media platforms like YouTube, TikTok, and Instagram.',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['OpenAI API', 'Text-to-Speech', 'FFmpeg', 'Video Automation', 'Content Creation'],
      liveUrl: 'https://facelessai-g3qr.vercel.app/',
      githubUrl: '#'
    },
    {
      title: 'Kamal AI - AI Blog Generator',
      description: 'AI-powered content creation tool generating SEO-optimized blog articles from topic input. Built using React and TailwindCSS with real-time data storage in Supabase. Users can generate, save, and manage articles from their dashboard.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'JustWork - Freelance Marketplace',
      description: 'Self-built freelance job platform connecting clients with skilled freelancers. Features role-based dashboards, job posting system, application management, and real-time messaging between clients and freelancers.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Real-time DB'],
      liveUrl: 'https://justwork.com.au',
      githubUrl: '#'
    },
    {
      title: 'InvoicerPro - Freelancer Invoicing SaaS',
      description: 'Built full-stack invoicing tool with PDF generation and client/project tracking. Implemented Stripe subscriptions and multi-step invoice creation flow. Responsive UI with invoice status boards and downloadable PDFs.',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'PDF Generation'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'PromptCrafter - AI Prompt Marketplace',
      description: 'Marketplace for buying/selling AI prompts with seller profiles and ratings. Integrated secure Stripe payments and email notifications via Resend. Feature-rich search, tagging, filtering, and prompt previews.',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Supabase', 'Stripe', 'Resend', 'Marketplace'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'NextStore - Headless E-commerce Storefront',
      description: 'Developed modern storefront with custom cart, checkout, and CMS integration. Consumed Medusa Commerce API for product inventory, payments, and orders. Optimized for Core Web Vitals and implemented product filters and reviews.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Medusa', 'TailwindCSS', 'Core Web Vitals', 'E-commerce'],
      liveUrl: 'https://nextstore.com.au',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent full-stack projects showcasing modern web development with React, Next.js, and SaaS architectures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fadeInUp group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-2">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm">Demo Available on Request</span>
                  )}
                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium cursor-pointer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">More Projects Available</h3>
              <p className="text-gray-600 mb-4">
                I have additional projects and case studies available upon request, including client work and experimental builds.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;