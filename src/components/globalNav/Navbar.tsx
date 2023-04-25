import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='flex justify-between items-center py-4 ali'>
      <Link href='/' className='text-2xl font-bold'>{`SeungYn's blog`}</Link>
      <nav>
        <Link href='#'>
          <span className='pr-4'>home</span>
        </Link>
        <Link href='#'>
          <span className='pr-4'>about</span>
        </Link>
        <Link href='#'>
          <span className='pr-4'>posts</span>
        </Link>
        <Link href='#'>
          <span>contact</span>
        </Link>
      </nav>
    </header>
  );
}
