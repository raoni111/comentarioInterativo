import { ValidFormProtocol } from './interface/valid-form-protocol';
import isEmail from 'validator/lib/isEmail';

export class ValidForm implements ValidFormProtocol {
  protected showError = true;
  constructor(
    public nameUser: HTMLInputElement,
    public name: HTMLInputElement,
    public email: HTMLInputElement,
    public password: HTMLInputElement,
    public passwordTwo: HTMLInputElement,
  ) {}
  checkout(): boolean {
    let errors = 0;
    if (!this.validLength(this.nameUser.value)) {
      this.displayError(
        'nome de usuario precisa ter no minimo 8 caracteres',
        this.nameUser,
      );
      errors++;
    }
    if (!this.validLength(this.name.value)) {
      this.displayError('nome  precisa ter no minimo 8 caracteres', this.name);
      errors++;
    }
    if (!isEmail(this.email.value)) {
      this.displayError('email invalido', this.email);
      errors++;
    }
    if (!this.validLength(this.password.value)) {
      this.displayError(
        'senha precisa de no minimo 8 caracteres',
        this.password,
      );
      errors++;
    }
    if (!this.validPassword(this.password.value, this.passwordTwo.value)) {
      this.displayError('senhas nao conferem', this.password);
      this.displayError('senhas nao conferem', this.passwordTwo);
      errors++;
    }
    return errors > 0 ? false : true;
  }
  validLength(name: string): boolean {
    if (name.length < 8) {
      return false;
    }
    return true;
  }
  validPassword<T = string>(password: T, passwordTwo: T): boolean {
    if (password === passwordTwo) {
      return true;
    }
    return false;
  }
  displayError(error: string, element: HTMLInputElement): void {
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
}
