import Navbar from '@/components/globalNav/Navbar';
import './globals.css';
import { Open_Sans } from 'next/font/google';
const openSans = Open_Sans({ weight: '500', subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko' className={openSans.className}>
      <body>
        <main className='w-full max-w-screen-2xl h-screen  bg-cyan-200 mx-auto px-4'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
