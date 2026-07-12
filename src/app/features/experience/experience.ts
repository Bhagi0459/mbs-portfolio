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
import { EXPERIENCE } from './experience.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('experienceRoot');

  protected readonly experience = EXPERIENCE;

  constructor() {
    this.seo.updateMetadata({
      title: 'Experience — Bhagya Sankar Maddela',
      description:
        'Professional experience spanning healthcare, financial services, and business administration — Angular development at CommerzTech India and Sorano Technologies.',
    });

    afterNextRender(() => this.playReveal());
  }

  private playReveal(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const items = this.root().nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!items.length) {
      return;
    }

    registerGsapPlugins();

    const tweens = Array.from(items).map((item) =>
      gsap.fromTo(
        item,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
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
