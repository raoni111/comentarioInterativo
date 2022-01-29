import { Database, ref, set } from 'firebase/database';
import { CreateUser } from '../class/create-user';

export const saveUser = async (db: Database, data: any): Promise<void> => {
  const user = new CreateUser(
    data.userName,
    data.name,
    data.email,
    data.password,
  );
  const databaseRef = ref(db, `users/${user.userId}/`);
  await set(databaseRef, user);
};
