export interface JourneyMilestone {
  id: string;
  role: string;
  company: string;
  period: string;
  domain: string;
  description: string;
}

export interface Specialization {
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  description: string;
}

export const JOURNEY: JourneyMilestone[] = [
  {
    id: 'commerztech',
    role: 'Senior Software Programmer',
    company: 'CommerzTech India Pvt. Ltd.',
    period: 'September 2024 — Present',
    domain: 'Healthcare',
    description:
      "Sole Angular developer across multiple enterprise healthcare modules — including Electronic Medical Records (EMR), Workers' Compensation workflows, and healthcare administration systems. Building dynamic, reusable Angular components and forms, integrating REST APIs with backend services and SQL Server, and developing Power BI dashboards for operational reporting.",
  },
  {
    id: 'sorano',
    role: 'Software Programmer',
    company: 'Sorano Technologies Pvt. Ltd.',
    period: 'May 2021 — July 2024',
    domain: 'Healthcare Administration, Business Administration, Financial Services & Internal Tooling',
    description:
      'Built Angular modules for healthcare administration platforms (Gold Coast Health Plan, CA Life Line), migrated a legacy .NET UI to Angular for Custom Point, and migrated PRISM — a legacy VB-based stock and portfolio information system — to Angular for a financial-services client. Also built Sorano\'s internal skill-assessment platform, Online Exam Portal, using React and Next.js.',
  },
];

export const SPECIALIZATIONS: Specialization[] = [
  {
    title: 'Enterprise Angular Architecture',
    description:
      'Designing scalable, maintainable Angular applications with standalone components and modern state patterns.',
  },
  {
    title: 'Dynamic Forms & Reusable Components',
    description:
      'Building reusable, configuration-driven Angular components and forms used consistently across multiple modules.',
  },
  {
    title: 'REST API & Backend Integration',
    description:
      'Integrating Angular applications with REST APIs and enterprise backend services end to end.',
  },
  {
    title: 'Operational Reporting & Dashboards',
    description: 'Developing Power BI dashboards for operational KPIs and business reporting.',
  },
  {
    title: 'Cross-Domain Enterprise Delivery',
    description:
      'Delivering production-grade applications across healthcare, financial services, and business administration.',
  },
];

export const CORE_TECHNOLOGIES: string[] = [
  'Angular',
  'TypeScript',
  'Signals',
  'Standalone Components',
  'Reactive Forms',
  'RxJS',
  'Angular Material',
  'PrimeNG',
  'SCSS',
  'REST APIs',
  '.NET',
  'SQL Server',
  'Power BI',
  'Git',
  'GitHub',
];

export const INDUSTRIES: Industry[] = [
  {
    name: 'Financial Services',
    description:
      'Built PRISM, a stock portfolio management platform for a financial-services client — engineering interfaces for real-time financial data and portfolio operations.',
  },
  {
    name: 'Business Administration',
    description:
      'Delivered enterprise business administration applications focused on workflow efficiency and operational usability.',
  },
  {
    name: 'Healthcare',
    description:
      "Currently building Electronic Medical Records (EMR), Workers' Compensation, and healthcare administration systems as the sole Angular developer across multiple modules.",
  },
];
