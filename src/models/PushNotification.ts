import { Notification } from '../types';

export class PushNotification implements Notification {
  private deviceToken: string;
  private message: string;

  constructor(deviceToken: string, message: string) {
    this.deviceToken = deviceToken;
    this.message = message;
  }

  send(): void {
    console.log(`Sending push notification to ${this.deviceToken}: ${this.message}`);
  }
}