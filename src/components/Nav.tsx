import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import cn from 'classnames';

interface Props {}

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="w-full flex-center p-2">
      <ul className="flex gap-4 border-b-2 border-indigo-500">
        <Link
          href="/"
          className={cn(
            'p-2 rounded-t-md border-t border-x border-solid transition delay-75 duration-300 ease-in-out',
            {
              'border-white': router.pathname !== '/',
              'border-indigo-500': router.pathname === '/',
            },
          )}
        >
          Main page
        </Link>

        <Link
          href="/create-dataset"
          className={cn(
            'p-2 rounded-t-md border-t border-x border-solid transition delay-75 duration-300 ease-in-out',
            {
              'border-white': router.pathname !== '/create-dataset',
              'border-indigo-500': router.pathname === '/create-dataset',
            },
          )}
        >
          Create dataset page
        </Link>

        <Link
          href="/manage"
          className={cn(
            'p-2 rounded-t-md border-t border-x border-solid transition delay-75 duration-300 ease-in-out',
            {
              'border-white': router.pathname !== '/manage',
              'border-indigo-500': router.pathname === '/manage',
            },
          )}
        >
          Manage appointments page
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
