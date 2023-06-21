import React, { ReactNode } from 'react';
import Head from 'next/head';
import Nav from './Nav';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: ReactNode,
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Appointment manager</title>
      </Head>

      <header className="container mx-auto">
        <Nav />
      </header>

      <main className={`flex items-center min-h-screen flex-col pt-4 ${inter.className}`}>
        {children}
      </main>
    </>
  );
};

export default RootLayout;
