import { Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideMenu, LucideX } from '@lucide/angular';
import { NavLink } from '../../models/nav-link.model';

const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Insights', path: '/insights' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, LucideMenu, LucideX],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly navLinks = NAV_LINKS;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  private readonly handleScroll = (): void => {
    const isScrolled = window.scrollY > 8;
    if (isScrolled !== this.scrolled()) {
      this.scrolled.set(isScrolled);
    }
  };

  constructor() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', this.handleScroll));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
