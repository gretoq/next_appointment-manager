import Image from 'next/image';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
    >
      <h1 className="mb-3 text-2xl font-semibold uppercase">
        Welcome to the hospital appointments manager application
      </h1>

      <p className="m-0 max-w-[30ch] opacity-50">
        You can ...
      </p>
    </div>
  );
}
