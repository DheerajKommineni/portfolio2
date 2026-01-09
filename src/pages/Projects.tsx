'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Layers, Database, Cpu } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const projects = [
  {
    title: 'Enterprise Transaction Platform',
    context: 'Volkswagen',
    description:
      'Enterprise-scale transaction processing platform supporting secure, high-throughput financial operations with real-time reconciliation and analytics.',
    highlights: [
      'Designed modular React-based UI for transaction-heavy workflows',
      'Built Python microservices using FastAPI with clean architecture',
      'Integrated Kafka for event-driven transaction processing',
      'Implemented RBAC, JWT, and OAuth2 security mechanisms',
      'Optimized PostgreSQL queries and Redis caching for performance',
    ],
    tech: [
      'React',
      'FastAPI',
      'PostgreSQL',
      'Kafka',
      'Redis',
      'AWS',
      'Kubernetes',
    ],
  },
  {
    title: 'Real-Time Monitoring & Analytics Dashboard',
    context: 'HP',
    description:
      'Cloud-native monitoring platform providing real-time telemetry, predictive analytics, and infrastructure insights for distributed systems.',
    highlights: [
      'Built real-time dashboards using React and WebSockets',
      'Developed ingestion APIs using FastAPI and Flask',
      'Integrated MQTT pipelines for IoT data ingestion',
      'Implemented async processing for high-throughput workloads',
      'Deployed scalable microservices on Kubernetes',
    ],
    tech: [
      'React',
      'WebSockets',
      'FastAPI',
      'MQTT',
      'Docker',
      'Kubernetes',
      'AWS',
    ],
  },
  {
    title: 'Customer-Facing Digital Platform',
    context: 'Ulta Beauty',
    description:
      'Customer-facing digital platform supporting appointment management, internal dashboards, and event-driven backend workflows.',
    highlights: [
      'Built reusable React components and internal dashboards',
      'Designed RESTful APIs for appointment and customer data',
      'Integrated Kafka for notifications and audit events',
      'Improved backend performance using async Python patterns',
      'Deployed services using AWS ECS and Docker',
    ],
    tech: ['React', 'Python', 'FastAPI', 'Kafka', 'AWS ECS', 'Docker'],
  },
  {
    title: 'Generative AI Search & Analytics Engine',
    context: 'Enterprise R&D',
    description:
      'LLM-powered search and analytics system enabling intelligent querying, summarization, and insights over enterprise datasets.',
    highlights: [
      'Integrated OpenAI APIs using LangChain',
      'Built RAG pipelines for contextual search',
      'Implemented secure API access and rate limiting',
      'Designed scalable backend services for AI workloads',
      'Focused on performance, security, and observability',
    ],
    tech: [
      'Python',
      'LangChain',
      'OpenAI',
      'FastAPI',
      'Vector Databases',
      'AWS',
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Selected Projects & Case Studies
        </h2>
      </ScrollAnimation>

      <div className="space-y-10">
        {projects.map(project => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/5 hover:bg-gray-800/70 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-gray-400" />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>

              <p className="text-gray-400 mb-2">
                <span className="font-medium text-gray-300">Context:</span>{' '}
                {project.context}
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <Cpu className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-white/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
