import { get, ref } from 'firebase/database';
import { db } from '../db/connection';
import { LoginProtocol } from './interface/login-protocol';
import Utils from './utils/checks-end-utils';

export default class Login implements LoginProtocol {
  public logged = false;
  protected _infoUser: any;
  async logIn(userName: string, password: string): Promise<boolean> {
    let data: any;
    const userRef = ref(db, 'users/');
    await get(userRef).then((response) => {
      data = response.val();
    });
    for (const key in data) {
      if (data[key].userName === userName) {
        if (Utils.verifyPassword(password, data[key].password)) {
          this._infoUser = {
            avatarUrl: data[key].avatarUrl,
            date: data[key].date,
            userId: data[key].userId,
            userName: data[key].userName,
            name: data[key].name,
            email: data[key].email,
            tag: data[key].tag,
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

  get infoUser(): Readonly<unknown> {
    return this._infoUser;
  }
}
