import httpStatus from 'http-status';
import { prisma } from '../../../app';
import ApiError from '../../../errors/ApiError';

const redirectToOriginalLink = async (shortLink: string) => {
  const link = await prisma.link.findFirst({ where: { shortLink } });

  if (!link) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Link not found');
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
