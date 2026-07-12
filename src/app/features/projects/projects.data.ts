import { Project } from '../../models/project.model';

export const PROFESSIONAL_PROJECTS: Project[] = [
  {
    id: 'prism',
    title: 'Prism',
    category: 'Professional',
    client: 'Raymond James',
    domain: 'Financial Services',
    description:
      'An enterprise Angular application for investment portfolio management, built for client Raymond James.',
    problemSolved:
      'Raymond James needed a reliable, enterprise-grade interface for managing investment portfolios, backed by data from REST APIs and SQL Server.',
    role: 'Angular developer responsible for building the enterprise application and integrating REST APIs.',
    technologies: ['Angular', 'REST APIs', 'SQL Server'],
    keyLearnings: [
      'Building enterprise Angular applications for regulated financial workflows.',
      'Integrating REST APIs and SQL Server-backed data into a production-grade interface.',
    ],
  },
  {
    id: 'healthcare-platform',
    title: 'Healthcare Platform',
    category: 'Professional',
    domain: 'Healthcare',
    description:
      "Enterprise Angular applications supporting Electronic Medical Records, Workers' Compensation, and healthcare administration workflows.",
    problemSolved:
      'Healthcare administration teams needed dynamic, reliable Angular interfaces integrated with backend APIs, SQL Server, and operational reporting.',
    role: 'Sole Angular developer building enterprise UI, integrating .NET APIs and SQL Server, and developing Power BI dashboards for operational reporting.',
    technologies: ['Angular', '.NET APIs', 'SQL Server', 'Power BI'],
    keyLearnings: [
      'Building and maintaining enterprise Angular applications across multiple healthcare modules.',
      'Developing Power BI dashboards for operational KPIs and reporting.',
    ],
  },
  {
    id: 'business-administration-portal',
    title: 'Business Administration Portal',
    category: 'Professional',
    domain: 'Business Administration',
    description:
      'Enterprise administration portals featuring dynamic forms and workflow management for business operations.',
    problemSolved:
      'Teams needed configurable, reusable Angular interfaces for dynamic forms and workflow management across business administration processes.',
    role: 'Angular developer building dynamic forms, workflow management features, and enterprise UI.',
    technologies: ['Angular'],
    keyLearnings: [
      'Designing reusable, configuration-driven Angular components for dynamic forms.',
      'Building workflow management interfaces for enterprise administration.',
    ],
  },
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 'mbs-portfolio',
    title: 'MBS Personal Brand Website',
    category: 'Personal',
    description: 'This portfolio itself — a premium, recruiter-focused personal site.',
    problemSolved:
      'Needed a fast, accessible, and visually premium way to present my professional experience and projects to recruiters and hiring teams.',
    role: 'Sole developer and designer — architecture, design system, and implementation.',
    technologies: ['Angular', 'Signals', 'Standalone Components', 'GSAP', 'SCSS'],
    keyLearnings: [
      'Building a token-based design system from scratch.',
      'Implementing lazy-loaded routes, accessibility, and SEO across a multi-page Angular application.',
    ],
    repoUrl: 'https://github.com/Bhagi0459/mbs-portfolio',
  },
  {
    id: 'medical-analytics-dashboard',
    title: 'Medical Analytics Dashboard',
    category: 'Personal',
    description: 'A dashboard for visualizing medical analytics data with modern Angular components.',
    problemSolved:
      'Explored how to present complex medical data clearly through charts and dashboard UI patterns.',
    role: 'Sole developer — design and implementation.',
    technologies: ['Angular', 'Charts'],
    keyLearnings: [
      'Building dashboard UI with modern Angular components.',
      'Visualizing data through charts in a clear, usable layout.',
    ],
  },
  {
    id: 'nimbus-ai',
    title: 'Nimbus AI',
    category: 'Personal',
    description: 'A weather dashboard integrating AI and REST APIs for enriched forecasting.',
    problemSolved:
      'Explored integrating AI capabilities with real-time weather data through REST APIs.',
    role: 'Sole developer — design and implementation.',
    technologies: ['Angular', 'REST APIs'],
    keyLearnings: [
      'Integrating AI capabilities into an Angular application.',
      'Working with REST APIs to build a real-time weather dashboard.',
    ],
  },
  {
    id: 'career-pilot',
    title: 'Career Pilot',
    category: 'Personal',
    description:
      'A frontend-focused application exploring enterprise-grade Angular architecture and responsive UI.',
    problemSolved:
      'Explored frontend architecture patterns for a responsive, enterprise-style Angular application.',
    role: 'Sole developer — design and implementation.',
    technologies: ['Angular'],
    keyLearnings: [
      'Applying frontend architecture patterns in a real Angular application.',
      'Building fully responsive UI across device sizes.',
    ],
  },
];
