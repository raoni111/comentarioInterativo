/* eslint-disable @typescript-eslint/no-var-requires */
import cors from 'cors';
import express from 'express';
import { db, storage } from './db/connection';
import './db/connection.ts';
import saveImage from './modules/save-image';
import { saveUser } from './modules/save-user';
import sendMessage from './modules/send-message';
import router from './router';

export const http = require('http');
export const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const SERVER_PORT = 8080;
const SERVER_HOST = 'localhost';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
  res.header('Access-Control-Expose-Headers', 'Content-Range,X-Content-Range');
  app.use(cors());
  next();
});
app.use(router);

io.on('connection', (socket: any) => {
  console.log('[io connection] => o servidor recebou um nova conexão ');
  socket.on('chat.message', async (data: any): Promise<void> => {
    await sendMessage(data.message, data.user).then((response) => {
      io.emit('chat.message', response);
    });
  });

  socket.on('save.image', async (data: any): Promise<void> => {
    let dawnloadUrl = '';
    await saveImage(data.fileName, data.file, db, data.userId, storage).then(
      (response) => {
        dawnloadUrl = response;
      },
    );
    socket.emit('save.image', {
      dawnloadUrl,
    });
  });
  socket.on('set.user', async (data: any): Promise<void> => {
    await saveUser(db, data).then(() => {
      socket.emit('set.user.success', {
        success: true,
      });
    });
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(
    `[HTTP] => servidor connectado: http://${SERVER_HOST}:${SERVER_PORT}`,
  );
});
