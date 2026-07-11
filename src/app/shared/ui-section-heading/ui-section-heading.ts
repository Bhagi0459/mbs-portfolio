import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-section-heading',
  imports: [],
  templateUrl: './ui-section-heading.html',
  styleUrl: './ui-section-heading.scss',
})
export class UiSectionHeading {
  eyebrow = input<string>();
  title = input.required<string>();
  description = input<string>();
}
