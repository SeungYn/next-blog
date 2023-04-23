import Image from 'next/image';
import img from '/public/react.png';
import Link from 'next/link';

export default function PorfileCard() {
  return (
    <section className='flex flex-col justify-center items-center gap-2 py-8'>
      <Image
        src={img}
        className='rounded-full'
        alt='기본_이미지'
        width={250}
        height={250}
      />
      <h2 className='text-xl font-black'>Hi, I&lsquo;m SeungYn</h2>
      <p>유튜버 유승윤</p>
      <p className='opacity-50'>꿈을 만드는 크리에이터 유승윤 승윤</p>
      <Link href='/contact' className='p-1 bg-yellow-500 rounded-xl px-4'>
        Contact Me
      </Link>
    </section>
  );
}
