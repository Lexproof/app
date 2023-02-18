'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Icons } from '@/components/icons';
import { Button } from '@/ui/button';
// import { Checkbox } from '@/ui/checkbox';
import { Input } from '@/ui/input';

export function ClaimSearch({ data }) {
  const [selectedOffers, setSelectedOffers] = React.useState([]);
  const [filter, setFilter] = React.useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredOffers = React.useMemo(() => {
    return data.offers.filter((offer) => {
      return offer.name.toLowerCase().includes(filter.toLowerCase());
    });
  }, [data, filter]);

  const offerIcons = {
    '1': (
      <div className='mr-2 h-fit rounded-md ring-0'>
        <Icons.networth height='10' width='10' />
      </div>
    ),
    '2': (
      <div className='mr-2 h-fit rounded-md ring-0 ring-slate-900/5 group-hover:shadow group-hover:ring-slate-900/10'>
        <svg
          className='h-8 w-8 group-hover:fill-blue-500'
          viewBox='0 0 62 77'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M61.6 76.7999H0L30.8 23.3999L61.6 76.7999ZM4.79999 74.0999H56.8L30.8 29.0999L4.79999 74.0999Z' />
          <path
            d='M61.6 76.7999H0L30.8 23.3999L61.6 76.7999ZM4.79999 74.0999H56.8L30.8 29.0999L4.79999 74.0999Z'
            fillOpacity='0.2'
          />
          <path d='M30.6998 0L2.2998 49.2H59.0999L30.6998 0Z' />
          <path
            d='M30.6998 0L2.2998 49.2H59.0999L30.6998 0Z'
            fillOpacity='0.2'
          />
        </svg>
      </div>
    ),
    '3': (
      <div className='mr-2 h-fit rounded-md ring-0 ring-slate-900/5 group-hover:shadow group-hover:ring-slate-900/10'>
        <svg
          className='h-8 w-8 group-hover:fill-blue-500'
          viewBox='0 0 163 160'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_103_6621)'>
            <path d='M153.199 6.92285V149.861H9.50098V159.244H162.632V6.92285H153.199Z' />
            <path
              d='M153.199 6.92285V149.861H9.50098V159.244H162.632V6.92285H153.199Z'
              fillOpacity='0.2'
            />
          </g>
          <defs>
            <clipPath id='clip0_103_6621'>
              <rect width='162.632' height='159.244' fill='white'></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
    '4': (
      <div className='h-fit rounded-md p-2 ring-0 ring-slate-900/5 group-hover:shadow group-hover:ring-slate-900/10'>
        <svg
          className='h-8 w-8 group-hover:fill-blue-500'
          viewBox='0 0 99 99'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M29.6006 49.1001C29.6006 59.8696 38.331 68.6001 49.1006 68.6001C59.8701 68.6001 68.6006 59.8696 68.6006 49.1001C68.6006 38.3305 59.8701 29.6001 49.1006 29.6001C38.331 29.6001 29.6006 38.3305 29.6006 49.1001Z' />
          <path
            d='M29.6006 49.1001C29.6006 59.8696 38.331 68.6001 49.1006 68.6001C59.8701 68.6001 68.6006 59.8696 68.6006 49.1001C68.6006 38.3305 59.8701 29.6001 49.1006 29.6001C38.331 29.6001 29.6006 38.3305 29.6006 49.1001Z'
            fillOpacity='0.2'
          />
          <path d='M16.2 49.1002C16.2 30.9002 31 16.2002 49.1 16.2002C67.3 16.2002 82 31.0002 82 49.1002C82 67.3002 67.2 82.0002 49.1 82.0002C31 82.1002 16.2 67.3002 16.2 49.1002ZM79.3 49.1002C79.3 32.5002 65.8 19.0002 49.2 19.0002C32.6 19.0002 19.1 32.5002 19.1 49.1002C19.1 65.7002 32.6 79.2002 49.2 79.2002C65.7 79.3002 79.3 65.8002 79.3 49.1002Z' />
          <path
            d='M16.2 49.1002C16.2 30.9002 31 16.2002 49.1 16.2002C67.3 16.2002 82 31.0002 82 49.1002C82 67.3002 67.2 82.0002 49.1 82.0002C31 82.1002 16.2 67.3002 16.2 49.1002ZM79.3 49.1002C79.3 32.5002 65.8 19.0002 49.2 19.0002C32.6 19.0002 19.1 32.5002 19.1 49.1002C19.1 65.7002 32.6 79.2002 49.2 79.2002C65.7 79.3002 79.3 65.8002 79.3 49.1002Z'
            fillOpacity='0.2'
          />
          <path d='M0.000211477 49.1C0.000212661 22 22.0002 -3.33081e-06 49.1002 -2.14623e-06C76.2002 -9.61649e-07 98.2002 22 98.2002 49.1C98.2002 76.2 76.2002 98.2 49.1002 98.2C22.1002 98.2 0.000210292 76.2 0.000211477 49.1ZM95.4002 49.1C95.4002 23.6 74.6002 2.79999 49.1002 2.79999C23.6002 2.79998 2.8002 23.6 2.8002 49.1C2.8002 74.6 23.6002 95.4 49.1002 95.4C74.6002 95.4 95.4002 74.7 95.4002 49.1Z' />
          <path
            d='M0.000211477 49.1C0.000212661 22 22.0002 -3.33081e-06 49.1002 -2.14623e-06C76.2002 -9.61649e-07 98.2002 22 98.2002 49.1C98.2002 76.2 76.2002 98.2 49.1002 98.2C22.1002 98.2 0.000210292 76.2 0.000211477 49.1ZM95.4002 49.1C95.4002 23.6 74.6002 2.79999 49.1002 2.79999C23.6002 2.79998 2.8002 23.6 2.8002 49.1C2.8002 74.6 23.6002 95.4 49.1002 95.4C74.6002 95.4 95.4002 74.7 95.4002 49.1Z'
            fillOpacity='0.2'
          />
        </svg>
      </div>
    ),
    '5': (
      <div className='h-fit rounded-md p-2 ring-0 ring-slate-900/5'>
        <svg
          className='h-8 w-8 group-hover:fill-blue-500'
          viewBox='0 0 116 117'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_103_7143)'>
            <path d='M76.3986 4.3378C82.7309 8.33712 72.4189 10.8857 71.2034 11.1602C56.7549 14.5126 34.739 10.9249 38.013 5.76893C38.5619 4.90633 40.3655 3.29876 46.4233 2.12249C47.5604 1.90684 49.1091 1.65198 50.2462 1.47554C52.2458 1.24028 52.2458 1.24028 53.2261 1.16187C55.0101 1.04424 55.0101 1.04424 55.8923 1.00503C57.5979 0.96582 57.5979 0.96582 58.4409 0.96582C60.1269 1.00503 60.1269 1.00503 60.9502 1.04424C62.6558 1.14226 62.6951 1.16187 63.5773 1.24028C65.4005 1.43633 65.4789 1.45593 66.4591 1.59317C68.5568 1.92644 68.6352 1.94605 69.7723 2.1813L71.0074 2.45576C72.6542 2.84786 74.5166 3.31836 76.3986 4.3378C70.7133 2.80865 64.5379 2.39695 58.088 3.25955C64.5379 2.39695 70.7133 2.82825 76.3986 4.3378Z' />
            <path
              d='M76.3986 4.3378C82.7309 8.33712 72.4189 10.8857 71.2034 11.1602C56.7549 14.5126 34.739 10.9249 38.013 5.76893C38.5619 4.90633 40.3655 3.29876 46.4233 2.12249C47.5604 1.90684 49.1091 1.65198 50.2462 1.47554C52.2458 1.24028 52.2458 1.24028 53.2261 1.16187C55.0101 1.04424 55.0101 1.04424 55.8923 1.00503C57.5979 0.96582 57.5979 0.96582 58.4409 0.96582C60.1269 1.00503 60.1269 1.00503 60.9502 1.04424C62.6558 1.14226 62.6951 1.16187 63.5773 1.24028C65.4005 1.43633 65.4789 1.45593 66.4591 1.59317C68.5568 1.92644 68.6352 1.94605 69.7723 2.1813L71.0074 2.45576C72.6542 2.84786 74.5166 3.31836 76.3986 4.3378C70.7133 2.80865 64.5379 2.39695 58.088 3.25955C64.5379 2.39695 70.7133 2.82825 76.3986 4.3378Z'
              fillOpacity='0.2'
            />
            <path d='M86.5932 8.51351C85.0249 7.6117 83.3781 6.82752 81.6921 6.12175C81.104 5.80808 80.3002 5.4356 79.6729 5.16113C83.5742 6.86673 83.8878 7.02356 86.5932 8.51351Z' />
            <path
              d='M86.5932 8.51351C85.0249 7.6117 83.3781 6.82752 81.6921 6.12175C81.104 5.80808 80.3002 5.4356 79.6729 5.16113C83.5742 6.86673 83.8878 7.02356 86.5932 8.51351Z'
              fillOpacity='0.2'
            />
            <path d='M86.5929 8.51312C90.4158 10.8657 92.9448 12.4144 97.3362 16.3549L98.7281 17.6684C104.198 23.0401 95.2973 28.8626 76.673 31.3524C55.7158 34.1754 30.4063 31.7249 20.1336 25.8827C15.3501 23.1577 14.6639 20.1778 17.4281 17.492L18.8201 16.1785C22.5645 12.9633 23.1527 12.4732 26.6227 10.1599C29.2497 8.57193 31.9551 6.94475 35.9936 5.25876L36.6014 5.00391C26.8579 9.16007 34.4645 12.6301 37.0327 13.5907C53.6769 19.8249 88.3965 15.806 84.0639 8.14063C83.515 7.18001 82.476 6.53306 81.6918 6.06255C83.3974 6.82713 85.0246 7.63091 86.5929 8.51312Z' />
            <path
              d='M86.5929 8.51312C90.4158 10.8657 92.9448 12.4144 97.3362 16.3549L98.7281 17.6684C104.198 23.0401 95.2973 28.8626 76.673 31.3524C55.7158 34.1754 30.4063 31.7249 20.1336 25.8827C15.3501 23.1577 14.6639 20.1778 17.4281 17.492L18.8201 16.1785C22.5645 12.9633 23.1527 12.4732 26.6227 10.1599C29.2497 8.57193 31.9551 6.94475 35.9936 5.25876L36.6014 5.00391C26.8579 9.16007 34.4645 12.6301 37.0327 13.5907C53.6769 19.8249 88.3965 15.806 84.0639 8.14063C83.515 7.18001 82.476 6.53306 81.6918 6.06255C83.3974 6.82713 85.0246 7.63091 86.5929 8.51312Z'
              fillOpacity='0.2'
            />
            <path d='M103.806 23.4132C107.119 28.0202 107.315 28.2947 108.981 31.3334C111.569 36.5874 111.687 36.7834 112.804 39.9986L113.294 41.4689C115.255 47.6248 103.629 53.761 82.4369 56.6036C54.9317 60.3089 21.6824 57.0937 8.19451 49.4284C3.56784 46.8014 1.86224 43.9979 2.74445 41.2729L3.23456 39.8025C5.39106 34.3525 5.46948 34.1368 7.09665 31.1373C10.0569 26.1774 10.1746 25.9814 12.3115 23.2367L12.8212 22.6094C10.5863 25.3736 11.6057 28.3535 16.448 31.0981C27.7206 37.5088 55.4806 40.1946 78.4767 37.0971C98.1009 34.4505 107.884 28.4711 103.335 22.7858L103.806 23.4132Z' />
            <path
              d='M103.806 23.4132C107.119 28.0202 107.315 28.2947 108.981 31.3334C111.569 36.5874 111.687 36.7834 112.804 39.9986L113.294 41.4689C115.255 47.6248 103.629 53.761 82.4369 56.6036C54.9317 60.3089 21.6824 57.0937 8.19451 49.4284C3.56784 46.8014 1.86224 43.9979 2.74445 41.2729L3.23456 39.8025C5.39106 34.3525 5.46948 34.1368 7.09665 31.1373C10.0569 26.1774 10.1746 25.9814 12.3115 23.2367L12.8212 22.6094C10.5863 25.3736 11.6057 28.3535 16.448 31.0981C27.7206 37.5088 55.4806 40.1946 78.4767 37.0971C98.1009 34.4505 107.884 28.4711 103.335 22.7858L103.806 23.4132Z'
              fillOpacity='0.2'
            />
            <path d='M115.196 49.2717C115.961 55.3295 116 55.5647 116 59.0543C115.745 65.1905 115.726 65.563 115.059 69.4251L114.941 70.0133C113.863 75.5613 102.316 80.7565 83.084 83.3443C54.7947 87.1476 20.6436 83.8344 6.76356 75.973C3.27396 73.993 1.39192 71.8953 0.999831 69.8368C0.156836 64.0927 0.0588136 63.3477 0 58.8779C0.254859 52.624 0.274463 52.4868 0.842995 49.0952L1.05864 47.9189C0.548927 50.5263 2.37215 53.2122 6.82238 55.7412C20.6828 63.6222 54.8535 66.9157 83.1428 63.1125C104.296 60.2698 116.157 54.2512 115 48.0954L115.196 49.2717Z' />
            <path
              d='M115.196 49.2717C115.961 55.3295 116 55.5647 116 59.0543C115.745 65.1905 115.726 65.563 115.059 69.4251L114.941 70.0133C113.863 75.5613 102.316 80.7565 83.084 83.3443C54.7947 87.1476 20.6436 83.8344 6.76356 75.973C3.27396 73.993 1.39192 71.8953 0.999831 69.8368C0.156836 64.0927 0.0588136 63.3477 0 58.8779C0.254859 52.624 0.274463 52.4868 0.842995 49.0952L1.05864 47.9189C0.548927 50.5263 2.37215 53.2122 6.82238 55.7412C20.6828 63.6222 54.8535 66.9157 83.1428 63.1125C104.296 60.2698 116.157 54.2512 115 48.0954L115.196 49.2717Z'
              fillOpacity='0.2'
            />
            <path d='M112.549 78.6781C110.334 84.1086 110.256 84.3242 108.609 87.3041C105.59 92.2249 105.472 92.4209 103.316 95.1655L103.178 95.3224C100.218 98.9884 91.4745 102.262 78.3394 104.027C55.3629 107.124 27.5833 104.438 16.3107 98.0278C14.6639 97.0868 13.468 96.1262 12.6839 95.1655C11.4292 93.4599 9.76278 91.1662 8.60612 89.3822C5.74385 84.3046 5.62623 84.1086 4.31272 80.9523C3.82261 79.6191 3.11685 77.8351 2.68555 76.4824C3.27368 78.3252 5.05769 80.1485 8.15521 81.9129C21.6431 89.5782 54.8728 92.7934 82.3976 89.0881C100.473 86.6572 111.569 81.8541 113.235 76.6589L112.549 78.6781Z' />
            <path
              d='M112.549 78.6781C110.334 84.1086 110.256 84.3242 108.609 87.3041C105.59 92.2249 105.472 92.4209 103.316 95.1655L103.178 95.3224C100.218 98.9884 91.4745 102.262 78.3394 104.027C55.3629 107.124 27.5833 104.438 16.3107 98.0278C14.6639 97.0868 13.468 96.1262 12.6839 95.1655C11.4292 93.4599 9.76278 91.1662 8.60612 89.3822C5.74385 84.3046 5.62623 84.1086 4.31272 80.9523C3.82261 79.6191 3.11685 77.8351 2.68555 76.4824C3.27368 78.3252 5.05769 80.1485 8.15521 81.9129C21.6431 89.5782 54.8728 92.7934 82.3976 89.0881C100.473 86.6572 111.569 81.8541 113.235 76.6589L112.549 78.6781Z'
              fillOpacity='0.2'
            />
            <path d='M96.7286 102.125C92.9645 105.282 92.3764 105.772 88.8476 108.085C86.1225 109.693 83.5543 111.202 79.5354 112.829C77.0652 113.809 73.6736 114.652 69.4979 115.201C57.6764 116.789 43.6003 115.692 36.327 112.751C32.6022 111.124 32.1316 110.908 29.4066 109.398C25.4465 106.968 24.6231 106.458 21.1335 103.713C19.9768 102.674 18.4085 101.321 17.291 100.243C17.9772 100.91 18.879 101.557 19.9964 102.204C30.2692 108.046 55.5787 110.496 76.5359 107.673C87.7105 106.164 95.3955 103.478 98.5714 100.4L96.7286 102.125Z' />
            <path
              d='M96.7286 102.125C92.9645 105.282 92.3764 105.772 88.8476 108.085C86.1225 109.693 83.5543 111.202 79.5354 112.829C77.0652 113.809 73.6736 114.652 69.4979 115.201C57.6764 116.789 43.6003 115.692 36.327 112.751C32.6022 111.124 32.1316 110.908 29.4066 109.398C25.4465 106.968 24.6231 106.458 21.1335 103.713C19.9768 102.674 18.4085 101.321 17.291 100.243C17.9772 100.91 18.879 101.557 19.9964 102.204C30.2692 108.046 55.5787 110.496 76.5359 107.673C87.7105 106.164 95.3955 103.478 98.5714 100.4L96.7286 102.125Z'
              fillOpacity='0.2'
            />
            <path d='M65.7338 116.456C63.7341 116.691 63.7341 116.691 62.7539 116.769C60.9699 116.887 60.9699 116.887 60.0877 116.926C58.4017 116.966 58.4017 116.966 57.5587 116.966C55.8727 116.926 55.8727 116.926 55.0493 116.887C53.3437 116.789 53.3045 116.769 52.4223 116.691C50.5599 116.495 50.5207 116.475 49.5404 116.338C47.4428 116.005 47.3643 115.985 46.2273 115.75L44.9922 115.476C52.638 117.083 61.8521 117.201 69.6547 115.77C67.1257 116.26 66.8708 116.299 65.7338 116.456Z' />
            <path
              d='M65.7338 116.456C63.7341 116.691 63.7341 116.691 62.7539 116.769C60.9699 116.887 60.9699 116.887 60.0877 116.926C58.4017 116.966 58.4017 116.966 57.5587 116.966C55.8727 116.926 55.8727 116.926 55.0493 116.887C53.3437 116.789 53.3045 116.769 52.4223 116.691C50.5599 116.495 50.5207 116.475 49.5404 116.338C47.4428 116.005 47.3643 115.985 46.2273 115.75L44.9922 115.476C52.638 117.083 61.8521 117.201 69.6547 115.77C67.1257 116.26 66.8708 116.299 65.7338 116.456Z'
              fillOpacity='0.2'
            />
          </g>
          <defs>
            <clipPath id='clip0_103_7143'>
              <rect
                width='116'
                height='116'
                fill='white'
                transform='translate(0 0.96582)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    ),
  };

  return (
    <>
      <Input
        type='text'
        placeholder='Search offers...'
        value={filter}
        onChange={onChange}
      />
      <ul role='list' className='divide-y divide-neutral-800/20'>
        {filteredOffers.map((person) => (
          <Link key={person.name} href={`/claims/${person.id}`}>
            <li className='group flex cursor-pointer items-center justify-between rounded-md border border-transparent p-4 hover:bg-neutral-100/90 dark:hover:bg-neutral-800/20'>
              <div className='flex gap-8'>
                {offerIcons[person.icon]}
                <div>
                  <p className='text-sm font-medium text-neutral-900 dark:text-slate-50'>
                    {person.name}
                  </p>
                  <p className='text-sm text-gray-500'>{person.description}</p>
                </div>
              </div>

              <p className='text-sm font-bold text-neutral-900 dark:text-slate-50'>
                <span className='font-regular mr-0.5 text-sm'>$</span>
                {person.price}
              </p>
              {/* <Checkbox
              value={person.id}
              onCheckedChange={(checked: boolean) =>
                checked
                  ? setSelectedOffers([...selectedOffers, person.id])
                  : setSelectedOffers(
                      selectedOffers.filter((id) => id !== person.id)
                    )
              }
            /> */}
            </li>
          </Link>
        ))}
      </ul>
      {selectedOffers.length > 0 && (
        <Link href='/claims'>
          <div className='fixed inset-x-0 bottom-5 mx-auto w-60 cursor-pointer'>
            <div className='rounded-3xl  border border-slate-50 bg-slate-50 p-4 shadow-md dark:border-neutral-800 dark:bg-gray-50'>
              <section className='flex items-center justify-between'>
                <p className='text-md font-medium text-neutral-900'>
                  {selectedOffers.length} claims selected
                </p>
                <Button variant='link'>
                  <ArrowRight size='20' className='ml-2 text-neutral-900' />
                </Button>
              </section>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
