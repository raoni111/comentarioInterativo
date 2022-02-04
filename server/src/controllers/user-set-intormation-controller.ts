import { Request, Response } from 'express';
import setAccountInformation from '../models/set-account-Information';

const userSetInfomationController = async (req: Request, res: Response) => {
  const { userId, atr, info } = req.query;
  await setAccountInformation(userId, atr, info)
    .then(() => {
      res.status(200).json({
        error: false,
        userId,
        atr,
        info,
      });
      return;
    })
    .catch((error) => {
      res.send(error);
    });
};

export default userSetInfomationController;
