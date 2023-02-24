import React from 'react';

import { getOffers } from '@/lib/api';
import { ClaimSearch } from '@/components/claim-search';

export default async function Claims() {
  const data = await getOffers();

  return (
    <>
      <main className='flex flex-col items-center justify-center'>
        <div className='w-full bg-neutral-100 p-24 dark:bg-neutral-900 sm:p-24'>
          <div className='max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl space-y-6'>
              <div className='space-y-2'>
                <p className='font-regular text-lg leading-8 tracking-tight text-neutral-900 dark:text-slate-50'>
                  Explore our collection of ZK powered regulatory and compliance
                  claims.
                </p>
              </div>
              <div className='space-y-6'>
                <ClaimSearch data={data} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
