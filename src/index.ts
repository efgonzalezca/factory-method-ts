import dotenv from 'dotenv';
dotenv.config();

import { Server } from './models';

try {
  new Server().listen();
  process.on('SIGINT', () => {
    process.exit(0);
  })
  process.on('SIGTERM', () => {
    process.exit(0);
  })
} catch (e) {
  console.log(e);
  process.exit(1);
}