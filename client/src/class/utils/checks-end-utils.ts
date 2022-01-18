import bcrypt from 'bcryptjs';
import { onValue, ref } from 'firebase/database';
import { db } from '../../db/connection';

const Utils = {
  validLength(name: string): boolean {
    return name.length < 8 ? false : true;
  },
  validPassword<T = string>(password: T, passwordTwo: T): boolean {
    return password === passwordTwo;
  },
  displayError(error: string, element: HTMLInputElement): void {
    const p = document.createElement('p');
    const parentElement = element.parentElement as HTMLDivElement;
    const parentTwo = parentElement.parentElement as HTMLDivElement;
    const verifyErrorELement = document.getElementById('error');
    if (document.body.contains(verifyErrorELement)) {
      return;
    }
    p.classList.add('error');
    p.id = 'error';
    p.textContent = error;
    parentTwo.appendChild(p);

    setTimeout(() => {
      parentTwo.removeChild(p);
    }, 2000);
  },
  randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  },
  createUserId(): string {
    const caracteres = `1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm`;
    const userId =
      caracteres[Utils.randomNumber(0, caracteres.length - 1)] +
      caracteres[Utils.randomNumber(0, caracteres.length - 1)] +
      caracteres[Utils.randomNumber(0, caracteres.length - 1)] +
      caracteres[Utils.randomNumber(0, caracteres.length - 1)] +
      caracteres[Utils.randomNumber(0, caracteres.length - 1)];
    const userIdRef = ref(db, 'users/' + userId);
    onValue(userIdRef, (snepshot) => {
      const userIdExist = snepshot.exists();
      if (userIdExist) {
        return Utils.createUserId();
      }
    });
    return userId;
  },
  verifyPassword(passwordClient: string, passwordDb: string): boolean {
    return bcrypt.compareSync(passwordClient, passwordDb);
  },
};

export default Utils;
