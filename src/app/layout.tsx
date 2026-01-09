import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Sri Hari Dheeraj Kommineni | Senior Full Stack Software Engineer',
  description:
    'Sri Hari Dheeraj Kommineni is a Senior Full Stack Software Engineer with 7+ years of experience building scalable, cloud-native applications across enterprise, retail, and healthcare domains using React, Python, AWS, Kubernetes, and Generative AI.',
  keywords: [
    'Sri Hari Dheeraj Kommineni',
    'Dheeraj Kommineni',
    'Senior Full Stack Software Engineer',
    'Full Stack Engineer',
    'React Developer',
    'Python Developer',
    'AWS Engineer',
    'Cloud Native Applications',
    'Microservices Architecture',
    'FastAPI Developer',
    'Kubernetes',
    'DevOps',
    'Generative AI',
    'LangChain',
    'RAG Pipelines',
  ],
  authors: [{ name: 'Sri Hari Dheeraj Kommineni' }],
  creator: 'Sri Hari Dheeraj Kommineni',
  applicationName: 'Sri Hari Dheeraj Kommineni Portfolio',
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  metadataBase: new URL('https://dheerajkom.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dheerajkom.vercel.app/',
    title: 'Sri Hari Dheeraj Kommineni | Senior Full Stack Software Engineer',
    description:
      'Senior Full Stack Software Engineer specializing in scalable backend systems, cloud-native architectures, and Generative AI solutions.',
    siteName: 'Sri Hari Dheeraj Kommineni Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Hari Dheeraj Kommineni | Senior Full Stack Software Engineer',
    description:
      'Senior Full Stack Software Engineer with expertise in React, Python, AWS, Kubernetes, and Generative AI.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="
						default-src 'self' https: data: blob:;
						script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:;
						style-src 'self' 'unsafe-inline' https:;
						img-src 'self' https: data: blob:;
						font-src 'self' https: data:;
						connect-src 'self' https: data: blob:;
						worker-src 'self' blob:;
					"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Background3D />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <SpeedInsights />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
