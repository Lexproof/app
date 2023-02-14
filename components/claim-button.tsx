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

export function ClaimButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-28'>Claim</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <div className='container flex flex-col items-center space-y-3 text-center'>
            <Image src='/lexproof-icon.png' width={40} height={40} alt='' />
            <DialogDescription>
              Scan the QR code with your Polygon ID wallet to add the claim to
              your wallet.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className='container flex justify-center'>
          <Image src='/networth-claim.png' width={175} height={175} alt='' />
        </div>
      </DialogContent>
    </Dialog>
  );
}
