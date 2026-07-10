export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
