import express from 'express';
import { LinkController } from './links.controller';
const router = express.Router();

router.post('/create-link', LinkController.createLink);
router.delete('/delete-link/:id', LinkController.deleteLink);
router.patch('/customize/:id', LinkController.customizeLink);

export const LinkRoutes = router;
