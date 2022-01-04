import CreateUserProtocol from './interface/create-user-protocol';
import bcrypt from 'bcryptjs';
import Utils from './utils/checks-end-utils';

export class CreateUser implements CreateUserProtocol {
  readonly password: string;
  readonly userId: string;
  constructor(
    public userName: string,
    public name: string,
    public email: string,
    password: string,
  ) {
    const salt = bcrypt.genSaltSync(10);
    this.userId = Utils.createUserId();
    this.password = bcrypt.hashSync(password, salt);
  }
}
