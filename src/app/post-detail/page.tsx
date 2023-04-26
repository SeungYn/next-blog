import { promises as fs } from 'fs';
import path from 'path';

interface Props {
  params: {
    id: string;
  };
}

export default function DetailPage({ params }: Props) {
  // const data = await getPost('javascript-10-tips');
  // console.log(data);
  console.log(params);
  return <section className='grow'>123</section>;
}

// export function generateStaticParams() {}

async function getPost(id: string) {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${id}.md`);
  const data = await fs.readFile(filePath, 'utf-8');
  console.log(data);
  return data;
}
