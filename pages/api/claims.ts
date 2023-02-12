// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json([
    {
      id: 1,
      name: 'Networth > $1M',
      icon: 1,
      tldr: 'A liquid networth of $1M or more needed for eligibility.',
      price: '60',
    },
    {
      id: 2,
      name: 'Income > $200k for last 2 years',
      icon: 2,
      tldr: 'Income tax return of $200k or more for the last 3 financial years.',
      price: '60',
    },
    {
      id: 3,
      name: 'Accredited License Letter',
      icon: 3,
      tldr: 'Letter from an accountant, licensed securities broker or registered investment advisor.',
      price: '60',
    },
    {
      id: 4,
      name: 'U.S. Citizenship',
      icon: 4,
      tldr: 'You are currently a citizen of the U.S.',
      price: '45',
    },
    {
      id: 5,
      name: 'Residency',
      icon: 5,
      tldr: 'Currently a resident of the U.S. and for the last 2 years.',
      price: '45',
    },
  ]);
}
