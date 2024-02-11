import express from 'express';
import { LinkController } from './links.controller';
const router = express.Router();

router.post('/create-link', LinkController.createLink);

export const LinkRoutes = router;
