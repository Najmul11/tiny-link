import { Request, Response } from 'express';
import catchAsyncError from '../../../shared/catchAsyncError';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { LinkService } from './links.service';

const createLink = catchAsyncError(async (req: Request, res: Response) => {
  const Link = req.body;

  const result = await LinkService.createLink(Link);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Link generated successfully',
    data: result,
  });
});

const deleteLink = catchAsyncError(async (req: Request, res: Response) => {
  const result = await LinkService.deleteLink(Number(req.params.id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Link deleted successfully',
    data: result,
  });
});

export const LinkController = {
  createLink,
  deleteLink,
};
