import ProfileCard from '@/components/ProfileCard';
import FeaturedPosts from '@/components/posts/FeaturedPosts';
import LikePosts from '@/components/posts/LikePosts';
import { getFeaturedPosts, getPosts } from '@/service/posts';

export default async function Home() {
  const data = await getFeaturedPosts();
  const posts = await getPosts();
  return (
    <section>
      <ProfileCard />
      <FeaturedPosts posts={data} />
      <LikePosts posts={posts} />
    </section>
  );
}
