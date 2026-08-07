import { TestBed } from '@angular/core/testing';
import { IntroService } from './intro';

describe('IntroService', () => {
  let service: IntroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroService);
  });

  it('starts active and not handed off', () => {
    expect(service.active()).toBeTrue();
    expect(service.handoff()).toBeFalse();
  });

  it('beginHandoff flips handoff but leaves active untouched', () => {
    service.beginHandoff();

    expect(service.handoff()).toBeTrue();
    expect(service.active()).toBeTrue();
  });

  it('beginHandoff is idempotent', () => {
    service.beginHandoff();
    service.beginHandoff();

    expect(service.handoff()).toBeTrue();
  });

  it('complete() flips both active and handoff to their final state', () => {
    service.complete();

    expect(service.active()).toBeFalse();
    expect(service.handoff()).toBeTrue();
  });

  it('complete() implies handoff even if beginHandoff was never called directly', () => {
    expect(service.handoff()).toBeFalse();

    service.complete();

    expect(service.handoff()).toBeTrue();
  });

  it('complete() is idempotent and does not resurrect active', () => {
    service.complete();
    service.complete();

    expect(service.active()).toBeFalse();
    expect(service.handoff()).toBeTrue();
  });
});
