import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSectionHeading } from './ui-section-heading';

describe('UiSectionHeading', () => {
  let component: UiSectionHeading;
  let fixture: ComponentFixture<UiSectionHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSectionHeading],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSectionHeading);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Section title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the required title and omits eyebrow/description when not provided', () => {
    const el = fixture.nativeElement;
    expect(el.querySelector('.section-heading__title').textContent).toContain('Section title');
    expect(el.querySelector('.section-heading__eyebrow')).toBeNull();
    expect(el.querySelector('.section-heading__description')).toBeNull();
  });

  it('renders eyebrow and description once provided', () => {
    fixture.componentRef.setInput('eyebrow', 'Eyebrow text');
    fixture.componentRef.setInput('description', 'Description text');
    fixture.detectChanges();

    const el = fixture.nativeElement;
    expect(el.querySelector('.section-heading__eyebrow').textContent).toContain('Eyebrow text');
    expect(el.querySelector('.section-heading__description').textContent).toContain(
      'Description text',
    );
  });
});
