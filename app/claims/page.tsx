import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { ClaimSearch } from '@/components/claim-search';

// async function getClaims() {
//   const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/claims`);
//   return await data.json();
// }

const claims = [
  {
    id: 1,
    name: 'Networth > $1M',
    icon: 1,
    tldr: 'A liquid networth of $1M or more needed for eligibility.',
    price: '60',
  },
  {
    id: 2,
    name: 'Income > $200k for last 2 years',
    icon: 2,
    tldr: 'Income tax return of $200k or more for the last 3 financial years.',
    price: '60',
  },
  {
    id: 3,
    name: 'Accredited License Letter',
    icon: 3,
    tldr: 'Letter from an accountant, licensed securities broker or registered investment advisor.',
    price: '60',
  },
  {
    id: 4,
    name: 'U.S. Citizenship',
    icon: 4,
    tldr: 'You are currently a citizen of the U.S.',
    price: '45',
  },
  {
    id: 5,
    name: 'Residency',
    icon: 5,
    tldr: 'Currently a resident of the U.S. and for the last 2 years.',
    price: '45',
  },
];

export default async function Claims(props) {
  // const claims = await getClaims();
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
