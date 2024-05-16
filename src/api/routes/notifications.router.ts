import { Router, json } from 'express';

export const router: Router = Router();

router.post(
  '/email',
  json(),
  //TODO: add controller
)