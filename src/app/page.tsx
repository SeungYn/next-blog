import ProfileCard from '@/components/ProfileCard';
import FeaturedPosts from '@/components/posts/FeaturedPosts';
import LikePosts from '@/components/posts/LikePosts';
import { getFeaturedPosts, getPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: '승윤의 블로그',
  },
  description: '승윤 블로그',
};

export default async function Home() {
  const data = await getFeaturedPosts();

  return (
    <section>
      <ProfileCard />
      <FeaturedPosts posts={data} />
      {/* @ts-expect-error Async Server Component */}
      <LikePosts />
    </section>
  );
}
