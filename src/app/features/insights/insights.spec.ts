import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Insights } from './insights';
import { INSIGHT_POSTS } from './insights.data';

describe('Insights', () => {
  let component: Insights;
  let fixture: ComponentFixture<Insights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Insights],
    }).compileComponents();

    fixture = TestBed.createComponent(Insights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one card per insight post', () => {
    const cards = fixture.nativeElement.querySelectorAll('.insight-card');
    expect(cards.length).toBe(INSIGHT_POSTS.length);
    expect(cards[0].textContent).toContain(INSIGHT_POSTS[0].title);
  });

  it('links every post with a sourceUrl out to LinkedIn with noopener/noreferrer', () => {
    const links: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('.insight-card__link');
    const postsWithSource = INSIGHT_POSTS.filter((post) => post.sourceUrl);
    expect(links.length).toBe(postsWithSource.length);
    links.forEach((link) => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toContain('noopener');
    });
  });
});
