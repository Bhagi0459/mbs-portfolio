import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer } from './footer';
import { SOCIAL_LINKS } from '../../core/contact/social-links';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the current year in the copyright line', () => {
    const text = fixture.nativeElement.querySelector('.footer__copyright').textContent;
    expect(text).toContain(String(new Date().getFullYear()));
  });

  it('renders one social link per SOCIAL_LINKS entry', () => {
    const links = fixture.nativeElement.querySelectorAll('.footer__social-link');
    expect(links.length).toBe(SOCIAL_LINKS.length);
  });
});
