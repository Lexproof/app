// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { name, icon, description, price } = req.body;
  try {
    const offer = await prisma.offer.create({
      data: {
        name,
        description,
        icon,
        price,
      },
    });
    res.status(200).json({ offer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
