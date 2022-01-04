import { db } from '../../firebase/connection';
import { ref, onValue } from 'firebase/database';

export default class Utils {
  static validLength(name: string): boolean {
    if (name.length < 8) {
      return false;
    }
    return true;
  }
  static validPassword<T = string>(password: T, passwordTwo: T): boolean {
    if (password === passwordTwo) {
      return true;
    }
    return false;
  }
  static displayError(error: string, element: HTMLInputElement): void {
    const p = document.createElement('p');
    const parentElement = element.parentElement as HTMLDivElement;
    if (parentElement.textContent) {
      return;
    }
    p.classList.add('error');
    p.textContent = error;
    parentElement.appendChild(p);

    setTimeout(() => {
      parentElement.removeChild(p);
    }, 2000);
  }
  static randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  static createUserId(): string {
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
        this.createUserId();
        return;
      }
    });
    return userId;
  }
}
