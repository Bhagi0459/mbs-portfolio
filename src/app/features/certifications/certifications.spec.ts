import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certifications } from './certifications';
import { CERTIFICATIONS, CONTINUOUS_LEARNING } from './certifications.data';

describe('Certifications', () => {
  let component: Certifications;
  let fixture: ComponentFixture<Certifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certifications],
    }).compileComponents();

    fixture = TestBed.createComponent(Certifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders every certification and continuous-learning entry', () => {
    const items = fixture.nativeElement.querySelectorAll('.credential-item');
    expect(items.length).toBe(CERTIFICATIONS.length + CONTINUOUS_LEARNING.length);
  });
});
