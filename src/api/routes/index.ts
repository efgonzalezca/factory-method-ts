import { Router, Application } from 'express';

import config from '../../config';
import { router as notificationsRouter } from './notifications.router';

export const routerApi: Function = (app: Application) => {
  const router = Router();
  app.use(config.api.prefix, router);
  router.use('/notifications', notificationsRouter);
}