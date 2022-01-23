import bcrypt from 'bcryptjs';
import CreateUserProtocol from './interface/create-user-protocol';
import Utils from './utils/checks-end-utils';

export class CreateUser implements CreateUserProtocol {
  public readonly password: string;
  public readonly userId: string;
  public readonly avatarUrl: string =
    'https://firebasestorage.googleapis.com/v0/b/comentario-interativo.appspot.com/o/vatar%2Fdo-utilizador.png?alt=media&token=253df722-a05c-49a2-a579-a8d52bf0e29a';
  public readonly date;
  constructor(
    public userName: string,
    public name: string,
    public email: string,
    password: string,
  ) {
    const salt = bcrypt.genSaltSync(10);
    const data = new Date();
    this.userId = Utils.createUserId();
    this.password = bcrypt.hashSync(password, salt);
    this.date = {
      localDateString: data.toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
      localTimeString: data.toLocaleTimeString('pt-BR', {
        timeStyle: 'short',
      }),
    };
  }
}
