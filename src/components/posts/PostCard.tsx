import Image from 'next/image';

interface Props {
  imgSrc: string;
  date: string;
  title: string;
  content: string;
  category: string;
  height: 96 | 64;
}

export default function PostCard(props: Props) {
  const { imgSrc, title, date, content, category, height } = props;
  return (
    <article
      className={`flex flex-col items-center w-full h-${height} shadow-md rounded-lg relative`}
    >
      <div className='w-full h-4/6 relative'>
        <Image src={imgSrc} alt='포스트이미지' fill={true} />
      </div>
      <div className='p-2 flex flex-col justify-center items-center relative w-full gap-2'>
        <p className='opacity-50 self-end'>{date}</p>
        <h3>{title}</h3>
        <p>{content}</p>
        <span className='bg-indigo-200 rounded-lg px-2 text-sm'>
          {category}
        </span>
      </div>
    </article>
  );
}
