export const koa = require('koa');
export const http = require('http');
export const socket = require('socket.io');

const app = new koa();
const server = http.createServer(app);
const io = socket(server);

const SERVER_PORT = 8080;
const SERVER_HOST = 'localhost';

io.on('connection', (socket: any) => {
    console.log('[io connection] => o servidor recebou um nova conexão ');
    socket.on('chat.message', (data: any) => {
        io.emit('chat.message', data)
    })
});

server.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`[HTTP] => servidor connectado: http://${SERVER_HOST}:${SERVER_PORT}`);
});