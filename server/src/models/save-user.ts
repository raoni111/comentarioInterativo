import { ref, set } from 'firebase/database';
import { CreateUser } from '../class/create-user';
import { db } from '../db/connection';

export const saveUser = async (data: any): Promise<void> => {
  const user = new CreateUser(
    data.userName,
    data.name,
    data.email,
    data.password,
  );
  const databaseRef = ref(db, `users/${user.userId}/`);
  await set(databaseRef, user);
};
