import Utils from './utils/checks-end-utils';
export default class ValidFormLogin {
  protected errors = 0;
  constructor(
    public nameUser: HTMLInputElement,
    public passward: HTMLInputElement,
  ) {}

  checkout(): boolean {
    if (!Utils.validLength(this.nameUser.value)) {
      Utils.displayError(
        'nome de usuario precisa ter no minimo 8 caracteres',
        this.nameUser,
      );
      this.errors++;
    }
    return this.errors > 0 ? false : true;
  }
}
