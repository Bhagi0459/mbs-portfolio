import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a link for every nav item, starting closed', () => {
    const links = fixture.nativeElement.querySelectorAll('.navbar__link');
    expect(links.length).toBe(component['navLinks'].length);
    expect(fixture.nativeElement.querySelector('.navbar__nav--open')).toBeNull();
  });

  it('toggleMenu opens and closeMenu closes the mobile nav', () => {
    expect(component['menuOpen']()).toBeFalse();

    component['toggleMenu']();
    expect(component['menuOpen']()).toBeTrue();

    component['closeMenu']();
    expect(component['menuOpen']()).toBeFalse();
  });
});
