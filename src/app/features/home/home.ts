import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';
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
  private readonly destroyRef = inject(DestroyRef);
  private readonly hero = viewChild.required<ElementRef<HTMLElement>>('hero');

  constructor() {
    this.seo.updateMetadata({
      title: 'Bhagya Sankar Maddela — Senior Angular Developer',
      description:
        '5+ years building enterprise Angular applications across financial services, business administration, and healthcare — including a stock portfolio management platform for Raymond James and current EMR and workers\' compensation systems.',
    });

    afterNextRender(() => {
      this.playEntrance();
      this.setupParallax();
    });
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

  /** Subtle pointer-parallax on the decorative glow blobs — fine-pointer desktops only. */
  private setupParallax(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReducedMotion || !hasFinePointer) {
      return;
    }

    const hero = this.hero().nativeElement;
    const primary = hero.querySelector<HTMLElement>('.hero__glow--primary');
    const secondary = hero.querySelector<HTMLElement>('.hero__glow--secondary');
    if (!primary || !secondary) {
      return;
    }

    const movePrimaryX = gsap.quickTo(primary, 'x', { duration: 0.6, ease: 'power3.out' });
    const movePrimaryY = gsap.quickTo(primary, 'y', { duration: 0.6, ease: 'power3.out' });
    const moveSecondaryX = gsap.quickTo(secondary, 'x', { duration: 0.6, ease: 'power3.out' });
    const moveSecondaryY = gsap.quickTo(secondary, 'y', { duration: 0.6, ease: 'power3.out' });

    const handlePointerMove = (event: PointerEvent): void => {
      const rect = hero.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

      movePrimaryX(offsetX * 24);
      movePrimaryY(offsetY * 24);
      moveSecondaryX(offsetX * -16);
      moveSecondaryY(offsetY * -16);
    };

    hero.addEventListener('pointermove', handlePointerMove);
    this.destroyRef.onDestroy(() => hero.removeEventListener('pointermove', handlePointerMove));
  }
}
