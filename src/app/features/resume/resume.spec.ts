import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resume } from './resume';

describe('Resume', () => {
  let component: Resume;
  let fixture: ComponentFixture<Resume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resume],
    }).compileComponents();

    fixture = TestBed.createComponent(Resume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('points the view link at the resume PDF with a safe new-tab target', () => {
    const viewLink: HTMLAnchorElement = fixture.nativeElement.querySelector(
      '.resume__button--primary',
    );
    expect(viewLink.getAttribute('href')).toBe(component['resumeUrl']);
    expect(viewLink.target).toBe('_blank');
    expect(viewLink.rel).toContain('noopener');
  });

  it('points the download link at the resume PDF with a download attribute', () => {
    const downloadLink: HTMLAnchorElement = fixture.nativeElement.querySelector(
      '.resume__button--secondary',
    );
    expect(downloadLink.getAttribute('href')).toBe(component['resumeUrl']);
    expect(downloadLink.hasAttribute('download')).toBeTrue();
  });
});
