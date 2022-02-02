import { db } from '../../db/connection';
import { ref, onValue } from 'firebase/database';
import { randomNumber } from './randomNumber';

export const createUserId = (): string => {
  const caracteres = `1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm`;
  const userId =
    caracteres[randomNumber(0, caracteres.length - 1)] +
    caracteres[randomNumber(0, caracteres.length - 1)] +
    caracteres[randomNumber(0, caracteres.length - 1)] +
    caracteres[randomNumber(0, caracteres.length - 1)] +
    caracteres[randomNumber(0, caracteres.length - 1)];
  const userIdRef = ref(db, 'users/' + userId);
  onValue(userIdRef, (snepshot) => {
    const userIdExist = snepshot.exists();
    if (userIdExist) {
      return createUserId();
    }
  });
  return userId;
};
