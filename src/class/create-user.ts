import CreateUserProtocol from './interface/create-user-protocol';
import bcrypt from 'bcryptjs';
import Utils from './utils/checks-end-utils';

export class CreateUser implements CreateUserProtocol {
  public readonly password: string;
  public readonly userId: string;
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
