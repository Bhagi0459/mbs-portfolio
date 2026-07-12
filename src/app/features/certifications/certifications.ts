import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { LucideAward, LucideExternalLink, LucideGraduationCap } from '@lucide/angular';
import { SeoService } from '../../core/seo/seo';
import { UiSectionHeading } from '../../shared/ui-section-heading/ui-section-heading';
import { CERTIFICATIONS, CONTINUOUS_LEARNING } from './certifications.data';

@Component({
  selector: 'app-certifications',
  imports: [UiSectionHeading, LucideAward, LucideGraduationCap, LucideExternalLink],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('certificationsRoot');

  protected readonly certifications = CERTIFICATIONS;
  protected readonly continuousLearning = CONTINUOUS_LEARNING;

  constructor() {
    this.seo.updateMetadata({
      title: 'Certifications & Continuous Learning — Bhagya Sankar Maddela',
      description: 'Certifications and continuous learning — real, verified credentials only.',
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
