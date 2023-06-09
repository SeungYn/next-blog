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

export async function getPostById(
  id: string
): Promise<Post & { content: string }> {
  const dataPath = path.join(process.cwd(), 'data', 'posts.json');
  const data = JSON.parse(await fs.readFile(dataPath, 'utf-8')) as Post[];
  const target = data.find((item) => item.path === id)!;
  const filePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);

  let content;
  try {
    content = await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    content = '';
  }

  return { ...target, content };
}

export async function getPrevNextPostIndex(id: string) {
  const posts = await getPosts();
  const index = posts.findIndex((p) => p.path === id);
  let prevIndex = index - 1;
  let nextIndex = index + 1;
  if (nextIndex === posts.length) nextIndex = -1;

  return [
    prevIndex === -1 ? null : posts[prevIndex],
    nextIndex === -1 ? null : posts[nextIndex],
  ];
}
