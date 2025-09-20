import matter from 'gray-matter';
import { marked } from 'marked';
import type { BlogFrontmatter, BlogPost } from '../types';

const modules = import.meta.glob<string>('../content/blog/*.md', {
  query: '?raw',
  import: 'default'
});

export async function getAllPosts(): Promise<BlogFrontmatter[]> {
  const entries = await Promise.all(
    Object.entries(modules).map(async ([_path, resolver]) => {
      const raw = await resolver();
      const { data } = matter(raw);
      return data as BlogFrontmatter;
    })
  );

  return entries.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const match = Object.entries(modules).find(([path]) => path.includes(`${slug}.md`));

  if (!match) {
    return null;
  }

  const [, resolver] = match;
  const raw = await resolver();
  const { data, content } = matter(raw);
  const html = marked.parse(content);
  return { ...(data as BlogFrontmatter), content: html };
}
