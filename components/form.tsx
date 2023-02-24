'use client';

import React from 'react';
import Link from 'next/link';

import { Button } from '@/ui/button';
import { Progress } from '@/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { cn } from '@/lib/utils';

export function Form({ data }: any) {
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
    <section className='col-span-3'>
      <div className='space-y-2'>
        {/* <span className='ml-2 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800 px-3 py-0.5 text-sm font-medium text-white'>
                $40
              </span> */}
        <Progress value={progress} className='w-[100%]' />
      </div>
      {/* <div className='my-8 grid grid-cols-3 items-center gap-8'>
              <section className='col-span-2'>
                <h2 className='text-lg font-medium leading-10 tracking-tight text-neutral-900 dark:text-slate-50'>
                  Identity Verification (KYC)
                </h2>
                <p className='font-regular mt-2 text-base leading-8 tracking-tight text-gray-500'>
                  Lexproof needs to verify your identity to ensure you are who
                  you say you are.
                </p>
              </section>
              <section className='col-span-1'>
                <Button
                  variant='outline'
                  className='w-28 bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50'
                  disabled
                >
                  Completed
                </Button>
              </section>
            </div> */}
      <div className='my-8 grid grid-cols-3 items-center gap-8'>
        <section className='col-span-2'>
          <h2 className='text-lg font-medium leading-10 tracking-tight text-neutral-900 dark:text-slate-50'>
            Business Information
          </h2>
          <p className='font-regular text-base leading-8 tracking-tight text-gray-500'>
            Please provide thorough and accurate information about your business
            for quick processing of your application.
          </p>
        </section>
        <section className='col-span-1'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={
                  status.businessInfo === Status.complete
                    ? 'outline'
                    : 'default'
                }
                onClick={handleBusinessInfo}
                className={cn('w-28', {
                  'bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50':
                    status.businessInfo === Status.complete,
                })}
                disabled={status.businessInfo === Status.complete}
              >
                {status.businessInfo === Status.complete ? 'Complete' : 'Start'}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <Tabs defaultValue='general' className='w-full'>
                <TabsList>
                  <TabsTrigger value='general'>General Info</TabsTrigger>
                  <TabsTrigger value='purpose'>Account Purpose</TabsTrigger>
                </TabsList>
                <TabsContent value='general' className='w-[400px]'>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </p>
                  <div className='grid gap-2 py-4'>
                    <div className='space-y-1'>
                      <Label htmlFor='name'>Name</Label>
                      <Input id='name' defaultValue='Pedro Duarte' />
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor='username'>Username</Label>
                      <Input id='username' defaultValue='@peduarte' />
                    </div>
                  </div>
                  <div className='flex'>
                    <Button>Save changes</Button>
                  </div>
                </TabsContent>
                <TabsContent value='purpose' className='w-[400px]'>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </p>
                  <div className='grid gap-2 py-4'>
                    <div className='space-y-1'>
                      <Label htmlFor='current'>Current password</Label>
                      <Input id='current' type='password' />
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor='new'>New password</Label>
                      <Input id='new' type='password' />
                    </div>
                  </div>
                  <div className='flex'>
                    <Button>Save password</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </section>
      </div>
      {/* <div className='my-8 grid grid-cols-3 items-center gap-8'>
              <section className='col-span-2'>
                <div className='flex items-center'>
                  <h2 className='text-lg font-medium leading-10 tracking-tight text-neutral-900 dark:text-slate-50'>
                    Upload Documents & Link Accounts{' '}
                    <span className='ml-2 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800 px-3 py-0.5 text-sm font-medium text-white'>
                      Required
                    </span>
                  </h2>
                </div>
                <p className='font-regular mt-2 text-base leading-8 tracking-tight text-gray-500'>
                  Lexproof also needs a few documents and/or links to financial
                  accounts to verify your networth.
                </p>
              </section>
              <section className='col-span-1'>
                <Button
                  variant='outline'
                  className='w-28 bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50'
                  disabled
                >
                  Completed
                </Button>
              </section>
            </div> */}
      <div className='my-8 grid grid-cols-3 items-center gap-8'>
        <section className='col-span-2'>
          <h2 className='text-lg font-medium leading-10 tracking-tight text-neutral-900 dark:text-slate-50'>
            Related Parties
          </h2>
          <p className='font-regular text-base leading-8 tracking-tight text-gray-500'>
            Please provide the required information about the individuals who
            will be operating this account.
          </p>
        </section>
        <section className='col-span-1'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={
                  status.relatedParties === Status.complete
                    ? 'outline'
                    : 'default'
                }
                onClick={handleRelatedParties}
                className={cn('w-28', {
                  'bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50':
                    status.relatedParties === Status.complete,
                })}
                disabled={status.relatedParties === Status.complete}
              >
                {status.relatedParties === Status.complete
                  ? 'Complete'
                  : 'Start'}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <Tabs defaultValue='rep' className='w-full'>
                <TabsList>
                  <TabsTrigger value='rep'>
                    Authorized Representative
                  </TabsTrigger>
                  <TabsTrigger value='compliance'>
                    Compliance Officer
                  </TabsTrigger>
                  <TabsTrigger value='owners'>Beneficial Owners</TabsTrigger>
                  <TabsTrigger value='directors'>Directors</TabsTrigger>
                </TabsList>
                <TabsContent value='rep' className='w-[400px]'>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </p>
                  <div className='grid gap-2 py-4'>
                    <div className='space-y-1'>
                      <Label htmlFor='name'>Name</Label>
                      <Input id='name' defaultValue='Pedro Duarte' />
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor='username'>Username</Label>
                      <Input id='username' defaultValue='@peduarte' />
                    </div>
                  </div>
                  <div className='flex'>
                    <Button>Save changes</Button>
                  </div>
                </TabsContent>
                <TabsContent value='compliance' className='w-[400px]'>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Change your password here. After saving, you&apos;ll be
                    logged out.
                  </p>
                  <div className='grid gap-2 py-4'>
                    <div className='space-y-1'>
                      <Label htmlFor='current'>Current password</Label>
                      <Input id='current' type='password' />
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor='new'>New password</Label>
                      <Input id='new' type='password' />
                    </div>
                  </div>
                  <div className='flex'>
                    <Button>Save password</Button>
                  </div>
                </TabsContent>
                <TabsContent value='owners' className='w-[400px]'>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </p>
                  <div className='grid gap-2 py-4'>
                    <div className='space-y-1'>
                      <Label htmlFor='name'>Name</Label>
                      <Input id='name' defaultValue='Pedro Duarte' />
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor='username'>Username</Label>
                      <Input id='username' defaultValue='@peduarte' />
                    </div>
                  </div>
                  <div className='flex'>
                    <Button>Save changes</Button>
                  </div>
                </TabsContent>
                <TabsContent value='directors' className='w-[400px]'>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>
                    Make changes to your account here. Click save when
                    you&apos;re done.
                  </p>
                  <div className='grid gap-2 py-4'>
                    <div className='space-y-1'>
                      <Label htmlFor='name'>Name</Label>
                      <Input id='name' defaultValue='Pedro Duarte' />
                    </div>
                    <div className='space-y-1'>
                      <Label htmlFor='username'>Username</Label>
                      <Input id='username' defaultValue='@peduarte' />
                    </div>
                  </div>
                  <div className='flex'>
                    <Button>Save changes</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </section>
      </div>
      <div className='my-8 grid grid-cols-3 items-center gap-8'>
        <section className='col-span-2'>
          <div className='flex items-center'>
            <h2 className='text-lg font-medium leading-10 tracking-tight text-neutral-900 dark:text-slate-50'>
              Upload Documents & Link Accounts{' '}
              {/* <span className='ml-2 inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800 px-3 py-0.5 text-sm font-medium text-white'>
                      Required
                    </span> */}
            </h2>
          </div>
          <p className='font-regular text-base leading-8 tracking-tight text-gray-500'>
            Lexproof also needs a few documents used to form your business.
          </p>
        </section>
        <section className='col-span-1'>
          {/* <Button
                  variant='outline'
                  className='w-28 bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50'
                  disabled
                >
                  Completed
                </Button> */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={
                  status.documents === Status.complete ? 'outline' : 'default'
                }
                onClick={handleDocuments}
                className={cn('w-28', {
                  'bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50':
                    status.documents === Status.complete,
                })}
                disabled={status.documents === Status.complete}
              >
                {status.documents === Status.complete ? 'Complete' : 'Start'}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <div className='mt-1 sm:col-span-2 sm:mt-0'>
                <div className='flex max-w-lg justify-center rounded-md border-2 border-dashed px-6 pt-5 pb-6 dark:border-neutral-800'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto h-12 w-12 text-gray-400'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'
                    >
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        strokeWidth={2}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer rounded-md bg-white font-medium text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500 dark:bg-neutral-900'
                      >
                        <span>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-gray-500'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </section>
      </div>
      {/* <div className='my-8 grid grid-cols-3 items-center gap-8'>
        <section className='col-span-2'>
          <h2 className='text-lg font-medium leading-10 tracking-tight text-neutral-900 dark:text-slate-50'>
            Connect Polygon ID
          </h2>
          <p className='font-regular text-base leading-8 tracking-tight text-gray-500'>
            Use your Polygon ID to connect your wallet and claim your proof.
          </p>
        </section>
        <section className='col-span-1'>
          <Link
            passHref
            href='https://platform-test.polygonid.com/claim-link/284ea1c2-640e-43f8-b5c9-8fe47268e8dc'
            target='_blank'
          >
            <Button
              className='w-28 dark:bg-blue-500 dark:text-white'
              disabled={
                Object.values(status).filter((s) => s === 'complete').length < 3
              }
            >
              Claim
            </Button>
          </Link>
        </section>
      </div> */}
    </section>
  );
}
