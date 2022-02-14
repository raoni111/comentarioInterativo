/* eslint-disable @typescript-eslint/no-var-requires */
import cors from 'cors';
import express from 'express';
import { storage } from './db/connection';
import './db/connection.ts';
import saveImage from './models/save-image';
import sendMessage from './service/send-message';
import router from './router';

export const http = require('http');
export const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const SERVER_PORT = 8080;
const SERVER_HOST = 'localhost';

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  );
  app.use(cors());
  next();
});

app.use(router);

io.on('connection', (socket: any) => {
  console.log('[io connection] => o servidor recebou uma nova conexão ');
  // CHAT
  socket.on('chat.message', async (data: any): Promise<void> => {
    await sendMessage(data.message, data.user).then((response) => {
      io.emit('chat.message', response);
    });
  });

  // SALVAR IMAGEM
  socket.on('save.image', async (data: any): Promise<void> => {
    let dawnloadUrl = '';
    await saveImage(data.fileName, data.file, data.userId, storage).then(
      (response) => {
        dawnloadUrl = response;
      },
    );
    socket.emit('save.image', {
      dawnloadUrl,
    });
  });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log(
    `[HTTP] => servidor connectado: http://${SERVER_HOST}:${SERVER_PORT}`,
  );
});
