import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { IntroService } from '../../core/intro/intro';

/** Exit begins here — Home's entrance starts overlapping from this instant. */
const EXIT_DELAY_MS = 2400;
/** Hard safety net if the exit transitionend never fires. Cleared on normal completion. */
const FALLBACK_MS = 3300;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.html',
  styleUrl: './intro.scss',
})
export class Intro {
  private readonly introService = inject(IntroService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  protected readonly exiting = signal(false);

  private fallbackTimer?: ReturnType<typeof setTimeout>;
  private exitTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.introService.complete();
      return;
    }

    afterNextRender(() => this.run());
  }

  private run(): void {
    try {
      this.fallbackTimer = setTimeout(() => this.introService.complete(), FALLBACK_MS);
      this.exitTimer = setTimeout(() => {
        this.exiting.set(true);
        this.introService.beginHandoff();
      }, EXIT_DELAY_MS);
    } catch {
      this.introService.complete();
      return;
    }

    this.destroyRef.onDestroy(() => {
      clearTimeout(this.fallbackTimer);
      clearTimeout(this.exitTimer);
    });
  }

  protected onExitTransitionEnd(event: TransitionEvent): void {
    // Guard against a bubbled child transition completing the intro early —
    // only the host's own opacity transition should signal full completion.
    if (event.target !== this.elementRef.nativeElement || event.propertyName !== 'opacity') {
      return;
    }
    clearTimeout(this.fallbackTimer);
    this.introService.complete();
  }
}
