export interface ValidFormProtocol {
  nameUser: HTMLInputElement;
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  passwordTwo: HTMLInputElement;
  checkout: () => void;
  validLength: (name: string) => boolean;
}
