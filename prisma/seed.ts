import prisma from '@/lib/prisma';

async function main() {
  const kyb = await prisma.package.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'KYB',
      description:
        'Provides information and documentation to verify the identity and ownership of a business, helping to ensure compliance and prevent fraud.',
      price: 0,
      icon: '1',
      active: true,
      offers: {
        create: {
          name: 'Check out Prisma with Next.js',
          description: 'https://www.prisma.io/nextjs',
          price: 0,
          icon: '1',
          active: true,
        },
      },
    },
  });

  console.log({ kyb });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
