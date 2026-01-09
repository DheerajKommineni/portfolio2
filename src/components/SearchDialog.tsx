'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Command, ArrowRight } from 'lucide-react';

const searchData = [
  {
    title: 'Home',
    description: 'Go to the portfolio home page',
    path: '/',
    keywords: [
      'home',
      'portfolio',
      'sri hari dheeraj kommineni',
      'dheeraj kommineni',
      'senior full stack engineer',
      'software engineer',
      'full stack developer',
    ],
  },
  {
    title: 'About',
    description: 'Learn more about my professional background',
    path: '/about',
    keywords: [
      'about',
      'profile',
      'background',
      'bio',
      'resume',
      'senior engineer',
      'full stack',
      'cloud',
      'genai',
    ],
  },
  {
    title: 'Experience',
    description: 'Enterprise professional experience',
    path: '/experience',
    keywords: [
      'experience',
      'work',
      'career',
      'professional',
      'volkswagen',
      'hp',
      'ulta beauty',
      'enterprise',
      'full stack engineer',
    ],
  },
  {
    title: 'Projects',
    description: 'Enterprise projects and case studies',
    path: '/projects',
    keywords: [
      'projects',
      'case studies',
      'enterprise systems',
      'cloud-native',
      'distributed systems',
      'genai',
      'microservices',
    ],
  },
  {
    title: 'Skills',
    description: 'Technical skills and tools',
    path: '/skills',
    keywords: [
      'skills',
      'technologies',
      'python',
      'react',
      'aws',
      'kubernetes',
      'fastapi',
      'cloud',
      'devops',
      'genai',
    ],
  },
  {
    title: 'Education',
    description: 'Academic background',
    path: '/education',
    keywords: [
      'education',
      'masters',
      'computer science',
      'california state university fullerton',
      'bml munjal university',
    ],
  },
  {
    title: 'Certifications',
    description: 'Professional certifications',
    path: '/certificates',
    keywords: [
      'certifications',
      'aws certified developer',
      'oracle generative ai',
      'cloud certifications',
    ],
  },
  {
    title: 'Contact',
    description: 'Get in touch for opportunities',
    path: '/contact',
    keywords: [
      'contact',
      'email',
      'hire',
      'opportunities',
      'full time',
      'contract',
    ],
  },
];

const SearchDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(searchData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }

      if (!isOpen) return;

      if (e.key === 'Escape') setIsOpen(false);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % results.length);
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
      }

      if (e.key === 'Enter' && results.length > 0) {
        e.preventDefault();
        router.push(results[selectedIndex].path);
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, router]);

  useEffect(() => {
    if (!searchQuery) {
      setResults(searchData);
      setSelectedIndex(0);
      return;
    }

    const searchLower = searchQuery.toLowerCase();
    const filtered = searchData.filter(
      item =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.keywords.some(k => k.toLowerCase().includes(searchLower)),
    );

    setResults(filtered);
    setSelectedIndex(0);
  }, [searchQuery]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-white transition-colors bg-white/10 rounded-lg"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm hidden sm:block">Search…</span>
        <span className="hidden md:flex items-center gap-1 px-1.5 py-0.5 text-xs bg-white/10 rounded">
          <Command className="w-3 h-3" />
          <span>K</span>
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative mx-auto mt-24 w-full max-w-2xl px-4">
        <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
          <div className="flex items-center px-4 border-b border-white/10">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search portfolio…"
              className="w-full px-4 py-4 text-white bg-transparent outline-none"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              autoFocus
            />
            <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
              Esc
            </span>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {results.length === 0 ? (
              <div className="p-4 text-sm text-gray-400">No results found.</div>
            ) : (
              results.map((result, index) => (
                <button
                  key={result.path}
                  className={`w-full px-4 py-3 text-left flex justify-between items-center transition-colors ${
                    index === selectedIndex ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                  onClick={() => {
                    router.push(result.path);
                    setIsOpen(false);
                  }}
                >
                  <div>
                    <div className="text-white font-medium">{result.title}</div>
                    <div className="text-sm text-gray-400">
                      {result.description}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 text-gray-400 ${
                      index === selectedIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
