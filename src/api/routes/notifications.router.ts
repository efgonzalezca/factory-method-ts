import { Router, json } from 'express';
import { sendEmailController, sendPushController, sendSmsController } from '../controllers';

export const router: Router = Router();

router.post(
  '/email',
  json(),
  sendEmailController
)

router.post(
  '/sms',
  json(),
  sendSmsController
)

router.post(
  '/push',
  json(),
  sendPushController
)