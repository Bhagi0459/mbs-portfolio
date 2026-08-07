import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills } from './skills';
import { SKILL_GROUPS } from './skills.data';

describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one section per skill group', () => {
    const sections = fixture.nativeElement.querySelectorAll('.skills__section');
    expect(sections.length).toBe(SKILL_GROUPS.length);
  });

  it('renders every skill chip within its group', () => {
    const totalSkills = SKILL_GROUPS.reduce((sum, group) => sum + group.skills.length, 0);
    const chips = fixture.nativeElement.querySelectorAll('.skill-chip');
    expect(chips.length).toBe(totalSkills);
  });
});
