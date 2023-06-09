import path from 'path';
import { promises as fs } from 'fs';
import { getPosts } from '@/service/posts';
import FilteredPosts from '@/components/posts/FilteredPosts';

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
