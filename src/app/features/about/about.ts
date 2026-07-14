import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { SeoService } from '../../core/seo/seo';
import { TechChip } from '../../shared/tech-chip/tech-chip';
import { UiSectionHeading } from '../../shared/ui-section-heading/ui-section-heading';
import { CORE_TECHNOLOGIES, INDUSTRIES, JOURNEY, SPECIALIZATIONS } from './about.data';

@Component({
  selector: 'app-about',
  imports: [UiSectionHeading, TechChip],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('aboutRoot');

  protected readonly journey = JOURNEY;
  protected readonly specializations = SPECIALIZATIONS;
  protected readonly coreTechnologies = CORE_TECHNOLOGIES;
  protected readonly industries = INDUSTRIES;

  constructor() {
    this.seo.updateMetadata({
      title: 'About — Bhagya Sankar Maddela',
      description:
        "Senior Angular Developer with 5+ years across financial services, business administration, and healthcare — from a Raymond James stock portfolio platform to enterprise EMR and workers' compensation systems.",
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
