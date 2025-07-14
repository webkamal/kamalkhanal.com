import React from 'react';
import { Users, Code, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Code, number: '100+', label: 'Projects Completed' },
    { icon: Award, number: '5+', label: 'Years Experience' },
    { icon: TrendingUp, number: '200%', label: 'Average SEO Improvement' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate web developer and SEO specialist based in Sydney, Australia, with over 5 years of experience creating digital solutions that make a difference. I specialize in building modern, responsive websites and implementing SEO strategies that drive organic growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My expertise spans across front-end development, back-end systems, and search engine optimization. I believe in creating not just beautiful websites, but ones that perform exceptionally well in search rankings and provide outstanding user experiences.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover-lift">
                  <achievement.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fadeInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-6"></div>
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Web Development Workspace"
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;