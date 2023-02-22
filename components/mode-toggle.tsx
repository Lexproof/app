'use client';

import React from 'react';
import { useTheme } from 'next-themes';

import { Icons } from '@/components/icons';
import { Button } from '@/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  console.log('theme', theme);

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant='ghost' size='sm'>
    //       <Icons.sun className='hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100' />
    //       <span className='sr-only'>Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align='end'>
    //     <DropdownMenuItem onClick={() => setTheme('light')}>
    //       <Icons.sun className='mr-2 h-4 w-4' />
    //       <span>Light</span>
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme('dark')}>
    //       <Icons.moon className='mr-2 h-4 w-4' />
    //       <span>Dark</span>
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme('system')}>
    //       <Icons.laptop className='mr-2 h-4 w-4' />
    //       <span>System</span>
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <Button
      variant='ghost'
      size='sm'
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'dark' ? (
        <Icons.sun className='hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100' />
      ) : (
        <Icons.moon className='hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
