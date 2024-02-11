import { Request, Response } from 'express';
import catchAsyncError from '../../../shared/catchAsyncError';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { RedirectService } from './redirect.service';

const redirectToOriginalLink = catchAsyncError(
  async (req: Request, res: Response) => {
    const { shortLink } = req.params;

    const result = await RedirectService.redirectToOriginalLink(shortLink);
    if (result) {
      res.redirect(result);
    } else {
      sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'Original link not found',
        data: null,
      });
    }
  },
);

export const RedirectController = {
  redirectToOriginalLink,
};
