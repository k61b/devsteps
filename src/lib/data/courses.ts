export type CourseColor = 'pink' | 'purple' | 'blue' | 'green' | 'amber';

export type Course = {
  id: string;
  title: string;
  description: string;
  duration: number;
  language: 'en' | 'tr';
  technologies: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  color: CourseColor;
  featured?: boolean;
};

export const courseColorClasses: Record<
  CourseColor,
  {
    card: string;
    accent: string;
    badge: string;
    button: string;
    title: string;
    text: string;
    chip: string;
  }
> = {
  pink: {
    card: 'border-pink-200 shadow-[0_20px_45px_-25px_rgba(244,114,182,0.6)] hover:border-pink-300 hover:shadow-[0_28px_55px_-22px_rgba(244,114,182,0.7)]',
    accent: 'bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200',
    badge: 'border border-pink-200 bg-pink-50 text-pink-700 shadow-sm',
    button: 'border border-pink-300 bg-pink-50 text-pink-700 shadow-sm hover:bg-pink-100',
    title: 'text-pink-900',
    text: 'text-pink-700',
    chip: 'border border-pink-200 bg-pink-50 text-pink-600 group-hover:bg-white group-hover:text-pink-700',
  },
  purple: {
    card: 'border-purple-200 shadow-[0_20px_45px_-25px_rgba(168,85,247,0.55)] hover:border-purple-300 hover:shadow-[0_28px_55px_-22px_rgba(168,85,247,0.65)]',
    accent: 'bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200',
    badge: 'border border-purple-200 bg-purple-50 text-purple-700 shadow-sm',
    button: 'border border-purple-300 bg-purple-50 text-purple-700 shadow-sm hover:bg-purple-100',
    title: 'text-purple-900',
    text: 'text-purple-700',
    chip: 'border border-purple-200 bg-purple-50 text-purple-600 group-hover:bg-white group-hover:text-purple-700',
  },
  blue: {
    card: 'border-blue-200 shadow-[0_20px_45px_-25px_rgba(59,130,246,0.45)] hover:border-blue-300 hover:shadow-[0_28px_55px_-22px_rgba(59,130,246,0.55)]',
    accent: 'bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200',
    badge: 'border border-blue-200 bg-blue-50 text-blue-700 shadow-sm',
    button: 'border border-blue-300 bg-blue-50 text-blue-700 shadow-sm hover:bg-blue-100',
    title: 'text-blue-900',
    text: 'text-blue-700',
    chip: 'border border-blue-200 bg-blue-50 text-blue-600 group-hover:bg-white group-hover:text-blue-700',
  },
  green: {
    card: 'border-green-200 shadow-[0_20px_45px_-25px_rgba(34,197,94,0.45)] hover:border-green-300 hover:shadow-[0_28px_55px_-22px_rgba(34,197,94,0.55)]',
    accent: 'bg-gradient-to-r from-green-200 via-green-100 to-green-200',
    badge: 'border border-green-200 bg-green-50 text-green-700 shadow-sm',
    button: 'border border-green-300 bg-green-50 text-green-700 shadow-sm hover:bg-green-100',
    title: 'text-green-900',
    text: 'text-green-700',
    chip: 'border border-green-200 bg-green-50 text-green-600 group-hover:bg-white group-hover:text-green-700',
  },
  amber: {
    card: 'border-amber-200 shadow-[0_20px_45px_-25px_rgba(251,191,36,0.45)] hover:border-amber-300 hover:shadow-[0_28px_55px_-22px_rgba(251,191,36,0.55)]',
    accent: 'bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200',
    badge: 'border border-amber-200 bg-amber-50 text-amber-700 shadow-sm',
    button: 'border border-amber-300 bg-amber-50 text-amber-700 shadow-sm hover:bg-amber-100',
    title: 'text-amber-900',
    text: 'text-amber-700',
    chip: 'border border-amber-200 bg-amber-50 text-amber-600 group-hover:bg-white group-hover:text-amber-700',
  },
};

export const courses: Course[] = [
  {
    id: 'js-7day',
    title: 'JavaScript Fundamentals',
    description: 'Learn JavaScript basics with hands-on projects in 7 days',
    duration: 7,
    language: 'en',
    technologies: ['JavaScript', 'Web Development'],
    level: 'Beginner',
    color: 'pink',
    featured: true,
  },
  {
    id: 'react-30day',
    title: 'React Deep Dive',
    description: 'Master React from basics to advanced concepts in 30 days',
    duration: 30,
    language: 'en',
    technologies: ['React', 'JavaScript', 'Web Development'],
    level: 'Intermediate',
    color: 'purple',
    featured: true,
  },
  {
    id: 'ts-7day',
    title: 'TypeScript Quick Start',
    description: 'Get productive with TypeScript in just one week',
    duration: 7,
    language: 'en',
    technologies: ['TypeScript', 'JavaScript'],
    level: 'Intermediate',
    color: 'blue',
    featured: true,
  },
  {
    id: 'node-30day',
    title: 'Node.js Backend Development',
    description: 'Build scalable backend applications with Node.js',
    duration: 30,
    language: 'en',
    technologies: ['Node.js', 'JavaScript', 'Backend'],
    level: 'Intermediate',
    color: 'green',
  },
  {
    id: 'svelte-7day',
    title: 'Svelte Fundamentals',
    description: 'Learn the modern framework Svelte in 7 days',
    duration: 7,
    language: 'en',
    technologies: ['Svelte', 'JavaScript', 'Web Development'],
    level: 'Beginner',
    color: 'amber',
  },
];
