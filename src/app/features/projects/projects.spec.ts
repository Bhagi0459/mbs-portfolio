import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projects } from './projects';
import { PERSONAL_PROJECTS, PROFESSIONAL_PROJECTS } from './projects.data';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one project card per professional and personal project', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-project-card');
    expect(cards.length).toBe(PROFESSIONAL_PROJECTS.length + PERSONAL_PROJECTS.length);
  });
});
