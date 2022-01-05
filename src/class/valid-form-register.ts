import { ValidFormProtocol } from './interface/valid-form-protocol';
import isEmail from 'validator/lib/isEmail';

// firebase
import { get, ref } from 'firebase/database';
import { db } from '../firebase/connection';

// utils
import Utils from './utils/checks-end-utils';

export class ValidFormRegister implements ValidFormProtocol {
  protected errors = 0;
  constructor(
    public userName: HTMLInputElement,
    public name: HTMLInputElement,
    public email: HTMLInputElement,
    public password: HTMLInputElement,
    public passwordTwo: HTMLInputElement,
  ) {}
  checkout(): boolean {
    this.errors = 0;

    if (!Utils.validLength(this.userName.value)) {
      Utils.displayError(
        'nome de usuario precisa ter no minimo 8 caracteres',
        this.userName,
      );
      this.errors++;
    }
    this.userExists(this.userName);
    if (!Utils.validLength(this.name.value)) {
      Utils.displayError('nome  precisa ter no minimo 8 caracteres', this.name);
      this.errors++;
    }
    if (!isEmail(this.email.value)) {
      Utils.displayError('email invalido', this.email);
      this.errors++;
    }
    if (!Utils.validLength(this.password.value)) {
      Utils.displayError(
        'senha precisa de no minimo 8 caracteres',
        this.password,
      );
      this.errors++;
    }
    if (!Utils.validPassword(this.password.value, this.passwordTwo.value)) {
      Utils.displayError('senhas nao conferem', this.password);
      Utils.displayError('senhas nao conferem', this.passwordTwo);
      this.errors++;
    }
    return this.errors > 0 ? false : true;
  }
  async userExists(user: HTMLInputElement): Promise<void> {
    const userRef = ref(db, 'users/');
    await get(userRef).then((response) => {
      const users = response.val();
      for (const kay in users) {
        if (user.value === users[kay].userName) {
          Utils.displayError('nome de usuario ja existe', user);
          this.errors++;
        }
      }
    });
  }
}
