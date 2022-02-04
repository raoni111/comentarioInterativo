import getMessage from '../models/get-message';
import { Request, Response } from 'express';

const getMessageController = async (
  req: Request,
  res: Response,
): Promise<void> => {
  await getMessage().then((response) => {
    res.status(200).json(response);
  });
};

export default getMessageController;
