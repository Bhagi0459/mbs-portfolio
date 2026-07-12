import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { LucideExternalLink, LucideMail, LucideMapPin } from '@lucide/angular';
import { CONTACT_INFO } from '../../core/contact/contact-info.data';
import { SeoService } from '../../core/seo/seo';

@Component({
  selector: 'app-contact',
  imports: [LucideExternalLink, LucideMail, LucideMapPin],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly root = viewChild.required<ElementRef<HTMLElement>>('contactRoot');

  protected readonly contact = CONTACT_INFO;

  constructor() {
    this.seo.updateMetadata({
      title: 'Contact — Bhagya Sankar Maddela',
      description: 'Get in touch by email, GitHub, or LinkedIn.',
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
