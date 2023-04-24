import PostCard from './PostCard';
import img from 'public/react.png';
import Subtitle from './Subtitle';

export default function FeaturedPosts() {
  return (
    <section>
      <Subtitle title='Featured Posts' />
      <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        <PostCard
          imgSrc={img.src}
          title='text'
          date='2023-04-10'
          content='노드노드노드'
          category='backend'
          height={96}
        />
        <PostCard
          imgSrc={img.src}
          title='text'
          date='2023-04-10'
          content='노드노드노드'
          category='backend'
          height={96}
        />
        <PostCard
          imgSrc={img.src}
          title='text'
          date='2023-04-10'
          content='노드노드노드'
          category='backend'
          height={96}
        />
      </div>
    </section>
  );
}