import express from 'express';
import { RedirectController } from './redirect.controller';
const router = express.Router();

router.post('/:shortLink', RedirectController.redirectToOriginalLink);

export const RedirectRoutes = router;
