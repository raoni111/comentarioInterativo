import { Request, Response } from 'express';
import { loginInTheAccount } from '../service/login-in-the-account';

const userLoginController = (req: Request, res: Response) => {
  const { userName, password } = req.query;
  loginInTheAccount(userName, password).then((response) => {
    res.status(200).json(response);
  });
};

export default userLoginController;
