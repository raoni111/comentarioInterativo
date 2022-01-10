import { set, ref } from 'firebase/database';
import { db } from '../.firebase/connection';
import lscache from 'lscache';

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
function setLocalUser(atr: string, info: string): void {
  const user = lscache.get('user');
  user[atr] = info;
  lscache.set('user', user);
}
