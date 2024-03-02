/* eslint-disable no-console */
import { TLink } from './links.interface';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { PrismaClient } from '@prisma/client';
import { generateUniqueShortLink } from '../../../utils/short-url';

const prisma = new PrismaClient();

const createLink = async (payload: TLink) => {
  const { originalLink, email } = payload;

  let userExist;

  if (email) {
    userExist = await prisma.user.findUnique({ where: { email } });
  }

  const shortLink = await generateUniqueShortLink();

  const result = await prisma.link.create({
    data: {
      originalLink,
      shortLink,
      userId: userExist ? userExist!.id : null,
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
  if (!result) throw new ApiError(httpStatus.BAD_REQUEST, 'Internal error');

  return result;
};

const customizeLink = async (payload: Partial<TLink>, id: number) => {
  const { shortLink, expiryDate, maxClicks } = payload;

  const existingShortLink = await prisma.link.findUnique({
    where: { shortLink },
  });

  const existingLink = await prisma.link.findUnique({
    where: { id },
  });

  if (!existingLink)
    throw new ApiError(httpStatus.BAD_REQUEST, 'No Link Found');

  if (
    existingShortLink &&
    existingShortLink?.shortLink !== existingLink.shortLink
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Link already in use.🫥🫥🫥');
  }

  const result = await prisma.link.update({
    where: { id },
    data: {
      shortLink: shortLink ? shortLink : existingLink.shortLink,
      expiryDate: expiryDate ? expiryDate : existingLink.expiryDate,
      maxClicks: maxClicks ? maxClicks : existingLink.maxClicks,
    },
  });

  return result;
};

export const LinkService = {
  createLink,
  deleteLink,
  customizeLink,
};
