import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { LucideExternalLink } from '@lucide/angular';
import gsap from 'gsap';
import { Project } from '../../../models/project.model';
import { TechChip } from '../../../shared/tech-chip/tech-chip';

const MAX_TILT_DEGREES = 6;

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, LucideExternalLink, TechChip],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  project = input.required<Project>();

  private readonly destroyRef = inject(DestroyRef);
  private readonly cardRoot = viewChild.required<ElementRef<HTMLElement>>('cardRoot');

  protected readonly initials = computed(() =>
    this.project()
      .title.split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join(''),
  );

  constructor() {
    afterNextRender(() => this.setupTilt());
  }

  /** Restrained pointer-driven depth tilt — fine-pointer desktops only. */
  private setupTilt(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReducedMotion || !hasFinePointer) {
      return;
    }

    const card = this.cardRoot().nativeElement;
    const setRotateX = gsap.quickTo(card, 'rotateX', { duration: 0.4, ease: 'power2.out' });
    const setRotateY = gsap.quickTo(card, 'rotateY', { duration: 0.4, ease: 'power2.out' });

    const handlePointerMove = (event: PointerEvent): void => {
      const rect = card.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

      setRotateY(offsetX * MAX_TILT_DEGREES);
      setRotateX(offsetY * -MAX_TILT_DEGREES);
    };

    const resetTilt = (): void => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => gsap.set(card, { clearProps: 'transform' }),
      });
    };

    card.addEventListener('pointermove', handlePointerMove);
    card.addEventListener('pointerleave', resetTilt);

    this.destroyRef.onDestroy(() => {
      card.removeEventListener('pointermove', handlePointerMove);
      card.removeEventListener('pointerleave', resetTilt);
    });
  }
}
