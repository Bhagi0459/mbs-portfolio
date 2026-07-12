import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { LucideExternalLink } from '@lucide/angular';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [NgOptimizedImage, LucideExternalLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  project = input.required<Project>();

  protected readonly initials = computed(() =>
    this.project()
      .title.split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase())
      .join(''),
  );
}
