import prisma from '@/lib/prisma';

export async function getOffers() {
  try {
    const offers = await prisma.offer.findMany();
    return { offers };
  } catch (error) {
    return { error, offers: [] };
  }
}
