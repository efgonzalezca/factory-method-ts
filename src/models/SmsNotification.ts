import { Notification } from '../types';

export class SmsNotification implements Notification{
  private cellphone: string;
  private message: string;

  constructor(cellphone: string, message: string) {
    this.cellphone = cellphone;
    this.message = message;
  }

  send(): void {
    console.log(`Sending sms to ${this.cellphone}: ${this.message}`);
  }
}