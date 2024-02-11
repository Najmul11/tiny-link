import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { LinkRoutes } from '../modules/links/links.routes';

const router = express.Router();

const allRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/link',
    route: LinkRoutes,
  },
];

allRoutes.forEach(route => router.use(route.path, route.route));

export const routes = router;
