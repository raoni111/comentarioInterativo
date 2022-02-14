import { Request, Response } from 'express';
import deleteMessage from '../models/delete-message';

const deleteMessageController = async (req: Request, res: Response) => {
  const { index } = req.query;
  if (typeof index === 'string')
    await deleteMessage(index)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch(() => {
        res.status(200).send([]);
      });
};

export default deleteMessageController;
