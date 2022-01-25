import express from 'express';
import { db, storage } from './db/connection';
import './db/connection.ts';
import saveImage from './services/saveImage';
export const http = require('http');
export const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const SERVER_PORT = 8080;
const SERVER_HOST = 'localhost';


io.on('connection', (socket: any) => {
    console.log('[io connection] => o servidor recebou um nova conexão ');
    socket.on('chat.message', (data: any) => {
        io.emit('chat.message', data)
    });

    socket.on('save.image', (data: any) => {
        console.log(data.file);
        const dawnloadUrl = saveImage(data.file, db, data.userId, storage);
        socket.emit('save.image', {
            dawnloadUrl,
        })
    });
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[HTTP] => servidor connectado: http://${SERVER_HOST}:${SERVER_PORT}`);
});