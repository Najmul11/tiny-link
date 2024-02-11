import { Request, Response } from 'express';
import catchAsyncError from '../../../shared/catchAsyncError';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { RedirectService } from './redirect.service';

const redirectToOriginalLink = catchAsyncError(
  async (req: Request, res: Response) => {
    const { shortLink } = req.params;

    const result = await RedirectService.redirectToOriginalLink(shortLink);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Redirected successfully',
      data: result,
    });
  },
);

export const RedirectController = {
  redirectToOriginalLink,
};
