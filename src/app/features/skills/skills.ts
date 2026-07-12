import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import {
  LucideBarChart,
  LucideCode,
  LucideDatabase,
  LucideLayers,
  LucideLayoutGrid,
  LucideWrench,
} from '@lucide/angular';
import { SeoService } from '../../core/seo/seo';
import { UiSectionHeading } from '../../shared/ui-section-heading/ui-section-heading';
import { SKILL_GROUPS } from './skills.data';

@Component({
  selector: 'app-skills',
  imports: [
    UiSectionHeading,
    LucideCode,
    LucideLayers,
    LucideLayoutGrid,
    LucideDatabase,
    LucideBarChart,
    LucideWrench,
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('skillsRoot');

  protected readonly groups = SKILL_GROUPS;

  constructor() {
    this.seo.updateMetadata({
      title: 'Skills — Bhagya Sankar Maddela',
      description:
        'Technical capabilities across frontend engineering, Angular architecture, UI tooling, backend integration, analytics, and engineering practice.',
    });

    afterNextRender(() => this.observeReveals());
  }

  private observeReveals(): void {
    const targets = this.root().nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!targets.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    targets.forEach((target) => {
      target.classList.add('reveal-pending');
      observer.observe(target);
    });
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
