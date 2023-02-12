import React from 'react';
import Link from 'next/link';

import { Button } from '@/ui/button';
import { Input } from '@/ui/input';

export default function Home() {
  return (
    <>
      <svg
        className='absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
        aria-hidden='true'
      >
        <defs>
          <pattern
            id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
            width={200}
            height={200}
            x='50%'
            y={-1}
            patternUnits='userSpaceOnUse'
          >
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-neutral-800/10'>
          <path
            d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          width='100%'
          height='100%'
          strokeWidth={0}
          fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
        />
      </svg>
      <main className='flex h-[calc(100vh_-_4rem)] flex-col items-center justify-center overflow-hidden overflow-y-scroll'>
        <div className='bg-transparent p-24 sm:p-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl space-y-2 lg:mx-0'>
              <div className='space-y-6'>
                <h2 className='mt-2 text-4xl font-light tracking-tight text-slate-50 sm:text-4xl'>
                  ZK Powered Compliance for Web3
                </h2>
                <div className='flex w-full max-w-sm items-center justify-center space-x-2'>
                  <Input type='email' placeholder='Email' />
                  <Link href='/products'>
                    <Button type='submit' className='w-24'>
                      Sign in
                    </Button>
                  </Link>
                </div>
              </div>
              <p className='text-md leading-8 text-gray-500'>
                New to Lexproof?{' '}
                <a href='#' className='text-blue-500'>
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
