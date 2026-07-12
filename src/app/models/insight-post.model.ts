export interface InsightPost {
  id: string;
  title: string;
  excerpt: string;
  date?: string;
  tags: string[];
  sourceUrl?: string;
  series?: string;
}
