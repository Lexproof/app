import React from 'react';

import { cn } from '@/lib/utils';

import { ClaimShow } from '@/components/claim-show';
// import { ClaimButton } from '@/components/claim-button';

const pages = [{ name: 'KYC', href: '#', current: true }];

export default function Show() {
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
                      'text-neutral-900 dark:text-slate-50': page.current,
                      'hover:text-gray-700 dark:hover:text-gray-100':
                        page.current,
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
      <ClaimShow />
    </>
  );
}
