import React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button } from '@/ui/button';

const pages = [{ name: 'Networth > $1M', href: '#', current: true }];

export default function ClaimShow() {
  return (
    <>
      <nav className='flex px-12 pt-6' aria-label='Breadcrumb'>
        <ol role='list' className='flex items-center space-x-4 px-4'>
          <li>
            <div>
              <a
                href='/claims'
                className='text-md ml-4 font-medium text-gray-500 hover:text-gray-700'
              >
                Claims
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className='flex items-center'>
                <svg
                  className='h-5 w-5 flex-shrink-0 text-neutral-800'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                </svg>
                <a
                  href={page.href}
                  className={cn(
                    'text-md ml-4 font-medium text-gray-500 hover:text-gray-700',
                    {
                      'text-white': page.current,
                      'hover:text-gray-100': page.current,
                    }
                  )}
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <main className='bg-transparent p-12 sm:p-12'>
        <div className='grid max-w-7xl grid-cols-4 gap-16 px-6 lg:px-8'>
          <div className='col-span-2 mx-auto max-w-2xl space-y-6 lg:mx-0'>
            <div className='space-y-6'>
              <div className='flex flex-wrap'>
                <div className='h-fit rounded-md border border-neutral-800 p-12 shadow-sm ring-1 ring-slate-900/5 dark:bg-neutral-800/50 dark:shadow-none dark:ring-0'>
                  <Icons.networth featured filled />
                </div>
              </div>
            </div>
          </div>
          <section className='col-span-2'>
            <div className='space-y-2'>
              <span className='ml-2 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800 px-3 py-0.5 text-sm font-medium text-white'>
                $60
              </span>
              <h2 className='mt-2 text-4xl font-light tracking-tight text-slate-50 sm:text-7xl'>
                Networth &gt; $1M
              </h2>
              <p className='font-regular text-lg leading-8 tracking-tight text-gray-500'>
                A liquid networth of $1M or more needed for eligibility.
              </p>
            </div>
            <div className='my-8 grid grid-cols-3 items-center gap-8'>
              <section className='col-span-2'>
                <h2 className='text-lg font-medium leading-10 tracking-tight text-white'>
                  Identity Verification (KYC)
                </h2>
                <p className='font-regular mt-2 text-base leading-8 tracking-tight text-gray-500'>
                  Lexproof needs to verify your identity to ensure you are who
                  you say you are.
                </p>
              </section>
              <section className='col-span-1'>
                <Button variant='outline' disabled>
                  Completed
                </Button>
              </section>
            </div>
            <div className='my-8 grid grid-cols-3 items-center gap-8'>
              <section className='col-span-2'>
                <div className='flex items-center'>
                  <h2 className='text-lg font-medium leading-10 tracking-tight text-white'>
                    Upload Documents{' '}
                    <span className='ml-2 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800 px-3 py-0.5 text-sm font-medium text-white'>
                      Required
                    </span>
                  </h2>
                </div>
                <p className='font-regular mt-2 text-base leading-8 tracking-tight text-gray-500'>
                  Lexproof also needs a few documents to verify your your
                  networth.
                </p>
              </section>
              <section className='col-span-1'>
                <Button>Get started</Button>
              </section>
            </div>
            <div className='my-8 grid grid-cols-3 items-center gap-8'>
              <section className='col-span-2'>
                <h2 className='text-lg font-medium leading-10 tracking-tight text-white'>
                  Connect Polygon ID
                </h2>
                <p className='font-regular mt-2 text-base leading-8 tracking-tight text-gray-500'>
                  Use your Polygon ID to connect your wallet and claim your
                  proof.
                </p>
              </section>
              <section className='col-span-1'>
                <Button disabled>Claim proof</Button>
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
