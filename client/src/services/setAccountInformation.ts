import { ref, set } from 'firebase/database';
import { db } from '../db/connection';
import setLocalUser from './setLocalUser';

export default async function setAccountInformation(
  userId: string,
  atr: string,
  info: string,
): Promise<void> {
  const _ref = ref(db, `users/${userId}/${atr}`);
  await set(_ref, info);
  setLocalUser(atr, info);
  document.location = '/';
}
