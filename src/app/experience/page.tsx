import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Sri Hari Dheeraj Kommineni',
  description:
    'Professional experience of Sri Hari Dheeraj Kommineni, a Senior Software Engineer with 7+ years of experience delivering enterprise-scale solutions for organizations including Volkswagen, HP, Ulta Beauty, and Voyager IT Solutions.',
};

export default function ExperiencePage() {
  return <Experience />;
}
