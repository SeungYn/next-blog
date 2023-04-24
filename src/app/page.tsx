import PorfileCard from '@/components/PorfileCard';
import FeaturedPosts from '@/components/posts/FeaturedPosts';
import LikePosts from '@/components/posts/LikePosts';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section>
      <PorfileCard />
      <FeaturedPosts />
      <Suspense fallback={<div>로딩</div>}>
        <LikePosts />
      </Suspense>
    </section>
  );
}
