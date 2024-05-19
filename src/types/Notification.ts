export interface Notification {
  send(): void;
}

export enum NotificationType {
  SMS = 'sms',
  EMAIL = 'email',
  PUSH = 'push'
}