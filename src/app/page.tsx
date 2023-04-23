import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import PorfileCard from '@/components/PorfileCard';

const openSans = Open_Sans({ weight: '800', subsets: ['latin'] });

export default function Home() {
  return (
    <section>
      <PorfileCard />
    </section>
  );
}
