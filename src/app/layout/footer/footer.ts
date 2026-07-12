import { Component } from '@angular/core';
import { LucideExternalLink, LucideMail } from '@lucide/angular';
import { CONTACT_INFO } from '../../core/contact/contact-info.data';

@Component({
  selector: 'app-footer',
  imports: [LucideExternalLink, LucideMail],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly contact = CONTACT_INFO;
}
