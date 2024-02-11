import { Request, Response } from 'express';
import catchAsyncError from '../../../shared/catchAsyncError';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { LinkService } from './links.service';

const createLink = catchAsyncError(async (req: Request, res: Response) => {
  const Link = req.body;
  const user = req.user;

  const result = await LinkService.createLink(Link, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Link generated successfully',
    data: result,
  });
});

const deleteLink = catchAsyncError(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await LinkService.deleteLink(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Link generated successfully',
    data: result,
  });
});

export const LinkController = {
  createLink,
  deleteLink,
};
