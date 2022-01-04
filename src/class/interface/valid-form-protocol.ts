interface FuncValidFormProtocol {
  checkout: () => void;
  userExists: (user: HTMLInputElement) => void;
}

export interface ValidFormProtocol extends FuncValidFormProtocol {
  userName: HTMLInputElement;
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  passwordTwo: HTMLInputElement;
}
