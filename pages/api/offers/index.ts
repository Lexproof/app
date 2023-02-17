// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const offers = await prisma.offer.findMany();
    res.status(200).json({ offers });
  } catch (error) {
    console.error('Prisma Error', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  // res.status(200).json([
  //   {
  //     id: 1,
  //     name: 'Investments > $5M (Qualified Buyer)',
  //     icon: 1,
  //     tldr: 'Ownership of $5M or more in investments.',
  //     price: '40',
  //   },
  //   {
  //     id: 2,
  //     name: 'Income > $200k for last 2 years',
  //     icon: 2,
  //     tldr: 'Income tax return of $200k or more for the last 3 financial years.',
  //     price: '60',
  //   },
  //   {
  //     id: 3,
  //     name: 'Accredited License Letter',
  //     icon: 3,
  //     tldr: 'Letter from an accountant, licensed securities broker or registered investment advisor.',
  //     price: '60',
  //   },
  //   {
  //     id: 4,
  //     name: 'U.S. Citizenship',
  //     icon: 4,
  //     tldr: 'You are currently a citizen of the U.S.',
  //     price: '45',
  //   },
  //   {
  //     id: 5,
  //     name: 'Residency',
  //     icon: 5,
  //     tldr: 'Currently a resident of the U.S. and for the last 2 years.',
  //     price: '45',
  //   },
  // ]);
}
