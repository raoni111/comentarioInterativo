import { LoginProtocol } from './interface/login-protocol';
import { ref, get } from 'firebase/database';
import { db } from '../firebase/connection';
import bcrypt from 'bcryptjs';

export class Login implements LoginProtocol {
  public logged = false;
  protected _infoUser: any;
  async login(userName: string, password: string): Promise<boolean> {
    let data: any;
    const userRef = ref(db, 'users/');
    await get(userRef).then((response) => {
      data = response.val();
    });
    for (const key in data) {
      if (data[key].userName === userName) {
        if (this.verifyPassword(password, data[key].password)) {
          this._infoUser = {
            userId: data[key].userId,
            userName: data[key].userName,
            name: data[key].name,
            email: data[key].email,
          };
          this.logged = true;
          return this.logged;
        }
        this.logged = false;
        return this.logged;
      }
      this.logged = false;
      return this.logged;
    }
    return this.logged;
  }

  get infoUser(): Readonly<any> {
    return this._infoUser;
  }

  verifyPassword(passwordClient: string, passwordDb: string): boolean {
    return bcrypt.compareSync(passwordClient, passwordDb);
  }
}

export const login = new Login();