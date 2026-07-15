import { Project } from '../../models/project.model';

export const PROFESSIONAL_PROJECTS: Project[] = [
  {
    id: 'gold-coast-health-plan',
    title: 'Gold Coast Health Plan',
    category: 'Professional',
    company: 'Sorano Technologies',
    domain: 'Healthcare administration',
    description: 'Healthcare administration platform, Angular 16.',
    problemSolved:
      "The health plan's administration workflows needed a modern, maintainable Angular front end.",
    role: "Built and maintained Angular 16 modules supporting the platform's day-to-day administration workflows.",
    technologies: ['Angular 16', 'Administration'],
  },
  {
    id: 'custom-point',
    title: 'Custom Point',
    category: 'Professional',
    company: 'Sorano Technologies',
    domain: 'Administration',
    description: 'Legacy .NET UI migrated to Angular 16.',
    problemSolved:
      'A legacy .NET user interface in the administration domain needed modernizing without disrupting existing workflows.',
    role: 'Migrated the legacy .NET UI to Angular 16, modernizing the front end for the administration domain.',
    technologies: ['Angular 16', 'Legacy Migration', '.NET'],
  },
  {
    id: 'ca-life-line',
    title: 'CA Life Line',
    category: 'Professional',
    company: 'Sorano Technologies',
    domain: 'Healthcare administration',
    description: 'Healthcare administration modules, Angular 14.',
    problemSolved:
      'Workflow management for a healthcare administration application needed dedicated, maintainable Angular modules.',
    role: 'Built Angular 14 modules for healthcare administration and workflow management.',
    technologies: ['Angular 14', 'Administration'],
  },
  {
    id: 'prism',
    title: 'PRISM',
    category: 'Professional',
    company: 'Sorano Technologies',
    domain: 'Financial',
    description: 'VB-based stock/portfolio system migrated to Angular 12.',
    problemSolved:
      'A legacy VB-based stock/portfolio information system in the financial domain needed a modern interface without disrupting the underlying business logic it relied on.',
    role: 'Migrated the interface layer to Angular 12 while preserving existing business logic, modernizing the UI/UX without a ground-up rebuild.',
    technologies: ['Angular 12', 'Legacy Migration', 'Financial Domain'],
  },
  {
    id: 'online-exam-portal',
    title: 'Online Exam Portal',
    category: 'Professional',
    company: 'Sorano Technologies',
    domain: 'Internal platform',
    description: 'Internal skill-assessment platform, React & Next.js.',
    problemSolved: 'Sorano needed an internal platform to run skill assessments for candidates and employees.',
    role: 'Built the internal assessment platform using React and Next.js.',
    technologies: ['React', 'Next.js'],
  },
  {
    id: 'emr5',
    title: 'EMR5',
    category: 'Professional',
    company: 'CommerzTech',
    domain: "Healthcare / EMR / Corporate Health / Workers' Compensation",
    description: "Enterprise EMR platform for corporate & workers' compensation workflows.",
    problemSolved:
      "The EMR platform needed secure, role-based patient and provider data handling across corporate health and workers' compensation workflows.",
    role: 'Built Angular modules for patient and provider workflows, Power BI dashboards with DAX measures, SQL stored procedures, and .NET API integrations, with role-based dashboard visibility.',
    technologies: ['Angular', 'Power BI', 'DAX', 'SQL Server', '.NET API'],
  },
  {
    id: 'acme-health',
    title: 'Acme Health',
    category: 'Professional',
    company: 'CommerzTech',
    description: "CommerzTech's own HIPAA-compliant AI medical-reporting product.",
    problemSolved:
      "Acme Health is CommerzTech's own product — it needed a HIPAA-compliant front end for an AI-driven medical reporting platform, with secure visualization of sensitive clinical data.",
    role: "Built the product's Angular frontend, focused on secure data visualization and HIPAA-compliant handling of patient data.",
    technologies: ['Angular', 'HIPAA', 'Data Visualization'],
  },
];

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 'nimbus-ai',
    title: 'Nimbus AI',
    category: 'Personal',
    description: 'AI-powered weather intelligence platform.',
    problemSolved:
      'Build a self-directed, production-grade Angular application from scratch — architecture, backend middleware, and deployment — to prove out the newest Angular patterns beyond client work.',
    role: 'Designed and built the full stack: an Angular 19 frontend using Standalone Components and Signals-based state management, and an Express.js middleware layer handling secure communication with the Groq API for AI-generated weather insights.',
    technologies: [
      'Angular 19',
      'Signals',
      'Standalone Components',
      'Express.js',
      'Groq API',
      'Vercel',
      'Render',
      'GitHub Actions',
    ],
    liveUrl: 'https://nimbus-ai-phi.vercel.app/',
    repoUrl: 'https://github.com/Bhagi0459/nimbus-ai',
  },
  {
    id: 'career-pilot',
    title: 'CareerPilot',
    category: 'Personal',
    description: 'Full-stack job application tracking platform.',
    problemSolved:
      'Job seekers often track applications, recruiters, and interview stages across scattered spreadsheets and notes, with no single, secure place to see progress at a glance.',
    role: 'Designed and built a full-stack platform end to end: an Angular 19 frontend using Standalone Components, Signals, computed state, and an RxJS-driven search pipeline, talking to an ASP.NET Core .NET 10 REST API secured with JWT authentication and backed by PostgreSQL via EF Core. Implemented a secure password-reset token architecture, Dockerized the API, and added 39 automated frontend/backend tests. Deployed across Vercel, Render, and Neon.',
    technologies: [
      'Angular 19',
      'Standalone Components',
      'Signals',
      'RxJS',
      'ASP.NET Core',
      '.NET 10',
      'PostgreSQL',
      'EF Core',
      'Docker',
      'JWT Authentication',
    ],
    liveUrl: 'https://career-pilot-brown.vercel.app/',
    repoUrl: 'https://github.com/Bhagi0459/career-pilot',
  },
];
