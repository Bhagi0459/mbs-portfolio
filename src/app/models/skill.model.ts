export interface Skill {
  name: string;
  note?: string;
}

export interface SkillGroup {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  skills: Skill[];
}
