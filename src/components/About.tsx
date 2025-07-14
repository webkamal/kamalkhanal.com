import React from 'react';
import { Code2, Search, Palette, Database, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML/CSS', level: 95, icon: Code2, color: 'bg-orange-500' },
    { name: 'JavaScript', level: 90, icon: Zap, color: 'bg-yellow-500' },
    { name: 'React', level: 85, icon: Code2, color: 'bg-blue-500' },
    { name: 'SEO', level: 92, icon: Search, color: 'bg-green-500' },
    { name: 'WordPress', level: 88, icon: Globe, color: 'bg-purple-500' },
    { name: 'UI/UX Design', level: 80, icon: Palette, color: 'bg-pink-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeInUp stagger-1">
            I'm a passionate web developer and SEO specialist with over 5 years of experience 
            creating digital solutions that drive results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-fadeInLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Crafting Digital Experiences
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                With a strong foundation in web development and a keen eye for SEO optimization, 
                I help businesses establish a powerful online presence. My journey began with a 
                fascination for how websites work, and it has evolved into a comprehensive skill 
                set that spans front-end development, search engine optimization, and user experience design.
              </p>
              <p>
                I believe in the power of clean, efficient code and data-driven SEO strategies. 
                Every project I work on is an opportunity to solve problems, improve user experiences, 
                and drive measurable results for my clients.
              </p>
              <p>
                When I'm not coding or analyzing search rankings, you'll find me exploring the latest 
                web technologies, contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg hover-lift">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg hover-lift">
                <div className="text-2xl font-bold text-green-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="animate-fadeInRight">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className={`animate-fadeInUp stagger-${index + 1}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 progress-bar">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;