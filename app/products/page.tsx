import React from 'react';
import Link from 'next/link';

import { Card } from '@/components/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'Is there a limit to the amount of claims I can have?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function Products() {
  return (
    <>
      <main className='bg-transparent p-12 sm:p-12'>
        <div className='flex max-w-7xl flex-wrap gap-16 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl space-y-6 lg:mx-0'>
            <div className='space-y-6'>
              <div className='flex flex-wrap gap-6'>
                <Link href='/claims'>
                  <Card
                    name='Certify'
                    description='Explore our collection of ZK powered regulatory and compliance verification claims'
                  />
                </Link>
                <Card
                  name='Discover'
                  description='Discovery platform to match accredited and other investors to startups, investment vehicles, DAOs, & DeFi apps.'
                />
                <Card
                  name='Formation'
                  description='On-chain and off-chain legal entity formation for startups, DAOs, and other organizations.'
                />
                <Card
                  name='SDK'
                  description='Smart contracts, library, and tools to easily integrate verification into protocols and apps.'
                />
              </div>
            </div>
          </div>
          <section className='flex-1'>
            <div className='space-y-2'>
              <h2 className='mt-2 text-4xl font-light tracking-tight text-slate-50 sm:text-5xl'>
                The most comprehensive suite of{' '}
                <span className='bg-gradient-to-r from-indigo-900 to-blue-500 bg-clip-text text-transparent'>
                  ZK powered compliance tools
                </span>
              </h2>
              {/* <p className='text-lg font-regular leading-8 tracking-tight text-gray-500'>
                Whether you're a startup, investor, or protocol, we have the
                tools to help you verify and certify your identity, claims, and
                more.
              </p> */}
            </div>
            <dl className='my-10 space-y-6 divide-y divide-white/10'>
              <h2 className='text-2xl font-medium leading-10 tracking-tight text-white'>
                Frequently asked questions
              </h2>
              {faqs.map((faq) => (
                <Accordion key={faq.id} type='single' collapsible>
                  <AccordionItem value={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </dl>
          </section>
        </div>
      </main>
    </>
  );
}
