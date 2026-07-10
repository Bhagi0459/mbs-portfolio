export type SkillCategory = 'frontend' | 'backend' | 'tooling' | 'cloud' | 'other';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
}
