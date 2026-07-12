import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import gsap from 'gsap';
import { registerGsapPlugins } from '../../core/animation/gsap.config';
import { SeoService } from '../../core/seo/seo';
import { UiSectionHeading } from '../../shared/ui-section-heading/ui-section-heading';
import { ProjectCard } from './project-card/project-card';
import { PERSONAL_PROJECTS, PROFESSIONAL_PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  imports: [UiSectionHeading, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('projectsRoot');

  protected readonly professionalProjects = PROFESSIONAL_PROJECTS;
  protected readonly personalProjects = PERSONAL_PROJECTS;

  constructor() {
    this.seo.updateMetadata({
      title: 'Projects — Bhagya Sankar Maddela',
      description:
        'Enterprise and personal Angular projects spanning financial services, healthcare, and business administration.',
    });

    afterNextRender(() => this.playReveal());
  }

  private playReveal(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const sections = this.root().nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!sections.length) {
      return;
    }

    registerGsapPlugins();

    const tweens = Array.from(sections).map((section) =>
      gsap.fromTo(
        section,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
        },
      ),
    );

    this.destroyRef.onDestroy(() => {
      tweens.forEach((tween) => tween.scrollTrigger?.kill());
    });
  }
}
