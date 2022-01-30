import { ref, set } from 'firebase/database';
import CreateMessageProtocol from '../class/interface/create-message-protocol';
import { db } from '../db/connection';

export default async function setMessage(
  messages: CreateMessageProtocol[],
): Promise<void> {
  const messageRef = ref(db, 'messages/');
  set(messageRef, messages);
}
