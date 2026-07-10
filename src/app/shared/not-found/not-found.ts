import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo/seo';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.updateMetadata({
      title: 'Page not found — Bhagya Sankar Maddela',
      description: 'The page you were looking for could not be found.',
    });
  }
}
