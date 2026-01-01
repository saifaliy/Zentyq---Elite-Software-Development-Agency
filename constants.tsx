
import React from 'react';
import { Service, Project, Testimonial, Faq } from './types';

export const SERVICES: Service[] = [
  {
    id: 'custom-web',
    title: 'Custom Web Development',
    description: 'Scalable, high-performance web applications tailored to your specific business workflows.',
    icon: '🌐',
    features: ['React & Next.js experts', 'Progressive Web Apps (PWA)', 'API-first architecture', 'Responsive design'],
    benefits: ['Enhanced user engagement', 'Optimized performance', 'Infinite scalability']
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that put your brand in your customers\' pockets.',
    icon: '📱',
    features: ['iOS & Android development', 'React Native & Flutter', 'Real-time synchronization', 'Offline capabilities'],
    benefits: ['Direct customer connection', 'Brand loyalty', 'Seamless mobile UX']
  },
  {
    id: 'ai-llm',
    title: 'AI & LLM Integration',
    description: 'Empower your software with the latest in Generative AI and Large Language Models.',
    icon: '🤖',
    features: ['Gemini & GPT integration', 'Custom RAG pipelines', 'Natural Language Processing', 'Automated workflows'],
    benefits: ['Reduced operational costs', 'Intelligent automation', 'Data-driven insights']
  },
  {
    id: 'poc-dev',
    title: 'PoC Development',
    description: 'Validate your business idea quickly with a high-fidelity Proof of Concept.',
    icon: '🧪',
    features: ['Rapid prototyping', 'Minimum Viable Product (MVP)', 'Feasibility testing', 'Investor-ready demos'],
    benefits: ['Market validation', 'Cost-effective learning', 'Faster time-to-market']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Product Design',
    description: 'Strategic design that balances aesthetic beauty with functional excellence.',
    icon: '🎨',
    features: ['User research & personas', 'Wireframing & prototyping', 'Visual identity systems', 'Usability testing'],
    benefits: ['Higher conversion rates', 'Increased user retention', 'Stronger brand perception']
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software (ERP/CRM)',
    description: 'Unified systems that streamline complex enterprise operations and customer relationships.',
    icon: '🏢',
    features: ['Custom ERP/CRM builds', 'Legacy system modernization', 'Secure data architecture', 'Third-party integrations'],
    benefits: ['Operational efficiency', 'Centralized data', 'Secure infrastructure']
  },
  {
    id: 'cms-ecommerce',
    title: 'CMS & E-Commerce',
    description: 'Dynamic digital storefronts and content platforms built to drive sales and engagement.',
    icon: '🛒',
    features: ['Shopify & WooCommerce', 'Headless CMS (Strapi, Sanity)', 'Payment gateway integration', 'Inventory management'],
    benefits: ['Scale sales globally', 'Easy content management', 'Secure transactions']
  },
  {
    id: 'branding-logo',
    title: 'Branding & Logo Design',
    description: 'Crafting the visual soul of your brand to resonate with your target audience.',
    icon: '✨',
    features: ['Logo design', 'Brand style guides', 'Typography selection', 'Color psychology'],
    benefits: ['Instant recognition', 'Professional credibility', 'Consistent brand voice']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Solutions',
    description: 'Automated deployment pipelines and cloud infrastructure for 99.9% uptime.',
    icon: '☁️',
    features: ['AWS/Azure/GCP setup', 'CI/CD automation', 'Docker & Kubernetes', 'Serverless architecture'],
    benefits: ['Seamless deployments', 'High availability', 'Infrastructure cost savings']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'FinFlow Enterprise',
    description: 'A comprehensive fintech dashboard for real-time asset tracking.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    problem: 'The client had disconnected data sources and manual spreadsheet tracking.',
    solution: 'We built a unified cloud platform that automated data ingestion and provided real-time insights.',
    image: 'https://picsum.photos/seed/fin/800/600'
  },
  {
    id: '2',
    name: 'HealthSync Mobile',
    description: 'Health monitoring app with AI-powered dietary suggestions.',
    tech: ['React Native', 'Gemini AI', 'Firebase'],
    problem: 'Users struggled to keep consistent health logs and understand dietary impacts.',
    solution: 'An intuitive mobile app using LLMs to analyze food photos and provide instant health feedback.',
    image: 'https://picsum.photos/seed/health/800/600'
  },
  {
    id: '3',
    name: 'EcoStore Global',
    description: 'Headless e-commerce platform for sustainable products.',
    tech: ['Next.js', 'Shopify Plus', 'Tailwind CSS'],
    problem: 'Slow page loads on the previous platform were hurting conversion rates.',
    solution: 'A high-performance headless frontend that reduced load times by 70%.',
    image: 'https://picsum.photos/seed/eco/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    country: 'USA',
    feedback: 'Zentyq transformed our vision into a tangible product in record time. Their technical expertise is only matched by their professionalism.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 't2',
    name: 'Marc Dupond',
    role: 'Product Lead',
    country: 'France',
    feedback: 'The team at Zentyq handled our complex ERP migration with zero downtime. Truly the best partner we could have asked for.',
    avatar: 'https://picsum.photos/seed/marc/100/100'
  },
  {
    id: 't3',
    name: 'Hiroshi Tanaka',
    role: 'Founder',
    country: 'Japan',
    feedback: 'Innovation is in their DNA. Zentyq helped us integrate AI into our core product, giving us a massive competitive edge.',
    avatar: 'https://picsum.photos/seed/hiro/100/100'
  }
];

export const FAQS: Faq[] = [
  {
    question: 'How does Zentyq work?',
    answer: 'We follow an agile methodology. We start with a discovery phase, followed by rapid prototyping, development iterations, and a rigorous QA phase before deployment.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'Our core stack includes React, Next.js, TypeScript, Node.js, Python, and cloud platforms like AWS and Google Cloud. We also specialize in Gemini AI integrations.'
  },
  {
    question: 'How long does a project take?',
    answer: 'Simple projects (MVPs) can take 4-8 weeks, while complex enterprise systems can range from 3 to 6 months depending on requirements.'
  },
  {
    question: 'Do you provide support after delivery?',
    answer: 'Yes, we offer flexible maintenance and support packages to ensure your software remains secure, updated, and performing at its peak.'
  }
];
