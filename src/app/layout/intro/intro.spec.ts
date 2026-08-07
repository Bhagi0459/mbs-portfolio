import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { IntroService } from '../../core/intro/intro';
import { Intro } from './intro';

function mockPrefersReducedMotion(matches: boolean): void {
  spyOn(window, 'matchMedia').and.returnValue({ matches } as MediaQueryList);
}

describe('Intro', () => {
  let fixture: ComponentFixture<Intro>;
  let introService: IntroService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [Intro] });
  });

  it('completes the intro immediately when the user prefers reduced motion', () => {
    mockPrefersReducedMotion(true);

    fixture = TestBed.createComponent(Intro);
    introService = TestBed.inject(IntroService);
    fixture.detectChanges();

    expect(introService.active()).toBeFalse();
    expect(introService.handoff()).toBeTrue();
  });

  it('does not complete immediately when motion is allowed', () => {
    mockPrefersReducedMotion(false);

    fixture = TestBed.createComponent(Intro);
    introService = TestBed.inject(IntroService);
    fixture.detectChanges();

    expect(introService.active()).toBeTrue();
    expect(introService.handoff()).toBeFalse();
  });

  it('begins handoff after the exit delay, then completes via the fallback timer', fakeAsync(() => {
    mockPrefersReducedMotion(false);

    fixture = TestBed.createComponent(Intro);
    introService = TestBed.inject(IntroService);
    fixture.detectChanges();

    tick(2400);
    expect(introService.handoff()).toBeTrue();
    expect(introService.active()).toBeTrue();

    tick(900);
    expect(introService.active()).toBeFalse();
  }));
});
