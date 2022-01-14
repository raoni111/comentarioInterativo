import { db } from '../db/connection';
import { get, ref } from 'firebase/database';

export default async function getMessage(): Promise<any[]> {
  const messageRef = ref(db, 'messages/');
  let message: any[] = [];

  await get(messageRef).then((snapshot) => {
    const data = snapshot.val();
    if (!data) {
      return;
    }
    console.log(data);
    message = data;
  });
  return message;
}
