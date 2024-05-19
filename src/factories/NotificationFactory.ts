import { Notification, NotificationType } from '../types/Notification';
import { EmailNotification, PushNotification, SmsNotification } from '../models';

export abstract class NotificationFactory {
  static create(type: NotificationType, recipient: string, message: string): Notification {
    const notificationStrategy = {
      [NotificationType.EMAIL]: () => new EmailNotification(recipient, message),
      [NotificationType.SMS]: () => new SmsNotification(recipient, message),
      [NotificationType.PUSH]: () => new PushNotification(recipient, message),
    }
    return notificationStrategy[type]();
  }
}