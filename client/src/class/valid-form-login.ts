import { ValidFormLoginProtocol } from './interface/valid-form-protocol';
import Utils from './utils/checks-end-utils';
export default class ValidFormLogin implements ValidFormLoginProtocol {
  protected errors = 0;
  constructor(
    public userName: HTMLInputElement,
    public password: HTMLInputElement,
  ) {}

  checkout(): boolean {
    if (!Utils.validLength(this.userName.value)) {
      Utils.displayError(
        'Nome de usuario precisa ter no minimo 8 caracteres',
        this.userName,
      );
      this.errors++;
    }
    if (!Utils.validLength(this.password.value)) {
      Utils.displayError(
        'senha precisa ter no minimo 8 caracteres',
        this.password,
      );
      this.errors++;
    }
    return this.errors > 0 ? false : true;
  }
}
