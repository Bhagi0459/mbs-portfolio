import { Component } from '@angular/core';
import { LucideExternalLink, LucideMail } from '@lucide/angular';

@Component({
  selector: 'app-footer',
  imports: [LucideExternalLink, LucideMail],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly email = 'm.bhagyasankar@gmail.com';
  protected readonly githubUrl = 'https://github.com/bhagyasankarm';
  protected readonly linkedinUrl = 'https://linkedin.com/in/bhagyasankarm';
}
