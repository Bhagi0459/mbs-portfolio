import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Intro } from './layout/intro/intro';
import { IntroService } from './core/intro/intro';
import { AmbientBackground } from './shared/ambient-background/ambient-background';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Intro, AmbientBackground],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly introService = inject(IntroService);

  private readonly router = inject(Router);

  /** Home has its own stronger ambient background, so the shared inner-page layer is hidden there. */
  protected readonly isHome = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects === '/'),
    ),
    { initialValue: this.router.url === '/' },
  );
}
