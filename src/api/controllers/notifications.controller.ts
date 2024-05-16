import { NextFunction, Request, Response } from 'express';

import { NotificationFactory } from '../../factories';
import { NotificationType } from '../../types';

export const sendEmailController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, message } = req.body;
    if (!email || !message) {
      return res.status(400).json({message: 'email and message fields are required'});
    }
    const notification = NotificationFactory.create(NotificationType.EMAIL, email, message);
    notification.send();
    return res
      .status(200)
      .json({message: `Email sent to ${email}`})
  } catch(err) {
    return next(err);
  }
}