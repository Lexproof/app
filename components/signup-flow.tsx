'use client';

import React from 'react';

import { Button } from '@/ui/button';
import { RadioGroup, RadioGroupCardItem } from '@/ui/radio-group';
import { useSteps } from '@/hooks/use-steps';
import { Input } from '@/ui/input';
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

interface FormData {
  firstName: string;
  lastName: string;
  businessName: string;
  businessCountry: string;
  businessState: string;
  businessWebsite: string;
  hasWebsite: boolean;
  businessType: string;
  businessIndustry: string;
}

const isFormDataValid = (formData: FormData): boolean => {
  return Object.values(formData).every((value) => value !== '');
};

const usStates = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
];

const businessEntityTypes = [
  { value: 'soleProprietorship', label: 'Sole Proprietorship' },
  { value: 'partnership', label: 'Partnership' },
  {
    value: 'limitedLiabilityCompany',
    label: 'Limited Liability Company (LLC)',
  },
  { value: 'corporation', label: 'Corporation' },
];

const industryTypes = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
];

export function SignupFlow() {
  const [selectedAccount, setSelectedAccount] = React.useState(null);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    businessName: '',
    businessCountry: '',
    businessState: '',
    businessWebsite: '',
    hasWebsite: false,
    businessType: '',
    businessIndustry: '',
  });

  const isValid = isFormDataValid(formData);

  const { currentStep, goToNextStep } = useSteps(1, 2);

  enum Steps {
    AccountType = 1,
    AccountDetails = 2,
  }

  const AccountTypeStep = () => (
    <>
      <div className='relative col-span-2 xl:col-start-1'>
        <h2 className='text-base font-semibold'>
          <span className='bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent'>
            01 of 02
          </span>
        </h2>
        <h1 className='mt-3 text-6xl font-bold tracking-tight text-white'>
          Lets get you set up
        </h1>
        <p className='mt-3 text-lg leading-8 text-gray-300'>
          Creating an account is quick and easy. With our platform, you can
          purchase compliance related claims for KYC, KYB (business), accredited
          investor, and more. Select which account to get started.
        </p>
        <Button
          variant='default'
          className='mt-5 w-40'
          disabled={!selectedAccount}
          onClick={goToNextStep}
        >
          Get Started
        </Button>
      </div>
      <div className='w-100 col-span-2 flex flex-col flex-wrap'>
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
      </div>
    </>
  );

  const AccountDetailsStep = () => (
    <>
      <div className='relative col-span-2 xl:col-start-1'>
        <h2 className='text-base font-semibold'>
          <span className='bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent'>
            02 of 02
          </span>
        </h2>
        <h1 className='mt-3 text-6xl font-bold tracking-tight text-white'>
          Complete your business account
        </h1>
        <p className='mt-3 text-lg leading-8 text-gray-300'>
          Make sure to fill out all the fields below to complete your account.
          You can always come back and edit these details later.
        </p>
      </div>
      <div className='w-100 col-span-2 flex flex-col flex-wrap'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='shadow-bg-neutral-900 bg-white py-8 px-4 shadow dark:border dark:border-neutral-800/25 dark:bg-neutral-800/25 sm:rounded-lg sm:px-10'>
            <form
              className='space-y-6'
              action='#'
              method='POST'
              autoComplete='off'
            >
              <div className='grid grid-cols-2 space-x-6'>
                <div>
                  <label
                    htmlFor='firstName'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                  >
                    Legal first name
                  </label>
                  <div className='mt-1'>
                    <Input
                      type='text'
                      className='bg-white dark:border-neutral-800 dark:bg-neutral-800/25'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='lastName'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                  >
                    Legal last name
                  </label>
                  <div className='mt-1'>
                    <Input
                      type='text'
                      className='border-neutral-300 bg-white dark:border-neutral-800 dark:bg-neutral-800/25'
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                >
                  Business name
                </label>
                <div className='mt-1'>
                  <Input
                    type='email'
                    className='bg-white dark:border-neutral-800 dark:bg-neutral-800/25'
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 space-x-6'>
                <div>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                  >
                    Country of registration
                  </label>
                  <div className='mt-1'>
                    <Select defaultValue='usa'>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select a country' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Countries</SelectLabel>
                          <SelectItem value='usa'>United States</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='state'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                  >
                    State
                  </label>
                  <div className='mt-1'>
                    <Select>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select a state' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>States</SelectLabel>
                          {usStates.map((state) => (
                            <SelectItem key={state.value} value={state.value}>
                              {state.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor='type'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                >
                  Entity Type
                </label>
                <div className='mt-1'>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select entity type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Business Entity Types</SelectLabel>
                        {businessEntityTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label
                  htmlFor='industry'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-500'
                >
                  Industry
                </label>
                <div className='mt-1'>
                  <Select>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Select an industry' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Industry Types</SelectLabel>
                        {industryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Button
                  type='submit'
                  variant='primary'
                  className='flex w-full justify-center'
                  disabled={!isValid}
                >
                  Create account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  const stepsMap = {
    [Steps.AccountType]: <AccountTypeStep />,
    [Steps.AccountDetails]: <AccountDetailsStep />,
  };

  const StepComponent = stepsMap[currentStep];

  return (
    <div className='grid grid-cols-4 items-start justify-center space-x-20 bg-neutral-100 p-24 dark:bg-neutral-900'>
      {StepComponent}
    </div>
  );
}
