export type ProjectCategory = 'Professional' | 'Personal';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  problemSolved: string;
  role: string;
  technologies: string[];
  keyLearnings: string[];
  client?: string;
  domain?: string;
  repoUrl?: string;
  liveUrl?: string;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
}
