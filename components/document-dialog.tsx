'use client';

import React from 'react';

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/ui/select';

export function DocumentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get started</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[625px]'>
        <DialogHeader>
          <DialogTitle>Submit Documentation</DialogTitle>
          <DialogDescription>
            Fill out the form below to submit your documentation.
          </DialogDescription>
        </DialogHeader>
        <div className='grid justify-start gap-8 py-4'>
          <div className='grid w-full max-w-sm items-center gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' placeholder='Email' />
          </div>
          <div className='grid w-full max-w-sm items-center gap-2'>
            <Label htmlFor='email'>What is your full legal name?</Label>
            <Input type='text' id='name' placeholder='' />
          </div>
          <div className='grid w-full max-w-sm items-center gap-2'>
            <Label htmlFor='email'>What is your full legal name?</Label>
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Vegetables</SelectLabel>
                  <SelectItem value='aubergine'>Aubergine</SelectItem>
                  <SelectItem value='broccoli'>Broccoli</SelectItem>
                  <SelectItem value='carrot' disabled>
                    Carrot
                  </SelectItem>
                  <SelectItem value='courgette'>Courgette</SelectItem>
                  <SelectItem value='leek'>Leek</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Meat</SelectLabel>
                  <SelectItem value='beef'>Beef</SelectItem>
                  <SelectItem value='chicken'>Chicken</SelectItem>
                  <SelectItem value='lamb'>Lamb</SelectItem>
                  <SelectItem value='pork'>Pork</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
