import Certificates from '@/pages/Certificates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications | Sri Hari Dheeraj Kommineni',
  description:
    'Professional certifications earned by Sri Hari Dheeraj Kommineni, including AWS Certified Developer – Associate and Oracle Cloud Infrastructure Generative AI Professional, demonstrating expertise in cloud-native development, DevOps, and Generative AI.',
};

export default function CertificatesPage() {
  return <Certificates />;
}
