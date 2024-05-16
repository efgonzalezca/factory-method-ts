import { NextFunction, Request, Response } from 'express';

export const routeHandler = (req: Request, res: Response, _next: NextFunction) => {
  console.warn(`The requested URL ${ req.originalUrl } was not found on the server`);
  return res
    .status(404)
    .json({
      message: `The requested URL ${ req.originalUrl } was not found on the server`
    })
}