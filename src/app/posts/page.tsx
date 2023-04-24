import path from 'path';
import { promises as fs } from 'fs';

export default function Posts() {
  return <section className='h-full'>1</section>;
}

export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'data', 'posts.json');
  const data = await fs.readFile(dataPath);
  console.log(data);
  return;
}
