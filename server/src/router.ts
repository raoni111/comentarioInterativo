import express from 'express';
import getMessage from './service/get-message';

const router = express.Router();

router.get('/get/message', async (req, res) => {
  await getMessage().then((response) => {
    res.status(200).json(response);
  });
});

export default router;
