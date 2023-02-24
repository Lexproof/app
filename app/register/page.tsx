import React from 'react';

import { SignupFlow } from '@/components/signup-flow';

export default function Home() {
  return (
    <>
      <div className='container flex h-[calc(100vh_-_4rem)] items-center justify-center'>
        <SignupFlow />
      </div>
    </>
  );
}
