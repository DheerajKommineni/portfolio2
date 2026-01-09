import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education | Sri Hari Dheeraj Kommineni',
  description:
    'Academic background of Sri Hari Dheeraj Kommineni, including a Master’s degree in Computer Science from California State University, Fullerton, and a Bachelor’s degree in Computer Science from BML Munjal University.',
};

export default function EducationPage() {
  return <Education />;
}
