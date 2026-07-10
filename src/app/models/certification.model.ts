export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  badgeImageUrl: string;
  badgeImageAlt: string;
}
