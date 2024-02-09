import { Request, Response } from 'express';
import catchAsyncError from '../../../shared/catchAsyncError';
import { UserService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsyncError(async (req: Request, res: Response) => {
  const userData = req.body;

  const result = await UserService.createUser(userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
};
