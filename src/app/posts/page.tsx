import path from 'path';
import { promises as fs } from 'fs';
import { getPosts } from '@/service/posts';
import FilteredPosts from '@/components/posts/FilteredPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '풀스택 관련 블로그 글',
};

export default async function PostsPage() {
  const posts = await getPosts();
  const category = [
    ...new Set(posts.map((item) => item.category)),
    'All posts',
  ];

  return (
    <section className='flex-grow'>
      <FilteredPosts posts={posts} category={category} />
    </section>
  );
}
