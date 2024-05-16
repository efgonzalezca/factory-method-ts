import cors from 'cors';
import { Server as HTTPServer } from 'http';
import express, { Application } from 'express';

import config from '../config';
import { routerApi } from '../api/routes';
import { errorHandler, routeHandler } from '../api/middlewares';


export class Server {
  private app: Application;
  private port: string;
  private httpServer: HTTPServer;

  constructor() {
    this.port = config.port;
    this.app = express();
    this.httpServer = new HTTPServer(this.app);
  }

  middlewares() {
    this.app.use(cors({origin: '*'}));
    routerApi(this.app);
    this.app.use(errorHandler);
    this.app.use(routeHandler);
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.middlewares();
      this.httpServer?.listen(this.port, () => {
        console.info('HTTP server connected');
        console.log(`Server running on: http://localhost:${config.port}`);
      })
      resolve();
    })
  }

  get HTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }
      return resolve();
    })
  }
}