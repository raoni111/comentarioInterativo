import { get, ref } from 'firebase/database';
import CreateMessageProtocol from '../class/interface/create-message-protocol';
import { db } from '../db/connection';

export default async function getMessage(): Promise<CreateMessageProtocol[]> {
  const messageRef = ref(db, 'messages/');
  let message: CreateMessageProtocol[] = [];

  await get(messageRef).then((snapshot) => {
    const data = snapshot.val();
    if (!data) {
      return;
    }
    message = data;
  });
  return message;
}
