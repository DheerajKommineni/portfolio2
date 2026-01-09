import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects & Case Studies | Sri Hari Dheeraj Kommineni',
  description:
    'Selected enterprise projects and case studies by Sri Hari Dheeraj Kommineni, showcasing scalable full stack systems, cloud-native architectures, real-time platforms, and Generative AI solutions built for organizations such as Volkswagen, HP, and Ulta Beauty.',
};

export default function ProjectsPage() {
  return <Projects />;
}
