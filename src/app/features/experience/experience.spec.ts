import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experience } from './experience';
import { EXPERIENCE } from './experience.data';

describe('Experience', () => {
  let component: Experience;
  let fixture: ComponentFixture<Experience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience],
    }).compileComponents();

    fixture = TestBed.createComponent(Experience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one career entry per EXPERIENCE record', () => {
    const items = fixture.nativeElement.querySelectorAll('.career__item');
    expect(items.length).toBe(EXPERIENCE.length);
    expect(items[0].textContent).toContain(EXPERIENCE[0].role);
    expect(items[0].textContent).toContain(EXPERIENCE[0].company);
  });
});
