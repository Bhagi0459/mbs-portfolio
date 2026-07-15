import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideArrowRight, LucideArrowUpRight, LucideDownload } from '@lucide/angular';
import gsap from 'gsap';
import { IntroService } from '../../core/intro/intro';
import { SeoService } from '../../core/seo/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LucideArrowRight, LucideArrowUpRight, LucideDownload, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly introService = inject(IntroService);
  private readonly hero = viewChild.required<ElementRef<HTMLElement>>('hero');

  private readonly viewReady = signal(false);
  private entrancePlayed = false;

  /**
   * True if the boot intro had already handed off before this Home instance even existed —
   * i.e. this is a normal route navigation, not the initial coordinated bootstrap. Read once,
   * synchronously, at construction time so the two cases can use different entrance timing.
   */
  private readonly isNormalNavigation = this.introService.handoff();

  constructor() {
    this.seo.updateMetadata({
      title: 'Bhagya Sankar Maddela — Senior Angular Developer',
      description:
        '5+ years building enterprise Angular applications across financial services, business administration, and healthcare — including a stock portfolio management platform and current EMR and workers\' compensation systems.',
    });

    afterNextRender(() => {
      this.viewReady.set(true);
      this.setupParallax();
    });

    effect(() => {
      if (!this.viewReady() || this.entrancePlayed) {
        return;
      }

      // Normal navigation: play the full entrance immediately, no intro to coordinate with.
      if (this.isNormalNavigation) {
        this.entrancePlayed = true;
        this.playEntrance(false);
        return;
      }

      // Initial bootstrap: wait for the intro's exit to *begin* (not end) so the hero
      // entrance overlaps with the intro dissolving, instead of starting after a gap.
      if (this.introService.handoff()) {
        this.entrancePlayed = true;
        this.playEntrance(true);
      }
    });
  }

  private playEntrance(shortened: boolean): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const targets = this.hero().nativeElement.querySelectorAll<HTMLElement>('[data-animate]');
    if (!targets.length) {
      return;
    }

    gsap.set(targets, { opacity: 0, y: 28 });
    gsap.to(
      targets,
      // Coordinated boot: settle within ~700ms of the intro beginning its exit, so the hero
      // is already emerging while the intro dissolves rather than replaying a long entrance.
      shortened
        ? { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.04 }
        : { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.2 },
    );
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
    const portrait = hero.querySelector<HTMLElement>('.hero__portrait-wrap');
    if (!primary || !secondary) {
      return;
    }

    const movePrimaryX = gsap.quickTo(primary, 'x', { duration: 0.6, ease: 'power3.out' });
    const movePrimaryY = gsap.quickTo(primary, 'y', { duration: 0.6, ease: 'power3.out' });
    const moveSecondaryX = gsap.quickTo(secondary, 'x', { duration: 0.6, ease: 'power3.out' });
    const moveSecondaryY = gsap.quickTo(secondary, 'y', { duration: 0.6, ease: 'power3.out' });
    // Tiny depth cue on the portrait — deliberately much smaller range than the glows.
    const movePortraitX = portrait
      ? gsap.quickTo(portrait, 'x', { duration: 0.6, ease: 'power3.out' })
      : null;
    const movePortraitY = portrait
      ? gsap.quickTo(portrait, 'y', { duration: 0.6, ease: 'power3.out' })
      : null;

    const handlePointerMove = (event: PointerEvent): void => {
      const rect = hero.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

      movePrimaryX(offsetX * 24);
      movePrimaryY(offsetY * 24);
      moveSecondaryX(offsetX * -16);
      moveSecondaryY(offsetY * -16);
      movePortraitX?.(offsetX * 8);
      movePortraitY?.(offsetY * 8);
    };

    hero.addEventListener('pointermove', handlePointerMove);
    this.destroyRef.onDestroy(() => hero.removeEventListener('pointermove', handlePointerMove));
  }
}
