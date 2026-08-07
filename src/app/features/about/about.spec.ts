import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';
import { JOURNEY, INDUSTRIES } from './about.data';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one journey entry per JOURNEY milestone', () => {
    const items = fixture.nativeElement.querySelectorAll('.journey__item');
    expect(items.length).toBe(JOURNEY.length);
    expect(items[0].textContent).toContain(JOURNEY[0].role);
    expect(items[0].textContent).toContain(JOURNEY[0].company);
  });

  it('renders one industry card per INDUSTRIES entry', () => {
    const cards = fixture.nativeElement.querySelectorAll('.industry-card');
    expect(cards.length).toBe(INDUSTRIES.length);
  });
});
