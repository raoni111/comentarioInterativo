import { db } from '../db/connection';
import { get, ref } from 'firebase/database';

export async function userExists(user: any): Promise<boolean> {
  const userRef = ref(db, 'users/');
  let exists = false;
  await get(userRef).then((response) => {
    const users = response.val();
    for (const kay in users) {
      if (user === users[kay].userName) {
        exists = true;
      }
    }
  });
  return exists;
}
