import { Component, input } from '@angular/core';
import { LucideMail } from '@lucide/angular';
import { SocialIconName } from '../../models/social-link.model';

@Component({
  selector: 'app-social-icon',
  imports: [LucideMail],
  templateUrl: './social-icon.html',
  styleUrl: './social-icon.scss',
})
export class SocialIcon {
  readonly name = input.required<SocialIconName>();
}
