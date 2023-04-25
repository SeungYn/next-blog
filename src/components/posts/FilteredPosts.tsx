'use client';

import { Post } from '@/service/posts';
import PostCard from './PostCard';
import { useState } from 'react';

interface Props {
  posts: Post[];
  category: string[];
}

const ALLPOST = 'All posts';

export default function FilteredPosts({ posts, category }: Props) {
  const [currentCategory, setCurrentCategory] = useState(ALLPOST);
  console.log(currentCategory);
  let filteredPosts = [...posts];

  if (currentCategory !== ALLPOST) {
    filteredPosts = filteredPosts.filter(
      (item) => item.category === currentCategory
    );
  }

  return (
    <div className='flex border-t-4 border-indigo-500'>
      <div className='grid grid-cols-2 gap-4 w-full h-full lg:grid-cols-3 2xl:grid-cols-4'>
        {filteredPosts.map((item) => (
          <PostCard key={item.date} height={96} post={item} />
        ))}
      </div>
      <nav className='flex flex-col p-4 gap-4'>
        <h3 className='text-lg font-bold border-b-4 border-solid border-indigo-500'>
          Category
        </h3>
        {category.map((cate) => (
          <button
            key={cate}
            className={`${
              cate === currentCategory && 'text-blue-700'
            } hover:text-blue-300`}
            onClick={() => setCurrentCategory(cate)}
          >
            {cate}
          </button>
        ))}
      </nav>
    </div>
  );
}
