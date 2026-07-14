import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IntroService {
  private readonly _active = signal(true);
  private readonly _handoff = signal(false);

  /** True while the boot intro overlay should exist in the DOM. One-way: true -> false. */
  readonly active = this._active.asReadonly();

  /**
   * True once Home may start its entrance. Flips at the *start* of the intro's exit
   * transition (not its end) so the hero entrance overlaps with the intro fading out,
   * instead of waiting for a blank handoff moment. One-way: false -> true.
   */
  readonly handoff = this._handoff.asReadonly();

  /** Begin the overlap window. Idempotent. */
  beginHandoff(): void {
    if (this._handoff()) {
      return;
    }
    this._handoff.set(true);
  }

  /** Intro fully gone, remove it from the DOM. Idempotent, always implies handoff. */
  complete(): void {
    this.beginHandoff();
    if (!this._active()) {
      return;
    }
    this._active.set(false);
  }
}
