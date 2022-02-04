import express from 'express';

// Middleware
import * as middleware from './middleware/middleware';

//constrollers
import getMessageController from './controllers/get-message-controller';
import userLoginController from './controllers/user-login-controller';
import userExistsController from './controllers/user-exists-controller';
import userSetInfomationController from './controllers/user-set-intormation-controller';
import userPostController from './controllers/user-post-controller';

const router = express.Router();

// GET
router.get('/get/message', middleware.apiKayVerification, getMessageController);
router.get('/user/login', middleware.apiKayVerification, userLoginController);
router.get('/user/exists', middleware.apiKayVerification, userExistsController);
router.get(
  '/user/set/information',
  middleware.apiKayVerification,
  userSetInfomationController,
);

// POST
router.post(
  '/user/post/user',
  middleware.apiKayVerification,
  userPostController,
);

export default router;
