import React from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/ui/button';
import { Input } from '@/ui/input';

export default function Home() {
  return (
    <>
      <main className='flex h-[calc(100vh_-_10rem)] items-center justify-center overflow-hidden overflow-y-scroll bg-neutral-100 dark:bg-neutral-900'>
        <div className='flex min-h-full w-11/12 flex-col justify-center'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <img
              className='mx-auto h-12 w-auto'
              src='/lexproof-icon.png'
              alt='Your Company'
            />
            <h2 className='font-regular mt-6 text-center text-2xl tracking-tight text-neutral-900 dark:text-slate-50 sm:text-2xl'>
              Sign in to your account
            </h2>
          </div>

          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='shadow-bg-neutral-900 bg-white py-8 px-4 shadow dark:border dark:border-neutral-800/25 dark:bg-neutral-800/25 sm:rounded-lg sm:px-10'>
              <form className='space-y-6' action='#' method='POST'>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                  >
                    Email address
                  </label>
                  <div className='mt-1'>
                    <Input
                      type='email'
                      className='bg-white dark:border-neutral-800 dark:bg-neutral-800/25'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                  >
                    Password
                  </label>
                  <div className='mt-1'>
                    <Input
                      type='password'
                      className='border-neutral-300 bg-white dark:border-neutral-800 dark:bg-neutral-800/25'
                    />
                  </div>
                </div>
                <div>
                  <Link href='/products'>
                    <Button
                      type='submit'
                      variant='primary'
                      className='flex w-full justify-center '
                    >
                      Sign in
                    </Button>
                  </Link>
                </div>
              </form>
              <div className='mt-6'>
                <div>
                  <p className='text-center text-sm leading-8 text-gray-500 dark:text-gray-500'>
                    New to Lexproof?{' '}
                    <Link href='/register'>
                      <Button
                        type='submit'
                        variant='link'
                        className={cn(
                          'text-blue-500 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-600'
                        )}
                      >
                        Create an account
                      </Button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
