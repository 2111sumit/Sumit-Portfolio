import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail, LuPhone } from 'react-icons/lu';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

export const hero = {
  name: 'Sumit Tiwari',
  title: 'Full Stack Developer & Problem Solver',
  description:
    'Building resilient, user-focused products across the MERN stack while blending data-driven insights from machine learning and clean API design.',
  location: ' India',
  availability: 'Open to internships & Jobs',
  highlights: [
    'Crafting pixel-perfect experiences with React and Tailwind CSS',
    'Designing secure REST APIs backed by scalable data models',
    'Applying machine learning to ship intelligent product features',
    'Driving outcomes through competitive programming grit',
  ],
  contact: [
    {
      label: 'sumitkumartiwari627@gmail.com',
      href: 'mailto:sumitkumartiwari627@gmail.com',
      icon: LuMail,
    },
    {
      label: '+91 7459036709',
      href: 'tel:+917459036709',
      icon: LuPhone,
    },
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/sumitkumartiwari',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sumitkumartiwari',
      icon: FaLinkedin,
    },
    {
      label: 'GeeksforGeeks',
      href: 'https://auth.geeksforgeeks.org/user/sumitkumartiwari627/practice/',
      icon: SiGeeksforgeeks,
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/sumitkumartiwari627/',
      icon: SiLeetcode,
    },
  ],
};

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'JavaScript', 'Data Structures & Algorithms'],
  },
  {
    category: 'Technical Skills',
    items: [
      'Full Stack Development (MERN)',
      'REST APIs',
      'Machine Learning',
      'DBMS',
      'OOP',
      'SQL',
    ],
  },
  {
    category: 'Frameworks & Tools',
    items: ['React.js', 'Tailwind CSS', 'Git & GitHub', 'MongoDB', 'TensorFlow'],
  },
];

export const projects = [
  {
    title: 'Rate Local Shop',
    description:
      'Full-stack product review web app enabling communities to discover and rate neighborhood stores with secure authentication and responsive UI.',
    tech: ['React.js', 'Node.js', 'Express', 'JWT', 'PostgreSQL'],
    repo: 'https://github.com/sumitkumartiwari/rate-local-shop',
  },
  {
    title: 'Fake News Detection System',
    description:
      'Machine learning pipeline combining NLP feature engineering with a FastAPI microservice and intuitive dashboard to identify misinformation in real time.',
    tech: ['Python', 'FastAPI', 'Scikit-learn', 'MongoDB', 'React'],
    repo: 'https://github.com/sumitkumartiwari/fake-news-detection-system',
  },
];

export const education = [
  {
    school: 'Vellore Institute of Technology',
    program: 'B.Tech in Computer Science and Engineering',
    period: '2022 - 2026',
  },
  {
    school: 'Khedu Intermediate College',
    program: 'Class XII',
    period: '2021 - 2022',
  },
  {
    school: 'R.D.I.C. Gangapatti',
    program: 'Class X',
    period: '2019 - 2020',
  },
];

export const certifications = [
  { title: 'AWS Practitioner', issuer: 'Amazon Web Services', year: 2025, image: 'aws-fixed.jpg' },
  { title: 'MERN Developer - ETHNUS', issuer: 'ETHNUS', year: 2025, image: 'mern-fixed.jpg' },
  { title: 'Blockchain Fundamentals', issuer: 'Coursera', year: 2025, image: 'blockchain-fixed.jpg' },
  { title: 'Machine Learning with Python', issuer: 'IBM Skills Network', year: 2024, image: 'ml-fixed.jpg' },
];

export const achievements = [
  'Solved 300+ LeetCode problems',
  'Solved 150+ GeeksforGeeks problems',
  'Core Member, Software Development Club',
  'NSS Club Volunteer',
];

export const languages = [
  { name: 'Hindi', level: 'Native' },
  { name: 'English', level: 'Proficient' },
];

export const hobbies = ['Badminton', 'Listening to Music'];








