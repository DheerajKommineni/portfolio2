import Skills from '@/pages/Skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Skills | Sri Hari Dheeraj Kommineni',
  description:
    'Technical skills and expertise of Sri Hari Dheeraj Kommineni, including full stack development, backend engineering, cloud platforms, DevOps, and Generative AI technologies such as React, Python, AWS, Kubernetes, and LangChain.',
};

export default function SkillsPage() {
  return <Skills />;
}
