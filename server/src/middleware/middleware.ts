import { Request, Response, NextFunction } from 'express';

const myApiKey = process.env.MYAPIKEY;

export const apiKayVerification = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { apiKey } = req.query;
  if (myApiKey === apiKey) next();
};
