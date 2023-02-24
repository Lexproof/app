'use client';

import React from 'react';
import Image from 'next/image';

import { Button } from '@/ui/button';
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

export function ShowFormButton({ data }: any) {
  const [status, setStatus] = React.useState('incomplete');
  enum Status {
    incomplete = 'incomplete',
    complete = 'complete',
  }
  const onClick = () => {
    const timer = setTimeout(() => setStatus('complete'), 1500);
    return () => clearTimeout(timer);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={status === Status.complete ? 'outline' : 'default'}
          onClick={onClick}
          className={cn('w-28', {
            'bg-gray-500 text-white dark:bg-neutral-900 dark:text-slate-50':
              status === Status.complete,
          })}
          disabled={status === Status.complete}
        >
          {status === Status.complete ? 'Complete' : 'Start'}
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
              Make changes to your account here. Click save when you're done.
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
              Change your password here. After saving, you'll be logged out.
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
  );
}
