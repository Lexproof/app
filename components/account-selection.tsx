'use client';

import React from 'react';

import { RadioGroup, RadioGroupCardItem } from '@/ui/radio-group';

export function AccountSelection() {
  const [selectedAccount, setSelectedAccount] = React.useState('');
  return (
    <RadioGroup
      defaultValue={selectedAccount}
      className='space-y-3'
      onValueChange={(value) => setSelectedAccount(value)}
    >
      <div className='space-3 flex items-center'>
        <RadioGroupCardItem
          title='Personal Account'
          description='For individuals who want to use Lexproof for themselves.'
          value='personal'
          checked={selectedAccount === 'personal'}
        />
      </div>
      <div className='space-3 flex items-center'>
        <RadioGroupCardItem
          value='business'
          title='Business Account'
          description='For businesses that want to use Lexproof for their customers.'
          checked={selectedAccount === 'business'}
        />
      </div>
    </RadioGroup>
  );
}
