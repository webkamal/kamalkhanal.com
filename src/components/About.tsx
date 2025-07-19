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
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a full-stack web developer with a passion for crafting digital products that are both beautiful and functional.
              </p>
              <p>
                With over 10 years in web development and recent deep focus on modern stacks like React, Next.js, Supabase, and Stripe, I specialize in building powerful web applications with real-world utility. From building SaaS tools for tradies, AI blog generators, to headless e-commerce stores, I've worked across domains that demand performance, design, and scalability.
              </p>
              <p>
                Whether you're looking for a frontend wizard or someone who can manage the full lifecycle of your application — from architecture to deployment — I bring clarity, speed, and craftsmanship to every line of code.
              </p>
            </div>
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