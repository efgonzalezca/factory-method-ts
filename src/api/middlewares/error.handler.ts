import { NextFunction, Request, Response } from 'express';


export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.message);
  return res
    .status(500)
    .json({
      message: 'Internal server error'
    })
}