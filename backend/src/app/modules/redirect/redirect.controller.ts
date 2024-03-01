/* eslint-disable no-console */
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
      success: false,
      message: 'Link retrieved.',
      data: result,
    });

    // if (result) {
    //   res.status(301).redirect(result);
    // }
  },
);

export const RedirectController = {
  redirectToOriginalLink,
};
