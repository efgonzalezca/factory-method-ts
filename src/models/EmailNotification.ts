import { Notification } from '../types';

export class EmailNotification implements Notification {
  private email: string;
  private message: string;

  constructor(email: string, message: string) {
    this.email = email;
    this.message = message;
  }

  send(): void {
    console.log(`Sending email to ${this.email}: ${this.message}`);
  }
}