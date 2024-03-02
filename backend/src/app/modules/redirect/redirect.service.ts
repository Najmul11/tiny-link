import { prisma } from '../../../app';

const redirectToOriginalLink = async (shortLink: string) => {
  const link = await prisma.link.findFirst({ where: { shortLink } });

  if (!link) {
    return false;
  }

  await prisma.link.update({
    where: { shortLink },
    data: { clicks: { increment: 1 } },
  });

  return link?.originalLink;
};

export const RedirectService = {
  redirectToOriginalLink,
};
