import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default async function page({ params: { id } }: Props) {
  const data = await getPost(id);
  if (!data) notFound();

  return <section className='grow'>{data}</section>;
}

async function getPost(id: string) {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);
  let data;
  try {
    data = await fs.readFile(filePath, 'utf-8');
  } catch (err) {
    return '';
  }

  return data;
}
