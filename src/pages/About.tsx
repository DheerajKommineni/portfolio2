'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Globe } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: '7+ Years Experience',
      description: 'Building scalable full-stack applications',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Enterprise Clients',
      description: 'Volkswagen, HP, Ulta Beauty',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Cloud & GenAI Certified',
      description: 'AWS & Oracle GenAI Certified',
    },
  ];

  const interests = [
    'Full Stack Engineering',
    'Scalable System Design',
    'Cloud-Native Applications',
    'AI / GenAI & RAG Pipelines',
    'Microservices Architecture',
    'Performance Optimization',
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl">
            <img
              src="/profile/profile.jpg"
              alt="Sri Hari Dheeraj Kommineni"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi, I’m{' '}
              <span className="text-white font-medium">
                Sri Hari Dheeraj Kommineni
              </span>
              , a Full Stack Software Engineer with 7+ years of experience
              designing and building scalable, cloud-native web applications
              across Healthcare, Retail, and Enterprise domains.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I specialize in building modern, high-performance user interfaces
              using React.js and developing robust backend services with Python
              (FastAPI, Flask, Django). My work focuses on clean architecture,
              microservices, and reliable API-driven systems.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I also have hands-on experience integrating AI/ML and Generative
              AI solutions, including RAG pipelines and LLM-based services using
              OpenAI, LangChain, and Hugging Face, while ensuring security,
              scalability, and performance in production environments.
            </p>
          </div>

          <ScrollAnimation>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Quick Facts
              </h3>
              <ul className="list-none space-y-3">
                {[
                  'Based in Fullerton, California',
                  'Master’s in Computer Science',
                  '7+ Years Full Stack Experience',
                ].map(fact => (
                  <motion.li
                    key={fact}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex justify-start space-x-4">
              <a
                href="/files/cv_pdf/SriHariDheerajKommineni.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download Resume
              </a>
              <a
                href="/skills"
                className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                My Skills
              </a>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Career Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map(achievement => (
              <div
                key={achievement.title}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-white mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Focus
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map(interest => (
              <div
                key={interest}
                className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3"
              >
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
