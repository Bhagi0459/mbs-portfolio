export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}
