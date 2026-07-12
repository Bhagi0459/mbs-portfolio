import { Experience } from '../../models/experience.model';

export const EXPERIENCE: Experience[] = [
  {
    id: 'commerztech',
    company: 'CommerzTech India Pvt. Ltd.',
    role: 'Senior Software Programmer',
    period: 'September 2024 — Present',
    domain: 'Healthcare',
    responsibilities: [
      'Electronic Medical Records (EMR) systems',
      "Workers' Compensation workflows",
      'Healthcare Administration systems',
      'Enterprise UI development for Angular applications',
    ],
    technologies: ['Angular', 'REST APIs', '.NET', 'SQL Server', 'Power BI'],
    contributions: [
      "Delivered Angular-based enterprise UI across Electronic Medical Records, Workers' Compensation, and Healthcare Administration systems.",
      'Integrated REST APIs with .NET services and SQL Server, and built Power BI dashboards for operational reporting.',
    ],
  },
  {
    id: 'sorano',
    company: 'Sorano Technologies Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'May 2021 — July 2024',
    domain: 'Financial Services & Business Administration',
    project: 'Prism · Client: Raymond James',
    responsibilities: [
      'Investment Portfolio Management for Prism, built for client Raymond James',
      'Enterprise Angular applications and REST API integration for Prism',
      'SQL Server-backed data for Prism',
      'Enterprise administration portals with dynamic forms and workflow management',
      'Reusable Angular components across business administration applications',
    ],
    technologies: ['Angular', 'REST APIs', 'SQL Server'],
    contributions: [
      'Delivered Prism, an investment portfolio management platform for client Raymond James, using enterprise Angular applications integrated with REST APIs and SQL Server.',
      'Built enterprise administration portals with dynamic forms, workflow management, and reusable Angular components for business administration applications.',
    ],
  },
];
