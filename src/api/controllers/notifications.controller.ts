import { NextFunction, Request, Response } from 'express';

import { NotificationType } from '../../types';
import { NotificationFactory } from '../../factories';

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

export const sendSmsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cellphone, message } = req.body;
    if (!cellphone || !message) {
      return res.status(400).json({message: 'cellphone and message fields are required'});
    }
    const notification = NotificationFactory.create(NotificationType.SMS, cellphone, message);
    notification.send();
    return res
      .status(200)
      .json({message: `SMS sent to ${cellphone}`})
  } catch(err) {
    return next(err);
  }
}

export const sendPushController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token, message } = req.body;
    if (!token || !message) {
      return res.status(400).json({message: 'token and message fields are required'});
    }
    const notification = NotificationFactory.create(NotificationType.PUSH, token, message);
    notification.send();
    return res
      .status(200)
      .json({message: `Push notification sent to ${token}`})
  } catch(err) {
    return next(err);
  }
}