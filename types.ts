
export enum Page {
  Home = 'home',
  Services = 'services',
  About = 'about',
  Portfolio = 'portfolio',
  Contact = 'contact'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  feedback: string;
  avatar: string;
}

export interface Faq {
  question: string;
  answer: string;
}
