import 'server-only';
import prisma from '@/lib/prisma';

export async function getOffers() {
  try {
    const offers = await prisma.offer.findMany({ where: { active: true } });
    if (!offers) {
      return { offers: [] };
    }
    return { offers };
  } catch (error) {
    return { error, offers: [] };
  }
}
