import PorfileCard from '@/components/PorfileCard';
import FeaturedPosts from '@/components/posts/FeaturedPosts';
import LikePosts from '@/components/posts/LikePosts';

export default function Home() {
  return (
    <section>
      <PorfileCard />
      <FeaturedPosts />
      <LikePosts />
    </section>
  );
}
