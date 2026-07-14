import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/contact/social-links';
import { SocialIcon } from '../../shared/social-icon/social-icon';

@Component({
  selector: 'app-footer',
  imports: [SocialIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly socialLinks = SOCIAL_LINKS;
}
