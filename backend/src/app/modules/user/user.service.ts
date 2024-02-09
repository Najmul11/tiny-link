import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUser = async ({ email, name, password }: TUser) => {
  if (!email || !name)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Provide required information');

  const userExist = await User.findOne({ email });

  if (userExist)
    throw new ApiError(httpStatus.BAD_REQUEST, 'User already exist');

  const result = await User.create({
    email,
    name,
    password: password && '123456',
  });

  return result;
};

export const UserService = {
  createUser,
};
