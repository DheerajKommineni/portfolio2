'use client';

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
  Terminal,
  HardDrive,
  MemoryStick,
  Cpu,
  Shield,
  Box,
  ExternalLink,
  Info,
} from 'lucide-react';

const Kali = () => {
  const specifications = [
    {
      icon: <Cpu className="w-5 h-5" />,
      label: 'Base OS',
      value: 'Debian (64-bit)',
    },
    { icon: <Cpu className="w-5 h-5" />, label: 'CPU', value: '2 vCPUs' },
    {
      icon: <MemoryStick className="w-5 h-5" />,
      label: 'Memory',
      value: '2 GB RAM',
    },
    {
      icon: <HardDrive className="w-5 h-5" />,
      label: 'Storage',
      value: '90 GB (Dynamic)',
    },
    {
      icon: <Box className="w-5 h-5" />,
      label: 'Virtualization',
      value: 'Oracle VirtualBox',
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Testing Environment',
      description:
        'Isolated virtual lab for learning and practicing ethical security testing techniques.',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'DevSecOps & Infrastructure Learning',
      description:
        'Used to understand secure system configuration, networking, and infrastructure hardening.',
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'Hands-on Linux & Tooling',
      description:
        'Improved Linux proficiency, shell scripting, and familiarity with security tooling ecosystems.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-20">
      <ScrollAnimation>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Kali Linux Virtual Lab
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A locally configured Kali Linux virtual environment used strictly
            for educational purposes, ethical security research, and DevSecOps
            learning in a controlled lab setup.
          </p>
        </div>
      </ScrollAnimation>

      {/* Disclaimer */}
      <ScrollAnimation>
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-yellow-400 mt-0.5" />
            <p className="text-sm text-gray-300 leading-relaxed">
              This project is intended{' '}
              <strong>only for educational and ethical use</strong>. All tools
              and configurations were used within isolated virtual environments
              for learning system security, networking concepts, and defensive
              techniques.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Features */}
      <ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map(feature => (
            <motion.div
              key={feature.title}
              className="bg-gray-800/50 rounded-xl p-6 border border-white/5 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-white/60 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Specifications */}
      <ScrollAnimation>
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Lab Environment Specifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {specifications.map(spec => (
              <div
                key={spec.label}
                className="flex items-center gap-3 text-gray-300"
              >
                <div className="text-white/60">{spec.icon}</div>
                <span className="font-medium">{spec.label}:</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Resources */}
      <ScrollAnimation>
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/5">
          <h3 className="text-xl font-semibold mb-4">Official Resources</h3>
          <div className="space-y-3">
            <a
              href="https://www.kali.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white/60" />
              Kali Linux – Official Website
            </a>
            <a
              href="https://www.virtualbox.org/manual/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white/60" />
              VirtualBox Documentation
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Kali;
