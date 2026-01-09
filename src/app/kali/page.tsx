import type { Metadata } from 'next';
import Kali from '@/pages/Kali';

export const metadata: Metadata = {
  title: 'Kali Linux Virtual Lab | Sri Hari Dheeraj Kommineni',
  description:
    'An educational Kali Linux virtual lab project by Sri Hari Dheeraj Kommineni, focused on ethical security learning, DevSecOps practices, and hands-on Linux experimentation within isolated virtual environments.',
};

export default function KaliPage() {
  return <Kali />;
}
