interface FuncValidFormProtocol {
  checkout: () => void;
  userExists?: (user: HTMLInputElement) => void;
}
export interface ValidFormLoginProtocol extends FuncValidFormProtocol {
  userName: HTMLInputElement;
  password: HTMLInputElement;
}

export interface ValidFormProtocol extends ValidFormLoginProtocol {
  name: HTMLInputElement;
  email: HTMLInputElement;
  passwordTwo: HTMLInputElement;
}
