import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { ClaimSearch } from '@/components/claim-search';

async function getClaims() {
  const data = await fetch(`${process.env.NEXT_API_URL}/claims`);
  return await data.json();
}

export default async function Claims(props) {
  const claims = await getClaims();
  return (
    <>
      <main className='flex flex-col items-center justify-center'>
        <div className='w-full bg-transparent p-24 sm:p-24'>
          <div className='max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl space-y-6'>
              <div className='space-y-2'>
                <p className='font-regular text-lg leading-8 tracking-tight text-slate-50'>
                  Explore our collection of ZK powered regulatory and compliance
                  claims.
                </p>
              </div>
              <div className='space-y-6'>
                <ClaimSearch claims={claims} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
