'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PostCard from './PostCard';
import img from 'public/react.png';
import { useEffect, useState } from 'react';
import { Post } from '@/service/posts';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface Props {
  posts: Post[];
}

export default function LikePostsCarousel({ posts }: Props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) return <div>로딩중...</div>;

  return (
    <div>
      <Carousel responsive={responsive} infinite={true} autoPlay={true}>
        {posts.map((item) => (
          <div key={item.date} className='pr-2'>
            <PostCard height={96} post={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
