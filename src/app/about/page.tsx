import About from '@/pages/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'About Sri Hari Dheeraj Kommineni | Senior Full Stack Software Engineer',
  description:
    'Learn more about Sri Hari Dheeraj Kommineni, a Senior Full Stack Software Engineer with 7+ years of experience building scalable, cloud-native applications across enterprise, retail, and healthcare domains using React, Python, AWS, and Generative AI.',
};

export default function AboutPage() {
  return <About />;
}
