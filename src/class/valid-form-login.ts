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
        'nome de usuario precisa ter no minimo 8 caracteres',
        this.userName,
      );
      this.errors++;
    }
    return this.errors > 0 ? false : true;
  }
}
