import { Post, getPosts } from '@/service/posts';
import LikePostsCarousel from './LikePostsCarousel';
import Subtitle from './Subtitle';
import 'react-multi-carousel/lib/styles.css';

interface Props {
  posts: Post[];
}

export default function LikePosts({ posts }: Props) {
  return (
    <section className='overflow-scroll'>
      <Subtitle title='You may like' />
      <LikePostsCarousel posts={posts} />
    </section>
  );
}
