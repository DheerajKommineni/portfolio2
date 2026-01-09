'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const certificates = [
  {
    title: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services (AWS)',
    date: '2024',
    link: '/files/certificates_pdf/aws_certified_developer_associate.pdf',
    description:
      'Validates expertise in developing, deploying, and maintaining cloud-native applications on AWS, including CI/CD, security, monitoring, and scalability best practices.',
    skills: ['AWS', 'Cloud Computing', 'CI/CD', 'Security', 'Scalable Systems'],
  },
  {
    title:
      'Oracle Cloud Infrastructure 2025 – Certified Generative AI Professional',
    issuer: 'Oracle',
    date: '2025',
    link: '/files/certificates_pdf/oracle_genai.pdf',
    description:
      'Demonstrates hands-on knowledge of Generative AI concepts, LLMs, prompt engineering, RAG pipelines, and deploying GenAI solutions on cloud platforms.',
    skills: [
      'Generative AI',
      'LLMs',
      'RAG Pipelines',
      'Prompt Engineering',
      'Cloud AI',
    ],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certifications</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>

              <div className="text-gray-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300">{cert.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 transition-transform"
                  whileHover={{ x: 6 }}
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
