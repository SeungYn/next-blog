import { promises as fs } from 'fs';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const dataPath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(data);
}
export async function getFeaturedPosts(): Promise<Post[]> {
  const data = await getPosts();
  return data.filter((item) => item.featured);
}
