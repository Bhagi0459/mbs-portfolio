import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';
import { CONTACT_INFO } from '../../core/contact/contact-info.data';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a mailto link built from CONTACT_INFO.email', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('.contact-row__value');
    expect(link.href).toBe(`mailto:${CONTACT_INFO.email}`);
  });

  it('renders the location text', () => {
    expect(fixture.nativeElement.textContent).toContain(CONTACT_INFO.location);
  });
});
