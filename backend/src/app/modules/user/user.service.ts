import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { TUser } from './user.interface';
import { prisma } from '../../../app';

const createUser = async ({ email, name }: TUser) => {
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

export const UserService = {
  createUser,
  getAllUsers,
};
