import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// type Props = {
//   title: string;
//   description: string;
//   path: string;
//   direction: 'next' | 'prev';
// };

type PrevNextPostCardType = {
  path: string;
  children: React.ReactNode;
  direction: 'prev' | 'next';
};

export default function PrevNextPostCard({
  path,
  children,
  direction,
}: PrevNextPostCardType) {
  console.log(`/image/${path}.png`);
  return (
    <div
      className={`w-full h-full bg-[url('/image/${path}.png')] bg-no-repeat bg-cover flex items-center p-4 ${
        direction === 'next' ? 'justify-end' : ''
      } `}
    >
      {/* <Image width={100} height={100} src={`/image/${path}.png`} alt='123' /> */}
      {children}
    </div>
  );
}

PrevNextPostCard.ArrowIcon = ArrowIcon;
PrevNextPostCard.Content = Content;

type ArrowIconType = {
  direction: 'next' | 'prev';
};

function ArrowIcon({ direction }: ArrowIconType) {
  return direction === 'prev' ? (
    <AiOutlineArrowLeft size={60} color='yellow' />
  ) : (
    <AiOutlineArrowRight size={60} color='yellow' />
  );
}

type ContentType = {
  title: string;
  description: string;
};

function Content({ title, description }: ContentType) {
  return (
    <div className='flex flex-col items-center w-full text-white'>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
