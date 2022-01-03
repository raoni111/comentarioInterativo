import CreateUserProtocol from './interface/create-user-protocol';
import bcrypt from 'bcryptjs';

export class CreateUser implements CreateUserProtocol {
  password: string;
  constructor(
    public userName: string,
    public name: string,
    public email: string,
    password: string,
  ) {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(password, salt);
  }
}
