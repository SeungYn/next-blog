import ProfileCard from '@/components/ProfileCard';
import FeaturedPosts from '@/components/posts/FeaturedPosts';
import LikePosts from '@/components/posts/LikePosts';

export default function Home() {
  return (
    <section>
      <ProfileCard />
      <FeaturedPosts />
      <LikePosts />
    </section>
  );
}
