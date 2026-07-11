import { Component, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight, LucideArrowUpRight, LucideDownload } from '@lucide/angular';
import gsap from 'gsap';
import { SeoService } from '../../core/seo/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideArrowRight, LucideArrowUpRight, LucideDownload],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly seo = inject(SeoService);
  private readonly hero = viewChild.required<ElementRef<HTMLElement>>('hero');

  constructor() {
    this.seo.updateMetadata({
      title: 'Bhagya Sankar Maddela — Senior Angular Developer',
      description:
        '5+ years building enterprise Angular applications across financial services, business administration, and healthcare — including a stock portfolio management platform for Raymond James and current EMR and workers\' compensation systems.',
    });

    afterNextRender(() => this.playEntrance());
  }

  private playEntrance(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const targets = this.hero().nativeElement.querySelectorAll<HTMLElement>('[data-animate]');
    if (!targets.length) {
      return;
    }

    gsap.set(targets, { opacity: 0, y: 28 });
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.2,
    });
  }
}
