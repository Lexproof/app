'use client';

import React from 'react';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/ui/button';

export function SignupFlow() {
  const [selectedAccount, setSelectedAccount] = React.useState('');
  return (
    <footer className='border-t border-t-neutral-200 bg-neutral-50 dark:border-t-neutral-800 dark:bg-neutral-900'>
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
    </footer>
  );
}
