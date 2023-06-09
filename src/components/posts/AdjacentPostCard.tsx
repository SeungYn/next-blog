import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { type Post } from '@/service/posts';
import Link from 'next/link';
import Image from 'next/image';

type PropsType = {
  post: Post;
  type: 'prev' | 'next';
};

export default function AdjacentPostCard({ post, type }: PropsType) {
  const { title, description, path } = post;
  return (
    <Link
      href={`/post-detail/${path}`}
      className='relative w-full bg-black max-h-56'
    >
      <Image
        src={`/image/${path}.png`}
        className='w-full h-full opacity-40'
        width={150}
        height={100}
        alt={title}
      />
      {/* 테일윈드는 앞에 group로 그룹을 지어줄 수 있음 이 group-속성을 이용하여 해당 그룹에 가상 이벤트를 등록할 수 있음 */}
      <div className='group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full text-white flex justify-around items-center px-8'>
        {type === 'prev' && (
          <AiOutlineArrowLeft className='text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl' />
        )}
        <div className='w-full text-center'>
          <h2 className='text-3xl font-bold'>{title}</h2>
          <p className='font-bold'>{description}</p>
        </div>
        {type === 'next' && (
          <AiOutlineArrowRight className='text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl' />
        )}
      </div>
    </Link>
  );
}
