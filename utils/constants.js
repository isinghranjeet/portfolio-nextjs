// utils/constants.js

// Navigation menu items
export const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    path: '/#home',
  },
  {
    id: 'about',
    label: 'About',
    path: '/#about',
  },
  {
    id: 'experience',
    label: 'Experience',
    path: '/#experience',
  },
  {
    id: 'projects',
    label: 'Projects',
    path: '/#projects',
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    path: '/#testimonials',
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/#contact',
  },
];

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'mailto:your.email@example.com',
};

// Skills data
export const SKILLS = [
  {
    name: 'JavaScript',
    level: 90,
    category: 'language',
  },
  {
    name: 'React',
    level: 85,
    category: 'framework',
  },
  {
    name: 'Next.js',
    level: 80,
    category: 'framework',
  },
  {
    name: 'Node.js',
    level: 75,
    category: 'backend',
  },
  {
    name: 'HTML/CSS',
    level: 95,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    level: 70,
    category: 'language',
  },
  {
    name: 'MongoDB',
    level: 65,
    category: 'database',
  },
  {
    name: 'PostgreSQL',
    level: 60,
    category: 'database',
  },
];

// Experience data
export const EXPERIENCES = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Tech Company Inc.',
    period: 'Jan 2023 - Present',
    description: [
      'Developed responsive web applications using React and Next.js',
      'Collaborated with UX designers to implement user-friendly interfaces',
      'Optimized application performance resulting in 40% faster load times',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'Digital Agency LLC',
    period: 'Jun 2021 - Dec 2022',
    description: [
      'Built and maintained client websites using modern JavaScript frameworks',
      'Implemented responsive designs that work across all device types',
      'Integrated third-party APIs and services',
    ],
    technologies: ['JavaScript', 'Vue.js', 'CSS3', 'REST APIs'],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'Startup Solutions',
    period: 'Mar 2020 - May 2021',
    description: [
      'Assisted in developing new features for the company product',
      'Fixed bugs and implemented improvements based on user feedback',
      'Participated in code reviews and team meetings',
    ],
    technologies: ['HTML5', 'CSS', 'JavaScript', 'React'],
  },
];

// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    image: '/images/project1.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://yourecommerceapp.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: '/images/project2.jpg',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://yourtaskapp.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current and forecast data for any location.',
    image: '/images/project3.jpg',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://yourweatherapp.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and modern design principles.',
    image: '/images/project4.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
    featured: false,
  },
];

// Testimonials data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Product Manager at TechCorp',
    content: 'Working with [Your Name] was an absolute pleasure. Their attention to detail and problem-solving skills helped us deliver our project ahead of schedule.',
    avatar: '/images/avatar1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CEO at StartupX',
    content: '[Your Name] transformed our web presence with their technical expertise and creative solutions. Highly recommended for any complex web project.',
    avatar: '/images/avatar2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Lead Developer at DevStudio',
    content: 'I\'ve collaborated with [Your Name] on multiple projects and their code quality and communication skills are exceptional. A true professional.',
    avatar: '/images/avatar3.jpg',
    rating: 4,
  },
];

// Contact information
export const CONTACT_INFO = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
};

// Education data
export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2016 - 2020',
    description: 'Specialized in web development and software engineering. Graduated with honors.',
  },
  {
    id: 2,
    degree: 'Full Stack Web Development Bootcamp',
    institution: 'Coding Academy',
    period: '2020',
    description: 'Intensive 12-week program focused on modern web technologies.',
  },
];

// Certifications data
export const CERTIFICATIONS = [
  {
    id: 1,
    name: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://www.credly.com/users/yourusername',
  },
  {
    id: 2,
    name: 'Google Professional Web Developer',
    issuer: 'Google',
    date: '2022',
    credentialUrl: 'https://www.credly.com/users/yourusername',
  },
];

// Animation variants for Framer Motion
export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const STAGGER_CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Theme constants
export const THEME = {
  colors: {
    primary: '#3B82F6', // blue-500
    secondary: '#10B981', // emerald-500
    accent: '#F59E0B', // amber-500
    dark: '#1F2937', // gray-800
    light: '#F9FAFB', // gray-50
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// API endpoints (if applicable)
export const API_ENDPOINTS = {
  contact: '/api/contact',
  projects: '/api/projects',
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minLength: (length) => `Must be at least ${length} characters`,
  maxLength: (length) => `Must be less than ${length} characters`,
};

// Default SEO configuration
export const SEO_CONFIG = {
  title: 'Your Name - Portfolio',
  description: 'A passionate developer creating modern web applications with cutting-edge technologies.',
  keywords: 'developer, portfolio, web development, react, nextjs, javascript',
  author: 'Your Name',
  siteUrl: 'https://yourportfolio.com',
  image: '/images/og-image.jpg',
};

export default {
  NAV_ITEMS,
  SOCIAL_LINKS,
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  TESTIMONIALS,
  CONTACT_INFO,
  EDUCATION,
  CERTIFICATIONS,
  FADE_IN_VARIANTS,
  STAGGER_CONTAINER_VARIANTS,
  THEME,
  API_ENDPOINTS,
  VALIDATION_MESSAGES,
  SEO_CONFIG,
};