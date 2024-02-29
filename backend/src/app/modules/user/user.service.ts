import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prisma } from '../../../app';
import { user } from '@prisma/client';

const createUser = async ({ email, name }: user) => {
  if (!email || !name)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Provide required information');

  const userExist = await prisma.user.findUnique({
    where: { email },
  });

  if (userExist)
    throw new ApiError(httpStatus.BAD_REQUEST, 'User already exist');

  const result = await prisma.user.create({
    data: {
      name: name ?? 'No Name',
      email,
    },
  });

  return result;
};

const getAllUsers = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const getSingleUser = async (email: string) => {
  const result = await prisma.user.findUnique({
    where: { email },
    include: {
      links: {
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });

  if (!result) throw new ApiError(httpStatus.BAD_REQUEST, 'No User Found');

  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
};
