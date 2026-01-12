'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Volkswagen',
    location: 'Rochester, MI, USA',
    period: 'Mar 2024 – Present',
    type: 'Full Time',
    description: [
      'Designed and developed responsive, transaction-heavy user interfaces using React.js, custom hooks, and modular component architecture.',
      'Built enterprise-grade backend services using Python (FastAPI, Flask) following clean architecture and microservices principles.',
      'Developed secure and scalable RESTful APIs for transaction orchestration, validation, reconciliation, and reporting.',
      'Integrated Generative AI solutions using LangChain and OpenAI APIs to enable intelligent search, summarization, and analytics workflows.',
      'Implemented authentication and authorization using JWT, OAuth2, and RBAC to secure sensitive financial operations.',
      'Leveraged Apache Kafka for real-time, event-driven transaction processing and downstream system integration.',
      'Optimized PostgreSQL queries, indexing strategies, and Redis caching to reduce latency and improve throughput.',
      'Containerized services using Docker and deployed on Kubernetes (AWS EKS) with blue-green and rolling deployments.',
      'Automated CI/CD pipelines using Jenkins and AWS services to enable reliable, production-grade deployments.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'HP',
    location: 'Vancouver, WA, USA',
    period: 'Apr 2022 – Feb 2024',
    type: 'Full Time',
    description: [
      'Built real-time monitoring dashboards using React.js, Context API, and Redux to visualize infrastructure metrics and analytics.',
      'Implemented WebSocket-based communication for streaming live telemetry data and system alerts.',
      'Developed scalable backend services using FastAPI and Flask to ingest and process high-volume IoT and telemetry data.',
      'Designed microservices-based architecture to enable independent scaling of ingestion, processing, and analytics services.',
      'Integrated MQTT pipelines for low-latency data ingestion from distributed IoT devices.',
      'Implemented asynchronous and background processing in Python to handle high-throughput workloads.',
      'Secured APIs using JWT-based authentication and role-based access control.',
      'Deployed containerized applications using Docker and Kubernetes with automated scaling and fault recovery.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Ulta Beauty',
    location: 'Bolingbrook, IL, USA',
    period: 'Jan 2020 – Mar 2022',
    type: 'Full Time',
    description: [
      'Developed full stack features using React.js and Python-based backend services to support customer-facing digital platforms.',
      'Built reusable React components and internal dashboards to support operational and business workflows.',
      'Implemented RESTful APIs for appointment management, customer data access, and system integrations.',
      'Designed backend services following layered and service-oriented architecture principles.',
      'Integrated Apache Kafka to enable asynchronous workflows such as notifications and audit events.',
      'Optimized backend performance using asynchronous processing and concurrency patterns in Python.',
      'Ensured secure access to sensitive data through authentication and authorization mechanisms.',
      'Deployed services using Docker and AWS ECS with monitoring via CloudWatch.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Voyager IT Solutions',
    location: 'Bangalore, India',
    period: 'Jun 2018 – Dec 2019',
    type: 'Full Time',
    description: [
      'Contributed to full stack development across requirements analysis, implementation, testing, and deployment.',
      'Built responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap.',
      'Developed Python-based backend services and REST APIs to support core business logic.',
      'Designed relational database schemas and optimized queries to support application data needs.',
      'Implemented logging, error handling, and unit tests to improve system reliability.',
      'Collaborated in Agile teams, participating in sprint planning, stand-ups, and code reviews.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-8 h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-12">
        {experiences.map(exp => (
          <ScrollAnimation key={`${exp.company}-${exp.period}`}>
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-gray-400 text-lg">{exp.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-6">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
                <span>•</span>
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.type}</span>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
