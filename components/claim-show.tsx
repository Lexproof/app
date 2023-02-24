'use client';

import React from 'react';

import { Icons } from '@/components/icons';
import { ClaimButton } from '@/components/claim-button';

import { Button } from '@/ui/button';
import { Progress } from '@/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Dialog, DialogContent, DialogTrigger } from '@/ui/dialog';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { Textarea } from '@/ui/textarea';
import { cn } from '@/lib/utils';

export function ClaimShow({ data }: any) {
  const [progress, setProgress] = React.useState(0);
  const [status, setStatus] = React.useState({
    businessInfo: 'incomplete',
    relatedParties: 'incomplete',
    documents: 'incomplete',
    claim: 'incomplete',
  });
  const [claiming, setClaiming] = React.useState(false);
  const [claimed, setClaimed] = React.useState(false);

  enum Status {
    incomplete = 'incomplete',
    complete = 'complete',
  }

  const handleBusinessInfo = () => {
    setStatus((prev) => ({ ...prev, businessInfo: 'complete' }));
    setProgress(progress + 33.33);
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

  const handleClaim = () => {
    const timer = setTimeout(() => {
      setClaiming(true);
    }, 2000);
    const timer2 = setTimeout(() => {
      setClaiming(false);
    }, 10000);

    const timer3 = setTimeout(() => {
      setClaimed(true);
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  return (
    <main className='bg-neutral-100 py-3 px-12 dark:bg-neutral-900 sm:px-12'>
      <div className='grid grid-cols-5 items-center py-6'>
        <div className='col-span-2 mx-auto w-fit max-w-2xl space-y-3 lg:mx-0'>
          <div className='space-y-6'>
            <div className='h-full rounded-md border border-neutral-800/10 bg-neutral-800/5 p-8 pt-0 shadow-sm ring-0 dark:border-neutral-800 dark:bg-neutral-800/25 dark:shadow-none'>
              <section aria-labelledby='claim-heading'>
                <Icons.networth featured filled />
                <h2 id='information-heading' className='sr-only'>
                  Claim Information
                </h2>
                <div className='flex flex-col'>
                  <h2 className='text-3xl font-medium tracking-tight text-neutral-900 dark:text-slate-50 sm:text-3xl'>
                    KYB (Know Your Business)
                  </h2>
                  <p className='font-regular text-lg leading-8 tracking-tight text-gray-500'>
                    Protect your business with our KYB claim.
                  </p>
                </div>
                <div className='mt-6 border-t border-neutral-300 pt-6 dark:border-neutral-800'>
                  {claiming && (
                    <Button variant='outline' className='w-full'>
                      Claiming...
                    </Button>
                  )}
                  {claimed && !claiming && (
                    <Button variant='default' className='w-full' disabled>
                      Claimed!
                    </Button>
                  )}
                  {!claiming && !claimed && (
                    <ClaimButton
                      className='w-full dark:bg-blue-500 dark:text-white'
                      disabled={
                        claimed ||
                        Object.values(status).filter((s) => s === 'complete')
                          .length < 3
                      }
                      onClick={handleClaim}
                    />
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
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
                Please provide thorough and accurate information about your
                business for quick processing of your application.
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
                    className={cn('w-28', {
                      'bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50':
                        status.businessInfo === Status.complete,
                    })}
                    disabled={status.businessInfo === Status.complete}
                  >
                    {status.businessInfo === Status.complete
                      ? 'Complete'
                      : 'Start'}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <Tabs defaultValue='general' className='w-full'>
                    <TabsList>
                      <TabsTrigger value='general'>General Info</TabsTrigger>
                      <TabsTrigger value='purpose'>Account Purpose</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value='general'
                      className='h-100 max-h-[500px] w-full overflow-y-auto'
                    >
                      <div className='mb-10 flex flex-col space-y-3'>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Tax ID/Registration Number
                            </Label>
                          </div>
                          <Input id='name' defaultValue='94-2404110' />
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>Date of formation</Label>
                          </div>
                          <Input id='name' defaultValue='MM/DD/YYYY' />
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Provide a description of your business
                            </Label>
                          </div>
                          <Textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Do you do business under a different name than
                              your legal entity name?
                            </Label>
                          </div>
                          <RadioGroup defaultValue='no'>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='yes' id='r1' />
                              <Label htmlFor='r1'>Yes</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='no' id='r2' />
                              <Label htmlFor='r2'>No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Do you have a business website?
                            </Label>
                          </div>
                          <RadioGroup defaultValue='no'>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='yes' id='r1' />
                              <Label htmlFor='r1'>Yes</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='no' id='r2' />
                              <Label htmlFor='r2'>No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>Number of employees</Label>
                          </div>
                          <Select defaultValue='3'>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='3' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Num of employees</SelectLabel>
                                <SelectItem value='1'>1</SelectItem>
                                <SelectItem value='2'>2</SelectItem>
                                <SelectItem value='3'>3</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Are you registered to have a financial services
                              license or registration to conduct your business
                              legally?
                            </Label>
                          </div>
                          <RadioGroup defaultValue='yes'>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='yes' id='r1' />
                              <Label htmlFor='r1'>Yes</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='no' id='r2' />
                              <Label htmlFor='r2'>No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className='flex'>
                        <Button onClick={handleBusinessInfo}>
                          {status.businessInfo === Status.complete
                            ? 'Saved!'
                            : 'Save changes'}
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value='purpose'
                      className='h-100 max-h-[500px] w-full overflow-y-auto'
                    >
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
                Please provide the required information about the individuals
                who will be operating this account.
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
                      <TabsTrigger value='owners'>
                        Beneficial Owners
                      </TabsTrigger>
                      <TabsTrigger value='directors'>Directors</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value='rep'
                      className='h-100 max-h-[500px] w-full overflow-y-auto'
                    >
                      <div className='mb-10 flex flex-col space-y-3'>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Tax ID/Registration Number
                            </Label>
                          </div>
                          <Input id='name' defaultValue='94-2404110' />
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>Date of formation</Label>
                          </div>
                          <Input id='name' defaultValue='MM/DD/YYYY' />
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Provide a description of your business
                            </Label>
                          </div>
                          <Textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Do you do business under a different name than
                              your legal entity name?
                            </Label>
                          </div>
                          <RadioGroup defaultValue='no'>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='yes' id='r1' />
                              <Label htmlFor='r1'>Yes</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='no' id='r2' />
                              <Label htmlFor='r2'>No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Do you have a business website?
                            </Label>
                          </div>
                          <RadioGroup defaultValue='no'>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='yes' id='r1' />
                              <Label htmlFor='r1'>Yes</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='no' id='r2' />
                              <Label htmlFor='r2'>No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>Number of employees</Label>
                          </div>
                          <Select defaultValue='3'>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='3' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Num of employees</SelectLabel>
                                <SelectItem value='1'>1</SelectItem>
                                <SelectItem value='2'>2</SelectItem>
                                <SelectItem value='3'>3</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className='my-3'>
                          <div className='my-3'>
                            <Label htmlFor='name'>
                              Are you registered to have a financial services
                              license or registration to conduct your business
                              legally?
                            </Label>
                          </div>
                          <RadioGroup defaultValue='yes'>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='yes' id='r1' />
                              <Label htmlFor='r1'>Yes</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                              <RadioGroupItem value='no' id='r2' />
                              <Label htmlFor='r2'>No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className='flex'>
                        <Button onClick={handleBusinessInfo}>
                          {status.businessInfo === Status.complete
                            ? 'Saved!'
                            : 'Save changes'}
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value='compliance'
                      className='h-100 max-h-[500px] w-full overflow-y-auto'
                    >
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
                    <TabsContent
                      value='owners'
                      className='h-100 max-h-[500px] w-full overflow-y-auto'
                    >
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
                    <TabsContent
                      value='directors'
                      className='h-100 max-h-[500px] w-full overflow-y-auto'
                    >
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
                      status.documents === Status.complete
                        ? 'outline'
                        : 'default'
                    }
                    onClick={handleDocuments}
                    className={cn('w-28', {
                      'bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50':
                        status.documents === Status.complete,
                    })}
                    disabled={status.documents === Status.complete}
                  >
                    {status.documents === Status.complete
                      ? 'Complete'
                      : 'Start'}
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
      </div>
    </main>
  );
}
