'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';

const Education = () => {
  const educationData = [
    {
      school: 'California State University, Fullerton',
      location: 'Fullerton, California, USA',
      duration: '2023 – 2025',
      degree: 'Master of Science in Computer Science',
      image: '/education/csuf.jpg',
      coursework: [
        'Advanced Algorithms',
        'Distributed Systems',
        'Machine Learning',
        'Cloud Computing',
        'Database Systems',
        'Software Engineering',
      ],
      description:
        'Completed a Master’s degree with a strong focus on scalable software systems, cloud computing, and applied machine learning. Gained hands-on experience building distributed systems, backend services, and data-driven applications aligned with real-world enterprise use cases.',
    },
    {
      school: 'BML Munjal University',
      location: 'Gurgaon, India',
      duration: '2015 – 2019',
      degree: 'Bachelor of Technology in Computer Science',
      image: '/education/bmlu.jpg',
      coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Computer Networks',
        'Database Management Systems',
        'Object-Oriented Programming',
      ],
      description:
        'Built a strong foundation in computer science fundamentals including algorithms, operating systems, and software engineering principles, forming the basis for a professional career in full stack development.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={edu.school}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all"
            >
              <div className="absolute top-0 right-0 bg-white/10 px-4 py-2 rounded-bl-xl flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300">{edu.duration}</span>
              </div>

              <div className="grid md:grid-cols-[300px,1fr] gap-6">
                {/* Image */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(course => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Education;
