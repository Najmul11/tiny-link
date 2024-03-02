/* eslint-disable no-console */
import { TLink } from './links.interface';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { prisma } from '../../../app';
import { generateUniqueShortLink } from '../../../utils/short-url';

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
  const { shortLink, expiryDate } = payload;

  const existingShortLink = await prisma.link.findUnique({
    where: { shortLink },
  });

  if (existingShortLink)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Link already in use.🫥🫥🫥');

  const existingLink = await prisma.link.findUnique({
    where: { id },
  });

  if (!existingLink)
    throw new ApiError(httpStatus.BAD_REQUEST, 'No Link Found');

  const result = await prisma.link.update({
    where: { id },
    data: {
      shortLink: shortLink ? shortLink : existingLink.shortLink,
      expiryDate: expiryDate ? expiryDate : existingLink.expiryDate,
    },
  });

  return result;
};

export const LinkService = {
  createLink,
  deleteLink,
  customizeLink,
};
