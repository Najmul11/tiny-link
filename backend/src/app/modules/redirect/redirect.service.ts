import { prisma } from '../../../app';

const redirectToOriginalLink = async (shortLink: string) => {
  const link = await prisma.link.findUnique({ where: { shortLink } });

  if (!link) {
    return false;
  }

  if (link) {
    if (link.clicks === link.maxClicks) return false;
  }

  await prisma.link.update({
    where: { shortLink },
    data: { clicks: { increment: 1 } },
  });

  return link?.originalLink || '';
};

export const RedirectService = {
  redirectToOriginalLink,
};
