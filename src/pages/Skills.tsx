'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Brain,
  Terminal,
  Wrench,
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
  PythonLogo,
  JavaScriptLogo,
  TypeScriptLogo,
  ReactLogo,
  NextjsLogo,
  NodeLogo,
  MySQLLogo,
  MongoDBLogo,
  GitLogo,
  TailwindLogo,
  VercelLogo,
} from '@/components/TechLogos';

const skills = [
  {
    category: 'Programming Languages',
    icon: <Code2 className="w-6 h-6" />,
    items: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend Engineering',
    icon: <Layout className="w-6 h-6" />,
    items: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'ShadCN UI',
    ],
  },
  {
    category: 'Backend Engineering',
    icon: <Server className="w-6 h-6" />,
    items: [
      'FastAPI',
      'Flask',
      'Django',
      'Node.js (Express)',
      'RESTful APIs',
      'Async Programming',
    ],
  },
  {
    category: 'Databases & Caching',
    icon: <Database className="w-6 h-6" />,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB'],
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    items: [
      'AWS (EC2, S3, RDS, Lambda, EKS)',
      'Docker',
      'Kubernetes',
      'CI/CD (GitHub Actions, Jenkins)',
      'Vercel',
    ],
  },
  {
    category: 'AI / ML & Generative AI',
    icon: <Brain className="w-6 h-6" />,
    items: [
      'LangChain',
      'RAG Pipelines',
      'OpenAI APIs',
      'Hugging Face',
      'LLM Integration',
    ],
  },
  {
    category: 'Developer Tools & Platforms',
    icon: <Wrench className="w-6 h-6" />,
    items: ['Git & GitHub', 'Postman', 'Swagger / OpenAPI', 'VS Code', 'JIRA'],
  },
  {
    category: 'Operating Systems',
    icon: <Terminal className="w-6 h-6" />,
    items: ['Linux', 'UNIX', 'Windows'],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-3xl">
          A focused overview of technologies and tools I use to design, build,
          deploy, and scale production-grade applications in enterprise
          environments.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map(group => (
          <ScrollAnimation key={group.category}>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-gray-800/70 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-white/10 rounded-lg">{group.icon}</div>
                <h3 className="text-lg font-semibold">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                  >
                    {item}
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

export default Skills;
