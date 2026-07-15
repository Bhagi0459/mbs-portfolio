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
    role: 'Software Programmer',
    period: 'May 2021 — July 2024',
    domain: 'Healthcare Administration, Business Administration, Financial Services & Internal Tooling',
    responsibilities: [
      'Angular modules for Gold Coast Health Plan and CA Life Line, healthcare administration platforms',
      'Legacy .NET UI migrated to Angular for Custom Point, in the administration domain',
      'PRISM: migrated a legacy VB-based stock and portfolio information system to Angular for a financial-services client',
      'Internal skill-assessment platform (Online Exam Portal) built with React and Next.js',
    ],
    technologies: ['Angular', 'React', 'Next.js', '.NET', 'Legacy Migration'],
    contributions: [
      'Built and maintained Angular modules for healthcare administration platforms (Gold Coast Health Plan, CA Life Line) and migrated a legacy .NET UI to Angular for Custom Point.',
      'Migrated PRISM, a legacy VB-based stock and portfolio information system, to Angular for a financial-services client, preserving existing business logic.',
      "Built Sorano's internal skill-assessment platform, Online Exam Portal, using React and Next.js.",
    ],
  },
];
