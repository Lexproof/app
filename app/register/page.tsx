import React from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { AccountSelection } from '@/components/account-selection';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';

export default function Home() {
  return (
    <>
      <div className='container flex h-[calc(100vh_-_4rem)] items-center justify-center'>
        <div className='shadow-bg-neutral-900 grid grid-cols-4 items-center justify-center space-x-24 rounded-lg border bg-white p-24 shadow dark:border dark:border-neutral-800/25 dark:bg-neutral-800/25'>
          <div className='relative col-span-2 xl:col-start-1'>
            <h2 className='text-base font-semibold'>
              <span className='bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent'>
                01 of 03
              </span>
            </h2>
            <h1 className='mt-3 text-6xl font-bold tracking-tight text-white'>
              Lets get you set up
            </h1>
            <p className='mt-3 text-lg leading-8 text-gray-300'>
              Creating an account is quick and easy. With our platform, you can
              purchase compliance related claims for KYC, KYB (business),
              accredited investor, and more. Select which account to get
              started.
            </p>
            <Button variant='default' className='mt-5 w-40' disabled={true}>
              Get Started
            </Button>
          </div>
          <div className='w-100 col-span-2 flex flex-col flex-wrap'>
            <AccountSelection />
          </div>
        </div>
      </div>
      {/* <footer className='border-t border-t-neutral-200 bg-neutral-50 dark:border-t-neutral-800 dark:bg-neutral-900'>
        <div className='container py-12 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex justify-center space-x-6 md:order-2'>
            <nav className='flex items-center space-x-1'>
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className: 'text-neutral-700 dark:text-neutral-400',
                  })}
                >
                  <Icons.gitHub className='h-5 w-5' />
                  <span className='sr-only'>GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target='_blank'
                rel='noreferrer'
              >
                <div
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className: 'text-neutral-700 dark:text-neutral-400',
                  })}
                >
                  <Icons.twitter className='h-5 w-5 fill-current' />
                  <span className='sr-only'>Twitter</span>
                </div>
              </Link>
            </nav>
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-gray-500'>
              &copy; 2023 StackerDAO Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </>
  );
}
