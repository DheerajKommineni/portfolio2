'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Copy, Check, FileDown, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = 'dheerajkom2804@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sri Hari Dheeraj Kommineni
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Senior Software Engineer
        </motion.h2>

        {/* Summary */}
        <motion.p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          7+ years of experience building scalable, cloud-native web
          applications across Enterprise, Retail, and Healthcare domains using
          React, Python, AWS, Kubernetes, and Generative AI technologies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="/files/cv_pdf/SriHariDheerajKommineni.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>

          <Link
            href="/about"
            className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            <User className="w-5 h-5" />
            About Me
          </Link>
        </motion.div>

        {/* Email */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="font-mono">{email}</span>
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </motion.div>

        {/* Social */}
        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/dheerajkom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/dheeraj-kommineni"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
