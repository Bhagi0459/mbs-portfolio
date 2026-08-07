import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
    }).compileComponents();

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

  it('renders the project title, description, and role from the input', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Test Project');
    expect(text).toContain('A test project.');
    expect(text).toContain('Solved a test problem.');
    expect(text).toContain('Sole developer.');
  });

  it('derives initials from the title for the fallback glyph', () => {
    expect(component['initials']()).toBe('TP');
  });

  it('omits the actions row when neither repoUrl nor liveUrl is set', () => {
    expect(fixture.nativeElement.querySelector('.project-card__actions')).toBeNull();
  });

  it('renders GitHub and live-demo links with target=_blank and rel=noopener when provided', () => {
    fixture.componentRef.setInput('project', {
      id: 'test-2',
      title: 'Linked Project',
      category: 'Personal',
      description: 'Has links.',
      problemSolved: 'Something.',
      role: 'Developer.',
      technologies: ['Angular'],
      repoUrl: 'https://github.com/example/repo',
      liveUrl: 'https://example.com',
    });
    fixture.detectChanges();

    const links: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('.project-card__actions a');
    expect(links.length).toBe(2);
    links.forEach((link) => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toContain('noopener');
    });
  });
});
