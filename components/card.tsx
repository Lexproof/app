'use client';

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Laptop } from 'lucide-react';

import { Icons } from '@/components/icons';

const resource = {
  href: '/contacts',
  name: 'Contacts',
  description:
    'Learn about the contact model and how to create, retrieve, update, delete, and list contacts.',
  icon: Icons.laptop,
  pattern: {
    y: 16,
    squares: [
      [0, 1],
      [1, 3],
    ],
  },
};

function GridPattern({ width, height, x, y, squares, ...props }: any) {
  let patternId = React.useId();

  return (
    <svg aria-hidden='true' {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill='none' />
        </pattern>
      </defs>
      <rect
        width='100%'
        height='100%'
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className='overflow-visible'>
          {squares.map(([x, y]) => (
            <rect
              strokeWidth='0'
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export const Card = (props: { name: string; description: string }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      onMouseMove={onMouseMove}
      className='shadow-bg-neutral-900 dark:hover:shadow-neutral group relative flex h-60 w-80 cursor-pointer rounded-2xl bg-white transition-shadow hover:shadow hover:shadow-neutral-900/10 dark:border dark:border-neutral-800/25 dark:bg-neutral-800/25 sm:rounded-lg'
    >
      <div className='relative rounded-2xl p-4'>
        <div className='dark:bg-white/7.5 dark:ring-white/15 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 dark:group-hover:bg-blue-500/10 dark:group-hover:ring-neutral-800'>
          <Laptop className='h-7 w-7 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:fill-blue-500/10 group-hover:stroke-blue-500 dark:fill-white/10 dark:stroke-zinc-400' />
        </div>
        <h3 className='mt-2 text-lg font-semibold leading-7 text-zinc-900 dark:text-white'>
          <span className='absolute inset-0 rounded-2xl' />
          {props.name}
        </h3>
        <p className='text-md mt-1 text-zinc-600 dark:text-zinc-400'>
          {props.description}
        </p>
      </div>
    </div>
  );
};
