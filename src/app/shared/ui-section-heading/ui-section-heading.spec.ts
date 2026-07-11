import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSectionHeading } from './ui-section-heading';

describe('UiSectionHeading', () => {
  let component: UiSectionHeading;
  let fixture: ComponentFixture<UiSectionHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSectionHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSectionHeading);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Section title');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
