/* eslint-disable no-console */
import { PrismaClient } from '@prisma/client';
import { shortUrlHelper } from '../../../utils/short-url';
import { TLink } from './links.interface';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const prisma = new PrismaClient();

const createLink = async (payload: TLink) => {
  const { originalLink, email } = payload;

  const userExist = await prisma.user.findUnique({ where: { email } });
  if (!userExist) throw new ApiError(httpStatus.NOT_FOUND, 'Invalid user');

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
      userId: userExist.id,
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
