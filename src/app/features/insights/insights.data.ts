import { InsightPost } from '../../models/insight-post.model';

export const INSIGHT_POSTS: InsightPost[] = [
  {
    id: 'onpush-change-detection',
    title: 'Why OnPush Change Detection Makes Angular Faster',
    excerpt: 'Checking a component only when something it actually depends on changes.',
    tags: ['Angular', 'Performance'],
    series: 'Angular Performance Series #1',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-angularperformance-typescript-activity-7479768776474030081-yVLI/',
  },
  {
    id: 'lazy-loading-performance',
    title: 'Why Lazy Loading Makes Angular Apps Faster',
    excerpt: 'Loading only what the user needs first, and deferring the rest until they navigate there.',
    tags: ['Angular', 'Performance'],
    series: 'Angular Performance Series #2',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-angularperformance-lazyloading-activity-7480919236702322689-FRw6/',
  },
  {
    id: 'async-pipe-vs-manual-subscription',
    title: 'Async Pipe vs Manual Subscription: Who Handles the Cleanup?',
    excerpt:
      'Letting the async pipe own template subscriptions, and when manually subscribing with proper lifecycle management is the right call.',
    tags: ['Angular', 'Performance', 'RxJS'],
    series: 'Angular Performance Series #3',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-angularperformance-rxjs-share-7482661017030762496-UZkA/',
  },
  {
    id: 'pure-pipes-vs-functions',
    title: 'Why Pure Pipes Are Better Than Calling Functions in Templates',
    excerpt: 'Reusing a pipe\'s cached result instead of recalculating an expensive function on every change detection cycle.',
    tags: ['Angular', 'Performance'],
    series: 'Angular Performance Series #4',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-angularperformance-typescript-share-7483740844492066816--cLX/',
  },
  {
    id: 'signals-explained',
    title: 'Why Signals Make Angular Apps Faster',
    excerpt:
      'Notifying only the components that depend on an updated Signal, instead of triggering change detection across the whole tree.',
    tags: ['Angular', 'Performance', 'Signals'],
    series: 'Angular Performance Series #5',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-angularperformance-signals-share-7484832285725478912-J-GK/',
  },
  {
    id: 'trackby-performance',
    title: 'Why trackBy Can Make Your Angular App Faster',
    excerpt:
      'Identifying list items by a stable key so Angular updates only what changed, instead of recreating the DOM.',
    tags: ['Angular', 'Performance', 'trackBy'],
    series: 'Angular internals',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-typescript-frontenddevelopment-activity-7478328435879100416-PuJa/',
  },
  {
    id: 'switchmap-search',
    title: 'Why is switchMap() a Superhero for Search APIs?',
    excerpt:
      'Cancelling stale requests as new ones come in, so a fast typist never sees an out-of-order search result.',
    tags: ['RxJS'],
    series: 'RxJS',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-rxjs-typescript-activity-7477242287027302400-VffX/',
  },
  {
    id: 'subject-vs-behaviorsubject',
    title: 'Subject vs BehaviorSubject',
    excerpt: 'The practical difference between the two, and when each one is the right choice for shared state.',
    tags: ['RxJS'],
    series: 'RxJS',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-rxjs-typescript-activity-7475135656743292928-QlHh/',
  },
  {
    id: 'standalone-vs-ngmodules',
    title: 'Standalone Components vs NgModules',
    excerpt:
      'Less boilerplate and simpler structure for new projects — while NgModules stay a completely valid choice for existing enterprise codebases.',
    tags: ['Angular', 'Architecture'],
    series: 'Angular Architecture',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-angulardeveloper-frontenddevelopment-activity-7474320511829864448-Mi4-/',
  },
  {
    id: 'signals-vs-rxjs',
    title: 'Angular Signals vs RxJS: Do We Still Need RxJS?',
    excerpt:
      'Signals own local state and UI reactivity; RxJS still owns async streams and request cancellation — they complement each other rather than compete.',
    tags: ['Angular', 'Signals', 'RxJS'],
    series: 'Signals',
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-typescript-rxjs-activity-7473634082208358400-c2Ls/',
  },
];
