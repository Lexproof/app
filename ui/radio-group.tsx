'use client';

import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Check, Circle } from 'lucide-react';

import { cn } from '@/lib/utils';

interface RadioGroupCardItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  title: string;
  description: string;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'text:fill-neutral-50 h-4 w-4 rounded-full border border-neutral-300 text-neutral-900 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-900 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
        <Circle className='h-2.5 w-2.5 fill-neutral-900 dark:fill-neutral-50' />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroupCardItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupCardItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'inline-flex w-full items-start justify-between space-y-4 rounded-md border border-gray-300 px-4 py-4 focus-within:ring focus-within:ring-neutral-800/25 dark:border-neutral-800',
        {
          'dark:border-orange-500/50 dark:bg-orange-400/5': props.checked,
        },
        className
      )}
      {...props}
    >
      <div className='flex cursor-pointer justify-between'>
        <div className='flex flex-col items-baseline'>
          <h2
            className={cn('text-md block font-semibold text-gray-300', {
              'text-orange-300': props.checked,
            })}
          >
            {props.title}
          </h2>
          <p
            className={cn('block text-sm', {
              'text-orange-300': props.checked,
            })}
          >
            {props.description}
          </p>
        </div>
      </div>
      <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
        <Check
          className={cn('h-4 w-4', {
            'text-orange-300': props.checked,
            hidden: !props.checked,
          })}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupCardItem.displayName = 'RadioGroupCardItem';

export { RadioGroup, RadioGroupItem, RadioGroupCardItem };
