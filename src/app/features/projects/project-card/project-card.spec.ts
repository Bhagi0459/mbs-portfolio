import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', {
      id: 'test',
      title: 'Test Project',
      category: 'Personal',
      description: 'A test project.',
      problemSolved: 'Solved a test problem.',
      role: 'Sole developer.',
      technologies: ['Angular'],
      keyLearnings: ['Learned something.'],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
