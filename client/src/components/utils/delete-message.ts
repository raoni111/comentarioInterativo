export default async function deleteMessage(
  index: number,
  socket: any,
): Promise<void> {
  socket.emit('chat.delet.message', index);
}
