import React from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase, Award, TrendingUp, Users, Code2, Search, Globe } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'JustWork – Freelance Marketplace',
      location: 'justwork.com.au',
      period: 'Jan 2024 - Present',
      status: 'Current',
      type: 'Freelance',
      description: 'Providing freelance development services through JustWork, a self-built freelance job platform.',
      achievements: [
        'Built the MVP using Next.js API routes, Supabase (PostgreSQL + Auth), and Tailwind CSS, deployed on Vercel',
        'Implemented role-based dashboards, job posting, job applications, and basic client–freelancer messaging',
        'Leveraged Supabase Auth for user authentication and Supabase Realtime DB for data sync and notifications',
        'Designed scalable schema with users, jobs, applications, and messages tables using Supabase\'s hosted Postgres'
      ],
      skills: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Role-based Auth', 'Realtime DB'],
      icon: Award,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Web Developer / SEO Specialist',
      company: 'Show Tile',
      location: 'Bankstown, NSW',
      period: 'Jun 2023 - Mar 2024',
      status: 'Full-time',
      type: 'Full-time',
      description: 'Led frontend development, SEO optimization, and performance improvements for e-commerce platform, achieving significant growth in organic traffic and user experience.',
      achievements: [
        'Rebuilt the company e-commerce store using a React frontend and WordPress API backend',
        'Improved site SEO by optimizing metadata, improving site speed, and enhancing mobile responsiveness',
        'Implemented SEO best practices resulting in increased organic traffic and higher search engine rankings',
        'Automated inventory syncing and reduced bounce rate by 35% through UX improvements and faster load times'
      ],
      skills: ['React.js', 'WordPress API', 'SEO Optimization', 'Core Web Vitals', 'E-commerce', 'Performance Optimization', 'Inventory Automation'],
      icon: Globe,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'SiteGuru',
      location: 'Sydney, Remote',
      period: '2019 - 2023',
      status: 'Freelance',
      type: 'Freelance',
      description: 'Delivered comprehensive web solutions for small businesses, combining development expertise with digital marketing strategies to drive growth.',
      achievements: [
        'Delivered SEO-optimized websites and marketing automation for small businesses',
        'Managed Google Ads campaigns, landing page optimization, and analytics dashboards',
        'Built client websites using WordPress, WooCommerce, and Elementor'
      ],
      skills: ['WordPress', 'WooCommerce', 'Elementor', 'Google Ads', 'SEO', 'Marketing Automation', 'Analytics'],
      icon: Code2,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ];

  const education = {
    degree: 'Master in Information Technology',
    institution: 'Melbourne Institute of Technology (2008-2010)',
    specialization: 'Specialized in Software Engineering and Web Development',
    icon: Award
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in full-stack development and digital product creation
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-green-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden md:block transform -translate-x-1/2 mt-6"></div>

                {/* Experience Card */}
                <div className="md:ml-16 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover-lift group">
                  {/* Card Header */}
                  <div className={`${exp.bgColor} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <exp.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                          <div className="flex items-center space-x-4 text-gray-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              exp.status === 'Current' 
                                ? 'bg-green-100 text-green-800' 
                                : exp.status === 'Freelance'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {exp.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Tags */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Code2 className="w-4 h-4 mr-2 text-purple-600" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-shadow duration-200`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Education</h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 hover-lift animate-fadeInUp">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white mb-4 shadow-lg">
                  <education.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{education.degree}</h4>
                <p className="text-lg text-indigo-600 font-semibold mb-2">{education.institution}</p>
                <p className="text-gray-600 leading-relaxed">{education.specialization}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;