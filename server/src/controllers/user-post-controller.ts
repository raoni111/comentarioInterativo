import { Request } from 'express';
import { saveUser } from '../models/save-user';

const userPostController = (req: Request) => {
  let body = '';
  req.on('data', (data: any) => {
    body += data;

    if (body.length > 1e6) {
      req.connection.destroy();
    }
  });
  req.on('end', () => {
    const post = JSON.parse(body);
    saveUser(post);
  });
};

export default userPostController;
