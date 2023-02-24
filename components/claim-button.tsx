import React from 'react';
import Image from 'next/image';

import { Button, ButtonProps } from '@/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';

export function ClaimButton(props: ButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-28' {...props}>
          Claim
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <div className='container flex flex-col items-center space-y-3 text-center'>
            <DialogDescription>
              Scan the QR code with your Polygon ID wallet to add the claim to
              your wallet.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className='container flex justify-center'>
          <Image src='/qr-code.png' width={250} height={250} alt='' />
        </div>
      </DialogContent>
    </Dialog>
  );
}
