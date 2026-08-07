import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NotFound } from './not-found';

describe('NotFound', () => {
  let component: NotFound;
  let fixture: ComponentFixture<NotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a 404 heading and a link back home', () => {
    const el = fixture.nativeElement;
    expect(el.querySelector('.not-found__title').textContent).toContain('Page not found');
    const homeLink = el.querySelector('.not-found__link');
    expect(homeLink.getAttribute('routerLink')).toBe('/');
  });
});
