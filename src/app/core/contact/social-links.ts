import { SocialIconName, SocialLink } from '../../models/social-link.model';
import { CONTACT_INFO } from './contact-info.data';

interface SocialLinkCandidate {
  icon: SocialIconName;
  label: string;
  ariaLabel: string;
  href: string | undefined;
  external: boolean;
}

const SOCIAL_LINK_CANDIDATES: SocialLinkCandidate[] = [
  { icon: 'mail', label: 'Email', ariaLabel: 'Send email', href: `mailto:${CONTACT_INFO.email}`, external: false },
  { icon: 'github', label: 'GitHub', ariaLabel: 'GitHub profile', href: CONTACT_INFO.githubUrl, external: true },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    ariaLabel: 'LinkedIn profile',
    href: CONTACT_INFO.linkedinUrl,
    external: true,
  },
  { icon: 'upwork', label: 'Upwork', ariaLabel: 'Upwork profile', href: CONTACT_INFO.upworkUrl, external: true },
  { icon: 'fiverr', label: 'Fiverr', ariaLabel: 'Fiverr profile', href: CONTACT_INFO.fiverrUrl, external: true },
  {
    icon: 'freelancer',
    label: 'Freelancer',
    ariaLabel: 'Freelancer profile',
    href: CONTACT_INFO.freelancerUrl,
    external: true,
  },
];

/**
 * Single source of truth for the icon-based social/contact row (Footer, and any future
 * consumer). Every entry derives its href from CONTACT_INFO — nothing is duplicated or
 * hardcoded here — and a platform is only included once CONTACT_INFO actually has a verified
 * URL for it, so adding a new platform later is just adding a field to CONTACT_INFO.
 */
export const SOCIAL_LINKS: SocialLink[] = SOCIAL_LINK_CANDIDATES.filter(
  (link): link is SocialLinkCandidate & { href: string } => !!link.href,
);
