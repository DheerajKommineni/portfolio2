import Contact from '@/pages/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Sri Hari Dheeraj Kommineni',
  description:
    'Get in touch with Sri Hari Dheeraj Kommineni, a Senior Software Engineer with 7+ years of experience in building scalable, cloud-native applications using React, Python, AWS, and Generative AI.',
};

export default function ContactPage() {
  return <Contact />;
}
