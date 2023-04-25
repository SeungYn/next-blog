import PostCard from './PostCard';
import Subtitle from './Subtitle';
import { Post } from '@/service/posts';

interface Props {
  posts: Post[];
}

export default function FeaturedPosts(props: Props) {
  const { posts } = props;
  return (
    <section>
      <Subtitle title='Featured Posts' />
      <div className='grid grid-cols-2 gap-4 lg:grid-cols-3 2xl:grid-cols-4'>
        {posts.map((item) => (
          <PostCard key={item.date} height={96} post={item} />
        ))}
      </div>
    </section>
  );
}
