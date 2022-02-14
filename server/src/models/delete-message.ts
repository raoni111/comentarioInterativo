import { get, ref } from 'firebase/database';
import { db } from '../db/connection';
import setMessage from './set-message';

export default async function deleteMessage(index: string): Promise<any[]> {
  const messageRef = ref(db, 'messages/');
  let message: any[] = [];

  await get(messageRef).then((snapshot) => {
    const data = snapshot.val();
    data.splice(index, 1);
    message = data;
    setMessage(data);
  });
  return message;
}
