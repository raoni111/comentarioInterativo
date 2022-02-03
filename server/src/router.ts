import express from 'express';
import setAccountInformation from './modules/set-account-Information';
import getMessage from './service/get-message';
import { loginInTheAccount } from './service/login-in-the-account';
import { userExists } from './service/user-exists';

const router = express.Router();

router.get('/get/message', async (req, res) => {
  await getMessage().then((response) => {
    res.status(200).json(response);
  });
});

router.get('/user/login', (req, res) => {
  const { userName, password } = req.query;
  loginInTheAccount(userName, password).then((response) => {
    res.status(200).json(response);
  });
});

router.get('/user/exists', (req, res) => {
  const { userName } = req.query;
  userExists(userName).then((response) => {
    res.status(200).json({ exists: response });
  });
});

router.get('user/set/information', (req, res) => {
  const { userId, atr, info } = req.query;
  setAccountInformation(userId, atr, info);
});

export default router;
