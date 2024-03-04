import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteExpireLinks = async () => {
  const expiredLinks = await prisma.link.findMany({
    where: {
      expiryDate: {
        lt: new Date(),
      },
    },
  });

  // Process expired links
  for (const link of expiredLinks) {
    // Delete the expired link
    await prisma.link.delete({
      where: {
        id: link.id,
      },
    });
  }
};
