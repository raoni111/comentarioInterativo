import { db } from '../db/connection';
import { ref, set } from 'firebase/database';

export default async function setAccountInformation(
  userId: any,
  atr: any,
  info: any,
): Promise<void> {
  const _ref = ref(db, `users/${userId}/${atr}`);
  await set(_ref, info);
}
