import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const allRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
];

allRoutes.forEach(route => router.use(route.path, route.route));

export const routes = router;
