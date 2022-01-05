interface FuncLoginProtocol {
  login: (userName: string, password: string) => Promise<boolean>;
  verifyPassword: (passwordClient: string, passwordDb: string) => boolean;
}

export interface LoginProtocol extends FuncLoginProtocol {
  logged: boolean;
  infoUser: Readonly<any>;
}
