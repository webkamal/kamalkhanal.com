import React from 'react';
import { Code, Database, Search, Globe, Smartphone, Server, BarChart3, Target, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      title: 'Backend & CMS',
      icon: Database,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      skills: [
        { name: 'WordPress', level: 95 },
        { name: 'PHP', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: 'SEO & Marketing',
      icon: Search,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      skills: [
        { name: 'SEO Optimization', level: 90 },
        { name: 'Google Analytics', level: 85 },
        { name: 'Digital Marketing', level: 80 },
        { name: 'Content Strategy', level: 85 },
        { name: 'Keyword Research', level: 88 },
        { name: 'Technical SEO', level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I combine technical expertise with creative problem-solving to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift animate-fadeInUp transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className={`${category.bgColor} p-6 text-center relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${category.iconColor} bg-white rounded-full shadow-lg mb-4 transform hover:rotate-12 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="animate-fadeInUp"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-3 rounded-full progress-bar transform origin-left scale-x-0 animate-[scaleX_1.5s_ease-out_forwards] relative overflow-hidden`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Git', icon: Code },
              { name: 'Docker', icon: Server },
              { name: 'AWS', icon: Globe },
              { name: 'Figma', icon: Smartphone },
              { name: 'Analytics', icon: BarChart3 },
              { name: 'Optimization', icon: Target }
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${1 + (index * 0.1)}s` }}
              >
                <tech.icon className="w-8 h-8 text-gray-600 mx-auto mb-2 group-hover:text-blue-600 transition-colors duration-300" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;