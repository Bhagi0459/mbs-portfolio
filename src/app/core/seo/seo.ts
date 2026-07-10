import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoMetadata } from '../../models/seo-metadata.model';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updateMetadata(metadata: SeoMetadata): void {
    this.title.setTitle(metadata.title);

    this.meta.updateTag({ name: 'description', content: metadata.description });
    this.meta.updateTag({ property: 'og:title', content: metadata.title });
    this.meta.updateTag({ property: 'og:description', content: metadata.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    if (metadata.url) {
      this.meta.updateTag({ property: 'og:url', content: metadata.url });
    }

    if (metadata.imageUrl) {
      this.meta.updateTag({ property: 'og:image', content: metadata.imageUrl });
    }
  }
}
