import { SOCIAL_LINKS } from './social-links';
import { CONTACT_INFO } from './contact-info.data';

describe('SOCIAL_LINKS', () => {
  it('includes every candidate platform that has a verified URL in CONTACT_INFO', () => {
    const icons = SOCIAL_LINKS.map((link) => link.icon);
    expect(icons).toEqual(['mail', 'github', 'linkedin', 'upwork', 'fiverr', 'freelancer']);
  });

  it('derives every href from CONTACT_INFO rather than hardcoding it', () => {
    const github = SOCIAL_LINKS.find((link) => link.icon === 'github');
    const linkedin = SOCIAL_LINKS.find((link) => link.icon === 'linkedin');
    const mail = SOCIAL_LINKS.find((link) => link.icon === 'mail');

    expect(github?.href).toBe(CONTACT_INFO.githubUrl);
    expect(linkedin?.href).toBe(CONTACT_INFO.linkedinUrl);
    expect(mail?.href).toBe(`mailto:${CONTACT_INFO.email}`);
  });

  it('never emits a link with an empty or undefined href', () => {
    for (const link of SOCIAL_LINKS) {
      expect(link.href).toBeTruthy();
    }
  });
});
