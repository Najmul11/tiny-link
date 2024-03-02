/* eslint-disable no-console */
import { Request, Response } from 'express';
import catchAsyncError from '../../../shared/catchAsyncError';
import { RedirectService } from './redirect.service';
import config from '../../../config';

const redirectToOriginalLink = catchAsyncError(
  async (req: Request, res: Response) => {
    const { shortLink } = req.params;

    const result = await RedirectService.redirectToOriginalLink(shortLink);

    if (result) {
      res.status(301).redirect(result);
    } else {
      res.status(400).redirect(`${config.frontend_url} ${shortLink}`);
    }
  },
);

export const RedirectController = {
  redirectToOriginalLink,
};
