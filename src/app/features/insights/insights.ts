import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { LucideExternalLink } from '@lucide/angular';
import { SeoService } from '../../core/seo/seo';
import { INSIGHT_POSTS } from './insights.data';

@Component({
  selector: 'app-insights',
  imports: [LucideExternalLink],
  templateUrl: './insights.html',
  styleUrl: './insights.scss',
})
export class Insights {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('insightsRoot');

  protected readonly posts = INSIGHT_POSTS;

  constructor() {
    this.seo.updateMetadata({
      title: 'Insights — Bhagya Sankar Maddela',
      description: 'Notes on Angular and frontend engineering.',
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
