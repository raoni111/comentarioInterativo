interface FuncLoginProtocol {
  logIn: (userName: string, password: string) => Promise<boolean>;
}

export interface LoginProtocol extends FuncLoginProtocol {
  logged: boolean;
  infoUser: Readonly<any>;
}
