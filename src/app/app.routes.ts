import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: 'experience',
    loadComponent: () => import('./features/experience/experience').then((m) => m.Experience),
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills').then((m) => m.Skills),
  },
  {
    path: 'insights',
    loadComponent: () => import('./features/insights/insights').then((m) => m.Insights),
  },
  {
    path: 'certifications',
    loadComponent: () =>
      import('./features/certifications/certifications').then((m) => m.Certifications),
  },
  {
    path: 'resume',
    loadComponent: () => import('./features/resume/resume').then((m) => m.Resume),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    loadComponent: () => import('./shared/not-found/not-found').then((m) => m.NotFound),
  },
];
