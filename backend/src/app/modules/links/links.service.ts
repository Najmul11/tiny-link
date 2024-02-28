/* eslint-disable no-console */
import { Link, PrismaClient } from '@prisma/client';
import { shortUrlHelper } from '../../../utils/short-url';

const prisma = new PrismaClient();

const createLink = async (payload: Link) => {
  const { originalLink, userId } = payload;

  const lastLink = await prisma.link.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const shortLink = shortUrlHelper(lastLink?.shortLink ?? 'short-url-0');

  const result = await prisma.link.create({
    data: {
      originalLink,
      shortLink,
      userId,
    },
  });

  return result;
};

const deleteLink = async (id: number) => {
  const result = await prisma.link.delete({
    where: {
      id,
    },
  });
  return result;
};

export const LinkService = {
  createLink,
  deleteLink,
};
