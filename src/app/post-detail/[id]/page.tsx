import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import MarkDownView from '@/components/posts/MarkDownView';
import Image from 'next/image';
import { getPostById, getPosts, getPrevNextPostIndex } from '@/service/posts';
import PrevNextPostCard from '@/components/posts/PrevNextPostCard';
import PrevNextPostCardContainer from '@/components/posts/PrevNextPostCardContainer';
import AdjacentPostCard from '@/components/posts/AdjacentPostCard';

interface Props {
  params: {
    id: string;
  };
}

export default async function page({ params: { id } }: Props) {
  const data = await getPostById(id);
  const [prevPost, nextPost] = await getPrevNextPostIndex(id);

  if (!data) notFound();

  return (
    <section className='bg-gray-100 shadow-lg m-4 flex flex-col'>
      <Image
        className='w-full h-1/5 max-h-[500px]'
        src={`/image/${id}.png`}
        alt={id}
        width={760}
        height={420}
      />
      <h1 className='text-4xl font-bold'>{data.title}</h1>
      <p className='text-xl font-bold'>{data.description}</p>
      <div className='w-full border-solid border-2 border-sky-600 mt-4 mb-8' />
      <MarkDownView content={data.content} />
      {/* <PrevNextPostCardContainer prevPost={prevPost} nextPost={nextPost} /> */}

      <section className='flex shadow-md'>
        {prevPost && <AdjacentPostCard post={prevPost} type='prev' />}
        {nextPost && <AdjacentPostCard post={nextPost} type='next' />}
      </section>
    </section>
  );
}

async function getPost(id: string) {
  console.log(process.cwd());
  const filePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);
  let data;
  try {
    data = await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    return '';
  }

  return data;
}
