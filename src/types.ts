export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  role: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  screenshots: string[];
}

export interface Skill {
  name: string;
  icon: 'code' | 'component' | 'server' | 'database' | 'cloud' | 'container';
  category: 'language' | 'framework' | 'tool';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  links?: Array<{ url: string; label: string }>;
}