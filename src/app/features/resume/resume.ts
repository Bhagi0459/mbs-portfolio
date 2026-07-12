import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { LucideDownload, LucideFileText } from '@lucide/angular';
import { SeoService } from '../../core/seo/seo';

const RESUME_PDF_PATH = '/resume/Bhagya_Sankar_Maddela.pdf';

@Component({
  selector: 'app-resume',
  imports: [LucideDownload, LucideFileText],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('resumeRoot');

  protected readonly resumeUrl = RESUME_PDF_PATH;

  constructor() {
    this.seo.updateMetadata({
      title: 'Resume — Bhagya Sankar Maddela',
      description:
        '5+ years of enterprise application experience in Angular and frontend engineering, across financial services, business administration, and healthcare.',
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
