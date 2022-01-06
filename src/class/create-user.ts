import CreateUserProtocol from './interface/create-user-protocol';
import bcrypt from 'bcryptjs';
import Utils from './utils/checks-end-utils';
interface DateProtocol {
  localDateString: string;
  localTimeString: string;
}

export class CreateUser implements CreateUserProtocol {
  readonly password: string;
  readonly userId: string;
  public readonly date: DateProtocol;
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
        timeZone: 'UTC',
        timeStyle: 'short',
      }),
    };
  }
}
