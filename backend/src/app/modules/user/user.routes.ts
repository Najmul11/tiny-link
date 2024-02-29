import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/login', UserController.createUser);

router.get('/all-users', UserController.getAllUsers);
router.get('/:email', UserController.getSingleUser);

export const UserRoutes = router;
