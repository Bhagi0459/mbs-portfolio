export type SocialIconName = 'mail' | 'github' | 'linkedin' | 'upwork' | 'fiverr' | 'freelancer';

export interface SocialLink {
  icon: SocialIconName;
  label: string;
  ariaLabel: string;
  href: string;
  external: boolean;
}
