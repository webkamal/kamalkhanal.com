import React from 'react';
import { Code, Database, Globe, Wrench, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'SQL']
    },
    {
      title: 'Frontend',
      icon: Layers,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn/ui']
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      skills: ['Node.js', 'Supabase', 'PostgreSQL', 'Prisma', 'Stripe API']
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      skills: ['Git', 'Vercel', 'Netlify', 'Figma', 'REST APIs', 'VS Code']
    },
    {
      title: 'Other',
      icon: Globe,
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      skills: ['SEO', 'WordPress', 'Technical Content', 'Agile Development']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern full-stack technologies and tools I use to build exceptional web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift animate-fadeInUp transform hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className={`${category.bgColor} p-6 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full -ml-6 -mb-6"></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${category.iconColor} bg-white rounded-xl shadow-lg mb-3 transform group-hover:rotate-12 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="animate-fadeInUp group/skill"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0 group-hover/skill:scale-125 transition-transform duration-200`}></div>
                        <span className="text-gray-700 font-medium text-sm group-hover/skill:text-gray-900 transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 
                'Supabase', 'PostgreSQL', 'Stripe', 'Vercel', 'Git'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${0.7 + (index * 0.05)}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;