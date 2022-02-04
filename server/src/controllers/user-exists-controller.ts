import { Request, Response } from 'express';
import { userExists } from '../models/user-exists';

const userExistsController = (req: Request, res: Response) => {
  const { userName } = req.query;
  userExists(userName).then((response) => {
    res.status(200).json({ exists: response });
  });
};

export default userExistsController;
