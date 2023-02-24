'use client';

import React from 'react';
import { Icons } from '@/components/icons';

import { Button } from '@/ui/button';

export function ClaimCard({ data }: any) {
  const [progress, setProgress] = React.useState(0);
  const [status, setStatus] = React.useState({
    businessInfo: 'incomplete',
    relatedParties: 'incomplete',
    documents: 'incomplete',
    claim: 'incomplete',
  });

  enum Status {
    incomplete = 'incomplete',
    complete = 'complete',
  }

  const handleBusinessInfo = () => {
    const timer = setTimeout(() => {
      setStatus((prev) => ({ ...prev, businessInfo: 'complete' }));
      setProgress(progress + 33.33);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const handleRelatedParties = () => {
    const timer = setTimeout(() => {
      setStatus((prev) => ({ ...prev, relatedParties: 'complete' }));
      setProgress(progress + 33.33);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const handleDocuments = () => {
    const timer = setTimeout(() => {
      setStatus((prev) => ({ ...prev, documents: 'complete' }));
      setProgress(progress + 33.33);
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div className='col-span-2 mx-auto w-fit max-w-2xl space-y-3 lg:mx-0'>
      <div className='space-y-6'>
        <div className='h-full rounded-md border border-neutral-800/10 bg-neutral-800/5 p-8 pt-0 shadow-sm ring-0 dark:border-neutral-800 dark:bg-neutral-800/25 dark:shadow-none'>
          <Icons.networth featured filled />
          <section aria-labelledby='claim-heading'>
            <h2 id='information-heading' className='sr-only'>
              Claim Information
            </h2>
            <div className='flex flex-col'>
              <h2 className='text-3xl font-medium tracking-tight text-neutral-900 dark:text-slate-50 sm:text-3xl'>
                KYC
              </h2>
              <p className='font-regular text-lg leading-8 tracking-tight text-gray-500'>
                Know your Business Verification.
              </p>
            </div>
            <div className='mt-6 border-t border-neutral-800 pt-6'>
              <Button
                className='w-full dark:bg-blue-500 dark:text-white'
                disabled
              >
                Claim
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
