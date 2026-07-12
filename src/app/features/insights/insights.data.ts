import { InsightPost } from '../../models/insight-post.model';

/**
 * Verified LinkedIn post URLs with no confirmed title/excerpt mapping yet — do not attach
 * to a post below or guess which post each belongs to from the slug. Once the matching
 * title/content is confirmed, move the URL into that post's `sourceUrl`.
 * - https://www.linkedin.com/posts/bhagyasankarmaddela_angular-angularperformance-typescript-share-7479768773428690945-R7VX/
 * - https://www.linkedin.com/posts/bhagyasankarmaddela_angular-angularperformance-lazyloading-share-7480919234441650177-OCoc/
 * - https://www.linkedin.com/posts/bhagyasankarmaddela_angular-typescript-frontenddevelopment-share-7478328434507595777-AngZ/
 */

export const INSIGHT_POSTS: InsightPost[] = [
  {
    id: 'signals-vs-rxjs',
    title: 'Angular Signals vs RxJS: Do We Still Need RxJS?',
    excerpt:
      'A look at where Signals fit alongside RxJS in modern Angular applications — and where RxJS still earns its place.',
    tags: ['Angular', 'Signals', 'RxJS'],
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-rxjs-typescript-share-7475135655614939136-gDoB/',
  },
  {
    id: 'trackby-performance',
    title: 'Why trackBy Can Make Your Angular App Faster',
    excerpt:
      'Why trackBy matters for list-rendering performance, and how to use it correctly in real Angular applications.',
    tags: ['Angular', 'Performance', 'trackBy'],
    sourceUrl:
      'https://www.linkedin.com/posts/bhagyasankarmaddela_angular-rxjs-typescript-share-7477242285605163008-Xb1C/',
  },
];
