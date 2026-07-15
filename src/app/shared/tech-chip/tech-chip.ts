import { Component, computed, input } from '@angular/core';
import { TECH_ICON_PATHS } from './tech-icon-paths';

/**
 * Pairs a technology name with its brand icon when one is available, falling back to
 * plain text otherwise. Centralizes the icon lookup so templates never hardcode per-icon
 * markup — callers just bind `name` wherever a technology chip already renders.
 */
@Component({
  selector: 'app-tech-chip',
  templateUrl: './tech-chip.html',
  styleUrl: './tech-chip.scss',
})
export class TechChip {
  readonly name = input.required<string>();

  protected readonly icon = computed(() => TECH_ICON_PATHS[this.name()] ?? null);
}
