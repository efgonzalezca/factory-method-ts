import { Router, json } from 'express';
import { sendEmailController } from '../controllers';

export const router: Router = Router();

router.post(
  '/email',
  json(),
  sendEmailController
)