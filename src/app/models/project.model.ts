export type ProjectCategory = 'Professional' | 'Personal';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  problemSolved: string;
  role: string;
  technologies: string[];
  /** Bullet-point takeaways distinct from `role` — omit rather than restate `role` as a list. */
  keyLearnings?: string[];
  /** The employer/company that built this — distinct from `client`, which names who it was built for. */
  company?: string;
  client?: string;
  domain?: string;
  repoUrl?: string;
  liveUrl?: string;
  thumbnailUrl?: string;
  thumbnailAlt?: string;
}
