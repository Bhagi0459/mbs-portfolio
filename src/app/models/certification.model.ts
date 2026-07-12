export type CredentialCategory = 'Certification' | 'Continuous Learning';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: CredentialCategory;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeImageUrl?: string;
  badgeImageAlt?: string;
  topics?: string[];
}
